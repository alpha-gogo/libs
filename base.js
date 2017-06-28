console.log("成功获取base.js");

// 获取内部样式表、外部样式表的属性
// obj 元素节点  attrname 要获取的属性
function getStyle( obj,attrName ){
	if( obj.currentStyle ){
		// IE浏览器
		return obj.currentStyle[attrName];
	}else{
		// 其他浏览器
		return window.getComputedStyle( obj,null )[attrName];
	}
}

// 随机色
function randomColor(){
	// #fff
	// 0 -- str.length-1
	var str = "0123456789abcdef";
	var color = "#";
	for(var i=0; i<6; i++){
		// 产生随机下标
		var index = parseInt( Math.random()*str.length );
		// 根据下标取字符
		color+=str.charAt(index);
	}
	return color;
}

// rgba随机色
function randomRGBAColor(){
	// rgba(255,255,255,0)
	var color = "rgba(";
		for(var i=0; i<3; i++){
			var num = parseInt( Math.random()*255+1 );
		}
	color+=num+",";

	var num1=parseInt( (Math.random()*11)/10 );
	color+=num1+")";
	return color;
}