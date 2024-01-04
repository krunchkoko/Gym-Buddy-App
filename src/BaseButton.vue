<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else-if="link" :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default{
    props:{
        mode:{
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to:{
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: rgb(28, 110, 197);
  border: 1px solid black;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: rgb(203, 209, 43);
  border-color: red;
}

.flat {
  background-color: transparent;
  color: white;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: white;
  color: white;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
