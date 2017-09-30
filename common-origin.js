var parS;

/**
 * author : lss
 */
var path = getRootPath()+"/";
var basePath = getRootPath() + "/";
//var imgPath = "http://7xnqer.com2.z0.glb.qiniucdn.com/";
//var qiniuPath = "http://7xnqer.com2.z0.glb.qiniucdn.com/";
//var path = "http://shopmanage.ihotdo.net/";
//var imgPath = "http://ihd.todoo.im/";
//var wxpath = "http://wx.bairendai.com/brd_wx/";
//var imgPath = "http://image.baixinjinrong.cn/";



var moneyNum = 100;
var blbmoneyNum=1000;
//这两个js需要树松提供
//document.write("<script type='text/javascript' src='"+path+"js/artDialog/jquery.artDialog.js?skin=blue'></script>");
//document.write("<script type='text/javascript' src='"+path+"js/artDialog/plugins/iframeTools.js'></script>");
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

//判断当前的状态
function checkCommonState(rst){
	var state=rst.code;
	if(state=="-1"){
			showInfo("你尚未登录呦，请登录！");
			//去往登录页面
			goLogin();
			return false;
	}else if(state=="-2"){
		showInfo("余额不足，现在就去充值吧");
		goCZ();
		return false;
	}else{
		return true;
	}
}

//去登陆
function goLogin(){
	window.location.href=basePath+"/bxjr/login.jsp";
}

//去充值
function goCZ(){
	window.parent.location.href=basePath+"/bxjr/userhome/moneymanagement/recharge.jsp";
}
//前往页面
function goPage(pageName) {
	window.location.href=basePath+"/bxjr/"+pageName;
}

//公共传值
function argument(argName,value){
	_nameStorage.setItem(argName,value);
	sessionStorage.setItem("dsjfkd",dafj);
}


function removeParam(key){
	_nameStorage.removeItem(key);
}

//公共取值
function theValues(argName){
	return _nameStorage.getItem(argName);
}

//公共取值
function theValues(argName){
	return _nameStorage.getItem(argName);
}




//var basePath = "http://shopmanage.ihotdo.net/";
/**
 * 去除form表单提交数据中为空的字段
 * 
 * @param obj form表单提交对象
 * @returns {String} 去除为空的字段后数据
 */
function replaceFrom(obj) {
	var datas = obj.split("&");
	var data = '';
	$.each(datas, function(key, val) {
		if (!isNull(val.split("=")[1])) {
			data += val + '&';
		}
	});
	
	if (data.length > 0) {
		data = data.substring(0, data.length - 1);
	}
	
	return data;
}

/**
 * 判断当前obj是否为空
 * 
 * @method isNull
 * @param {Object} obj 需要验证的对象
 * @return {Boolean} obj是否为空,返回true则为空，返回false则不为空
 */
function isNull(obj) {
	return (!(Boolean($.trim(obj) || obj === 0)) || obj == "null" || obj == "undefined");
}


//针对截取指定长度的字符串
function cutStr(str,len){
	var retStr="";
	if(str.length>=(len+2)){
		retStr=str.substring(0,len)+"..";
	}else{
		retStr=str;
	}
	return retStr;
}

//针对小数点后最多截取两位的方法（不四色五入）
function replaceFla(obj){
	//比如0.0001001 ---->1 --0.01
	var strInt=parseInt(obj*10000);
	return strInt/100;
}
/**
 * 替换null或者undefined
 * @param obj 需要替换的对象
 * @returns 替换后的对象
 */
function replaceNull(obj) {	
	if (obj == null || $.trim(obj) == "null" || $.trim(obj) == null || $.trim(obj) == undefined || $.trim(obj) == "undefined" || $.trim(obj) == "") {
		return "";
	}
	return obj;
}

/**
 * 替换null为&nbsp;
 */
function replaceNbsp(obj) {	
	if (obj == null || $.trim(obj) == "null" || $.trim(obj) == null || $.trim(obj) == undefined || $.trim(obj) == "undefined" || $.trim(obj) == "") {
		return "&nbsp;";
	}
	return obj;
}

