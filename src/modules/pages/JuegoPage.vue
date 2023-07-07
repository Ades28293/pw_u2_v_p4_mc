<template>
  <div class="centered">
    <h1>El juego de adivina el Pokémon</h1>

    <h2>"Pokémon Aventura Estelar"</h2>
    <p>Es un emocionante juego de adivinanza.</p>

    <h3>Instrucciones:</h3>
    <br />
    <p>
      El objetivo del juego es adivinar el Pokémon, la única pista es la silueta
      del Pokémon.<br />
      Tendrás que escoger una opción para adivinar el Pokémon, si aciertas se
      mostrará la imagen del Pokémon,
      tienes 3 intentos para lograrlo.
    </p>

    <div class="rules">
      <h4>Reglas:</h4>
      <ul>
        <li>Si aciertas en el primer intento obtendrás 5 puntos</li>
        <li>Si aciertas en el segundo intento obtendrás 2 puntos</li>
        <li>Si aciertas en el tercer intento obtendrás 1 punto</li>
        <li>Si no aciertas en los tres intentos, pierdes</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: yellow;
  border: 5px solid;
  margin: 15px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.rules {
  margin-top: 20px;

  font-size: 20px;
}

li {
  width: 540px;
  height: 30px;
}
</style>
