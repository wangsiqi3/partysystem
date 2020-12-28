<template>
  <div class="home">
    <Header></Header>
    <Info-table class="infoTable"></Info-table>
  </div>
</template>

<script>


import Header from './index/Header'
import InfoTable from './index/InfoTable.vue'
export default {
  name: 'Home',
  components: {
   Header,
   InfoTable
  }
}
</script>
<style scoped lang='scss'>
 .infoTable{
     background-color: #fff;
     width: 80%;
     margin: 10px auto;
 }
</style>
