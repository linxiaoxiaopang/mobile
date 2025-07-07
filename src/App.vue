<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TestButton msg="Welcome to Your Vue.js App"/>
    <TestButton1 msg="Welcome to Your Vue.js App"/>
    <TestCascader />
  </div>
</template>

<script>
import TestButton from './components/element/testButton'
import TestButton1 from './components/element/testButton1'
import TestCascader from './components/element/testCascader'

export default {
  name: 'App',
  components: {
    TestButton,
    TestButton1,
    TestCascader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
