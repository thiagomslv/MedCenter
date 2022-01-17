<template>

  <div id="container">

    <div class = "view_cadastro"  v-if="this.$route.name == 'Selec_Cadastro'">

      <NavBar1/>
      <Title class = "title" nome = "Cadastro de clínicas"/>

      <div id = "bloco">

        <div class = "Rectangle3"><h3 class = "info">Selecione o tipo de cadastro</h3></div>
        
        <div class = "botoes">
          
          <button v-on:click="redirect('Cadastro_Cliente')" name="botaosoucliente" class ="botaosoucliente">Sou Cliente</button>
          <button v-on:click="redirect('Cadastro_Clinica')" name="botaosouclinica" class ="botaosouclinica">Sou Clínica</button>
        </div>
      </div>
      
      <Copyright class="selec"/>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

import NavBar1 from '../components/NavBar1.vue'
import Copyright from '../components/Copyright.vue'
import Title from '../components/Title.vue'

export default {
  name: 'Selec_Cadastro',
  components: {
    NavBar1,
    Copyright,
    Title, 
  },
  methods:{
    redirect: function(param){
      this.$router.push({name: param})
    }
  }
}
</script>

<style scoped>

  .title{
    font-size: 150%;
    display: inline-block;
    margin-top: 1%;
    width: 20%;
  }

  .botoes{

    position: relative;
    width: 100%;
    margin-top: 3%;
    display: inline-block;
  }

  .selec{
    bottom: 0;
  }

  #bloco{
    
    position: absolute;
    width: 50%;
    height: 20%;
    left: 25%;
    top: 35%;
  }

  .Rectangle3{

    height: 50%;
    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    overflow:visible;
  }

  .info{

    position: absolute;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    width: 100%;
    height: 40%;
    top:10%;

    overflow: visible;

    color: #000000;
  }
  .botaosoucliente{

    width: 45%;
    height: 100%;

    background: #1E684D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 37px;
    text-align: center;

    color: #FFFFFF;
  }
  .botaosouclinica{

    width: 45%;
    height: 100%;
    margin-left: 10%;

    background:#1E684D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 37px;
    text-align: center;

    color: #FFFFFF;
  }

</style>