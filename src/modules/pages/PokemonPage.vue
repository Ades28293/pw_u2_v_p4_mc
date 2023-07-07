<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor.........</h1>
  <div v-else>

    <div class="principalPage" >

      <h1 id="titulo">Juego Pokemon</h1>

      <label id="score" for="">Puntaje:{{ puntaje }}</label>
      <br />
      <label id="intend" for="">Intentos:{{ intento }}</label>
      <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />
      <PokemonOps v-if="!(puntaje>0 || intento>3)" :opciones="arreglo" @seleccionado="revisarSeleccion($event)" />
    </div>
    

    <div class="ganadorVentana" v-if="puntaje==1 || puntaje==5 || puntaje==2 ">

      <label id="score1" for="">Puntaje Obtenido:{{ puntaje }}</label>

      <h2 id="ganador1"> Felicitaciones, has ganado un premio de $10.000,00</h2>
       
    </div>

    <div class="perdedorVentana" v-if="intento >= 4">
      <h2 id="perdida1">Haz utilizado tus 3 intentos</h2>
      <br>
      <h2 id="perdida2">El juego ha terminado, inténtalo nuevamente</h2>
      
    </div>
    <button  v-if="puntaje==1 || puntaje==5 || puntaje==2 || intento >= 4" @click="reiniciarAplicacion">Reiniciar</button>
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
      showPokemon: false,
      puntaje: 0,
      intento: 0,
      perdiste: false,
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

      if (this.intento >= 4 && this.puntaje < 0) {
        this.perdiste = true;
      }


    },
    revisarSeleccion(idSeleccionado) {
      console.log("evento en el padre")

      console.log(idSeleccionado)

      this.intento++
      if (idSeleccionado == this.pokemonCorrecto.id && this.intento == 1) {
        this.showPokemon = true
        this.puntaje += 5
      }

      if (idSeleccionado == this.pokemonCorrecto.id && this.intento == 2) {
        this.showPokemon = true
        this.puntaje += 2
      }


      if (idSeleccionado == this.pokemonCorrecto.id && this.intento == 3) {
        this.showPokemon = true
        this.puntaje += 1
      }
    },



    reiniciarAplicacion() {
      this.arreglo = [];
      this.pokemonCorrecto = null;
      this.showPokemon = false;
      this.puntaje = 0;
      this.intento = 0;
      this.perdiste = false;
      this.cargaJuegoInicial();
    },
  },
  mounted() {
    console.log('se monto el componente')
    this.cargaJuegoInicial()
  }

};

</script>




<style scope>
#perdida1,#perdida2{
    color: red;
  }
  
  #ganador1,#score1{
    color: blue;
  }
</style>