
<!DOCTYPE html>
<html>
<head>

</head>
<body>

<h1>My first PHP page</h1>

<!-- <?php
/*
function myTest($x){

echo $y = $x;
}
myTest(45);
*/
?>
<br/>

<br />
<br />
<?php
/* $txt1="Learn PHP";
$txt2="w3cschool.cc";
$cars=array("Volvo","BMW","Toyota");

print $txt1;
print "<br>";
print "Study PHP at $txt2";
print "<br>";
print "My car is a {$cars[1]}"; */
?> -->
<!-- <?php
/*  define("GREETING","这是啥",true);
  echo GREETING;
  echo "<br />";
  echo greeting;  */
 ?>
<?php
  echo "<br/>";
 ?>
 <?php
/*  $txt1 = "Hello world";
  $txt2 = "What a nice day!";
  echo $txt1 . " " . $txt2;
  echo "<br/>";
  echo strlen($txt1 . " " . $txt2);
  echo "<br/>";
  echo strpos($txt1 . " " . $txt2,"What");  */
  ?>
  <?php
    echo "<br/>";
   ?>
<?php
/*  $test = '菜鸟教程';
  // 普通写法
  $username = isset($test) ? $test : "nobody";
  echo $username,PHP_EOL; */
 ?>
 <?php
   echo "<br/>";
  ?>

  <?php
/*    $age = array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
    echo "Pater is"  .$age['Peter']  . "years old."; */
   ?>
   <?php
     echo "<br/>";
     echo "<br/>";
     echo "<br/>";
    ?>
    <?php
/*      $age = array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
      foreach($age as $x=>$x_value){
        echo "key= ".$x." , Value= ".$x_value;
        echo "<br />";
      }
     */?> -->
<!-- <?php
/*  function writeName($c){
    return $c;
  };
  echo writeName("liuhe");  */
 ?> -->

<!-- <?php
/*  echo '这是第 " '. __LINE__ .' " 行';
  echo '<br />';
  echo '<br />';  */
 ?>
 <?php
/*  echo '该文件位于 " '.__FILE__.' " ';
  echo '<br />';
  echo '<br />'; */
  ?>
  <?php
  /*  echo '该文件位于 " ' .__DIR__. ' "文件夹下';
    echo '<br />';
    echo '<br />';  */
  ?>
<?php
  /*  function test(){
      echo '函数名为 '.__FUNCTION__ ;
    };
    test();
    echo '<br />';
    echo '<br />'; */
 ?>

 <?php
/*  class testC {
    function _print(){
      echo '类名为: '.__CLASS__."<br />";
      echo '函数名为：'.__FUNCTION__;
    }
  }
  $t = new testC();
  $t->_print(); */
  ?> -->

  <!-- <?php
  /*  class Base {
      public function sayHello() {
        echo "Hello ";
      }
    }
    trait SayWorld{
      public function sayHello() {
        parent::sayHello();
        echo 'World';
      }
    }
    class MyHelloWorld extends Base {
      use SayWorld;
    }
    $o = new MyHelloWorld();
    $o->sayHello();

    echo "<br />";
    echo "<br />"; */
   ?> -->

<!-- <?php
/*  class Site {
    // 成员变量
    var $url;
    var $title;
    // 成员函数
    function setUrl($par){
      $this->url = $par;
    }
    function getUrl(){
      echo $this->url . PHP_EOL;
    }
    function setTitle($par){
      $this->title = $par;
    }
    function getTitle(){
      echo $this->title . PHP_EOL;
    }
  }
  $runoob = new Site;
  $taobao = new Site;
  $google = new Site;

// 设置
  $runoob->setTitle("踩踩踩");
  $taobao->setTitle("淘淘淘");
  $google->setTitle("搜索");

  $runoob->setUrl("www.runoob.com");
  $taobao->setUrl("www.taobao.com");
  $google->setUrl("www.google.com");

  // 调用
  $runoob->getTitle();
  $taobao->getTitle();
  $google->getTitle();

  $runoob->getUrl();
  $taobao->getUrl();
  $google->getUrl();  */
 ?> -->

<!-- <?php
/*  $sites = array(
    "runoob"=>array(
      "菜鸟教程",
      "http.菜鸟.com"
    ),
    "goole"=>array(
      "goole 搜索",
      "http.谷歌.com"
    ),
    "taobao"=>array(
      "淘宝",
      "http.淘宝.com"
    )
  );
echo $sites['runoob'][0].'地址为' . $sites['runoob'][1]; */
 ?> -->
 <!-- 文件 -->
 <!-- <?php
  /* $file = fopen("welcome.txt","r");
  echo $file; */
 ?> -->
 <!-- 逐行读取文件 -->
 <!-- <?php
 /* $file = fopen("welcome.txt", "r") or exit("无法打开文件!");
 // 读取文件每一行，直到文件结尾
 while(!feof($file))
 {
     echo fgets($file). "<br>";
 }
 fclose($file);*/
 ?> -->

<!-- 逐字符串读取文件 -->
 <!-- <?php
 /* $file=fopen("welcome.txt","r") or exit("无法打开文件!");
 while (!feof($file))
 {
     echo fgetc($file);
 }
 fclose($file);*/
 ?> -->

 <!-- 错误处理 -->

<!-- <?php
/*if(!file_exists("welcometo.txt")){
  die("文件不存在");
}else{
    $file = fopen("welcometo.txt","r");
}
*/
?> -->
<!-- <?php
// // 错误处理函数
// function customError($errno, $errstr)
// {
// 	echo "<b>Error:</b> [$errno] $errstr";
// }
//
// // 设置错误处理函数
// set_error_handler("customError");
//
// // 触发错误
// echo($test);
?> -->


<?php
// 创建一个有异常处理的函数
/*function checkNum($number){
	if($number>1){
		throw new Exception("变量值必须小于等于 1");
	}
		return true;
}

// 在 try 块 触发异常
try{
	checkNum(10);
	// 如果抛出异常，以下文本不会输出
	echo '如果输出该内容，说明 $number 变量';
}
// 捕获异常
catch(Exception $e){
	echo 'Message: ' .$e->getMessage();
} */
?>

<?php
/*  $filters = array(
    "name" => array(
      "filter" =>FILTER_SANITIZE_STRING
    ),
    "age" => array(
      "filter" =>FILTER_VALIDATE_INT,
      "options" => array(
        "min_range" =>1,
        "max_range" =>120
      )
    ),
    "email" => FILTER_VALIDATE_EMAIL
  );

  $result = filter_input_array(INPUT_GET,$filters);
  if(!$result["age"]){
    echo ("年龄必须在 1 到 120 之间。<br>");
  }else if(!$result["email"]){
    echo("E-Mail 不合法<br>");
  }else{
    echo ("输入正确");
  }; */
 ?>

<!-- 高级过滤器 -->
<?php
  /*  $int = 1222;
    $min = 1;
    $max = 200;

    if(filter_var($int,FILTER_VALIDATE_INT,ARRAY("options"=> array("min_range"=>$min,"max_range"=>$max))) === false){
      echo ("变量值不在合法范围内");
    }else{
      echo ("变量值在合法范围内");
    }*/
 ?>

<?php
print_r(PDO::getAvailableDrivers());
  ?>
</body>
</html>
