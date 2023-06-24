<template>
<!--<Calculadora></Calculadora> 
<Contador titulo="Estudiante" v-bind:inicio="4+2"></Contador>
<Contador titulo="Profesor" :inicio="101"> </Contador> <Juego></Juego>
<CaracolaMagica></CaracolaMagica>--> 

<PokemonPageVue></PokemonPageVue>

</template>

<script>

//import Contador from "./components/Contador.vue"
//import Calculadora from "./components/Calculadora.vue"
//import CaracolaMagica from "./components/CaracolaMagica.vue"
//import Juego from './components/Juego.vue'
import PokemonPageVue from './components/modules/pages/PokemonPage.vue'



export default {
  name: 'App',
  components: {
    //Calculadora
   // Contador
   //Juego
 //CaracolaMagica,
 PokemonPageVue
    
   
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