/**
 * 替换数字或
 * @param str 每三个位数加上一个逗号
 * @returns 替换后的对象
 */

function formatNumber(str){
	str=""+str+"";
	var  t1="";
	var xsdzq;
	var xsLen;
	if(isNull(str)){
		return  '0';
	}else{
		var zxIndex=str.indexOf(".");
		
		if(zxIndex!=-1){
			xsdzq=str.substring(0,zxIndex);
			xsLen=xsdzq.length;
		}else{
			xsdzq=str.substring(0,str.length);
			xsLen=str.length;
		}
		if(xsLen<=3){
			t1+=xsdzq.substring(0,xsLen);
			return t1;
		}
		if(3<xsLen&&xsLen<=6){
			t1+=xsdzq.substring(0,xsLen-3)+","+xsdzq.substring(xsLen-3);
			return t1;
		}
		if(6<xsLen&&xsLen<=9){
			t1+=xsdzq.substring(0,xsLen-6)+","+xsdzq.substring(xsLen-6,xsLen-3)+","+xsdzq.substring(xsLen-3);
			return t1;
		}
		if(9<xsLen&&xsLen<=12){
			t1+=xsdzq.substring(0,xsLen-9)+","+xsdzq.substring(xsLen-9,xsLen-6)+","+xsdzq.substring(xsLen-6,xsLen-3)+","+xsdzq.substring(xsLen-3);
			return t1;
		}else{
			///再往上就是超过1000亿了，暂不扩展
			return str;
		}	
	}
}


function formatNumberNext(str){
		str=""+str+"";
		var zxIndex=str.indexOf(".");
		if(zxIndex!=-1){
			return str.substring(zxIndex+1,zxIndex+3);
		}else{
			return "00";
		}
}


/**
 * 获取URL参数
 * @param name 参数名称
 * @returns 替换后的对象
 */
function GetQueryString(name) 
{ 
var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
var r = window.location.search.substr(1).match(reg); 
if (r!=null) return unescape(r[2]); return null; 
}  

/**
 * 将json格式的时间转换成正常时间格式 例：1414477957000  --->  2014-10-28
 * @param time 需要转换的时间
 * @param type 需要返回的精度 1（返回到年），2（返回到月）， 3（返回到日）
 * @returns {String} 转换后的时间
 */
function renderTime(time, type){
	if (isNull(time)) {
		return;
	}
	
	var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    if (type == 1) {
		return year;
	} else if (type == 2) {
		return year + "-" + month;
	} else if (type == 3) {
		return year + "-" + month + "-" + date;
	} else {
		return year + "-" + month + "-" + date + " " + hour + ":" + minute+":" + second;
	}
} 
function renderTime_two(time, type){
	if (isNull(time)) {
		return;
	}
	
	var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    if (type == 1) {
		return year;
	} else if (type == 2) {
		return year + "/" + month;
	} else if (type == 3) {
		return year + "/" + month + "/" + date;
	} else {
		return year + "/" + month + "/" + date + " " + hour + ":" + minute+":" + second;
	}
} 

/**
 * 返回上一步
 */
function back() {
	history.back(-1);
}

/**
 * 控制input text 文本框只能输入数字和小数点
 * @param obj
 */
function clearNumber(obj) {
	obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符  
	obj.value = obj.value.replace(/^\./g,"");  //验证第一个字符是数字而不是. 
	obj.value = obj.value.replace(/\.{2,}/g,""); //只保留第一个. 清除多余的.   
	obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$","");
	obj.value = obj.value.replace(/^(0*)$/g,"");  //非0开头
	
//	var res = /^[1-9]+[0-9]*]*$/;
//	//obj.value = obj.value.replace(/^[1-9]+[0-9]*]*$/,""); 
//	if (!res.test($(obj).val())) {
//		$(obj).val("");
//	}
}
function checkQuoteAccount(obj){
	obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符  
	obj.value = obj.value.replace(/^\./g,"");  //验证第一个字符是数字而不是. 
	obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的.   
	obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
	
	var val = $(obj).val();
	if(val.indexOf('.')!=-1&&val.split('.')[1].length>3){
		$(obj).val(Number(val).toFixed(3));
	}
	if (val>=1000000000) {
		showInfo("请输入十亿以内的有效数字,请确认!");
		$(obj).val("");
	};
	
}

