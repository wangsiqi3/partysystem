<template>

<div class="hello" >
    <div>请输入您的签名：</div>
        <canvas id="canvas" ref="canvasW" width="373" height="200" style="border:1px solid black" >Canvas画板</canvas>
        <img v-bind:src="url" alt="">
    <div>
        <button type="" v-on:click="clear()">清除</button>
        <button v-on:click="save()">确认</button>
    </div>
  </div>
</template>

<script>
var draw;
var preHandler = function(e){e.preventDefault();}
class Draw {
    constructor(el) {
        this.el = el
        this.canvas = document.getElementById('canvas')
        this.cxt = this.canvas.getContext('2d')
        this.stage_info = canvas.getBoundingClientRect()
        this.path = {
            beginX: 0,
            beginY: 0,
            endX: 0,
            endY: 0
        }
    }
    init(btn) {
        var that = this; 
        //初始化生成
        this.canvas.addEventListener('touchstart', function(event) {
            document.addEventListener('touchstart', preHandler, false); 
            that.drawBegin(event)
        })
        this.canvas.addEventListener('touchend', function(event) { 
            document.addEventListener('touchend', preHandler, false); 
            that.drawEnd()
            
        })
        this.clear(btn)
    }
    drawBegin(e) {
        var that = this;
        window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty()
        this.cxt.strokeStyle = "#000"
        this.cxt.beginPath()
        this.cxt.moveTo(
            e.changedTouches[0].clientX - this.stage_info.left,
            e.changedTouches[0].clientY - this.stage_info.top
        )
        this.path.beginX = e.changedTouches[0].clientX - this.stage_info.left
        this.path.beginY = e.changedTouches[0].clientY - this.stage_info.top
        canvas.addEventListener("touchmove",function(ev){
            ev.preventDefault()
            that.drawing(event)
        })
    }
    drawing(e) {
        this.cxt.lineTo(
            e.changedTouches[0].clientX - this.stage_info.left,
            e.changedTouches[0].clientY - this.stage_info.top
        )
        this.path.endX = e.changedTouches[0].clientX - this.stage_info.left
        this.path.endY = e.changedTouches[0].clientY - this.stage_info.top
        this.cxt.stroke()
    }
    drawEnd() {
        document.removeEventListener('touchstart', preHandler, false); 
        document.removeEventListener('touchend', preHandler, false);
        document.removeEventListener('touchmove', preHandler, false);
    }
    clear(btn) {
        this.cxt.clearRect(0, 0, this.stage_info.width, this.stage_info.height)
        // this.cxt.clearRect(0, 0, 373, 200)
    }
    save(){
       return canvas.toDataURL("image/png")
       console.log(canvas.toDataURL("image/png"))
    }
}
export default {
 name:"Canvas",
 data(){
     return {
       msg: '啦啦啦',
       val:true,
       url:""
     }
 },
 mounted(){
    draw=new Draw('canvas');
      draw.init();
 },
 methods:{
    clear:function(){
        draw.clear();
        // 用于点击清除画布时，同时清除上次保存的图片
        this.save();
        
    },
    save:function(){
        var data=draw.save();
        this.url = data;
        // 生成图片的base64数据流
         console.log(this.url);
        this.$emit('comfirm',this.url)
    },
　　mutate(word){
        this.$emit("input", word);
    },
 }
}
</script>

<style lang='scss' scoped>
  .hello{
        height: 100%;
        width: 100%;
        background: #ccc;
            h1, h2 { font-weight: normal; } 
            ul { list-style-type: none; padding: 0; } 
            li { display: inline-block; margin: 0 10px; } 
            a { color: #42b983; } 
            #canvas { background: pink; cursor: default; } 
            #keyword-box { margin: 10px 0; } 
            button{font-size: 0.2rem;color: blue;}
    }
</style>