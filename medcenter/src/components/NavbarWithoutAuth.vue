<template>

    <div class = "main-nav">

        <div class="buttons">
            <button v-on:click="redirect('home')" name="botaoinicio" class = "buttonsNav">Início</button>
            <button v-on:click="redirect('login')" name="botaologin" class = "buttonsNav">Login</button>
            <button v-on:click="redirect('register')" name="botaoselcadastro" class = "buttonsNav">Cadastro</button>
        </div>
    </div>

</template>

<script>

export default {

    name: 'NavbarWithoutAuth',

    methods:{
        redirect: function(param){
            
            //Se já estamos na rota atual, não faz sentido redirecionar a lugar algum.
            if(this.$route.name == param) return;
            
            this.$router.push({name: param})
        }
    }
}

</script>

<style scoped>

.main-nav{

    /*Posicionamento horizontal e fixo.*/
    position: absolute;
    display: inline-block;

    /*Tamanho e dimensionamento. */
    width: 80%;
    height: 10%;
    left: 20%;
    top: 0;

    /*Estilização*/
    background: #DBF9EC;
    border-radius: 15px 0px 0px 15px;

}

.buttonsNav{

    margin-top: 2%;

    /*Dimensões */

    width: 18%;
    height: 40%;

    margin-right: 15%;

    overflow: auto;

    /**Estilização do botão. */
    background: #55F3A7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    border: none;
    border-radius: 7px;

    cursor: pointer;
}

.buttons{

    width: auto;
    height: 100%;
    margin-left: 12%;
}

</style>