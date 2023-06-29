<template>
  <h1>Juego Pokemon</h1>

  <PokemonImg :pokemonId="145" :muestraPokemon="false"/>
  

  <PokemonOps />
</template>




<script>

import PokemonImg from "../components/PokemonImgs.vue";

import PokemonOps from "../components/PokemonOps.vue";




export default {

  components: {

    PokemonImg,

    PokemonOps,

  },

};

</script>




<style></style>