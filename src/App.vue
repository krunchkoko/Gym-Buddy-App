<template>
<div class="background">
  <div class="blur">
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default{
    components:{
        TheHeader
    }
}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Tillana:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "font-family: 'Tillana', cursive";
  color: beige;
}

body {
  margin: 0;
}


.background {
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/b/b1/Bench_Press.jpg);
  background-size: cover;
  height: 100%;
  width: 100%;
  max-height: auto;
}

.blur {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  height: 100%;
	width: 100%;
}

.route-enter-from{
  opacity:0;
  transform: translateX(-30px)
}

.route-leave-to {
  opacity:0;
  transform: translateX(30px)
}

.route-enter-active{
  transition: all 0.3s ease-in-out
}

.route-leave-active {
  transition: all 0.3s ease-in-out
}


.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0)
}
</style>