<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
  <head>
  <body>
    <!-- 自定义错误处理函数 -->
    <?php

    function error_function(error_level,error_message,error_file,error_line,error_context){
        echo "<b>error</b>[$errno]$errstr";
    }
    set_error_hamdler("error_function");
    echo ($test);

    ?>

  </body>
</html>
