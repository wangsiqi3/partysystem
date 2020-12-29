<template>
  <div class="toast" v-show="Show">
     <span>{{message}}</span>
  </div>
</template>

<script>
export default {
 name:"Toast",
 data(){
   return {
       
   }
 },
 props:{
   Show:{
     type:Boolean,
     default(){
      false
     }
   },
   message:{
     type:String,
     default(){
       ""
     }
   }
 },
 mounted(){
   
 },
 methods:{
     
 }
}
</script>

<style scoped>
 .toast{
   position: fixed;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
   background-color:rgba(0, 0, 0, .6);
   z-index: 9999;
   height: 35px;
   line-height: 35px;
   text-align: center;
   color:#fff;
   
 }
 .toast span {
     padding: 0px 10px;
 }
 
</style>