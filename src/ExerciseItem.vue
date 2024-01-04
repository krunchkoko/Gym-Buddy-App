<template>
    <li>
        <h3> {{ name }}</h3>
        <h4> {{ shortDescription }}</h4>
        <div> 
            <base-badge v-for="muscle in muscles" :key="muscle" :type="muscle" :title="muscle"></base-badge>
        </div>
        <div class="actions">
            <base-button mode="outline" link :to="exerciseAddStatisticsLink">Add statistics</base-button>
            <base-button link :to="exerciseDetailsLink">View Details</base-button>
        </div>
    </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue'
import BaseButton from '../ui/BaseButton.vue'
export default{
  components: { BaseButton, BaseBadge },
    props:['id' , 'name' , 'shortDescription' , 'muscles'],
    computed:{
        exerciseAddStatisticsLink(){
            return this.$route.path +'/' + this.id + '/addstatistics'
        },
        exerciseDetailsLink(){
            return this.$route.path +'/' + this.id
        }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>