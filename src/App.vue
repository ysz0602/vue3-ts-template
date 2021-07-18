<template>
  <router-link to="/">todo</router-link>
  <router-link to="/add">add</router-link>
  <router-view></router-view>
</template>

// <script lang="ts">
//   export default defineComponent({
//     name: 'App'
//   })
// </script>
<script lang="ts" setup>
// import { defineComponent } from 'vue'
import { useStore } from 'vuex';
import { key } from './store';

const store = useStore(key)
// todos初始化
store.dispatch('todos/initTodo')

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
