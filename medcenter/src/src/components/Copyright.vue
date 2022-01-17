<template>

  <footer class = "Copyright">
    <h2 class = "textocopy">Copyright MedCenter &copy; 2021 - Todos os direitos reservados</h2>
  </footer>

</template>

<script>

  export default {
    name: "Copyright",
  };

</script>

<style scoped>

  .Copyright{

    position: absolute;
    width: 100%;
    height: 13%;
    margin-top: 3%;
    flex: 1;
    
    background: #4FCFA1;
  }

  .textocopy{
    position: relative;
    width: 100%;
    height: 30%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    overflow: auto;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    color: #000000;
  }

</style>