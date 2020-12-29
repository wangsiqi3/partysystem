<template>
  <div class="sign">
   <Homehead :show1='true'></Homehead>
    <div class="signPlace">
    <div class="canvas">
      <Canvas @comfirm='comfirm'></Canvas>  
    </div>
       <!-- <canvas id="canvasbox" width="500" height="290" style="border:1px solid green; transform: rotate(90deg); margin:20px auto;display:block;"></canvas> -->
       <span class="button">
           <span class="clear" @click='clear()' :class="{active:isActive}">清除</span>
           <span class="comfirm" @click="comfirm()" :class="{active:!isActive}">确认</span>
       </span>
    </div>
  </div>
</template>

<script>

import Homehead from './Homehead'
import Canvas from './Canvas'
export default {
 name:"Sign",
 data(){
  return {
    isActive:true,
    params:{},
  }
 },
 components:{
     Homehead,
     Canvas
 },
 mounted(){
   this.params = this.$route.query
   console.log(this.params); //拿到参数：填写的信息
 },
 methods:{
     clear:function(){
         if(!this.isActive){
             this.isActive=!this.isActive
         }
     },
     comfirm:function(picture){
         console.log(picture);
         if(this.isActive){
             this.isActive=!this.isActive
         }
         this.$router.push({path:'/home/editdone',query: {...this.params,url:picture}})
     }
     
 }
}
</script>

<style scoped lang='scss'>
@import '../../style/style.scss';
  .signPlace{
      height: calc(100vh - 60px);
      width: 100%;
      overflow: hidden;
      .canvas{
          position: relative;
          left: -0px;
          top: 8.25rem;
        //   transform: rotate(90deg);
      }
      .info{
         display: inline-block;
         margin: auto;
         transform: translateY(260px) rotate(90deg);
         font-size: 40px;
         color:#d5d5d5;
      }
      .button{
         display: inline-block;
         width:260px;
         transform: rotate(90deg);
         position: absolute;
         bottom: 110px;
         left: -80px;
          >span{
          display: inline-block;
          width: 120px;
          height: 60px;
          line-height: 60px;
          border:1px solid $color;
          color:$color;
          background-color: #fff;
          font-size: 30px;
          border-radius: 5px;
          margin-left: 5px;
         }
         .active{
             background-color: $color;
             color:#fff;
         }
    }
  }
</style>