<template>
   <footer>
      <p v-on:click="changeTitle">{{ copyright }}-{{ title }}</p>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      copyright: "Copyright since 2021",
    };
  },
  methods: {
    changeTitle(){
      this.$emit('chgTitleEvent', 'footer Title');
    }
  },
};
</script>

<style scoped>

footer{
    background: #222;
    padding: 6px;
}

p{
    color: lightgreen;
    text-align: center;
}

</style>

