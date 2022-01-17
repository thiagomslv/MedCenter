<template>
  <div id = "container">

        <Title class = "title" nome = "Login de clínicas"/>
        <NavBar />
        
        <form autocomplete="on" name = "login_clinica">

            <div id = "Rectangle4">

                <div class = "info_login">MedCenter<br>Login da clínica</div>

                <div id = "elements_form">E-mail</div>
                <input class = "login_email" type="email" name = "email" placeholder = "E-mail" v-model= "emailField" required>

                <div id = "elements_form">Senha</div>
                <input class = "login_senha" type="password" name = "senha" placeholder = "Senha" v-model= "senhaField" required>
                
                <button type="button" name="fazerLogin" class ="botoesLogin" v-on:click="login()">Entrar</button>
                <button type="button" name="irCadastro" class ="botoesLogin" v-on:click="redirect('Cadastro_Clinica')">Não tenho Conta</button>
            </div>
        </form>

        <Copyright class = "loginClinica"/>
  </div>
</template>

<script>

import NavBar from '../components/NavBar1.vue'
import Title from '../components/Title.vue'
import Copyright from '../components/Copyright.vue'

export default {

    name: 'LoginPaciente',

    components: {

        NavBar,
        Title,
        Copyright
    },

    data(){
        return{
            emailField: "",
            senhaField: ""
        }
    },

    methods:{

        redirect: function(param){
            this.$router.push({name: param})
        }
    },

    metaInfo: {
      
        title: "MedCenter - Login de clínicas"
    },

}
</script>

<style scoped>

*{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
}

.title{

    font-size: 140%;
    line-height: 44px;
    display: inline-block;
    margin-top: 1%;
    width: 20%;
}

#Rectangle4{

    position: relative;
    margin-top: 3%;
    width: 50%;
    left: 25%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    display: inline-block;
}

.info_login{

    width: 100%;
    font-size: 30px;
    line-height: 37px;
    margin-top: 2%;
    /* identical to box height */

    text-align: center;
}

.login_email{

    width: 90%;
    border-radius: 7px;
}

.login_senha{

    width: 90%;
    border-radius: 7px;
}

#elements_form{

    margin-top: 5%;
    margin-left: 5.5%;
    font-size: 18px;
}

.botoesLogin{

    position: relative;
    width: 40%; 
    height: 40px;
    margin-top: 5%;
    margin-right: 2.5%;
    margin-left: 5.5%;
    margin-bottom: 5%;
    display: inline-block;

    color:white;
    background: #1E684D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
}

form input[type=email],
form input[type=password]{

    position: relative;
    margin-top: 1%;
    height: 40px;
    left: 5%;
    border: 1px solid #ccc;
    padding-left: 10px;
    outline: 0;
}

.loginClinica{
    bottom: 0;
}

</style>