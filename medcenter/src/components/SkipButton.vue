<template>

    <button v-on:click="redirect('register')" name = "skipbutton" class = "skipbutton">Voltar</button>

</template>

<script>

export default {

    name: 'SkipButton',

    methods:{
        redirect: function(param){
            this.$router.push({name: param})
        }
    }
}

</script>

<style scoped>

.skipbutton{

    /**Dimensionamento e posição */
    width: 12%;
    height: 45px;

    top: 0;
    right: 0;

    position: fixed;
    
    /**Estilização do botão */
    background: #55F3A7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border-radius: 7px 0px 0px 7px;

    cursor: pointer;
    border: 0;
}

</style>