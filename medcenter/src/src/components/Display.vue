<template>
  <nav class = "Rectangle2">
    <div>
      <h4>{{title}}</h4>
      <img :style="cssVars" :src="require('@/assets/' + image + '')">
      <div class = "saibamais">
          <div class ="title" v-on:click="redirect(`${nome_rota}`)">Saiba mais</div>
          </div>
    </div>
  </nav>
</template>

<script>

export default {

    name: 'Display',

    props:{
        title: String,
        image: String,
        altura: Number,
        nome_rota: String
    },

    methods:{

        redirect: function(param){

            this.$router.push({name: param})
        }
    },
    computed: {
        cssVars() {

            return {
                
                '--height': parseInt(this.altura, 10) + 'vh'
            } 
        }
    }
}
</script>

<style scoped>

.Rectangle2{

    position: relative;
    margin-top: 7%;
    width: 27%;
    height: 43%;
    left: 3%;
    margin-left: 3%;
    display: inline-block;

    background: #4FCFA1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px
}

img{
    height: var(--height);
}

.title{
    margin-top: 5%;
    margin-bottom: 5%;
}

.saibamais{
    position: relative;
    width: 50%;
    display: inline-block;
    margin-top: 35%;
    margin-left: 5%;
    text-align: center;
    cursor: pointer;
    background: rgba(1, 45, 32, 0.16);
    border-radius: 7px;
}

</style>