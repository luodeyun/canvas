const express = require('express')
const cors = require ('cors');
const server = express ();
//加载Multer中间件  上传文件
const multer= require('multer')
//指定上传的位置
const upload = multer({
    dest:'upload' //存到当前目录的upload文件夹下
})

server.use(cors({origin:['http://127.0.0.1:5500']}))
server.post('/upload',upload.array('upload'),(req,res)=>{
    res.send('1')
})
server.listen(3008,()=>{
    console.log('l服务器启动成功'); 
})