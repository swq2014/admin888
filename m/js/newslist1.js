function news(){
	newslist=[
	"染头发的13岁多多和深夜蹦迪的12岁李嫣，你更不能接受谁",
	"天津航空一航班疑因机械故障返航备降 已安全落地",
	"朱一龙回应念错字，把纨绔子弟说成胯胯子弟，工作室给出惩罚标准",
	"王源吸烟照曝光后引热议，现已主动联系卫生监督部门接受处罚",
	"奔驰女司机闯红灯致13伤 被指事发时穿松糕鞋",
	"中国移动推出首个5G套餐，最贵248元？ 回复：消息不属实"
	]
	link=[
	"201905231334.html",
	"201905231314.html",
	"201905231253.html",
	"201905231114.html",
	"201905231050.html",
	"201905222201.html"
	]
	ad=[
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'"
	]
	img=[
	"../img/a4.jpg",
	"../img/a4.jpg",
	"../img/a4.jpg",
	"../img/a4.jpg",
	"../image/1124525890_1558485903043_title0h.jpg",
	"../image/1124525890_1558485903043_title0h.jpg"
	]
	for(var i=0;i<newslist.length;i++){
		document.write("<div class='news'>"+"<a href="+link[i]+">"+newslist[i]+"</a>"+"</div>");
	}
	// for(var i=0;i<newslist.length;i++){
	// 	if(i%5==0){
	// 			document.write("<div class='newsad'>"+"<a href="+ad[i]+">"+"<img src="+img[i]+">"+"</a>"+"</div>");	
	// 	}
	// 	for(var y=0;y<10;y++){
	// 		document.write("<div class='news'>"+"<a href="+link[i]+">"+newslist[i]+"</a>"+"</div>");}
	// 	}
}
