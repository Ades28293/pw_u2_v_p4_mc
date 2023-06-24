
<template>
    <div class="contenedor">
        <div class="juegoTest">
            <h1>Juega Ya?</h1>
            <h3>Objetivo</h3>
            <p>Preciona 3 veces el boton y saca en los 3 intentos SI o NO y gana </p>

            <h3 v-if="operacion()">Numero de intentos: {{ intentos }}</h3>
            <h3>Numero de conteo: {{ aux1 >= aux2 ? aux1 : aux2 }}</h3>
            <button v-if="operacion()" v-on:click="juego()">Presioname</button>
            <h3 v-if="respuesta">Respuesta: {{ respuesta }}</h3>
            <h1 id="ganador">{{ mensaje }}</h1>
            <img v-if="rutaImagen != null" :src="rutaImagen.image" alt="No carga la imagen" />
            <hr>
            <button @click="reiniciarPagina">Reiniciar</button>

        </div>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            rutaImagen: null,
            respuesta: "",
            intentos: 3,
            ganador: false,
            mensaje: "",
            aux1: 0,
            aux2: 0

        };
    },
    methods: {
        async consumirAPI() {
            return await fetch("https://yesno.wtf/api").then((r) => r.json());
        },
        async obtenerRespuesta() {
            this.rutaImagen = await this.consumirAPI();
            this.respuesta = this.rutaImagen.answer;
        },
        operacionRespuesta() {
            this.aux1 = this.respuesta == "yes" ? this.aux1 + 1 : 0;
            this.aux2 = this.respuesta == "yes" ? 0 : this.aux2 + 1;
        },
        comprobacionTest() {
            switch (true) {
                case this.aux1 == 3 || this.aux2 == 3:
                    this.ganador = true;
                    this.mensaje = "Ganaste un carro";
                    break;
                case !this.operacion():
                    this.mensaje = "Perdiste :/";
                    break;
                default:

                    break;
            }
        },
        operacion() {
            if (this.intentos > 0 && !this.ganador) {
                return true;
            } else {
                return false;
            }
        }, reiniciarPagina() {
            // Restaurar las propiedades a sus valores iniciales
            this.rutaImagen = null;
            this.respuesta = "";
            this.intentos = 3;
            this.ganador = false;
            this.mensaje = "";
            this.aux1 = 0;
            this.aux2 = 0;

        },
        async juego() {
            this.intentos--;
            await this.obtenerRespuesta();
            this.operacionRespuesta();
            this.comprobacionTest();
        }
    },
};
</script>
  
<style>
p,
h1,
h3 {
    color: black;
    font-family: 'Times New Roman', Times, serif;
}

.contenedor {
    background-color: rgb(42, 165, 79);
    border: solid;
}

button {
    width: 120px;
    font-size: 16px;
}

img {
    width: 250px;
    height: 250px;
}
</style>