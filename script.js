const {createApp} = Vue;

createApp({
    data() {
        return {
            images : [
                'https://fastly.picsum.photos/id/671/300/300.jpg?hmac=nGer7nNBNoX4ic5DUHwo4IE-CEaSanMUbMiGSS6C7NU',
                'https://fastly.picsum.photos/id/892/300/300.jpg?hmac=ygqeL53rK7nMEa9zwJJYdgJRrNMdT86ZJnEb2QGWWys',
                'https://fastly.picsum.photos/id/46/300/300.jpg?hmac=d0_MNL7cjS7tre8_kfeiCGuF_l8Fz6qcD6k2lOB73EU',
                'https://fastly.picsum.photos/id/588/300/300.jpg?hmac=MrULsCsLnSm33riTiiUpgv4jusxkJRgT14M0eev5XVQ',
                'https://fastly.picsum.photos/id/831/300/300.jpg?hmac=rOb_4UPQBeuEgrJON2yaO31CcDAsYAlTST77RIVz1W0'
            ],

            activeIndex : 0 ,

        }
    },

    methods: {
        
        previousImage(){
            if (this.activeIndex === 0){
                this.activeIndex = this.images.length - 1 ;
            } else {
                this.activeIndex--;
            }

        },
        
        nextImage (){
            if (this.activeIndex === this.images.length - 1){
                this.activeIndex = 0 ;
            } else {
                this.activeIndex++;
            }

        }

    }
}).mount('#app')
