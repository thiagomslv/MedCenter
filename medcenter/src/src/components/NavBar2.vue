<template>
  <nav class = "Rectangle1">
    <div v-if="this.$route.name == 'Painel_Cliente'">
      <button v-on:click="redirect('Painel_Cliente')" name="botaoiniciocliente" id = "botaoiniciocliente">Início</button>
      <button v-on:click="redirect('Configuracao_Cliente')" name="botaoconfigcliente" id = "botaoconfigcliente">Configurações</button>
    </div>

    <div v-if="this.$route.name == 'Painel_Clinica'">
      <button v-on:click="redirect('Painel_Clinica')" name="botaoinicioclinica" id = "botaoinicioclinica">Início</button>
      <button v-on:click="redirect('Configuracao_Clinica')" name="botaoconfigclinica" id = "botaoconfigclinica">Configurações</button>
    </div>

    <div v-if="this.$route.name == 'Painel_Medico'">
      <button v-on:click="redirect('Painel_Medico')" name="botaoiniciomedico" id = "botaoiniciomedico">Início</button>
      <button v-on:click="redirect('Configuracao_Medico')" name="botaoconfigmedico" id = "botaoconfigmedico">Configurações</button>
    </div>

    <button v-on:click="redirect('Home')" name="botaologout" id = "botaologout">Logout</button>
  </nav>
</template>

<script>
export default {
  name: "NavBar2",

  methods:{
    redirect: function(param){
      this.$router.push({name: param})
    }
  }
};
</script>

<style scoped>
  .Rectangle1{
    position: absolute;
    width: 80%;
    height: 15%;
    left: 20%;
    top: 0%;

    background: #DBF9EC;
  }
  #botaoiniciocliente{
    position: absolute;
    width: 17%;
    height: 37%;
    left: 10%;
    top: 50%;
    transform: translate(0%,-50%);

    background: #55F3A7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  #botaoconfigcliente{
    position: absolute;
    width: 17%;
    height: 37%;
    left: 40%;
    top: 50%;
    transform: translate(0%,-50%);

    background: #55F3A7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  #botaoinicioclinica{
    position: absolute;
    width: 17%;
    height: 37%;
    left: 10%;
    top: 50%;
    transform: translate(0%,-50%);

    background: #55F3A7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  #botaoconfigclinica{
    position: absolute;
    width: 17%;
    height: 37%;
    left: 40%;
    top: 50%;
    transform: translate(0%,-50%);

    background: #55F3A7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  #botaoiniciomedico{
    position: absolute;
    width: 17%;
    height: 37%;
    left: 10%;
    top: 50%;
    transform: translate(0%,-50%);

    background: #55F3A7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  #botaoconfigmedico{
    position: absolute;
    width: 17%;
    height: 37%;
    left: 40%;
    top: 50%;
    transform: translate(0%,-50%);

    background: #55F3A7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  #botaologout{
    position: absolute;
    width: 17%;
    height: 37%;
    left: 70%;
    top: 50%;
    transform: translate(0%,-50%);
    
    background: #55F3A7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }

</style>

<!--
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
    <a class="navbar-brand" href="#">MedCenter</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#textoNavbar"
      aria-controls="textoNavbar"
      aria-expanded="false"
      aria-label="Alterna navegação">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="textoNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link"><router-link to="/">Início</router-link><span class="sr-only">(Página atual)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="cadastro">Cadastro</router-link></a>
        </li>
      </ul>
    </div>
  </nav>
</template>
-->