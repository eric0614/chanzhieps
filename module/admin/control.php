<?php
/**
 * The control file of admin module of XiRangEPS.
 *
 * @copyright   Copyright 2013-2013 QingDao XiRang Network Infomation Co,LTD (www.xirang.biz)
 * @author      Chunsheng Wang <chunsheng@cnezsoft.com>
 * @package     admin
 * @version     $Id$
 * @link        http://www.xirang.biz
 */
class admin extends control
{
    /**
     * The index page of admin panel, print the sites.
     * 
     * @access public
     * @return void
     */
    public function index()
    {
        $this->display();
    }

    public function top()
    {
        $this->display();
    }

    public function left()
    {
        $this->display();
    }

    public function dashboard()
    {
        $this->display();
    }
}
