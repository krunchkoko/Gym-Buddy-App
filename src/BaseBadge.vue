<template>
    <span class="badge" :class="type">
        {{ text }}
    </span>
</template>

<script>
export default {
    props:['type' , 'title'],
    computed:{
        text(){
            return this.title.toUpperCase()
        }
    }

}
</script>

<style >
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.chest {
  background-color: #3d008d;
  color: white;
}

.triceps {
  background-color: #71008d;
  color: white;
}

.back {
  background-color: #601905;
  color: white;
}

.biceps{
  background-color: #8d006e;
  color: white;
}

.shoulder {
  background-color: #7d7012;
  color: white;
}

.legs {
  background-color: #114411;
  color: white;
}
</style>
