<template>
  <div class='counter'>
    <span class="count">{{ count }}</span>
    <button @click="increment" class="counter-button">+</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
     return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<style>
.counter{
  margin:10px;
}
.count{
  margin:10px;
}
.counter-button{
  background-color: rgb(0, 17, 255);
  color:white;
  width:30px;
  height:30px;
  border-radius:50%;
  font-weight: bolder;
}
</style>
