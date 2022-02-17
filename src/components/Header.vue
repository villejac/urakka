<template>
  <header>
        <h1>{{ title }}</h1>
        <div class="img">
        <img src="../assets/apuri.png">
        </div>
  </header>
</template>

<script>
    export default {
    name: 'Header-block',
    props: {
        title: String
        }
    }
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.img {
    width: 200px;
}
img {
    width: 100%;
}
</style>
