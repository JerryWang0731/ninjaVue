<template>
  <div>
    <app-header></app-header>
    <app-ninja v-bind:ninjas="ninjas"></app-ninja>
    <hr>
    <app-ninja v-bind:ninjas="ninjas"></app-ninja>
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
  data() {
    return {
      ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
    };
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
