this.onmessage = function(event){
  let data = parseInt(event.data)+100;           //接受消息并处理
    this.postMessage(data)      //处理完向主线程发送消息
}