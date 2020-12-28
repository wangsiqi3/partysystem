<template>
  <div class="home">
    <Index></Index>
  </div>
</template>

<script>
// @ is an alias to /src

import Index from './home/Index'
export default {
  name: 'Home',
  components: {
   Index,
  }
}
</script>
