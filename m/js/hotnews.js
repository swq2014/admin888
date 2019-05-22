function hotnews(){
	hotnews=[
	"习近平：贯彻新发展理念 奋力开创中部地区崛起新局面",
	"总书记为何这个时候来到于都"
	]
	link=[
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'"
	]
	for(var i=0;i<hotnews.length;i++){
		document.write("<div>"+"<a href="+link[i]+">"+hotnews[i]+"</a>"+"</div>");
	}
}