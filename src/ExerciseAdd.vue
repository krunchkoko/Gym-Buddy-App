<template>
    <section>
        <base-card>
            <h2>Add some of your exercises now!</h2>
            <exercise-form @save-data="saveData"></exercise-form>
        </base-card>
    </section>
</template>

<script>
import ExerciseForm from '@/components/exercises/ExerciseForm.vue';

export default{
    components:{
        ExerciseForm
    },

    methods:{
        saveData(data) {
            this.$store.dispatch('exercises/addExercise', data)
            this.$router.replace('/exercises')
        }
    }
}
</script>

