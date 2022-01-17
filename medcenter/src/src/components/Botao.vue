<template>
    <div class = "d-flex justify-content-center">
        <b-button class = "botao" variant="success">{{title}}</b-button>
    </div>
</template>

<script>
export default {
    name: "Botao",
    props: {
        title: String
    }
}
</script>

<style scoped>

    .botao{
        margin-top: auto;
    }
</style>