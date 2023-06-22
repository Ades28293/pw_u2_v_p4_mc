<template>
    <h1>Caracola Magica</h1>
    <img src="https://via.placeholder.com/250" alt="No se puede cargar">

    <input v-model="pregunta" type="text" placeholder="Hazme una Preguntame">
    <p>Recuerda terminar con un enter la pregunta</p>

    <div>
        <h2>Voy a pasar de año?</h2>
        <h1>SI, NO</h1>
    </div>


</template>

<script>
export default {
    data(){
        return{
            pregunta: 'Hola Mundo'
        }
    }

}
</script>

<style></style>