const express = require('express');
const cors = require('cors');
const multer = require('multer');
let ruler = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'upload');  
  },
  filename:function(req,file,cb){
      //file：获取长传文件信息：包括以下属性：
                       //1.originalname 上传文件的原始名称
                       //2.生成永远不相同的
                       //3.上传文件后的名称
    cb(null,Math.random() + '.jpg');
  }
});
const upload = multer({
  storage:ruler
});
const server = express();
server.use(cors({
  origin:['http://127.0.0.1:5500']
}));
server.post('/upload',upload.array('upload'),(req,res)=>{
  res.send('1');
})
server.listen(3006);