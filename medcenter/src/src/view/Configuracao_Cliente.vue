<template>
  <div id="app">
    <!-- 
    Insere na pagina:
    o botão de voltar,
    a barra de copyright,
    icone de clinica generico,
    nome MedCenter no centro,
    e os box de dados
    -->
    <NavBar3/>

    <h2 id= "nome_pag"><strong>MedCenter<br/>Configuração do Cliente</strong></h2>        
    
    <nav class = "Rectangle6">
      <div>
        <table width ="100%" border = "0px">
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
          </tr>
          <br/><br/>
          <tr>
            <th>UserX</th>
            <th>user@gmail.com</th>
            <th>(83)4002-8922</th>
          </tr>          
        </table>   
      </div>
    </nav>

    <nav class = "Rectangle7">
      <div>  
        <h5> Alteração de e-mail</h5> 
        <br/>
        <form name = "form1_config_cliente" action = "enviar.php" method = "POST">
          <h5 id = "texto1">Novo e-mail</h5>
          <input id = "Config_Paciente_Email" type="email" name = "email" placeholder = "E-mail" required> <br><br>
          <br/><br/>
          <input type = "submit" value = "Alterar">
                  
        </form>
      </div>
    </nav>

    <nav class = "Rectangle8">
      <div>  
        <h5> Alteração de telefone</h5> 
        <br/>
        <form name = "form2_config_cliente" action = "enviar.php" method = "POST">
          <h5 id = "texto1">Novo telefone</h5>
          <input id = "Config_Cliente_Telefone" type="text" name = "telefone" placeholder = "Telefone" required> <br><br>
          <br/><br/>
          <input type = "submit" value = "Alterar">
                  
        </form>
      </div>
    </nav>  
    
    <nav class = "Rectangle9">
      <div>   
        <h5> Alteração de senha</h5> 
        <br/>    

        <h5 id = "texto1">Senha atual</h5>
        <form name = "form3_config_cliente" action = "enviar.php" method = "POST">
          <input id = "Config_Cliente_Senha" type="password" name = "senhaatual" placeholder = "Senha Atual" required> <br><br> 

          <br/>
          <h5 id = "texto1">Nova senha</h5>
          <input id = "Config_Cliente_Senha" type="password" name = "novasenha" placeholder = "Nova senha" required> <br><br>

          <br/>
          <input type = "submit" value = "Alterar">
          
        </form>
      </div> 
    </nav>
    <Copyright/>
  </div> 
</template>

<script>

import Copyright from '../components/Copyright.vue'
import NavBar3 from '../components/NavBar3.vue'

export default {
  name: 'Configuracao_Cliente',
  components: {
    Copyright,
    NavBar3,
    },
  methods:{
    redirect: function(param){
      this.$router.push({name: param})
    }
  }
}
</script>

