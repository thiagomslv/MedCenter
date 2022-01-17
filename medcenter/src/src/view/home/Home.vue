<template>

  <div id ="container">
    
    <NavBar1/>

    <Title class = "title"/>

    <h2 class= "txt1">Precisou? O MedCenter te ajuda!</h2>

    <Display title="Atendimento clínico" image="clinica2.png" nome_rota = "LoginPaciente" :altura="20" class= "disp1" />
    <Display title="Consultas on-line" image="consu_online.png" nome_rota = "LoginPaciente" :altura="20"/>
    <Display title="Especialidades médicas" image="espec_medica.png" nome_rota = "LoginPaciente" :altura="20"/>

    <img class ="doctor" src="../assets/medico1.png">
    
    <div class = "arranjo">
      <h2 class= "txt2">A especialidade que você precisa está aqui!</h2>

      <div class = "botaodahome" v-on:click="redirect('LoginPaciente')">Encontre uma clínica hoje mesmo!</div>
    </div>

    <Copyright class="home"/>
  </div>
</template>

<script>

import Title from '../components/Title.vue'
import NavBar1 from '../components/NavBar1.vue'
import Copyright from '../components/Copyright.vue'
import Display from '../components/Display.vue'

export default {
  name: 'Home',
  components: {
    NavBar1,
    Copyright,
    Title,
    Display
  },
  methods:{
    redirect: function(param){
      this.$router.push({name: param})
    }
  }
}
</script>

<style scoped>

  *{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
  }

  .botao_encontre{
    margin-top: 20%;
  }

  .title{

    font-size: 190%;
    line-height: 44px;
    display: inline-block;
    margin-top: 3%;
    width: 20%;
  }

  .txt1{
    position: relative;
    margin-top: 9%;
    text-align: center;
    color: #33DF95;
  }

  .doctor{
    position: relative;
    margin-top: 8%;
    width: 35%;
    height: 30%;
  }

  .txt2{
    position: relative;
    padding-bottom: 3%;
    left: 8%;
    color: #33DF95;
  }

  .botaodahome{

    position: absolute;
    width: 60%;
    padding-top: 0.6%;
    height: 50%;
    left: 23%;

    cursor: pointer;
    
    text-align: center;

    background: #15EFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }

  .arranjo{
    position: relative;
    width: 60%;
    display: inline-block;
  }
  
</style>