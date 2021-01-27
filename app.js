new Vue({
    el: "#vue-app",
    data: {
        name: "jerry",
        movieUrl: "https://www.youtube.com/",
        movieUrlTag: '<a href="https://www.youtube.com/">good stuff</a>',
        age: 87,
    },
    methods: {
        greet: function(st){
            return "Good " + st + ':'+ this.name;
        },
        subtract: function()
        {
            this.age--;
        }
    }
});
