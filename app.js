var dataObject = {
    count: 0,
    title: "from component"
};


Vue.component('first-component', {
    template: '<div><p>wasa: {{ title }} </p> <button v-on:click="count++">You clicked me {{ count }} times.</button></div>',
    data: function () {
      return dataObject;
    },
    methods: {
        // addCount: function()
        // {
        //     this.count++;
        // }
    },
  })


var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "one VueApp",
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

two.title = "u will be my shape";