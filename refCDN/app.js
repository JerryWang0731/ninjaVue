new Vue({
    el: "#vue-app",
    data: {
        title: "vue $ref",
    },
    methods: {
        sayGetName: function(){
            console.log(this.$refs);
            console.log(this.$refs.jerryRef.value);
        }
    },
    computed: {        
        
    }
});