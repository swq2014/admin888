function hotlist(){
	hot=[
	"这就是街舞1",
	"这就是炫舞2",
	"这就是吃饭3",
	"这就是街舞4",
	"这就是街舞5",
	"这就是街舞6",
	"这就是街舞7",
	"这就是街舞8",
	"这就是街舞9",
	"这就是街舞10"
	];
	link=[
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'",
	"'http://www.baidu.com' target='_blank'"
	];
	for(i=0;i<10;i++){
		document.write("<div>"+"<a href="+link[i]+">"+hot[i]+"</a>"+"</div>");
	}
}