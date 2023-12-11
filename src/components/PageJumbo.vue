<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppComponent",
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

            <div class="row ">
                <!-- colonna di sinistra -->
                <div class="col-6">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, perferendis cumque assumenda
                        quasi, iure eius praesentium error ipsum commodi modi, dignissimos nostrum necessitatibus veniam!
                        Nulla illum facilis ab repudiandae unde.</p>
                    <button class="btn btn-primary">asd</button>
                    <button class="btn btn-primary">asd</button>
                </div>
                <!-- colonna di destra -->
                <div class="col-6">
                    <img src="../assets/images/images/best-seo-services-slide-1.png" alt="">

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
    background-size: cover;
}

.nav-space {
    padding-top: 5rem;
}

// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>