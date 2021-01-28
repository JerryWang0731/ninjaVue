new Vue({
    el: "#vue-app",
    data: {
        age: 18,
        x: 0,
        y: 0,
    },
    methods: {
        triggerOther: function(){
            alert('trigger other');
            return 'other';
        },
        addX: function(){
            console.log('trigger X');
            return this.x + this.age;
        },
        addY: function(){
            console.log('trigger Y');
            return this.y + this.age;
        },
    },
    computed: {
        // addX: function(){
        //     console.log('trigger X');
        //     return this.x + this.age;
        // },
        // addY: function(){
        //     console.log('trigger Y');
        //     return this.y + this.age;
        // },
        // addXY: function(){
        //     return this.x + this.y;
        // }
    }
});
