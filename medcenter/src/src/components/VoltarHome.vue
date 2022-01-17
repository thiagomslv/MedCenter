<template>
  <ul class="nav justify-content-end nav nav-pills">
    <li class="nav-item">
      <a v-on:click="redirect('home')" cursor="point" class="nav-link active btn-danger">Voltar à página principal</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "VoltarHome",

  methods: {
    redirect: function (param) {
      this.$router.push({ name: param });
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>