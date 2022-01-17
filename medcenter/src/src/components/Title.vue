<template>

  <h2 class= "nome_pag"><strong>MedCenter<br/>{{this.nome}}</strong></h2>

</template>

<script>
export default {
    name: 'Title',
    props: {
        nome: String
    }
}
</script>

<style scoped>

  .nome_pag{

    position: relative;
    overflow: auto;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    display: flex;

    text-align: center;

    color: #33DF95;
  }

</style>