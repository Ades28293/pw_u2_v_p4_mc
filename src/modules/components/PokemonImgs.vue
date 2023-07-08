<template>
    <div class="contenedor_imagen">


        <img class="oculta-pokemon" :src="imagenFuente" alt="no se puede mostrar imagen">

        <img v-if="muestraPokemon" :src="imagenFuente" alt="no se puede mostrar imagen">




    </div>
</template>
    
    
    
    
<script>

export default {

    props: {
        pokemonId: {

            type: Number,

            required: true

        },
        muestraPokemon: {
            type: Boolean,
            /* es obligatorio mandar por el required */
            required: true
        }

    },

    computed: {

        imagenFuente() {

            console.log("llamado computada")

            //return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonId+".svg";

            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;

        }

    }

}

</script>
    
    
    
    
<style scoped>
.oculta-pokemon {
    /* Para hacerle opaca a la imagen */
    filter: brightness(0);

}

img {
    /* Hace que la imagen flote  */
    position: absolute;

    height: 200px;

    right: 40%;




}




.contenedor_imagen {

    height: 200px;

}
</style>