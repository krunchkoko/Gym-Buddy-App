<template>
    <div>
        <base-card>
            <section>
                <base-card>
                    <h2>{{ name }}</h2>
                    <h3>{{ shortDescription }}</h3>
                </base-card>
            </section>
            <section>
                <base-card>
                <header>
                    <h2>Done this? Add your statistics now!</h2>
                </header>
                <router-view></router-view>
                </base-card>
            </section>
            <section>
                <base-card>
                    <base-badge v-for="muscle in muscles" :key="muscle" :type="muscle" :title="muscle"></base-badge>
                    <p>{{ longDescription }}</p>
                </base-card>
            </section>
        </base-card>
    </div>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
export default{
  components: { BaseCard },
    props:['id'],
    data(){
        return{
            selectedExercise: null
        }
    },

    computed:{
        name(){
            return this.selectedExercise.name
        },
        muscles(){
            return this.selectedExercise.muscles
        },
        shortDescription(){
            return this.selectedExercise.shortDescription
        },
        longDescription(){
            return this.selectedExercise.longDescription
        },
        addStaisticsLink(){
            return this.$route.path + '/' +this.id + '/addstatistics'
        }

    },

    created(){
        this.selectedExercise = this.$store.getters["exercises/exercises"].find(exercise => exercise.id === this.id)
    }
}
</script>
