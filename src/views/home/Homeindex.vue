<template>
  <div id="HomeIndex">
         <div class="picture">
             <img src="../../assets/头像.png" alt="">
         </div>
         <div class="title">党员信息表</div>
         <div class="please">请相关人员认真填写</div>
         <div class="button" @click='toInfowrite()'>开始填写</div>
  </div>  
</template>

<script>
export default {
 name:'Homeindex',
 methods:{
     toInfowrite(){
         this.$router.push('./home/edit')
     }
 }
}
</script>

<style scoped lang='scss'>
@import '../../style/style.scss';
  #HomeIndex{
      .picture{
          width: 105px;
          height: 105px;
          background-color: #fff;
          border-radius: 50%;
          overflow: hidden;
          margin: 70px auto 20px;
      }
      .title{
          color:#3c3c3c;
          font-size: 20px;
      }
      .please{
          color:#a3a3a3;
          margin:10px 0px;
      }
      .button{
          background-color:$color ;
          color:#fff;
          width: 360px;
          height: 50px;
          line-height: 50px;
          margin:40px auto;
          border-radius: 5px;
      }
  }
</style>