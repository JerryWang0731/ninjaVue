<template>
  <header>
      <h1>Headrr</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "my root component",
    };
  },
  methods: {
  },
};
</script>

<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>
