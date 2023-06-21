<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--<Calculadora></Calculadora> --> 
<Contador titulo="Estudiante" v-bind:inicio="4+2"></Contador>
<Contador titulo="Profesor" :inicio="101"> </Contador>
</template>

<script>
import Contador from "./components/Contador.vue"
//import Calculadora from "./components/Calculadora.vue"

export default {
  name: 'App',
  components: {
    //Calculadora
    Contador
   
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
