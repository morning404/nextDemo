let express = require('express');    //引入express模块
let Mock = require('mockjs');        //引入mock模块
let app = express();  //创建一个服务
var test1=require("./test1.js");  //引入具体test的配置
// 为每个具体的配置创建监听
var dataArr = [test1]; 
for(let i=0;i<dataArr.length;i++){
    let item = dataArr[i];
    app.all(item.router, function(req, res) {
        res.json(item.data);
    });
}
/*为app添加中间件处理跨域请求*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//监听3000端口
app.listen('3001');
console.log('localhost:3001')