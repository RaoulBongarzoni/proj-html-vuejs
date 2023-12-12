<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import Card from "./AppJumboTextCard.vue"
export default {
    name: "AppComponent",
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div class="background-lines">
        <!-- padding dall header -->
        <div class="container nav-space">
            <div class="row">
                <div class="col-12">
                    <Card />
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.background-lines {
    width: 100%;
    background-image: url(../assets/images/images/lines-1.png);
    background-image: url(../assets/images/images/pattern_background.png);
    background-size: contain;
}

.nav-space {
    padding-top: 5rem;
}

// importo variabili

// ...qui eventuale SCSS di AppComponent
</style>