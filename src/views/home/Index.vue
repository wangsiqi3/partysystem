<template>
   <div id='Index'>
       <Homehead :show2='true'></Homehead>
       <Homeindex></Homeindex>
   </div>
</template>

<script>
import Homehead from './Homehead'
import Homeindex from './Homeindex'
export default {
  name:"Index",
  components:{
      Homehead,
      Homeindex
  }
}
</script>

<style scoped lang='scss'>
 
</style>