import { createStore } from 'vuex';
import exercisesModule from './modules/exercises/index.js'
import statisticsModule from './modules/statistics/index.js'

const store = createStore({
    modules: {
        exercises: exercisesModule,
        statistics: statisticsModule
    },
    state(){
        return{
            userId: 'c3'
        }
    },
    getters:{
        userId(state){
            return state.userId
        }
    }
})

export default store