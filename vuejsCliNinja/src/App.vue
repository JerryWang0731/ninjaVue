<template>
  <div>
    <h1>{{ title }}</h1>
    <button v-on:click="greeting()">say some thing nice</button>
    <ninja></ninja>  
  
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      title: "my root component",
    };
  },
  methods: {
    greeting() {
      alert("hello");
    },
  },
};
</script>

<style>
</style>
