<template>

    <h2 class = "name_pag"><strong>MedCenter<br/>{{this.name}}</strong></h2>

</template>

<script>
export default {

    props: {
        name: String
    }
}
</script>

<style scoped>

.name_pag{

    width: 20%;
    height: auto;

    position: relative;
    display: inline-block;

    text-align: center;
    overflow: auto;

    color: #33DF95;
}

</style>