/**
 * 加载框
 */
var load ={
		start:function(str){
			var stral = str||"正在上传,请等待...";
			
			if(!($("#load_div").attr("id")=="load_div")){
				var divstr = '<div id="load_div" style="width: 100%;height: 100%;z-index: 9999999;position: fixed;background: #000000;top:5%px;padding-top: 30%;text-align: center;font-weight: bolder;opacity: 0.3;"><img src="'+basePath+'/bxjr/images/bxjr_loading.gif"><p style="font-size: 19px;padding-top: 10px;color: #EDE9E9;">'+stral+'</p></div>';
				$("body").append(divstr);
			}
		},
		startTop:function(id,str){
			var stral = str||"正在上传,请等待...";
			var div_id = id||"load_div_top";
			
			if(!($("#"+div_id).attr("id")==div_id)){
				var divstr = '<div id="'+div_id+'" style="width: 100%;z-index: 9999999;position: fixed;top: 5%px;text-align: center;font-weight: bolder;opacity: 0.9;"><img src="'+basePath+'/bxjr/images/bxjr_loading.gif"><p>'+stral+'</p></div>';
				$("body").append(divstr);
				//alert(divstr);
			}
		},
		end:function(divid){
			if(divid){
				switch (divid){
					case "middle":$("#load_div").remove();return;
					case "top":$("#load_div_top").remove();return;
					default :$("#"+divid).remove();
				}
			}else{
				$("#load_div").remove();$("#load_div_top").remove();
			}
		}
}

function showInfo(msg) {	
	art.dialog.alert(msg);
}

function showConfirm(msg) {
	
}

//js获取项目根路径，如： http://localhost:8083/uimcardprj
function getRootPath(){
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath=window.document.location.href;
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht=curWwwPath.substring(0,pos);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return(localhostPaht+projectName);
}

/**
 * 判断是否是图片
 * @param picname
 * @returns
 */
function checkImg(picname){
	return /\.(gif|jpg|jpeg|png)$/.test(picname.toLowerCase());
}

/**
 * html清楚标记
 * @param str  需要清除html标记的字符串
 * @returns	返回清除后的字符串
 */
function removeHTMLTag(str){
    str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
    return str;
}
/**
 * 获取随机数
 * @returns	返回随机数
 */
function rand(){
	return Math.random();
}
/**
 * 截取小数点
 * @param s
 * @returns {Boolean}
 */
function getxsd(num,index){
	var bb = num+"";  
    var dian = bb.indexOf('.');  
    var result = "";  
    if(dian == -1){  
        //result =  num.toFixed(index);
        result =  num;
    }else{  
        var cc = bb.substring(dian+1,bb.length);  
        if(cc.length >=(index+1)){  
            result = bb.substring(0,dian+index+1);  
        }else{        	      	
            //result =  num.toFixed(index); 
        	result =  num; 
        }  
    }  
    return result;
}

//新闻列表自适应
function newinfoReturn(){
	var h = $(".panes").height();
	return h / 2;
}

//退出
function signout () {
	window.location.href=path+"login.jsp";
}


//新闻列表自适应
function newinfoReturn(){
	var h = $(".panes").height();
	return h / 2;
}

/** 
 * @param id 省市
 * @param fatherId
 */
function region(ph,id,fatherId){	
	var obj=locaTion(ph+'/sns/loca/findAll.do',fatherId).data.listLoca;
	var html='<option value="-1">请选择</option>';	
	for(var i=0;i<obj.length;i++){
		html+='<option value="'+obj[i]._id+'">'+obj[i].name+'</option>';
	}	
	$('#'+id).html(html);	
}


