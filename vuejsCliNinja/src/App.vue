<template>
  <div>
    <app-header v-bind:title="title" v-on:chgTitleEvent="chgTitleByChild($event)"></app-header>
    <app-ninja v-bind:ninjas="ninjas"></app-ninja>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Ninja from './components/Ninja.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninja':Ninja,
  },
  data() {
    return {
      title: "Vue-Ninja",
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
    chgTitleByChild (updTitle){
      this.title = updTitle;
    }
  },
};
</script>

<style scoped>
</style>
