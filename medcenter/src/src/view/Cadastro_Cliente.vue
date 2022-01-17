<template>
  <div id="cotainer">
    
    <Botao_Voltar/>

    <div class = "arranjo">
      <img width= "15%" height= "15%" src="../assets/clinica2.png">

      <Title class = "principal" nome = "Cadastro de Clientes"/>
    </div>

    <form autocomplete="on" id= "form2_cad_cliente" name = "form2_cad_cliente">

      <div id = "Rectangle4">

        <div class = "title">Informe seus dados</div>

        <div id = "elements_form">Cadastro de pessoa Física (CPF)</div>
        <input class = "Cad_Cliente_CPF" type="text" name = "cpf" placeholder = "CPF" v-model= "cpfField" v-mask="'###.###.###-##'" required>
        
        <div id = "elements_form">Nome completo</div>
        <input class = "Cad_Cliente_Nome" type="text" name = "nome" placeholder = "Nome" v-model= "nomeField" required>

        <h5 id = "end">Endereço</h5>

        <div id = "text_end_nomerua">Nome da rua</div>
        <div id = "text_end_num">Número</div>

        <input class = "Cad_Cliente_Rua" type="text" name = "rua" placeholder = "Rua" v-model= "ruaField" required>
        <input class = "Cad_Cliente_Numero" type="text" name = "numero" placeholder = "Número" v-model= "numeroField" required>

        <div id = "text_end_bairro">Bairro</div>
        <div id = "text_end_cidade">Cidade</div>

        <input class = "Cad_Cliente_Bairro" type="text" name = "bairro" placeholder = "Bairro" v-model= "bairroField" required>
        <input class = "Cad_Cliente_Cidade" type="text" name = "cidade" placeholder = "Cidade" v-model= "cidadeField" required>

        <div id = "text_end_est">Estado</div>
        <input class = "Cad_Cliente_Estado" type="text" name = "estado" placeholder = "Estado" v-model= "estadoField" required>

        <br>
        <br>
      </div>
      
      <div id = "Rectangle5">
        <div class = "title">Informe telefone e dados de login</div>

        <div id = "elements_form">Telefone para contato</div>
        <input class = "Cad_Cliente_Telefone" type="text" name = "telefone" placeholder = "Telefone" v-model= "telefoneField" v-mask="'(##) #####-####'" required>

        <div id = "elements_form">E-mail</div>
        <input class = "Cad_Cliente_Email" type="email" name = "email" placeholder = "E-mail" v-model= "emailField" required>

        <div id = "elements_form">Senha</div>
        <input class = "Cad_Cliente_Senha" type="password" name = "senha" placeholder = "Senha" v-model= "senhaField" required>
        
        <br>
        <br>

        <button type="button" name="sub_cadastro" id ="sub_cadastro" v-on:click="validar()">Cadastrar</button>

        <div v-if="this.awaiting == true" class="text-center">
          <br>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <br>
        </div>

        <br>
        <br>

      </div>
      </form>

      <Copyright/>

  </div>
</template>

<script>

import Botao_Voltar from '../components/Botao_Voltar.vue'
import Copyright from '../components/Copyright.vue'
import Title from '../components/Title.vue'
import axios from 'axios'

