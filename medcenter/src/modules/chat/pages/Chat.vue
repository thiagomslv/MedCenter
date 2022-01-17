<template id = "teste">

    <div id = "container">

        <SkipButton />

        <div class="abutmentbox">

            <div class="boxchat">

                <div class = "title">Chat para consultas</div>
                <hr class = "line">

                <div class = "msgcontent">

                    <div class = "msgrender" v-for = "(item, keyMessage) in items" :key = "keyMessage">
                        {{item.message}}
                    </div>
                </div>
            </div> 
        </div>

        <form class = "sendmessage" name = "sendmenssage">

            <input class = "message" type="text" name = "message" placeholder = "Digite sua mensagem aqui" v-model= "msgField" required> 
            
            <div class="buttoncontent">
                <button v-on:click="insert()" type = "button" name = "buttonsend" class = "buttonsend">Enviar</button>
            </div>       
        </form>
    </div>
</template>

<script>

import SkipButton from '@/components/SkipButton.vue'
import io from 'socket.io-client'
//import * as io from "socket.io-client";

export default {

    name: 'Chat',

    metaInfo: {
      
        title: "MedCenter - Consultas"
    },

    components: {

        SkipButton
    },

    props: {

        paciente: String,
        ticket: String
    },

    data() {
        return{

            msgField: "",
            socket: "",

            keyMessage: 0,

            items: [
                { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat rhoncus massa, id tincidunt erat scelerisque nec. Etiam ac iaculis lectus. Fusce ut euismod risus.' },
            ]
        }
    },

    methods: {

        insert: function(){

            this.keyMessage++;
            this.items.push({message: this.msgField});

            /*const connect = SocketIO('http://localhost:54305');

            const socket = new io({

                debug: true,
                connection: connect,
            });*/
            
            //io("http://localhost:54305");

            this.socket.emit("initial", this.msgField);

            //console.log(socket)
        }
    },

    created(){


        //Se tudo ocorrer bem, a conexão é feita.



        this.socket = io("http://localhost:54305/");
    }

}
</script>

<style scoped>

.abutmentbox{

    display: flex;
}

.boxchat{

    width: 100%;
    height: 350px;

    /**margin-top, margin-right (en-US), margin-bottom, e margin-left (en-US) */
    margin: 12% 22% 0 22%;

    background: #202124;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px 7px 0px 0px;

    overflow: hidden;
}

.title{

    font-size: 18px;
    line-height: 37px;

    color: white;
    text-align: center;
}

.line{

    margin-top: 0;
    margin-bottom: 3%;
    border: 1px solid white;
}

form input[type=text]{

    height: 30px;

    border: 1px solid #ccc;
    outline: 0;
}

.sendmessage{

    display: flex;
}

.message{

    width: 100%;
    margin: 0 0 0 21.9%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 0px 7px;

    color: white;
    background-color: #202124;

}

::placeholder {

  color: white;
  opacity: 1;
}

.buttoncontent{

    display: flex;
    width: 70%;
}

.buttonsend{

    width: 31.2%;

    color: white;
    background: #1E684D;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 7px 0px;

    border: none;
    cursor: pointer;
}

.msgcontent{

    width: 100%;
    height: 285px;
    
    scroll-behavior: auto;
    overflow: auto;
}

.msgrender{

    width: 96%;
    height: auto;

    color: white;
    text-align: justify;

    /**margin-top, margin-right (en-US), margin-bottom, e margin-left (en-US) */
    margin: 1% 0 0 2%;
}


</style>