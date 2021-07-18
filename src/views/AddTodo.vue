<template>
  <div>
    <!-- 新增待办 -->
    <input 
        type="text" 
        v-model="todoName" 
        @keydown.enter="addTodo"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { key } from '../store'


const store = useStore(key)
const router = useRouter()

const todoName = ref('')

const addTodo = (): void => {
    store.dispatch('todos/addTodo', todoName.value)
    todoName.value = ''
    // 跳转回列表
    router.push('/')
}

</script>
<style scoped>
     
</style>