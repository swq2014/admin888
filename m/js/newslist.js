function news(){
	newslist=[
	"中国移动推出首个5G套餐，最贵248元？ 回复：消息不属实",
	"习近平：贯彻新发展理念 奋力开创中部地区崛起新局面",
	"习近平：贯彻新发展理念 奋力开创中部地区崛起新局面",
	"习近平：贯彻新发展理念 奋力开创中部地区崛起新局面",
	"习近平：贯彻新发展理念 奋力开创中部地区崛起新局面",
	"习近平：贯彻新发展理念 奋力开创中部地区崛起新局面",
	"习近平：贯彻新发展理念 奋力开创中部地区崛起新局面",
	"习近平：贯彻新发展理念 奋力开创中部地区崛起新局面",
	"习近平：贯彻新发展理念 奋力开创中部地区崛起新局面",
	"习近平：贯彻新发展理念 奋力开创中部地区崛起新局面",
	"总书记为何这个时候来到于都"
	]
	link=[
	"'html/20190522/201905222201.html'",
	"'html/20190522/201905222201.html'",
	"'html/20190522/201905222201.html'",
	"'html/20190522/201905222201.html'",
	"'html/20190522/201905222201.html'",
	"'html/20190522/201905222201.html'",
	"'html/20190522/201905222201.html'",
	"'html/20190522/201905222201.html'",
	"'html/20190522/201905222201.html'",
	"'html/20190522/201905222201.html'"
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
