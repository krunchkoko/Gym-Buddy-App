<template>
    <div>
        <section>
            <base-card>
                <div class="controls">
                    <base-button link to="/addexercises">Add an exercise</base-button>
                    <base-button mode="outline" @click="loadExercises">Refresh</base-button>
                    <base-button  @click="deleteLast">Delete last added</base-button>
                </div>
                <ul v-if="hasExercises">
                    <exercise-item v-for="exercise in allExercises" 
                    :key="exercise.id" 
                    :id="exercise.id"
                    :name="exercise.name" 
                    :shortDescription="exercise.shortDescription"
                    :muscles="exercise.muscles"></exercise-item>
                </ul>
                <h3 v-else>No exercises yet!</h3>
            </base-card>
        </section>
    </div>
</template>

<script>

import ExerciseItem from '@/components/exercises/ExerciseItem.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

export default{
  components: {
    ExerciseItem,
    BaseCard,
    BaseButton 
   },
    computed:{
        allExercises(){
            return this.$store.getters['exercises/exercises']
        },
        hasExercises(){
            return this.$store.getters['exercises/hasExercises']
        }
    },
    created(){
        this.loadExercises()
    },

    methods:{
        loadExercises(){
            this.$store.dispatch('exercises/loadExercises')
        },
        deleteLast(){
            this.$store.dispatch('exercises/deleteLast')
        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
