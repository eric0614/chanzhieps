<?php
/**
 * The control file of tree category of XiRangEPS.
 *
 * @copyright   Copyright 2013-2013 QingDao XiRang Network Infomation Co,LTD (www.xirang.biz)
 * @author      Chunsheng Wang <chunsheng@cnezsoft.com>
 * @package     tree
 * @version     $Id$
 * @link        http://www.xirang.biz
 */
class tree extends control
{
    const NEW_CHILD_COUNT = 5;

    /**
     * Browse the categories and print manage links.
     * 
     * @param string $tree 
     * @param int $currentCategoryID 
     * @access public
     * @return void
     */
    public function browse($tree = 'article', $currentCategoryID = 0)
    {
        $parentCategories              = $this->tree->getParents($currentCategoryID);
        $this->view->title             = $this->lang->tree->manage;
        $this->view->tree              = $tree;
        $this->view->categories        = $this->tree->getTreeMenu($tree, $rootCategoryID = 0, array('treeModel', 'createManageLink'));
        $this->view->sons              = $this->tree->getSons($currentCategoryID, $tree);
        $this->view->currentCategoryID = $currentCategoryID;
        $this->view->parentCategories  = $parentCategories;
        $this->display();
    }

    /**
     * Edit a category.
     * 
     * @param string $categoryID 
     * @param string $tree 
     * @access public
     * @return void
     */
    public function edit($categoryID, $tree)
    {
        if(!empty($_POST))
        {
            $error = $this->tree->validate($categoryID);
            if(!empty($error)) $this->send(array('result' =>'fail', 'message'=>$error));
            $this->tree->update($categoryID);
            if(!dao::isError()) $this->send(array('result' => 'success', 'message' => $this->lang->tree->successSave));
            $this->send(array('result' => 'fail', 'message' => dao::getError()));
        }

        if($tree == 'forum')
        {
            /* Get current site. */
            $this->loadModel('site');
            $site = $this->site->getById($this->app->site->id);

            /* Get option menu, use site as index. */
            $allOptionMenu = array();
            $linkSites     = explode(',', $this->app->site->id . ',' . $site->linkSites);
            foreach($linkSites as $siteID)
            {
                $optionMenu = $this->tree->getOptionMenu('forum', 0, $siteID);
                if(count($optionMenu) == 1) continue;
                foreach($optionMenu as $itemID => $item) if(strpos($item, '/', 1) !== false) unset($optionMenu[$itemID]);
                $optionMenu = array('' => '') + $optionMenu;
                $allOptionMenu[$siteID] = $optionMenu;
            }

            /* Assigns. */
            $this->view->sites         = $this->site->getPairs();
            $this->view->allOptionMenu = $allOptionMenu;
            $this->view->categories       = $this->dao->select('*')->from(TABLE_CATEGORY)->where('id')->eq($categoryID)->fetchAll('site', false);
        }

        $this->view->category     = $this->tree->getById($categoryID);
        $this->view->optionMenu = $this->tree->getOptionMenu($this->view->category->tree);
        $this->view->tree       = $tree;
        $this->view->categories        = $this->tree->getTreeMenu($tree, $rootCategoryID = 0, array('treeModel', 'createManageLink'));

        /* Remove self and childs from the $optionMenu. */
        $childs = $this->tree->getAllChildId($categoryID);
        foreach($childs as $childCategoryID) unset($this->tree->optionMenu[$childCategoryID]);

        $this->display();
    }

    /**
     * Update the categories order.
     * 
     * @access public
     * @return void
     */
    public function updateOrder()
    {
        if(!empty($_POST))
        {
            $this->tree->updateOrder($_POST['orders']);
        }
        $this->send(array('result' => 'success', 'locate' => inlink('browse')));
    }

    /**
     * Manage childs.
     * 
     * @param string $tree 
     * @access public
     * @return void
     */
    public function manageChild($tree, $currentCategoryID = 0)
    {
        $parentCategories              = $this->tree->getParents($currentCategoryID);
        $this->view->title             = $this->lang->tree->manage;
        $this->view->tree              = $tree;
        $this->view->categories        = $this->tree->getTreeMenu($tree, $rootCategoryID = 0, array('treeModel', 'createManageLink'));
        $this->view->sons              = $this->tree->getSons($currentCategoryID, $tree);
        $this->view->currentCategoryID = $currentCategoryID;
        $this->view->parentCategories  = $parentCategories;

        if(!empty($_POST))
        {
            $result = $this->tree->manageChild($tree, $_POST['parentCategoryID'], $_POST['categories']);
            if($result) $this->send(array('result' => 'success', 'locate'=>inlink('browse')));
            $this->send(array('result' => 'fail', 'message' => dao::getError()));
        }
        $this->display();
    }

    /**
     * Fix path, grades.
     * 
     * @param  string    $tree 
     * @param  string    $type 
     * @access public
     * @return void
     */
    public function fix($tree)
    {
        $this->tree->fixCategoryPath($tree);
        die(js::alert($this->lang->tree->successFixed) . js::reload('parent'));
    }

    /**
     * Delete a category.
     * 
     * @param string $categoryID 
     * @param string $confirm 
     * @access public
     * @return void
     */
    public function delete($categoryID)
    {
        $result = $this->tree->delete($categoryID);
        if($result) $this->send(array('result' => 'success'));
        $this->send(array('result' => 'fail', 'message' => dao::getError()));
    }
}
