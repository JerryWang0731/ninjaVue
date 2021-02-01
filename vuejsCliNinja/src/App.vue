<template>
  <div>
    <app-header></app-header>
    <app-ninja></app-ninja>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Ninja from './component/Ninja.vue';
import Header from './Component/Header.vue';
import Footer from './Component/Footer.vue';


export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninja':Ninja,
  },
  Ninjadata() {
    return {};
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
