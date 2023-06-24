<template>
    <h1>Caracola Magica</h1>
    <img v-if="rutaImagen" v-bind:src="rutaImagen" alt="No se puede cargar">

    <div class="bg-dark"></div>

    <div class="contenedor">
        <input v-model="pregunta" type="text" placeholder="Hazme una Preguntame"     >
        <p>Recuerda terminar con un ? la pregunta</p>

        <div>
            <h2>{{ pregunta }}</h2>
            <h1>{{ respuesta }}</h1>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            pregunta: 'Hola Mundo',
            //creo las variables para igualarles en el metodo consumir api y poderlas utilizar
            respuesta: '',
            rutaImagen: null,
            mensaje:''

        };

    }, watch: {
        pregunta(value, oldValue) {
            console.log(value);
            console.log(oldValue);
            if (value.includes("?")) { //condicion que controla lo que ingresa->si ingresa el signo de incognita para consumir el api
                console.log("Consumir API");
                this.mensajeEspera()
                this.consumirAPI()
                this.vaciarLabel()
                
            }
        },

    },
    methods: {
        async consumirAPI() {
            const respuesta = await fetch('https://yesno.wtf/api').then(r => r.json())
            console.log(respuesta)

            //desustrucración //para utilizar en todo el lugar debemos guardar en el data para utilizarle
            const { answer, image } = respuesta;


            console.log(answer)
            console.log(image)
            this.respuesta = answer
            this.rutaImagen = image
          


        },
        vaciarLabel(){
            this.pregunta=''
        },
        mensajeEspera(){
          this.respuesta= this.mensaje='Espere por favor'
        }

    },


}
</script>

<style>
img,.bg-dark { /* utilizamos el mismo estilo para los tipos de selectores*/

    height: 100vh;
    width: 100vw;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    /*inicie desde el tope*/
    top: 0px;
}

.bg-dark{
    background-color: rgba(0, 0, 0, 0.4);
}
.contenedor{
    /**poner hacia adelante ya q la imagen me impedia hacerlo */
    position: relative;
    
}
input{
    width: 450px;
    padding: 10px,15px;
    border-radius: 5px;
    border: none;
    font-size: 30px;
}
p,h1,h2{
    color: white;
}

p{
    font-size: 40px;
    margin-top: 0px;
}

</style>