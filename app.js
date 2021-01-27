new Vue({
    el: "#vue-app",
    data: {
        name: "jerry",
        movieUrl: "https://www.youtube.com/"
    },
    methods: {
        greet: function(st){
            return "Good " + st + ':'+ this.name;
        }
    }
});
