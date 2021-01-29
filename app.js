var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "one VueApp",
        name: "JP"
    },
    methods: {
        
    },
    computed: {
        comp: function(){
            return "one comp VueApp comp" + this.name;
        }
    }
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "two VueApp",
        name: "GP"
    },
    methods: {
        channgeTitle: function(){
            one.title = "you got changed";
            one.name = "JJ";
            this.name = "GG la";
        }
    },
    computed: {
        comp: function(){
            return "two comp VueApp comp";
        }
    }
});

