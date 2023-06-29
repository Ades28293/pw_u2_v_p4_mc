<template>
    <div class="contenedor-opciones">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* scoped solo le afecta a estos componentes  */
.contenedor-opciones{
    display: flex;
    justify-content: center;
}

ul{
    /*   */
    list-style-type: none;
}

li{

    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 10px;
    width: 200px;
    cursor: pointer;
}

li:hover{
    background-color: aqua;
}

</style>