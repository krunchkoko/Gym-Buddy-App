<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !name.isValid}">
            <label for="name">Name</label>
            <input type="text" id="name" v-model.trim="name.val" @blur="clearValidity('name')"/>
            <p v-if="!name.isValid">Fix this!</p>
        </div>
        <div class="form-control" :class="{invalid: !longDescription.isValid}">
            <label for="longDescription">Long Description</label>
            <textarea id="longDescription" rows="3" v-model.trim="longDescription.val" @blur="clearValidity('longDescription')"></textarea>
            <p v-if="!longDescription.isValid">Fix this!</p>
        </div>
        <div class="form-control" :class="{invalid: !shortDescription.isValid}">
            <label for="shortDescription">Short Description</label>
            <input type="text" id="shortDescription" v-model.trim="shortDescription.val" @blur="clearValidity('shortDescription')"/>
            <p v-if="!shortDescription.isValid">Fix this!</p>
        </div>
        <div class="form-control" :class="{invalid: !muscles.isValid}">
            <h3>Muscle Group</h3>
        <div>
            <input type="checkbox" id="chest" value="chest" v-model="muscles.val" @blur="clearValidity('muscles')">
            <label for="chest">Chest</label>
            
        </div>
        <div>
            <input type="checkbox" id="back" value="back" v-model="muscles.val" @blur="clearValidity('muscles')">
            <label for="back">Back</label>
        </div>
        <div>
            <input type="checkbox" id="biceps" value="biceps" v-model="muscles.val" @blur="clearValidity('muscles')">
            <label for="biceps">Biceps</label>
        </div>
        <div>
            <input type="checkbox" id="triceps" value="triceps" v-model="muscles.val" @blur="clearValidity('muscles')">
            <label for="triceps">Triceps</label>
        </div>
        <div>
            <input type="checkbox" id="shoulder" value="shoulder" v-model="muscles.val" @blur="clearValidity('muscles')">
            <label for="shoulder">Shoulder</label>
        </div>
        <div>
            <input type="checkbox" id="legs" value="legs" v-model="muscles.val" @blur="clearValidity('muscles')">
            <label for="legs">Legs</label>
        </div>
        <p v-if="!muscles.isValid">Click on at least one muscle group!</p>
        </div>
        <p v-if="!formIsValid">Please fix the empty parts</p>
        <base-button>Add Exercise</base-button>
    </form>
</template>

<script>

export default{
    emits:['save-data'],

    data(){
        return {
            name:{
              val: '',
              isValid: true
            },
            longDescription:{
              val: '',
              isValid: true
            },
            shortDescription:{
              val: '',
              isValid: true
            },
            muscles: {
              val: [],
              isValid: true
            } ,
            formIsValid: true
        }
    },

    methods:{
      clearValidity(input){
        this[input].isValid=true
      },

      validateForm(){
        this.formIsValid = true
        if(this.name.val === ''){
          this.name.isValid = false
          this.formIsValid = false
        }
        if(this.shortDescription.val === ''){
          this.shortDescription.isValid = false
          this.formIsValid = false
        }
        if(this.longDescription.val === ''){
          this.longDescription.isValid = false
          this.formIsValid = false
        }
        if(this.muscles.val.length === 0){
          this.muscles.isValid = false
          this.formIsValid = false
        }
      },

        submitForm (){
          this.validateForm()

          if(!this.formIsValid){
            return
          }

            const formData = {
                name:this.name.val,
                longdesc: this.longDescription.val,
                shortdesc: this.shortDescription.val,
                muscles: this.muscles.val
            }
            
            this.$emit('save-data', formData)
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>