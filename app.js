new Vue({
    el: "#vue-app",
    data: {
        age: 18,
        x: 0,
        y: 0,
        isRed: false,
    },
    methods: {
       
    },
    computed: {
        addX: function(){
            console.log('trigger X');
            return this.x + this.age;
        },
        addY: function(){
            console.log('trigger Y');
            return this.y + this.age;
        },
        addXY: function(){
            return this.x + this.y;
        }
    }
});
