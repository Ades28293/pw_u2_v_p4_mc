<template>
  <h1>Juego Pokemon</h1>

  <PokemonImg :pokemonId="145" :muestraPokemon="false"/>
  
  <PokemonOps :opciones="arreglo"/>
</template>




<script>

import PokemonImg from "../components/PokemonImgs.vue";

import PokemonOps from "../components/PokemonOps.vue";

//importamos la funcionalidad externa de la lógica
import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";


//console.log(obtenerFachadaPokemons())


export default {

  data() {
      return {
        arreglo: [],
      };
    },
  components: {

    PokemonImg,

    PokemonOps,

  },
  methods:{
  async cargaJuegoInicial(){
   const arregloPokemon= await obtenerFachadaPokemons()
    console.log(arregloPokemon)
    this.arreglo=arregloPokemon

    }
  },
  mounted(){
    console.log('se monto el componente')
    this.cargaJuegoInicial()
  }

};

</script>




<style></style>