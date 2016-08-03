<!DOCTYPE html>
<html>
<head>
	<title>用户基础信息</title>
	<meta charset="utf-8">
</head>
<style type="text/css">
	*{margin: 0;padding: 0}
	.header{
		width:100%;
		height:80px;
		background:#222;
	}
	.cx{width: 100%;list-style: none;}
	.cx li{width: 25%;height: 80px;float: left;color: #fff;line-height:80px;display: block;}
</style>
<body>
	<div class="header">
		<form method="post" action="user_info.php">
		<center>
			<ul class="cx">
				<li>id:<input type="text" name="id"></li>
				<li>手机号:<input type="text" name="mobile"></li>
				<li>到期日<input type="text" name="vipEndTime"></li>
				<li><button>查询</button></li>
			</ul>
		</center>
		</form>
	</div>
	<div class="content">
		
	</div>
</body>
<script type="text/javascript"></script>
</html>
