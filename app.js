new Vue({
    el: "#vue-app",
    data: {
        age: 18,
        x: 0,
        y: 0,
        error: false,
        success: false
    },
    methods: {
       
    },
    computed: {
        comClass: function(){
            return {
                available: this.available,
                nearby: this.nearby,
            }
        },
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
