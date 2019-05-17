function byId(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}
var index=0,
timer=null,
pics=byId('banner').getElementsByTagName('div'),
dots=byId('dots').getElementsByTagName('span'),
up=byId('up'),
down=byId('down'),
len=pics.length;
function slideImg(){
	var main=byId("main");
	// 滑过清除定时器，离开继续
	main.onmouseover=function(){
		// 滑过清除定时器
		if(timer) clearInterval(timer);
	}
	main.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			// 切换图片
			changeImg();
		},3000);
	}
	// 自动在main上触发鼠标离开的事件
	main.onmouseout();
	// 遍历所有点击，且绑定点击事件，点击圆点切换图片
	for(var d=0;d<len;d++){
		// 给所有span添加一个id的属性，值为d,作为当前span的索引
		dots[d].id=d;
		dots[d].onclick=function (){
			// 改变index为当前span的id值
			index=this.id;
			// 调用changeImg,实现切换图片
			changeImg();
		}
	}
	// 下一张
	down.onclick=function(){
		index++;
		if(index>=len) index=0;
		changeImg();
	}
	// 上一张
	up.onclick=function(){
		index--;
		if (index<0)  index=len-1;
		changeImg();
	}
}

// 切换图片
function changeImg(){
	// 遍历banner下所有的div及dots下所有的span，将div隐藏，将span清除类
	for(var i=0;i<len;i++){
		pics[i].style.display='none';
		dots[i].className='';
	}
	// 根据index索引找到当前div和当前span，将其显示出来和设为当前
	pics[index].style.display='block';
	dots[index].className='active';
}

slideImg();