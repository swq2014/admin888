function hotnews(){
	hotnews=[
	"互联网神人之中国站长李兴平",
	"奔驰女司机闯红灯致13伤 被指事发时穿松糕鞋",
	];
	link=[
	"html/201905231208.html",
	"html/201905231050.html",
	];
	for(var i=0;i<2;i++){
		document.write("<div>"+"<a href="+link[i]+">"+hotnews[i]+"</a>"+"</div>");
	}
}