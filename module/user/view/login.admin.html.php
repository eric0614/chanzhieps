<?php include '../../common/view/header.lite.html.php';?>
<div class="container">
  <form method="post" id='ajaxForm' class="radius shadow">
    <div id='logo'><?php echo html::image("$themeRoot/default/images/main/logo.login.png");?></div>
    <div id='responser' class='text-center'></div>
    <?php echo html::input('account','','class="input-block-level"');?>
    <?php echo html::password('password','','class="input-block-level"');?>
    <?php // echo html::checkbox('keepLogin', $lang->user->login->keepLogin);?>
    <?php echo html::submitButton($lang->user->login->common, 'btn btn-primary');?>
  </form>
</div>
<?php
if($config->debug) js::import($jsRoot . 'jquery/form/min.js');
if($config->debug) js::import($jsRoot . 'jquery/form/xirang.js');
if(isset($pageJS)) js::execute($pageJS);
?>
</body>
</html>
