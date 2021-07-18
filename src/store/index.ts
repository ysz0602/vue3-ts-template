import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import todos, { TodoState } from './modules/todos'

// 定义 injectionKey
export const key: InjectionKey<Store<State>> = Symbol()

export type State = {
    counter: number,
    todos?: TodoState
}

export default createStore({
    state: {
        counter: 1
    },
    mutations: {
        add(state) {
            state.counter++
        }
    },
    modules: {
        todos
    }
})