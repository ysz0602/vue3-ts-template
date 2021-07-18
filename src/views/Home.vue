<template>
  <div>
    <!-- <Comp :title-info="{ value: '待办事项', color: 'green' }"></Comp> -->
    <CompSetup :title-info="{ value: '待办事项', color: 'green' }"></CompSetup>
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  </div>
</template>
<script lang="ts" setup>
// import HelloWorld from '../components/HelloWorld.vue'
// import Comp from '../components/Comp.vue'
import CompSetup from '../components/CompSetup.vue'
</script>
<style scoped>
     
</style>