<style scoped>
  .Rectangle6{
    position: absolute;
    width: 70%;
    height: 20%;
    left: 15%;
    top: 27%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px
  }
  .Rectangle7{
    position: absolute;
    width: 30%;
    height: 40%;
    left: 10%;
    top: 60%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px
  }
  .Rectangle8{
    position: absolute;
    width: 30%;
    height: 40%;
    left: 10%;
    top: 110%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px
  }
  .Rectangle9{
    position: absolute;
    width: 27%;
    height: 55%;
    left: 60%;
    top: 60%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px
  }
  #nome_pag{
    position: absolute;
    width: 25%;
    height: 5%;
    left: 0.5%;
    top: 5%;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 150%;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #33DF95;
  }
   #texto1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 120%;
    line-height: 33px;
    align-items: center;
    text-align: center;

    color: #000000;    
  }
  #buscar{
    position: absolute;
    width: 45%;
    height: 20%;
    left: 53%;
    top: 70%;

    background: rgba(1, 45, 32, 0.16);
    border-radius: 7px;
  }
  #titulo1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 200%;
    line-height: 33px;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  th{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 150%;
    line-height: 33px;
    align-items: center;
    text-align: center;
   
    color: #ffffff;
  }
  h5{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 150%;
    line-height: 33px;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  form input[type=text],
  form input[type=email],
  form input[type=password]{
    position: absolute;
    width: 90%;
    height: 45px;
    left: 5%;
    border: 1px solid #ccc;
    padding-left: 10px;
  }
  form input[type=submit]{
    position: absolute;
    width: 50%;
    height: 40px;
    left: 25%;
    
    background: #1E684D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }

</style>
<!--
<template>
  <div class="principal">
    <VoltarHome />

    <div class = "alerta">

      <h5 v-show="texto_nome">Preencha o nome corretamente!</h5>
      <h5 v-show="texto_cpf">Preencha os 11 dígitos do seu CPF!</h5>
      <h5 v-show="texto_telefone">Digite um número de telefone válido!</h5>
      <h5 v-show="texto_email">Preencha o campo e-mail!</h5>
      <h5 v-show="texto_senha">Sua senha deve ter pelo menos 6 caracteres!</h5>
      <h5 v-show="texto_senha_extra">Sua senha deve ter entre 6 e 20 caracteres!</h5>
    </div>

    Div de cadastro que contém o formulário montado com o boostrap. A div serve apenas
    para dar o espaçamento do topo e .
    
    <div class="d-flex justify-content-center formcadastro">
      <form>

        <div class="form-row">

          <div class="form-group col-md-6">
            <label for="inputEmail4">Seu nome completo</label>
            <input v-model="nomeUsr" type="text" class="form-control" placeholder="Nome completo"/>
          </div>

          <div class="form-group col">
            <label for="inputEmail4">Cadastro de Pessoa Física</label>
            <input v-model="cpfUsr" type="text" v-mask="'###.###.###-##'" class="form-control" placeholder="CPF" />
          </div>
        </div>

        <div class="form-row">
        
          <div class="form-group col-md-6">
            <label for="inputEmail4">Telefone para contato</label>
            <input v-model="telUsr" type="text" v-mask="'(##) #####-####'" class="form-control" placeholder="Telefone" />
          </div>

        </div>

        <div class="form-row">
        
          <div class="form-group col">
            <label for="inputEmail4">E-mail</label>
            <input v-model="emailUsr" type="email" class="form-control" placeholder="example@exemplo.com"/>
          </div>

        </div>

        <div class="form-row">
        
          <div class="form-group col">
            <label for="inputEmail4">Senha</label>
            <input v-model="senhaUsr" type="password" class="form-control" placeholder="" />
          </div>

        </div>

        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    Estou ciente e autorizo que, ao fazer o cadastro, meus dados 
                    <br>
                    pessoais sejam processados pela plataforma.
                </label>
            </div>
        </div>

        <button v-on:click="cadastrar()" type="button" class="btn btn-primary">Cadastrar</button>

      </form>

    </div>

  </div>
</template>
-->
<!--
<script>
import VoltarHome from "../components/VoltarHome.vue";

import axios from 'axios'

export default {

  name: "CadastroCliente",

  components: {
    VoltarHome,
  },

  data(){
    return{
      nomeUsr: "",
      cpfUsr: "",
      telUsr: "",
      emailUsr: "",
      senhaUsr: "",
      texto_nome: false,
      texto_cpf: false,
      texto_telefone: false,
      texto_email: false,
      texto_senha: false,
      texto_senha_extra: false
    }
  },

  methods: {

    cadastrar: function () {

      this.texto_nome = this.texto_cpf = this.texto_telefone = false;
      this.texto_email = this.texto_senha = false;

      if(this.nomeUsr == "" || this.nomeUsr == " " || this.nomeUsr.length < 3){
        this.texto_nome = true;
        return;
      }

      if(this.cpfUsr.length < 14){
        this.texto_cpf = true;
        return;
      }

      if(this.telUsr.length < 15){

        this.texto_telefone = true;
        return;
      }

      if(this.emailUsr == "" || this.emailUsr == " "){
        this.texto_email = true;
        return;
      }

      if(this.senhaUsr.length < 6 ){
        this.texto_senha = true;
        return;

      }else if(this.senhaUsr.length > 20 ){

        this.texto_senha_extra = true;
        return;
      }

      axios.post('http://localhost:35200/cadastrar/clientes', {nome: this.nomeUsr, cpf: this.cpfUsr, telefone: this.telUsr, email: this.emailUsr, senha: this.senhaUsr}).then((resposta) => {
        console.log(resposta.data);
      })
      
      /*axios.get("http://localhost:35200/cadastrar/clientes").then( (resposta) => {
          
        console.log(resposta.data);
      })*/

    }

  },
};
</script>

<style scoped>

.alerta{
  max-width: 690px;
  border-radius: 10px;
  overflow: hidden;
  word-break: break-word;
  color:white;
  text-align: center;
  margin-top: 3%;
  margin-left: 20%;
  margin-right: 20%;
  background-color: rgba(192, 52, 52, 0.658);
}

.formcadastro{

    margin-top: 5%;
}
</style>
-->