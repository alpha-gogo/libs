console.log("common.js");

// 使用localStorage存储数据
var storage = window.localStorage;

// 全局url
// var baseUrl = "http://47.88.136.37:9080";
var baseUrl = "http://47.88.136.37:8682";
var token = "";
// var path = getRootPath() + "/";

function goLogin () {
    window.location.href = basePath + "/port/login.html";
}

// 调用分享按钮
function invokeShareBtn() {
    var header = "http://img1.3lian.com/2015/a1/43/d/152.jpg";
    var des = "高清大图-日系清新风";
    var title = "高清大图-日系清新风";
    var shareUrl = "https://www.baidu.com";

    window.webkit.messageHandlers.getShareInfo.postMessage({header:header, des:des, title:title, shareUrl:shareUrl});
}

//截取地址栏传输的参数值
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var urlStr = "http://192.168.0.211:8080/?token=" + token;
getParameterByName("token", urlStr);

// 判断手机是Android还是ios
var agent = navigator.userAgent;
var isAndroid = agent.indexOf("Android") > -1 || agent.indexOf("Adr") > -1;  // android终端
var isiOS = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);  // iOS终端
/*console.log("是否是Android：" + isAndroid);
console.log("是否是iOS：" + isiOS);*/


// 获取项目根路径，如：http://localhost:8080/share
function getRootPath(){
    // 获取当前网址，如：http://localhost:8080/share/activity/detail.html
    var fullPath = window.location.href;
    // 获取主机地址之后的目录，如：share/activity/detail.html
    var pathName = window.location.pathname;
    var idx = fullPath.indexOf(pathName);
    // 获取主机地址，如：http://localhost:8080
    var hostPath = fullPath.substring(0, idx);
    // 获取带"/"的项目名，如：/share
    var projectPath = pathName.substring(0, pathName.substr(1).indexOf("/") + 1);
    return(hostPath + projectPath);
}


// 时间戳转换为日期
function formatTime (createdDate) {
    var date = new Date(createdDate);
    Y = date.getFullYear() + "-";
    M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
    D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
    h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours() ) + ":";
    m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
    s = (date.getSeconds()  < 10 ? "0" + date.getSeconds() : date.getSeconds() );
    return Y + M + D + h + m + s;
}


// ajax请求封装
function myAjax (type, url, dataType, callback, data) {
    $.ajax({
        type: type,
        url: url,
        cache: false,
        async: true,
        headers: {
            // "Connection": "keep-alive",
            // "Authorization": "Basic MDVhNTRlMWVkNDVmNDBkN2FhM2FkOTBjNzkzNWJhMGU6MTMzNTE=",
            // "Content-Type": "application/json",
            // "Accept-Language": "en",
        },
        dataType: dataType,
        // data: JSON.stringify(data),
        data: data,
        contentType: "application/json"
    }).done(
        callback(data)
    ).fail(function (error) {
        console.log(error);
    })
}


// 验证token是否过期
function isOverdue(url, token){
    $.ajax({
        type: "GET",
        url: url,
        async: true,
        headers: {
             "token": token
        }
        dataType: "json",
    }).done(function (data) {
        // console.log(data)
        if(data.code == "ERROR006"){
            // window.location = "loginPage.html"
        }
    });
}


function isNull(obj) {
    return (!(Boolean($.trim(obj) || obj === 0)) || obj == "null" || obj == "undefined");
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}


// // ================  Google  ================
// function onSignIn(googleUser) {
// 	console.log("on signin");
//     // Useful data for your client-side scripts:
//     var profile = googleUser.getBasicProfile();
// //  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
// //  console.log('Full Name: ' + profile.getName());
// //  console.log('Given Name: ' + profile.getGivenName());
// //  console.log('Family Name: ' + profile.getFamilyName());
// //  console.log("Image URL: " + profile.getImageUrl());
// //  console.log("Email: " + profile.getEmail());

//     // The ID token you need to pass to your backend:
//     var googleId = profile.getId();
//     var googleId_token = googleUser.getAuthResponse().id_token;
//    	googleMessage_googleId = googleId;
//    	googleMessage_googleId_token = googleId_token;
//    	if(!otherLogin){
//    		loginPaybyone(googleMessage_googleId,googleMessage_googleId_token,"google");
//    	}

// };
// $("#googleLogin").click(function(){
// 	loginPaybyone(googleMessage_googleId,googleMessage_googleId_token,"google");
// 	console.log("google login");
// });


// // ===================== Facebook ======================
// //加载facebook-jssdk
// (function(d, s, id) {
// 	var js, fjs = d.getElementsByTagName(s)[0];
// 	if (d.getElementById(id)) return;
// 	js = d.createElement(s); js.id = id;
// 	js.src = "https://connect.facebook.net/zh_CN/sdk.js#xfbml=1&version=v2.8";
// 	fjs.parentNode.insertBefore(js, fjs);
// 	// console.log("script", new Date());
// }(document, "script", "facebook-jssdk"));

// //异步初始化facebook-jssdk
// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : "865690716907093",
//     cookie     : true,
//     xfbml      : true,
//     version    : 'v2.8',
//   });
//   // console.log("FB-init", new Date());
// };

// //Facebook登陆按钮调用的函数
// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);

//       console.log("statusChangeCallback", new Date());
//     });
// }
// //登录状态:回调函数
// function statusChangeCallback(response) {

//     if (response.status === 'connected') {//Facebook已登录
// //  	console.log(response,"facebookLogin");
// //  	console.log(response.authResponse.userID);
// //		console.log(response.authResponse.accessToken);
// 		fb_userID = response.authResponse.userID;
// 		fb_accessToken = response.authResponse.accessToken;
// 	   	loginPaybyone(fb_userID,fb_accessToken,"facebook");

// 	   	console.log("connected", new Date());
//     }
// }
// 我的添加
// $("#fbLogin").click(function () {
// 	FB.login(function (response) {
//         console.log(response);
//         // The response object is returned with a status field that lets the
//         // app know the current login status of the person.
//         // Full docs on the response object can be found in the documentation
//         // for FB.getLoginStatus().
//         if (response.status === "connected") {
//           // Logged into your app and Facebook.
//           // testAPI();
//           fb_userID = response.authResponse.userID;
// 					fb_accessToken = response.authResponse.accessToken;
// 					loginPaybyone(fb_userID,fb_accessToken,"facebook");
//         } else {
//           // The person is not logged into your app or we are unable to tell.
//           document.getElementById("status").innerHTML = "Please log " +
//             "into this app.";
//         }
//     }, {scope: "public_profile, email"});

// 	// loginPaybyone(fb_userID,fb_accessToken,"facebook");
// 	console.log("click", new Date());
// })
