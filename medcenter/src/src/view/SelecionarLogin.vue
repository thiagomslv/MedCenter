<template>
    <div id = "container">

        <div class = "view_login"  v-if="this.$route.name == 'Login'">

            <Title class = "title" nome="Seleção do usuário"/>
            <NavBar/>

            <div id = "bloco">

                <div class = "Rectangle3"><h3 class = "info">Informe o tipo de usuário</h3></div>
                
                <div class = "botoes">
          
                    <button v-on:click="redirect('LoginPaciente')" name="botaosoucliente" class ="botoesLogin">Sou Cliente</button>
                    <button v-on:click="redirect('LoginClinica')" name="botaosouclinica" class ="botoesLogin">Sou Clínica</button>
                    <button v-on:click="redirect('Home')" name="botaosouclinica" class ="botoesLogin">Sou Médico</button>
                </div>
            </div>

            <Copyright class="copylogin"/>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>

import NavBar from '../components/NavBar1.vue'
import Title from '../components/Title.vue'
import Copyright from '../components/Copyright.vue'

export default {

    name: 'SelecionarLogin',

    metaInfo: {
      
        title: "MedCenter - Seleção do tipo de login"
    },

    components: {

        NavBar,
        Title,
        Copyright
    },

    methods:{

        redirect: function(param){
            this.$router.push({name: param})
        }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

*{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
}

.title{

    font-size: 150%;
    line-height: 44px;
    display: inline-block;
    margin-top: 1%;
    width: 20%;
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
    text-align: center;
    width: 100%;
    height: 40%;
    top:10%;

    overflow: visible;
    color: #000000;
}

.botoesLogin{

    width: 28%;
    height: 45px;
    margin-top: 6%;
    margin-left: 4%;
    background: #1E684D;
    color:white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
}

#bloco{
    
    position: absolute;
    width: 60%; 
    height: 20%;
    left: 22%;
    top: 38%;
}

.copylogin{

    bottom: 0;
}

</style>