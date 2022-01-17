<template>

    <div class = "abutmentbox">

        <div class = "cell">

            <h3 class = "info">{{title}}</h3>
            <img :style="cssVars" :src="require('@/assets/boximages/' + image + '')">

            <div class = "moreinfo">
                <div class ="description">Saiba mais</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    props:{
        
        title: String,
        image: String,
        img_height: Number,
        route_name: String
    },

    computed: {
        cssVars() {

            return {
                
                '--height': parseInt(this.img_height, 10) + 'vh'
            } 
        }
    }
}

</script>

<style scoped>

.abutmentbox{

    width: 100%;
    display: flex;

    overflow: auto;
}

.cell{

    /**Dimensionamento e posição */

    width: 100%;
    height: auto;

    position: relative;

    /**Estilização */
    background: #4FCFA1;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

img{

    /**Espaçamento esquerdo dentro da div e altura */
    padding-left: 1%;
    display: inline-block;

    width: auto;
    height: var(--height);
}

.info{

    color: white;
    padding-left: 2%;
}

.moreinfo{

    /**Etilização do componente. */
    background: rgba(1, 45, 32, 0.16);
    border-radius: 7px;

    cursor: pointer;

    /**Dimensionamento e posição */

    width: 45%;
    overflow: auto;

    position: absolute;
    display: inline-block;

    /*Margens */
    margin-top: 20%;
    right: 5%;
}

.description{

    padding-top: 5%;
    padding-bottom: 5%;

    text-align: center;
}
</style>