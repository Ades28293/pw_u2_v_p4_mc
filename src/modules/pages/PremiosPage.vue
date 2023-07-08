<template>
  <h1>Premios</h1>

<div class="premio">
  
  <h3>Premio 1</h3>
  <p>Carro último modelo</p>
  <img src="https://phantom-marca.unidadeditorial.es/687e5b4b599134136169ae94bd596232/resize/660/f/webp/assets/multimedia/imagenes/2022/05/05/16517455111875.jpg" alt="Premio 1">
</div>

<div class="premio">
  <h3>Premio 2</h3>
  <p>Premio de $10.000,002 de dólares</p>
  <img src="https://previews.123rf.com/images/maxxyustas/maxxyustas1501/maxxyustas150100004/35275617-packs-de-d%C3%B3lares-de-fondo-un-mont%C3%B3n-de-dinero-en-efectivo-3d.jpg" alt="Premio 2">
</div>

<div class="premio">
  <h3>Premio 3</h3>
  <p>Casa de lujo totalmente equipada</p>
  <img src="https://static5.depositphotos.com/1040082/460/i/950/depositphotos_4601928-stock-photo-luxury-tropical-villa-garden-swimming.jpg" alt="Premio 3">
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
      font-family: Arial, sans-serif;
      background-color: #f1f1f1;
      margin: 0;
      padding: 20px;
    }

    h1 {
      text-align: center;
    }

    .premio {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom:70px;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .premio img {
      
      width: 300px;
      height: 150px;
      margin-bottom: 10px;

      margin-left: 20px;
    }

    .premio h3 {
      margin: 0;
      font-size: 20px;
      text-align: center;
    }

    .premio p {
      margin: 0;
      text-align: center;
      margin-bottom: 90px;
    }
</style>