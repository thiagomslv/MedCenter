<template>

    <div id = "container">

      <Title name = "Entrar no sistema" class = "title"/>
      <Nav />

      <!--- Container para a exibição do retângulo informativo --->
        <div class = "abutmentbox">

          <div class = "box">

          <h3 class = "info">MedCenter - Entrar no sistema</h3>
          <hr class = "line">

          <form autocomplete="on" class = "login" name = "login">

            <div class = "elements_form">Selecione o tipo de usuário</div>

            <!--- Container para seleção do tipo de usuário --->
            <div class="usertype">

              <div class="boxcheck">

                <input type="checkbox" class = "scales" name="scales">
                <label for="scales">Paciente</label>
              </div>

              <div class="boxcheck">

                <input type="checkbox" class = "scales" name="scales">
                <label for="scales">Médico</label>
              </div>

              <div class="boxcheck">

                <input type="checkbox" class = "scales" name="scales">
                <label for="scales">Clínica</label>
              </div>
            </div>

            <!--- Campos para inserção do e-mail e senha --->
            <div class = "elements_form">E-mail</div>
            <input class = "login_email" type="email" name = "email" placeholder = "E-mail" v-model= "emailField" required>

            <div class = "elements_form">Senha</div>
            <input class = "login_password" type="password" name = "senha" placeholder = "Senha" v-model= "senhaField" required>

            <!--- Botão de submissão para login --->

            <div class="buttoncontent">

              <button type = "button" name = "register_button" class = "register_button">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>

      <Copyright class = "copy_log"/>
    </div>
</template>

<script>

import Nav from '@/components/NavbarWithoutAuth'
import Title from '@/components/Title'
import Copyright from '@/components/Copyright'

export default {

    name: 'Login',

    metaInfo: {
      
        title: "MedCenter - Entrar no sistema"
    },

    components: {
        
        Title,
        Nav,
        Copyright
    },
}
</script>

<style scoped>

.title{

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
    margin: 0% 27% 0 27%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
}

.info{

    text-align: center;
    margin: 1% 0 1% 0;
}

.line{

    margin-top: 0;
    margin-bottom: 3%;
    border: 1px solid #FFFFFF;
}

.elements_form{

    width: 100%;
    padding-left: 2%;
}

.usertype{

    display: flex;
    width: 98%;

    margin-top: 1%;
}

.boxcheck{

    width: 40%;

    text-align: center;
    margin: 0 0 2% 2%;

    border-radius: 7px;
    background-color: white;
}

form input[type=email], form input[type=password] {

    height: 30px;

    margin: 1% 0 2% 2%;

    border: 1px solid #ccc;
    outline: 0;
}

form input[type = checkbox]{

    cursor: pointer;
}

.login_email, .login_password{

    width: 95%;
}

.copy_log{

  bottom: 0;
}

</style>