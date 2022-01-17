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
    <NavBar4/>

    <h2 id= "nome_pag"><strong>MedCenter<br/>Busca de Clínicas</strong></h2>      
    
    <nav class = "Rectangle2">
        <div>
          <h4 id="filtro">Filtros</h4>
          <hr>
          
          <input type="checkbox" name = "especialidade" value = "1" id = "especialidade1"/>
            <label for="especialidade1"> Especialidade x </label>
            <br/>

        </div>
      </nav>

      <nav class = "Rectangle3">
        <div>
          <table>
              <tr>
                  <td><img width= "90%" height= "70%" src="../assets/fotos1.png"></td>
                  <td><button name="clinica1" id = "clinica1">Clínica 1</button></td> 
              </tr>
          </table>
          
        </div>
      </nav>

      <Copyright/>
  </div> 
</template>

<script>

import Copyright from '../components/Copyright.vue'
import NavBar4 from '../components/NavBar4.vue'

export default {
  name: 'Buscar_Clinica',
  components: {
    Copyright,
    NavBar4,
  },
  methods:{
    redirect: function(param){
      this.$router.push({name: param})
    }
  }
}
</script>

<style scoped>
  .Rectangle2{
    position: absolute;
    width: 15%;
    height: 50%;
    left: 3%;
    top: 35%;
    
    color: #000000;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px
  }
  .Rectangle3{
    position: absolute;
    width: 60%;
    height: 9%;
    left: 30%;
    top: 35%;
    padding-left: 10px;
    
    background: #1E684D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  #nome_pag{
    position: absolute;
    width: 25%;
    height: 5%;
    left: 1%;
    top: 5%;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 200%;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #33DF95;
  }
  #filtro{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 37px;
    text-align: center;

    color: #000000;
  }
  #clinica1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 37px;

    background: #1E684D;
    color: #ffffff;

  }
  label {
    position: absolute;
    top: 23%;
    left: 10%;
    display: block;
    padding-left: 15px;
    text-indent: -15px;
  }
  input {
    width: 13px;
    height: 13px;
    padding: 0;
    margin:0;
    vertical-align: bottom;
    position: relative;
    top: -1px;
    *overflow: hidden;
  }
  hr{
    border: 1px solid #FFFFFF;
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