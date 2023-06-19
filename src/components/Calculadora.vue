<template>
    <div>
      <header class="cabecera">Calculadora Vue</header>
      <nav></nav>
  
      <section>
        <div id="myCalculadora" class="container">
          <div class="calculadora">
            <label class="pantalla" id="idpantalla" v-on:click="borrarComputed">{{ numero }}</label>
  
            <button class="boton" v-on:click="obtenerComputed">1</button>
            <button class="boton" v-on:click="obtenerComputed">2</button>
            <button class="boton" v-on:click="obtenerComputed">3</button>
  
            <button class="boton" id="idsuma" v-on:click="operacionCalcularComputed">+</button>
  
            <button class="boton" v-on:click="obtenerComputed">4</button>
            <button class="boton" v-on:click="obtenerComputed">5</button>
            <button class="boton" v-on:click="obtenerComputed">6</button>
  
            <button class="boton" id="idresta" v-on:click="operacionCalcularComputed">-</button>
  
            <button class="boton" v-on:click="obtenerComputed">7</button>
            <button class="boton" v-on:click="obtenerComputed">8</button>
            <button class="boton" v-on:click="obtenerComputed">9</button>
  
            <button class="boton" id="iddiv" v-on:click="operacionCalcularComputed">/</button>
            <button class="butonGrande" v-on:click="obtenerComputed">0</button>
  
            <button class="boton" id="idigual" v-on:click="operacionCalcularComputed">=</button>
            <button class="boton" id="idmulti" v-on:click="operacionCalcularComputed">*</button>
          </div>
        </div>
      </section>
  
      <footer></footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "Calculadora",
    data() {
      return {
        numero: "",
      };
    },
    methods: {
      obtener(event) {
        this.numero += event.target.innerText;
      },
  
      operacionCalcular() {
        const pantalla = event.target.innerText;
  
        if (pantalla !== "=") {
          this.numero += pantalla;
        } else {
          const resultado = eval(this.numero);
          this.numero = resultado.toString();
        }
      },
  
      borrar() {
        this.numero = "";
      },
    },computed: {
  obtenerComputed() {
    return (event) => {
      this.numero += event.target.innerText;
    };
  },

  operacionCalcularComputed() {
    return () => {
      const pantalla = event.target.innerText;

      if (pantalla !== "=") {
        this.numero += pantalla;
      } else {
        const resultado = eval(this.numero);
        this.numero = resultado.toString();
      }
    };
  },

  borrarComputed() {
    return () => {
      this.numero = "";
    };
  },
},

  };
  </script>
  
  <style>
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.calculadora{
    border: solid black 1px;
    display: grid;
    grid-template-columns: repeat(4, 75px); 
    /*grid-template-rows: repeat(3, 75px);*/
    
    /*background-color: rgb(5, 130, 172);*/
    background-color: rgba(7, 4, 103, 0.984);
    padding: 20px;
    border-radius: 20px;
   /* box-shadow: 10px 5px 2px 1px black;*/
   box-shadow: 15px 20px 30px 20px black;
}

.butonGrande{
    grid-column: span 2;
}

.pantalla{
    background-color: rgb(255, 255, 255);
    border: solid 1px;
    margin-bottom: 10px;
    padding: 2px;
    text-align: right;
    grid-column: span 4;
    height: 20px;
    
}

.cabecera{
    text-align: center;
    font-size: 30px;
}

.boton,.butonGrande{
    color: white;
    background-color: purple;
    margin: 3px;
    border-radius: 7px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 25px;
    padding: 10px;
    box-shadow: 1px 1px 2px 1px rgb(64, 158, 189);;
}

button:hover{
    background-color: rgb(20, 131, 131);
}
  </style>
  