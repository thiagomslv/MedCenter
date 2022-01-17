<template>
    <div id = "app">
        <img v-bind:src="require('../assets/' + img)" />
        <center><h5>{{title}}</h5></center>
    </div>
</template>

<script>
export default {
    name: "Logo",
    data: function() {
        return {
            img: "logo.png"
        };
    },
    props: {
        title: String
    }
}
</script>

<style scoped>

#app{
    display: table-cell;
    vertical-align: middle;
}
#app img{
    width: 150px;
}
</style>