<template>

  <h1 v-if="!pokemonCorrecto">Espere por favor.........</h1>
  <div v-else>
    <h1>Juego Pokemon</h1>
    <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />

    <PokemonOps :opciones="arreglo" @seleccionado="revisarSeleccion($event)" />
  </div>
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
      pokemonCorrecto: null,
      showPokemon:false
    };
  },
  components: {

    PokemonImg,

    PokemonOps,

  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemon = await obtenerFachadaPokemons()
      console.log(arregloPokemon)
      this.arreglo = arregloPokemon
      const indicePokemon = Math.floor(Math.random() * 4)
      this.pokemonCorrecto = this.arreglo[indicePokemon]

    },
    revisarSeleccion(idSeleccionado){
      console.log("evento en el padre")
 
      console.log(idSeleccionado)

      if(idSeleccionado==this.pokemonCorrecto.id){
        
        this.showPokemon=true
 
      }
    }
  },
  mounted() {
    console.log('se monto el componente')
    this.cargaJuegoInicial()
  }

};

</script>




<style></style>