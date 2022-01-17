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
      aria-label="Alterna navegação"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="textoNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link"><router-link to="/">Home</router-link><span class="sr-only">(Página atual)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="cadastro">Cadastro</router-link></a>
        </li>
      </ul>
      <span class="navbar-text"> A sua clínica está aqui! </span>
    </div>
  </nav>

  
</template>

<script>
export default {
  name: "Home_NavBar",
};
</script>

<style scoped>
</style>