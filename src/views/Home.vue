<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import B from '../components/baidudingwei'

export default {
  name: 'home',
  components: {
    HelloWorld,
    // B
  }
}
</script>
