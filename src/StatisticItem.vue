<template>
    <li>
        <div>
            <h1>{{ name }}</h1>
        </div>
        <p>Date: <strong>{{ date }}</strong></p>
        <p>Total Number of Sets: <strong>{{ sets }}</strong></p>
        <p>Total Number of Reps: <strong>{{ reps }}</strong></p>
    </li>
</template>

<script>
export default{
    props: ['name' , 'sets' , 'reps' , 'date']
}
</script>

<style scoped>
h1{
    text-align: center;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
