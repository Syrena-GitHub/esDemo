// // node环境下安装websocket：npm install nodejs-websocket
// // var ws = new WebSocket("wss://52.80.19.131:8080/api/ws");
// var ws = require('nodejs-websocket')

// ws.onopen = function(evt) { 
//   console.log("Connection open ..."); 
//   ws.send({"action":"userOnline","version":8,"ts":590464034,"at":"317edb8695b55b723ebaa84db5c2a413dfab4f0c","userAgent":"app","apikey":"59c9a960-2e57-466d-ab92-9be48ca6cd3a","appid":"oc3tvAdJPmaVOKrLv0rjCC0dzub4bbnD","nonce":"2plz69ax","sequence":"590464034643"});
// };

// ws.onmessage = function(evt) {
//   console.log( "Received Message: " + evt.data);
//   ws.close();
// };

// ws.onclose = function(evt) {
//   console.log("Connection closed.");
// };  

var ws = new WebSocket("wss://52.80.19.131:8080/api/ws");// 设置服务器地址 //
ws.onopen=function(){  // onopen 连接触发 //
  console.log("websocket open");
  document.getElementById("recv").innerHTML="Connected";
                             //  innerHTML 可以 获取 也可以 插入  //
                
}
ws.onclose=function(){ // onclose 断开触发 //
  console.log("websocket close");
}
ws.onmessage =function(e){ // onmessage 接收到信息触发  //
console.log(e.data);
document.getElementById("recv").innerHTML = e.data;

}
document.getElementById("sendb").onclick=function(){ // 监测 id=“sendb”的 按钮 触发 onclick 就会发送数据 send //
  var txt = document.getElementById("snedTxt").value;
  ws.send(txt);
}