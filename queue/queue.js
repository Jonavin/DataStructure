/**
 * Created by wsf on 2014/11/26.
 */
;
(function (win){
    "use strict";
    function Queue(){
        this.datastore = [];//底层存储结构为数组
        this.size = 0;//初始长度为0
        this.front = null;//对头为空
        this.rear = null;//队尾为空
    }

    /**
     * 原型对象
     */
    Queue.prototype = {
        __prop__:this.prototype,//原型引用
        constructor:this//构造函数
    }
})(window);
