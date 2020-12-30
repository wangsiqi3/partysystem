<template>
  <div id="Homehead">
      <span class="left" v-show='show1' @click="go()">< 返回</span>
      <span class="middle">党员信息表</span>
      <span class="right" v-show='show2'>...</span>

  </div>
</template>

<script>
export default {
 name:'Homehead',
 data(){
   return {
     
   }
 },
 props:{
   show1:{
     type:Boolean,
     default(){
       false
     }
   },
   show2:{
     type:Boolean,
     default(){
       false
     }
   }
 },
 methods:{
   go(){
    this.$router.go(-1) 
   }
   
 }
}
</script>

<style scoped lang='scss'>
@import '../../style/style.scss';

  #Homehead{
      background-color: $color;
      height: 60px;
      line-height: 60px;
      // position: relative;
      position: fixed;
      top: 0px;
      left: 0;
      right: 0;
      z-index:999;
      span{
        display: inline-block;
        color: #fff;
        font-size: 18px;
      }
      .left{
          position: absolute;
          left: 5px;
          width: 60px;
          height: 48px;
      }
      .right{
        position: absolute;
        right: 0;
        top:-9px;
          width: 48px;
          height: 48px;
        font-size: 30px;
        
      }
  }
</style>