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
    <div class="container">
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
                <ul class="list-group list-group-horizontal ">
                    <li class="list-group-item"><a href="">Home</a></li>
                    <li class="list-group-item"><a href="">asdas</a></li>
                    <li class="list-group-item"><a href="">asdas</a></li>
                    <li class="list-group-item"><a href="">asdasd</a></li>
                    <li class="list-group-item">

                        <a href="">
                            <span>

                                asdasd
                                <span class="btn btn-sm btn-outline-warning">apply</span>

                            </span>

                        </a>
                    </li>
                    <li class="list-group-item"><a href="">asd</a></li>
                </ul>
            </div>
            <!-- bottone con contatti -->
            <div class="col text-center">
                <button class="btn btn-warning text-white">GET IN TOUCH NOW</button>
            </div>
        </div>





    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.btn {
    border-radius: 20px;
    padding-left: 1rem;
    padding-right: 1rem;

}

a {
    text-decoration: none;
    color: white;
}
</style>