<template>
  <nav class = "Rectangle1">
    <div>
      <button v-on:click="redirect('Home')" name="botaoinicio" id = "botaoinicio">Início</button>
      <button v-on:click="redirect('Login')" name="botaologin" id = "botaologin">Login</button>
      <button v-on:click="redirect('Selec_Cadastro')" name="botaoselcadastro" id = "botaoselcadastro">Cadastro</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar1",

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
    border-radius: 15px 0px 0px 15px ;
    background: #DBF9EC;
    overflow: auto;
  }
  #botaoinicio{
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
  #botaologin{
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
  #botaoselcadastro{
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