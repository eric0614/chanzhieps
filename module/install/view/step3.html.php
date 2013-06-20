<?php
/**
 * The html template file of step3 method of install module of XiRangEPS.
 *
 * @copyright   Copyright 2013-2013 QingDao XiRang Network Infomation Co,LTD (www.xirang.biz)
 * @author	  Chunsheng Wang <chunsheng@cnezsoft.com>
 * @package	 XiRangEPS
 * @version	 $Id: step3.html.php 824 2010-05-02 15:32:06Z wwccss $
 */
?>
<?php include './header.html.php';?>
<div class='container'>
  <?php if(isset($error)):?>
  <table class='table table-bordered' align='center'>
	<caption><?php echo $lang->install->error;?></caption>
    <tr><td class="text-error"><?php echo $error;?></td></tr>
    <tr><td><?php echo html::backButton($lang->install->pre, 'btn btn-primary');?></td></tr>
  </table>
  <?php else:?>
  <table class='table table-bordered'>
	<caption><?php echo $lang->install->saveConfig;?></caption>
    <tr>
      <td>
        <?php 
        echo html::textArea('config', $result->content, "rows='10' class='area-1 f-12px'");
        printf($lang->install->save2File, $result->myPHP);
        ?>
      </td>
    </tr>
    <tr><td class='a-center'><?php echo html::a(inlink('step4'), $lang->install->next, '', 'class="btn btn-primary"');?></td></tr>
  </table>
  <?php endif;?>
</div>
<?php include './footer.html.php';?>
