<template>
  <div class="sign">
    <Homehead :show1='true'></Homehead>
    <div class="signPlace">
      <div class="canvas">
        <Canvas2 @comfirm='comfirm'></Canvas2>
      </div>
      
    </div>
  </div>
</template>

<script>
import Homehead from './Homehead'
import Canvas2 from './Canvas2.vue'
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
     Canvas2,

 },
 mounted(){
   this.params = this.$route.params
 },
 methods:{
     clear:function(){
         if(!this.isActive){
             this.isActive=!this.isActive
         }
     },
     comfirm:function(picture){
         this.params.url=picture
         if(this.isActive){
             this.isActive=!this.isActive
         }
        //  this.$router.push({path:'/home/editdone',query: {...this.params,url:picture}})
         this.$router.push({name:'Editdone',params: {...this.params}})
     },
     toInforite(){
       this.$router.push({name:'Infowrite',params:this.params})
     }
     
 }
}
</script>

<style scoped lang='scss'>
@import '../../style/style.scss';


  .signPlace{
      height: 100vh;
      overflow: hidden;
      .canvas{
          position: relative;
          left: -0px;
          top: 3rem;
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