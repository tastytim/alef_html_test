<template>
  <div id="app">
    <Navbar></Navbar>
    <SectionA></SectionA>
    <Divsection></Divsection>
    <SectionB></SectionB>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import SectionA from './components/SectionA.vue'
import SectionB from './components/SectionB.vue'
import Footer from './components/Footer.vue'
import Divsection from './components/Divsection.vue'

export default {
  name: 'App',
  components: {
    Navbar,SectionA,SectionB,Footer,
    Divsection
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1390px;
  margin:0 auto
}
</style>
