<template>
    <div id = "container">

        <Title class="title"/>
        <Nav />

        <h2 class= "text_initial">Precisou? O MedCenter te ajuda!</h2>

        <!--- Box de exibição inicial --->
        <div class="content">
            
            <Box title="Atendimento clínico" :img_height="20" image= 'medicalservice.png' class = "box_home"/>
            <Box title="Consultas on-line" :img_height="20" image= 'consult.png' class = "box_home"/>
            <Box title="Especialidades médicas" :img_height="20" image= 'medicalspecialty.png' class = "box_home"/>
        </div>

        <!--- Parte secundária de exibição da página --->

        <div class="content_doctor">

            <img class ="doctor" src="@/assets/doctor.png">

            <!--- Contanier para agrupar as informações de procura --->
            <div class="content_info">

                <h2 class= "text_final">A especialidade que você precisa está aqui!</h2>
                <div class = "find_clinical">Encontre uma clínica hoje mesmo!</div>
            </div>
        </div>

        <Copyright class = "copy_home"/>

    </div>
</template>

<script>

import Nav from '@/components/NavbarWithoutAuth'
import Title from '@/components/Title'
import Box from '@/components/BoxPresentation'
import Copyright from '@/components/Copyright'

export default {
    
    name: 'Home',

    metaInfo: {
      
        title: "MedCenter - Sua clínica está aqui!"
    },

    components: {
        Title,
        Nav,
        Box,
        Copyright
    }
}
</script>

<style scoped>

.text_initial{

    position: relative;
    text-align: center;
    margin-top: 5%;

    font-weight:bold;
    color: #33DF95;
}

.box_home{

    margin: 5% 2% 0 2%;
    
}

.content{

    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
}

.content_doctor{

    /**display:flex força os elementos a ficarem em colunas. */

    position: relative;
    display: flex;
    width: 100%;
    
    margin-top: 5%;
}

.doctor{
    
    width: 35%;
    height: 20%;
}

.content_info{
    
    width: 100%;
    
}

.text_final{

    color: #33DF95;

    margin-top: 8%;
    text-align: center;
}

.find_clinical{
    
    width: 80%;
    height: 10%;
    
    padding-top: 1%;

    /**margin-top, margin-right (en-US), margin-bottom, e margin-left (en-US) */
    margin: 3% 10% 0 10%;

    background: #15EFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;

    text-align: center;
    align-items: center;

    cursor: pointer;
}

.copy_home{

    margin-top: 2%;
}

</style>