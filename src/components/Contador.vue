<template>
 <h3>{{ tituloComponente }}</h3>
  <h3>{{ titulo }}</h3>
  <p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <button v-on:click="suma()">+</button>
  <button v-on:click="resta()">-</button>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      numero: 5,
      tituloComponente:this.titulo
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("Entro al metodo cuadrado");
      return this.numero * this.numero;
    },
    suma(){
        this.numero= this.numero+1;
    },
    resta(){
        this.numero= this.numero-1;
    }
  },
    computed:{
        obtenerCuadradoComputado(){
            console.log("Entro al metodo cuadrado")
            return this.numero*this.numero
        }
    },
    props:['titulo','valor2']
};
</script>

<style>
button{
    background-color: #64B687;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0px 5px;
    padding: 5px 15px;

}

button:hover{
    background-color: #5aa67b;

}
</style>
