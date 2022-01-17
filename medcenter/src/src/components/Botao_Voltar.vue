<template>
    <div>
        <button v-on:click="redirect('Selec_Cadastro')" name="botaovoltar" id = "botaovoltar">Voltar</button>
    </div>
</template>

<script>
export default {
  name: "Botao_Voltar",

  methods:{
    redirect: function(param){
      this.$router.push({name: param})
    }
  }
};
</script>

<style scoped>
  #botaovoltar{
    position: absolute;
    width: 12%;
    height: 10%;
    left: 88%;
    top: 0%;
    
    background: #55F3A7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }

</style>