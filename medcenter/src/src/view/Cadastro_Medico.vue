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
    <NavBar2/>
    
    <h2 id= "nome_pag"><strong>MedCenter<br/>Cadastro de Médico</strong></h2>
    
    <nav class = "Rectangle4">
      <form name = "form1_cad_medico">
        <h3><strong>Informe os dados do médico</strong></h3>
        <hr>
        <h5>Nome completo</h5>
        <input id = "Cad_Medico_Nome" type="text" name = "nome" placeholder = "Nome" v-model= "nomeField" required> <br><br>

        <h5>Telefone</h5>
        <input id = "Cad_Medico_Telefone" type="text" name = "telefone" placeholder = "Telefone" v-model= "telefoneField" v-mask="'(##) #####-####'" required> <br><br>
                        
        <h5>Número do Conselho Regional de Medicina (CRM)</h5>
        <input id = "Cad_Medico_CRM" type="text" name = "crm" placeholder = "CRM" v-model= "crmField" required> <br><br>
        
        <h5>Especialidade</h5>
        <input id = "Cad_Medico_Especialidade" type="text" name = "especialidade" placeholder = "Especialidade" v-model= "especialidadeField" required> <br><br>

        <br/>
        <br/><h5 id = "end"><strong>Horário de Atendimento</strong></h5>
        
        <br/><h5>Início</h5>
        <input id = "Cad_Medico_Inicio" type="text" name = "inicio" placeholder = "Inicio" v-model= "inicioField" required> <br><br>
        
        <h5>Fim</h5>
        <input id = "Cad_Medico_Fim" type="text" name = "fim" placeholder = "Fim" v-model= "fimField" required> <br><br>      
      </form>
    </nav>

    <nav class = "Rectangle5">
      <form name = "form2_cad_medico">
        <h3><strong>Informações de login</strong></h3>
        <hr>
        <br/>
        <h5>E-mail</h5>
        <input id = "Cad_Medico_Email" type="email" name = "email" placeholder = "E-mail" v-model= "emailField" required> <br><br>
        
        <h5>Senha</h5>
        <input id = "Cad_Medico_Senha" type="password" name = "senha" placeholder = "Senha" v-model= "senhaField" required> <br><br>
        
        <br/>
        <input type = "submit" value = "Cadastar" v-on:click="validar()">
      </form>
    </nav>

    <Copyright/>
  </div>
</template>

<script>

import Copyright from '../components/Copyright.vue'
import NavBar2 from '../components/NavBar2.vue'

export default {
  name: 'Cadastro_Medico',
  components: {
    Copyright,
    NavBar2,
  },
  data(){
    return{
      nomeField: "",
      crmField: "",
      especialidadeField: "",
      inicioField: "",
      fimField: "",
      telefoneField: "",
      emailField: "",
      senhaField: "",
      texto_cnpj: false,
      texto_nome: false,
      texto_crm: false,
      texto_especialidade: false,
      texto_inicio: false,
      texto_fim: false,
      texto_telefone: false,
      texto_email: false,
      texto_senha: false,
      texto_senha_extra: false
    }
  },
  methods:{
    redirect: function(param){
      this.$router.push({name: param})
    },
    validar: function () {

      this.texto_nome = this.texto_crm = this.texto_especialidade = false;
      this.texto_inicio = this.texto_fim = this.texto_senha_extra = false;
      this.texto_telefone = this.texto_email = this.texto_senha = false;
      
      if(this.nomeField == "" || this.nomeField == " " || this.nomeField.length < 3){
        window.alert('NOME muito curto ou não preenchido.')
        this.texto_nome = true;
        return;
      }
      if(this.crmField.length == ""){
        window.alert('Preencha o campo CRM.')
        this.texto_crm = true;
        return;
      }
      if(this.especialidadeField.length == ""){
        window.alert('Preencha o campo ESPECIALIDADE.')
        this.texto_especialidade = true;
        return;
      }
      if(this.inicioField.length == "" || this.inicioField.value < 0 || this.inicioField.value > 23){
        window.alert('Campo INÍCIO não preenchido ou com valor invalido.')
        this.texto_inicio = true;
        return;
      }
      if(this.fimField.length == "" || this.fimField.value < 0 || this.fimField.value > 23){
        window.alert('Campo FIM não preenchido ou com valor invalido.')
        this.texto_fim = true;
        return;
      }
      if(this.telefoneField.length < 15 || this.telefoneField.length == ""){
        window.alert('Telefone muito curto ou não preenchido.')
        this.texto_telefone = true;
        return;
      }
      if(this.emailField == "" || this.emailField == " "){
        window.alert('Preencha o campo E-MAIL.')
        this.texto_email = true;
        return;
      }
      if(this.senhaField.length < 6 ){
        window.alert('SENHA muito curta.')
        this.texto_senha = true;
        return;
      }else if(this.senhaField.length > 20 ){
        window.alert('SENHA só pode ter até 20 caracteres.')
        this.texto_senha_extra = true;
        return;
      }
    }
  }
}
</script>

<style scoped>
  .Rectangle4{
    position: absolute;
    width: 30%;
    height: 117%;
    left: 15%;
    top: 35%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px
  }
  .Rectangle5{
    position: absolute;
    width: 30%;
    height: 55%;
    left: 60%;
    top: 35%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px
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
    font-size: 180%;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #33DF95;
  }
  h3{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 200%;
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

    color: #000000;
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