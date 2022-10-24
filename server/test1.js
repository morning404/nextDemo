let Mock = require('mockjs');        //引入mock模块
var test1 = {
    router : '/test1.action',  // 配置监听的路径
    data : Mock.mock({
        "status": 200,   // 设置返回status 
        "data|1-9": [{   // 设置返回status 
            "id|+1": 1,
            "value|0-500": 20
        }]
    })

}
module.exports= test1;   // 导出test1