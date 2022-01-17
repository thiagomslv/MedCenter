<template>
  <div id="container">
    <Botao_Voltar/>

    <div class = "arranjo">
      <img width= "15%" height= "15%" src="../assets/clinica2.png">

      <Title class = "principal" nome = "Cadastro de Clínicas"/>
    </div>

    <form autocomplete="on" name = "form1_cad_clinica">

      <div id = "Rectangle4">
        <div class = "title">Informe seus dados</div>

        <div id = "elements_form">Cadastro Nacional de Pessoa Jurídica (CNPJ)</div>
        <input class = "Cad_Clinica_CNPJ" type="text" name = "cnpj" placeholder = "CNPJ" v-model= "cnpjField" v-mask="'##.###.###/000#-##'" required>

        <div id = "elements_form">Nome da clínica</div>
        <input class = "Cad_Clinica_Nome" type="text" name = "nome" placeholder = "Nome" v-model= "nomeField" required>

        <h5 id = "end">Endereço</h5>

        <div id = "text_end_nomerua">Nome da rua</div>
        <div id = "text_end_num">Número</div>

        <input class = "Cad_Clinica_Rua" type="text" name = "rua" placeholder = "Rua" v-model= "ruaField" required>
        <input class = "Cad_Clinica_Numero" type="text" name = "numero" placeholder = "Número" v-model= "numeroField" required>

        <div id = "text_end_bairro">Bairro</div>
        <div id = "text_end_cidade">Cidade</div>

        <input class = "Cad_Clinica_Bairro" type="text" name = "bairro" placeholder = "Bairro" v-model= "bairroField" required>
        <input class = "Cad_Clinica_Cidade" type="text" name = "cidade" placeholder = "Cidade" v-model= "cidadeField" required>
        
        <div id = "text_end_est">Estado</div>
        <input class = "Cad_Clinica_Estado" type="text" name = "estado" placeholder = "Estado" v-model= "estadoField" required>

        <br>
        <br>
      </div>

      <div id = "Rectangle5">

        <div id = "elements_form">Telefone para contato</div>
        <input class = "Cad_Clinica_Telefone" type="text" name = "telefone" placeholder = "Telefone" v-model= "telefoneField" v-mask="'(##) #####-####'" required>

        <div id = "elements_form">Plataforma de videoconferência utilizada</div>
        <select class = "Cad_Clinica_Plat">
          <option>Selecione</option>
          <option>Google Meet</option>
          <option>Hangout</option>
          <option>Zoom</option>
        </select>

        <div id = "elements_form">Logomarca ou foto da clínica</div>
        <input class = "Cad_Clinica_Logomarca" type="file" name = "logomarca" placeholder = "Selecionar arquivo" required>

        <div id = "elements_form">E-mail</div>
        <input class = "Cad_Clinica_Email" type="email" name = "email" placeholder = "E-mail" v-model= "emailField" required>

        <div id = "elements_form">Senha</div>
        <input class = "Cad_Clinica_Senha" type="password" name = "senha" placeholder = "Senha" v-model= "senhaField" required>

        <br>
        <br>

        <button type="button" name="sub_cadastro" id ="sub_cadastro" v-on:click="validar()">Cadastrar</button>

        <br>
        <br>
      </div>

    </form>

    <Copyright class="copyclin"/>
  </div>
</template>

<script>

import Copyright from '../components/Copyright.vue'
import Botao_Voltar from '../components/Botao_Voltar.vue'
import Title from '../components/Title.vue'
import axios from 'axios'

export default {
  name: 'Cadastro_Clinica',

  metaInfo: {
      
    title: "MedCenter - Cadastro de clínicas"
  },

  components: {
    Copyright,
    Botao_Voltar,
    Title
  },
  data(){
    return{
      cnpjField: "",
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
      texto_senha_extra: false
    }
  },
  methods:{
    redirect: function(param){
      this.$router.push({name: param})
    },

    cadastrar: function(){

      const model_end = `${this.ruaField}, ${this.numeroField}. ${this.bairroField} - ${this.cidadeField}, ${this.estadoField}`;
      
      const clinica = {

        cnpj: this.cnpjField,
        nome: this.nomeField,
        endereco: model_end,
        telefone: this.telefoneField,
        logo: "NULL",
        plataforma: "NULL",
        email: this.emailField,
        senha: this.senhaField 

      }

      //Envia a requisição para o servidor para determinar se a clínica está disponível.
      axios.get("http://localhost:35200/cadastro/clinica/busca", {

        params: {cnpj: clinica.cnpj}
        
      }).then((resposta) => {

        if(resposta.data.user == false){

          alert("Já existe uma clínica com esse CNPJ cadastrado no sistema!");

        }else{

          //Se a clínica estiver disponível, faz a inserção dele no banco de dados.
          axios.post("http://localhost:35200/cadastro/clinica", clinica).then(() => {

            alert("Clínica criada com sucesso!");

          }).catch(() => {

            alert("Houve um erro com o servidor, entre em contato com o administrador do sistema!");
          });
        }

      }).catch(() => {

        alert("Houve um erro com o servidor, entre em contato com o administrador do sistema!");
      })


    },
    validar: function () {

      this.texto_cnpj = this.texto_nome = this.texto_rua = this.texto_numero = false;
      this.texto_bairro = this.texto_cidade = this.texto_estado = false;
      this.texto_telefone = this.texto_email = this.texto_senha = this.texto_senha_extra = false;
      
      if(this.cnpjField.length < 18){
        window.alert('Tamanho incorreto de CNPJ.')
        this.texto_cnpj = true;
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
      if(this.telefoneField.length < 14 || this.telefoneField.length == ""){
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
    line-height: 37px;
    /* identical to box height */

    color: #FFFFFF;
    text-align: center;
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
    margin-top: 3%;
    width: 45%;
    height: 73%;
    right: 4%;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    float:right;
  }

  #elements_form{

    margin-top: 5%;
    margin-left: 5%;
    font-size: 18px;

    color: #000000;
  }

  #end{

    margin-top: 4%;

    font-weight: bold;
    line-height: 33px;
    align-items: center;
    text-align: center;
    margin-bottom: 0;

    color: #000000;
  }

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
    margin-left: 45%;
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
    margin-left: 40%;
    display: inline-block;
  }

  #text_end_est{

    margin-top: 4%;
    margin-left: 5%;
    font-size: 18px;

    color: #000000;
  }

  .Cad_Clinica_Nome{

    width: 90%;
  }

  .Cad_Clinica_Rua{

    width: 60%;
  }

  .Cad_Clinica_Numero{

    width: 27%;
    margin-left: 3%;
  }

  .Cad_Clinica_Bairro{

    width: 45%;
  }

  .Cad_Clinica_Cidade{

    margin-left: 3%;
    width: 42%;
  }

  .Cad_Clinica_Estado{
    width: 52%;
  }

  .Cad_Clinica_Telefone{

    width: 50%;
  }

  .Cad_Clinica_Plat{
    position: relative;
    margin-top: 1%;
    height: 40px;
    left: 5%;
    border: 1px solid #ccc;
    padding-left: 10px;
    outline: 0;
    width: 90%;
    cursor: pointer;
  }

  .Cad_Clinica_Logomarca{

    position: relative;
    margin-top: 1%;
    height: 34px;
    left: 5%;
    background-color: #FFFFFF;
    border: 1px solid #ccc;
    padding-left: 10px;
    outline: 0;
    width: 90%;
    
  }

  .Cad_Clinica_Email{

    width: 90%;
  }

  .Cad_Clinica_Senha{

    width: 90%;
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

</style>