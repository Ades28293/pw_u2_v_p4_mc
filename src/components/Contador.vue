<template>
  <h3>{{ evaluarTitulo }}</h3>
  <p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <button @:click="suma()">+</button>
  <button v-on:click="resta()">-</button>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      numero: this.inicio,
      tituloComponente: this.titulo
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("Entro al metodo cuadrado");
      return this.numero * this.numero;
    },
    suma() {
      this.numero = this.numero + 1;
    },
    resta() {
      this.numero = this.numero - 1;
    }
  },
  computed: {
    obtenerCuadradoComputado() {
      console.log("Entro al metodo cuadrado")
      return this.numero * this.numero
    },
    evaluarTitulo() {
      return this.tituloComponente || 'Valor por defecto'
    }
  },
  props: {  //['titulo', 'inicio']
    titulo: String,
    inicio: {
      type: Number,
      //obligado a mandar el numero o si no me da el error qye me solicite que mande el valor
      //si le ponemos false no me va a dar problemas
      //cada vez q no me envien ya que no es requerido le configuro que mi props tenga un valor de 100  
      required: false,
      default: 100,
      validator(value){
        //si cumple es valido y si no cumple va a dar un error
        return value>100
      }
    }
  }       
};
</script>

<style>
button {
  background-color: #64B687;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0px 5px;
  padding: 5px 15px;

}

button:hover {
  background-color: #5aa67b;

}
</style>