export default {

  name: 'Cadastro_Cliente',

  metaInfo: {
      
    title: "MedCenter - Cadastro de pacientes"
  },

  components: {
    
    Botao_Voltar,
    Copyright,
    Title
  },

  data(){
    return{
      cpfField: "",
      nomeField: "",
      ruaField: "",
      numeroField: "",
      bairroField: "",
      cidadeField: "",
      estadoField: "",
      telefoneField: "",
      emailField: "",
      senhaField: "",
      texto_cpf: false,
      texto_nome: false,
      texto_rua: false,
      texto_numero: false,
      texto_bairro: false,
      texto_cidade: false,
      texto_estado: false,
      texto_telefone: false,
      texto_email: false,
      texto_senha: false,
      texto_senha_extra: false,
      awaiting: false
    }
  },
  methods:{
    redirect: function(param){
      this.$router.push({name: param})
    },
    
    cadastrar: function () {

      const model_end = `${this.ruaField}, ${this.numeroField}. ${this.bairroField} - ${this.cidadeField}, ${this.estadoField}`;
      
      const paciente = {

          cpf: this.cpfField,
          nome: this.nomeField,
          endereco: model_end,
          telefone: this.telefoneField,
          email: this.emailField,
          senha: this.senhaField
      };

      //Envia a requisição para o servidor para determinar se o usuário está disponível.
      axios.get("http://localhost:35200/cadastro/paciente/busca", {

        params: {cpf: paciente.cpf}
        
      }).then((resposta) => {

        if(resposta.data.user == false){

          alert("Já existe um usuário com esse CPF cadastrado no sistema!");

        }else{

          //Se o usuário estiver disponível, faz a inserção dele no banco de dados.
          axios.post("http://localhost:35200/cadastro/paciente", paciente).then(() => {

            alert("Usuário criado com sucesso!");
          }).catch(() => {

            alert("Houve um erro com o servidor, entre em contato com o administrador do sistema!");
          });
        }

      }).catch(() => {
        
        alert("Houve um erro com o servidor, entre em contato com o administrador do sistema!");
      });

    },
    validar: function () {

      this.texto_cpf = this.texto_nome = this.texto_rua = this.texto_numero = false;
      this.texto_bairro = this.texto_cidade = this.texto_estado = false;
      this.texto_telefone = this.texto_email = this.texto_senha = this.texto_senha_extra = false;
      
      if(this.cpfField.length < 14){
        window.alert('Tamanho incorreto de CPF.')
        this.texto_cpf = true;
        return;
      }
      if(this.nomeField == "" || this.nomeField == " " || this.nomeField.length < 3){
        window.alert('NOME muito curto ou não preenchido.')
        this.texto_nome = true;
        return;
      }
      if(this.ruaField.length == ""){
        window.alert('Preencha o campo RUA.')
        this.texto_rua = true;
        return;
      }
      if(this.numeroField.length == ""){
        window.alert('Preencha o campo NÚMERO.')
        this.texto_numero = true;
        return;
      }
      if(this.bairroField.length == ""){
        window.alert('Preencha o campo BAIRRO.')
        this.texto_bairro = true;
        return;
      }
      if(this.cidadeField.length == ""){
        window.alert('Preencha o campo CIDADE.')
        this.texto_cidade = true;
        return;
      }
      if(this.estadoField.length == ""){
        window.alert('Preencha o campo ESTADO.')
        this.texto_estado = true;
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

      /*Depois de validar os dados, chamamos a função que irá cadastrar
      os dados.*/
      this.cadastrar();
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

  .principal{
    display: inline-block;
    position: absolute;
    margin-left: 27%;
    margin-top: 3%;
  }

  .arranjo{
    position: relative;
    width: 87%;
    display: inline-block;
  }

  .title{

    font-size: 30px;
    /* identical to box height */

    color: #FFFFFF;
    text-align: center;
  }

  .Cad_Cliente_CPF{

    width: 40%;
  }

  .Cad_Cliente_Nome{

    width: 90%;
  }

  .Cad_Cliente_Rua{

    width: 60%;
  }

  .Cad_Cliente_Numero{

    width: 27%;
    margin-left: 3%;
  }

  .Cad_Cliente_Bairro{
    width: 45%;
  }

  .Cad_Cliente_Cidade{
    margin-left: 3%;
    width: 42%;
  }

  .Cad_Cliente_Estado{
    
    width: 42%;
  }

  .Cad_Cliente_Telefone{

    width: 50%;
  }

  .Cad_Cliente_Email{

    width: 90%;
  }

  .Cad_Cliente_Senha{
    width: 90%;
  }

  /*Iníico da estilização dos textos do form */

  #text_end_nomerua{

    margin-top: 2%;
    margin-left: 5%;
    font-size: 18px;

    color: #000000;

    display: inline-block;
  }

  #text_end_num{

    margin-top: 2%;
    margin-left: 5%;
    font-size: 18px;

    color: #000000;
    margin-left: 42%;
    display: inline-block;
  }

  #text_end_bairro{

    margin-top: 4%;
    margin-left: 5%;
    font-size: 18px;

    color: #000000;

    display: inline-block;
  }

  #text_end_cidade{

    margin-top: 4%;
    font-size: 18px;

    color: #000000;
    margin-left: 38%;
    display: inline-block;
  }

  #text_end_est{

    margin-top: 4%;
    margin-left: 5%;
    font-size: 18px;

    color: #000000;
  }

  /*Fim da estilização dos textos do form */

  #elements_form{

    margin-top: 5%;
    margin-left: 5%;
    font-size: 18px;

    color: #000000;
  }

  #Rectangle4{
    
    position: relative;
    margin-top: 3%;
    width: 45%;
    left: 4%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    display: inline-block;
  }

  #Rectangle5{

    position: relative;
    margin-top: 9%;
    width: 45%;
    height: 73%;
    right: 4%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    float:right;
  }

  #nome_pag{
    position: absolute;
    width: 50%;
    height: 5%;
    left: 40%;
    top: 10%;

    font-size: 250%;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #33DF95;
  }

  h5{

    margin-top: 4%;

    font-weight: bold;
    line-height: 33px;
    align-items: center;
    text-align: center;
    margin-bottom: 0;

    color: #000000;
  }
  form input[type=text],
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

  #sub_cadastro{

    position: relative;
    width: 40%;
    height: 40px;
    left: 30%;

    color:white;

    background: #1E684D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
  }
  hr{
    border: 1px solid #FFFFFF;
  }

</style>