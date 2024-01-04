<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="name">Full name of exercise</label>
            <input type="text" id="name" v-model.trim="name"/>
        </div>
        <div class="form-control">
            <label for="date">Date</label>
            <input type="date" id="date" v-model.trim="date"/>
        </div>
        <div class="form-control">
            <label for="sets">Number of Sets</label>
            <input type="number" id="sets" v-model.number="sets"/>
        </div>
        <div class="form-control">
            <label for="reps">Number of Repitions</label>
            <input type="number" id="reps" v-model.number="reps"/>
        </div>
        <p class="errors" v-if="!formIsValid">Please fix the form!</p>
        <div class="actions">
            <base-button>Send Statistics</base-button>
        </div>
    </form>
</template>

<script>
export default{
    data(){
        return{
            name: '',
            date: null,
            sets: null,
            reps: null,
            formIsValid: true
        }
    },

    methods:{
        submitForm(){
            this.formIsValid=true 
            if(this.name === '' || this.date === ''|| this.sets < 0 || this.reps < 0) {
                this.formIsValid = false
                return;
            }

            this.$store.dispatch('statistics/includeStatistics' , {
              name: this.name,
              date: this.date,
              sets: this.sets,
              reps: this.reps,
              coachId: this.$route.params.id
            })
            this.$router.replace('/')
        }
    }
}
</script>


<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>