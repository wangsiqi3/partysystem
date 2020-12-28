<template>
   <div id="#Infowrite">
     <Homehead :show1='true' :show2='false'></Homehead>
     <Infoform></Infoform>  
     
   </div>
</template>

<script>
import Homehead from './Homehead'
import Infoform from './Infoform'
export default {
  name:'Infowrite',
  components:{
      Homehead,
      Infoform
  }
}
</script>

<style scoped lang='scss'>
  #Infowrite{

  }
</style>