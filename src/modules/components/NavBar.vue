<template>
  <div class="navega">

    <router-link id="opcion1" to="/">Bienvenida</router-link>
    <router-link id="opcion2" to="/juego">Juego</router-link>
    <router-link id="opcion3" to="/premios">Premios</router-link>
    <router-link id="opcion4" to="/pokemon">Pokemon</router-link>
    <hr>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
    padding: 0 30px;
}

div,a{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

#opcion1,#opcion2,#opcion3,#opcion4{
  background-color: white;
}

#opcion1:hover{
background-color: aqua;
}
#opcion2:hover{
  background-color: aqua;
}

#opcion3:hover{
  background-color: aqua;
}

#opcion4:hover{
  background-color: aqua;
}


</style>