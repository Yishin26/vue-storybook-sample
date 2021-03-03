<template>
  <div id="app">
    <TestForm />
    <Counter />
    <InboxScreen />
  </div>
</template>

<script>
import InboxScreen from './components/InboxScreen.vue'
import Counter from './components/Counter'
import TestForm from './components/TestForm.vue'

export default {
  name: 'App',
  components: {
    InboxScreen,
    Counter,
    TestForm
  }
}
</script>

<style>
@import './assets/index.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
