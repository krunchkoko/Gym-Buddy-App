<template>
    <div>
        <section>
            <base-card>
            <header>
                <h2>All Statistics</h2>
                <base-button  @click="deleteLast">Delete last added</base-button>
            </header>
            <ul v-if="hasStatistics">
                <statistic-item v-for="stats in receivedStatistics" :key="stats.id" :name="stats.name" :date="stats.date" :sets="stats.sets" :reps="stats.reps"></statistic-item>
            </ul>
            <h3 v-else>No input yet!</h3>
            </base-card>
        </section>
    </div>
</template>

<script>
import StatisticItem from '@/components/statistics/StatisticItem.vue';

export default{
    components:{
        StatisticItem
    },

    computed:{
        receivedStatistics (){
            return this.$store.getters['statistics/statistics']
        },

        hasStatistics(){
            return this.$store.getters['statistics/hasStatistics']
        }
    },

    created(){
        this.loadStatistics()
    },

    methods:{
        loadStatistics(){
            this.$store.dispatch('statistics/fetchStatistics')
        },
        deleteLast(){
            this.$store.dispatch('statistics/deleteLast')
        }
    }
}
</script>


<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

h2 {
    margin-right: 80px;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>