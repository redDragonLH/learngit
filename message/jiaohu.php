<?php
$name = $_POST["name"]; //post获取传输过来的值
$neir = $_POST["neirong"];
$timer = $_POST["timer"];

/* if($_POST["name"]){ //如果为true则运行方法
	selecta($name,$neir,$timer);
};
function selecta($name,$neir,$timer){  //定义方法，与js一样
	$server_name="localhost"; //数据库服务器名称 
$username="root"; // 连接数据库用户名 
$password="654321"; // 连接数据库密码 
$mysql_database="liuyan"; // 数据库的名字 
// 连接到数据库 
$conn=mysql_connect($server_name, $username, $password); //打开数据库
mysql_query("set names 'utf8'"); //规定编码格式

mysql_select_db($mysql_database); //打开数据库里选定的表
//存入到数据库里
$sql = "insert into tb_name values ('{$name}','{$neir}','{$timer}')"; //自定义命令，把网页传过来的数据按照数据库表格式放入数据库，
mysql_query($sql); //按照定义的命令行在数据库里运行 */
echo json_encode($neir); //返回值，需要就加上
/* mysql_close(); //关闭MySQL连接 
};*/

?>