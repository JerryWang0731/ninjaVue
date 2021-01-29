new Vue({
    el: "#vue-app",
    data: {
        health: 100,
        isActive: false,
    },
    methods: {
        Punch: function(){
            this.health -= 10;
            if(this.health <= 0)
            {
                this.isActive = true;
            }
        },
        Reset: function(){
            this.health = 100;
            this.isActive = false;
        }
    },
});
