<template> 
  <div>
    <h1>Ninini</h1>
    <ul>
        <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Hello Kitty","Pikachu","RockMan"],
      title: "ninja component",
    };
  },
};
</script>

<style scoped>
h1 {
    color: purple;
}
</style>
