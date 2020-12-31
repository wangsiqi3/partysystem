<template>
   <div id="#Infowrite">
     <Homehead :show1='true' :show2='false'></Homehead>
     <Infoform :Params='params'></Infoform>  
     
   </div>
</template>

<script>
import Homehead from './Homehead'
import Infoform from './Infoform'
export default {
  name:'Infowrite',
  data(){
    return {
      params:{}
    }
  },
  components:{
      Homehead,
      Infoform
  },
  mounted(){
     this.params = this.$route.params
  }
}
</script>

<style scoped lang='scss'>
  #Infowrite{

  }
</style>