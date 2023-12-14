<script>
import { store } from "../store.js"; //state management
import Card from "./AppJumboTextCard.vue"
import carousel from "./jumboCarousel.vue"

// Import Swiper Vue.js components

//import 'swiper/css/effect-cube';



export default {
    name: "AppComponent",
    components: {
        Card,
        carousel
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        }
    },


}
</script>

<template>
    <div class="background-lines">
        <!-- padding dall header -->
        <div class="container nav-space">
            <div class="row">
                <carousel />
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.background-lines {
    width: 100%;
    background-image: url(../assets/images/images/lines-1.png);
    background-image: url(../assets/images/images/pattern_background.png);
    background-size: cover;
}

.nav-space {
    padding-top: 5rem;

}


// importo variabili

// ...qui eventuale SCSS di AppComponent
</style>