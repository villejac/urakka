<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
</script>

<template>
<div>
  <header>
    <Header title="Urakka-apuri" />
  </header>

  <main>
    <Main />
  </main>
  
  <footer>
    <Footer />
  </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Main
  }
} 
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@700&display=swap');
* {
    margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #fbfbfd;
  font-family: sans-serif;
}
#app {
  min-height: 100vh;
  position:relative;
}
h1 {
    font-family: 'Goldman', cursive, sans-serif;
}

</style>
