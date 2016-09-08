<?php 

error_reporting(E_ALL ^ E_DEPRECATED);//规定报错级别，mysql_connect老报错
$server_name="localhost"; //数据库服务器名称 
$username="root"; // 连接数据库用户名 
$password="654321"; // 连接数据库密码 
$mysql_database="liuyan"; // 数据库的名字 

$conn=mysql_connect($server_name, $username, $password); // 连接到数据库 
if(!$conn){  //查看成功没
	die("失败");
};
mysql_query("set names 'utf8'");  //设置编码格式
$sql = "select * from tb_name"; //数据库按时间降序排列的话就不需要在这里写了
mysql_select_db($mysql_database);  //选择要操作的数据库
 $result = mysql_query($sql,$conn); //按照定义的命令查询选择的数据库的数据

if(!$result){ //查看成功没
	echo json_encode("失败");
}

  while($row = mysql_fetch_array($result)){  //循环数据
	$id = $row['id'];  //定义数组变量，把id放在变量里
	$name = $row['name']; //同上
	$timer = $row['data']; //同上
	//$str = json_decode($name);
	$testJSON=array('id'=>$id,'name'=> $name );  //定义一个数组，把需要的都放进去
    //echo json_encode($testJSON);  
    foreach ( $testJSON as $key => $value ) {  // foreach as 语句来遍历数组或散列表 
        $testJSON[$key] = urlencode ( $value );  //urlencode把数据里的值转换成16进制，解决中文显示unicode码问题
    }  
   $testJSONZ[] = $testJSON; //把解码的所有数组再放进一个数组，
	  };
	 
	   echo urldecode ( json_encode ( $testJSONZ ) ); //json_encode把数组转变成json字符串再让urldecode转回正常编码格式，解决中文问题的最后一步
	   
	   //下边无用，只是让php直接在网页显示的一个小实验
	   
	/*echo "<div style=\"height:24px; line-height:24px; font-weight:bold;\">"; //排版代码


 echo $row['name'] . "<br/>";
echo $row['neirong']."<br/>";
echo "</div>"; //排版代码
} 
echo "<table border=1>"; 
while( $row = mysql_fetch_array($result) ){  
$id = $row['id']; 
$name = $row['name']; 
$timer = $row['data']; 
echo "<tr>"; 

echo "<td>$id</td>"; 
echo "<td>$name</td>"; 
echo "<td>$timer</td>"; 
echo "</tr>"; 
} 
echo "<table />"; 
*/

mysql_close(); //关闭数据库链接
?> 