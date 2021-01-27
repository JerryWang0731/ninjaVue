new Vue({
    el: "#vue-app",
    data: {
        name: "jerry"
    },
    methods: {
        greet: function(st){
            return "Good " + st;
        }
    }
});
