<template>

    <div id="container">

        <SkipButton />

        <!--- Container principal para a exibição da imagem da clínica e título --->
        <div class="container_initial">

            <img  class = "img_initial" src="@/assets/boximages/medicalservice.png">
            <Title name = "Cadastro de clínicas" class = "title_clinical"/>
        </div>

        <!--- Container que vai comportar os formulários de cadastro --->
        <div class="container_forms">

            <form autocomplete="on" class = "pacient_register" name = "pacient_register">

                <!--- Primeiro formulário de cadastro --->
                <div class="frist_abutmentbox">

                    <div class = "title">Informe seus dados</div>
                    <hr class = "line">

                    <div class = "elements_form">Cadastro Nacional de Pessoa Jurídica (CNPJ)</div>
                    <input class = "register_cnpj" type="text" name = "cnpj" placeholder = "CNPJ" v-model= "cnpjField" v-mask="'##.###.###/000#-##'" required>

                    <div class = "elements_form">Nome da clínica</div>
                    <input class = "register_name" type="text" name = "nome" placeholder = "Nome" v-model= "nomeField" required>
                    
                    <h4>Endereço</h4>

                    <!--- A div coloca os elementos em colunas onde eles compartilharão espaçamento --->
                    <div class="adrrbox">

                        <div class = "street">Nome da rua</div>
                        <div class = "number">Número</div>
                    </div>

                    <div class="addrinputs">

                        <input class = "addr_street" type="text" name = "rua" placeholder = "Rua" v-model= "ruaField" required>
                        <input class = "addr_number" type="text" name = "numero" placeholder = "Número" v-model= "numeroField" required>
                    </div>

                    <div class="adrrbox">

                        <div class = "district">Bairro</div>
                        <div class = "city">Cidade</div>
                    </div>

                    <div class="addrinputs">

                        <input class = "addr_district" type="text" name = "bairro" placeholder = "Bairro" v-model= "bairroField" required>
                        <input class = "addr_city" type="text" name = "cidade" placeholder = "Cidade" v-model= "cidadeField" required>
                    </div>

                    <div class="adrrbox">

                        <div class = "state">Estado</div>
                    </div>

                    <div class="addrinputs">

                        <input class = "addr_state" type="text" name = "estado" placeholder = "Estado" v-model= "estadoField" required>
                    </div>

                </div>

                <!--- Segundo formulário de cadastro --->
                <div class="second_abutmentbox">

                    <br>

                    <div class = "elements_form">Telefone</div>
                    <input class = "register_telephone" type="text" name = "telefone" placeholder = "Telefone" v-model= "telefoneField" v-mask="'(##) #####-####'" required>
                    
                    <div class = "elements_form">Plataformas de videoconferência utilizadas</div>

                    <div class="platforminputs">
                        
                        <div class="boxcheck">

                            <input type="checkbox" class = "scales" name="scales">
                            <label for="scales">Google Meet</label>
                        </div>

                        <div class="boxcheck">

                            <input type="checkbox" class = "scales" name="scales">
                            <label for="scales">Hangouts</label>
                        </div>

                        <div class="boxcheck">

                            <input type="checkbox" class = "scales" name="scales">
                            <label for="scales">Zoom</label>
                        </div>
                    </div>

                    <div class = "elements_form">Logomarca ou foto da clínica</div>
                    <input class = "register_logo" type = "file" name = "logomarca" placeholder = "Selecionar arquivo" required>

                    <div class = "elements_form">E-mail</div>
                    <input class = "register_email" type="email" name = "email" placeholder = "E-mail" v-model= "emailField" required>

                    <div class = "elements_form">Senha</div>
                    <input class = "register_password" type="password" name = "senha" placeholder = "Senha" v-model= "senhaField" required>

                    <div class="buttoncontent">

                        <button type = "button" name = "register_button" class = "register_button">Cadastrar</button>
                    </div>
                    
                    <!--- Espaço após o botão de envio --->
                    <br>
                </div>

            </form>

        </div>
    </div>

</template>

<script>

import SkipButton from '@/components/SkipButton.vue'
import Title from '@/components/Title.vue'

export default {

    name: 'ClinicalRegister',

    metaInfo: {
      
        title: "MedCenter - Cadastro de clínicas"
    },
    
    components: {

        SkipButton,
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
        }
    }
}
</script>

<style scoped>

.img_initial{

    width: 10%;
    height: 10%; 
}

.title_clinical{

    width: 78%;
}

.container_forms{

    width: 100%;
    height: auto;

    position: relative;
    display: flex;
}

.pacient_register{

    width: 100%;
    height: 100%;

    display: flex;
}

.frist_abutmentbox{

    /**margin-top, margin-right (en-US), margin-bottom, e margin-left (en-US) */
    margin: 3% 1% 0 1%;
}

.second_abutmentbox{

    /**Dimensionamento e posição */
    height: 100%;
    
    /**margin-top, margin-right (en-US), margin-bottom, e margin-left (en-US) */
    margin: 5.5% 1% 0 1%;
}

.frist_abutmentbox, .second_abutmentbox{

    /**Dimensionamento e posição */
    width: 50%;

    /**Estilização do componente */
    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
}

.title{

    font-size: 20px;
    line-height: 37px;

    color: #FFFFFF;
    text-align: center;
}

.line{

    margin-top: 0;
    margin-bottom: 3%;
    border: 1px solid #FFFFFF;
}

.elements_form, .state{

    width: auto;
    padding-left: 2%;
}

form input[type=text], form input[type=email], form input[type=password] {

    height: 30px;

    margin: 1% 0 2% 2%;

    border: 1px solid #ccc;
    outline: 0;
}

form input[type = checkbox]{

    cursor: pointer;
}

.register_cnpj{

    width: 40%;
}

.register_name, .register_email, .register_password{

    width: 95%;
}

h4{
    margin-top: 2%;

    font-weight: bold;
    text-align: center;
}

.adrrbox{

    margin-top: 1%;

    display: flex;
}

.street{

    width: 65%;
    padding-left: 2%;
}

.number{

   width: 35%;
}

.addrinputs{

    display: flex;
}

.addr_street{

    width: 61%;
}

.addr_number{

    width: 31%;
}

.district{

    width: 53%;
    padding-left: 2%;
}

.city{

    width: 45%;
}

.addr_district{

    width: 50%;
}

.addr_city, .addr_state, .register_telephone{

    width: 42%;
}

.platforminputs{

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

.register_logo{

    width: 96%;
    margin: 1% 0 2% 2%;

    border-radius: 7px;
    background-color: white;

    cursor: pointer;
}

.buttoncontent{

    display: flex;
    width: 100%;
}

.register_button{

    width: 100%;
    height: 40px;

    margin: 2% 20% 0 20%;

    color: white;
    cursor: pointer;

    background: #1E684D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    border: none;
    border-radius: 7px;
}

</style>