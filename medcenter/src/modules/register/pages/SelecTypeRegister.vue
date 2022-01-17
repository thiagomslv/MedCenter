<template>

    <div id = "container">
        
        <!--- Container principal para a exibição da página de seleção --->
        <div class="container_select" v-if="this.$route.name == 'register'">
        
            <Title name = "Seleção do usuário" class = "selec_title"/>
            <Nav />
            
            <!--- Container para a exibição do retângulo informativo --->
            <div class = "abutmentbox">

                <div class = "box"><h3 class = "info">Selecione o tipo de usuário</h3></div>
            </div>

            <!--- Container para a exibição dos botões de seleção --->
            <div class="container_buttons">

                <button v-on:click="redirect('patient_register')" name ="patient" class = "buttons_register">Sou Paciente</button>
                <button v-on:click="redirect('clinical_register')" name ="clinical" class = "buttons_register">Sou Clínica</button>
            </div>
            
            <Copyright class = "copy_selec"/>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>

import Nav from '@/components/NavbarWithoutAuth'
import Title from '@/components/Title'
import Copyright from '@/components/Copyright'

export default {

    name: 'Home',

    metaInfo: {
      
        title: "MedCenter - Seleção do tipo de cadastro"
    },

    components: {
        
        Title,
        Nav,
        Copyright
    },

    methods: {

        redirect: function(param){

            this.$router.push({name: param})
        }
    }
}
</script>

<style>

.selec_title{

    margin-top: 1%;
    font-size: 130%;
}

.abutmentbox{

    width: 100%;
    display: flex;
}

.box{

    width: 100%;

    /**margin-top, margin-right (en-US), margin-bottom, e margin-left (en-US) */
    margin: 12% 22% 0 22%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;

    text-align: center;
}

.info{

    padding: 2% 0 2% 0;
}

.container_buttons{

    width: 100%;

    text-align: center;
}

.buttons_register{

    width: 20%;
    height: 35px;

    margin: 2% 4% 0 4%;

    color: white;
    background: #1E684D;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;

    border: none;
    cursor: pointer;
}

.copy_selec{

    /**Como não há elementos suficientes para preencher a página, é necessário dar um
    bottom: 0; para que a barra de copyright fique no canto inferior da tela, caso contrário,
    ela poderá ficar no meio da tela. */
    bottom: 0;
}

</style>