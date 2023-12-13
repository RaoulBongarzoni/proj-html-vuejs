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
    <div class="container my-3">
        <!-- container flex -->


        <div class="row">

            <!-- link con logo -->
            <div class=" col">
                <a href="#">
                    <img src="../assets/images/images/logo_seo_w_1x.png" alt="">
                </a>
            </div>
            <!-- ul con link varie pagine -->
            <div class="col-auto">
                <ul class="list-group list-group-horizontal align-items-baseline">
                    <li class="list-group-item"><a href="">Home</a></li>
                    <li class="list-group-item"><a href="">asdas</a></li>
                    <li class="list-group-item"><a href="">asdas</a></li>
                    <li class="list-group-item"><a href="">asdasd</a></li>
                    <li class="list-group-item">

                        <a href="">
                            <span>

                                asdasd

                            </span>

                        </a>
                        <span class="btn btn-sm btn-outline-warning">apply</span>
                    </li>
                    <li class="list-group-item"><a href="">asd</a></li>
                </ul>
            </div>
            <!-- bottone con contatti -->
            <div class="col text-center">
                <button class="btn btn-warning text-white rounded-pill py-2 px-4">GET IN TOUCH NOW</button>
            </div>
        </div>





    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;



a {
    text-decoration: none;
    color: white;
}
</style>