/** 
 * @param id 类目
 * @param fatherId
 */
function category(ph,id,fatherId,type){
	var obj=locaTion(ph+'/sns/cate/findAll.do',fatherId).data.listCate;	
	var html='';
	if(type==1){
		html+='<option value="-1">全部</option>';
		for(var i=0;i<obj.length;i++){
			html+='<option value="'+obj[i].category_id+'">'+obj[i].name+'</option>';
		}
		$('#'+id).html(html);
	}else{
		console.log(html);
		html+="<div class='dd'>";
		for(var i=0;i<obj.length;i++){
			html+='<dd onclick="movement(this,\''+obj[i].category_id+'\',\''+ph+'\');"><span class="spanCategory" atr="'+obj[i].category_id+'">'+obj[i].name+'</span> <span class="glyphicon glyphicon-chevron-right"></span></dd>';
		}
		html+="</div>";
		console.log(html);
		$('#'+id).find('.dd').remove();	
		$('#'+id).append(html);		
	}
}

/** 
 * @param id 类目 动作
 * @param fatherId
 */
function movement(e,fatherId,ph){
	
	var category_id=$(e).parent().parent().next().attr('id');
	var _id=$(e).parent().parent().attr('id');
	if(_id=='direction'){
		$('#direction').find('dd').attr('class','');
		$('#kind').find('dd').attr('class','');
		$('#heading').find('dd').remove();
		
	}else if(_id=='kind'){
		$('#kind').find('dd').attr('class','');
		$('#heading').find('dd').attr('class','');
	}else if(_id=='heading'){
		$('#heading').find('dd').attr('class','');
	}
	$(e).attr('class','selectedCategory');
	category(ph,category_id,fatherId);	
}

/** 
 * @param id 品牌
 * @param fatherId
 */
function getbrand(ph,id,fatherId){	
	var obj=locaTion(ph+'/sns/brand/findAll.do',fatherId).data.listBrand;
	var html='<option value ="-1">请选择品牌</option>';
	for(var i=0;i<obj.length;i++){
		html+='<option value ="'+obj[i].brand_id+'">'+obj[i].name+'</option>';
	}	
	$('#'+id).html(html);
}



/** 
 * @param type 
 * @param id
 */
function getReturn(ph,type,id){
	var obj=locaTion(ph+'/sns/reas/findAll.do',type).data.listReturn;
	var html='<option value ="-1">请选择关闭理由</option>';
	for(var i=0;i<obj.length;i++){
		html+='<option value ="'+obj[i].return_reason_id+'">'+obj[i].name+'</option>';
	}	
	$('#'+id).html(html);
}


/**
 * ajax post提交  接连
 * @param url
 * @param fatherId
 * @returns  
 */
function locaTion(url,fatherId){	
	var obj;
	$.ajax({  
        type: "POST",  
        url: url,        
        async: false,
        data:  {"fatherId" : fatherId},  
        dataType: 'json',
        success: function (date){
        	obj=date;
        },  
        error: function (err){
        	
        }
		
		  
    });
	return obj;
}



/**
 * ajax post提交  接连
 * @param url
 * @param fatherId
 * @returns  
 */
function attrObj(url,param){	
	var obj;
	$.ajax({  
        type: "POST",  
        url: url,        
        async: false,
        data:  param,  
        dataType: 'json',
        success: function (date){
        	obj=date;
        },  
        error: function (err){
        	
        }
		
		  
    });
	return obj;
}


/**  
* ajax post提交  
* @param url  
* @param param  
* @param datat 为html,json,text  
* @param callback 回调函数 function callBack(data)  
* @return  
*/  
function mJqAjax(url, param, datat, callback) {
	parS=param;
    $.ajax({  
        type: "post",  
        url: url,  
        data: param,  
        dataType: datat,  
        success: callback,  
        error: function (){}  
    });  
} 

/**
 * 下一个跳转
 * @param ph
 * @param url
 */
function nextStep(ph,url){	
	window.location.href=ph+url;
}