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
    <!-- sezione con testo scritto e carte e immagine-->
    <div class="bg-white">
        <div class="container py-5">
            <!-- testo -->
            <div class="row">
                <div class="col-12 text-center text-black">
                    <h2>lorenasdasdasdasdazsdas asdasd asdasdad
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae itaque dolorum veniam eum illo quam
                        libero sequi, fuga maxime necessitatibus ea, veritatis omnis et, quos officia explicabo velit
                        eveniet. Deserunt!</p>
                </div>
            </div>
            <!-- 3 cards -->
            <div class="row text-black text-center">
                <div class="col-4"><!-- incerire componente card --></div>
                <div class="col-4"><!-- incerire componente card --></div>
                <div class="col-4"><!-- incerire componente card --></div>

            </div>
            <!-- immagine -->
            <div class="row">
                <div class="col-12 text-center">
                    <img src="../assets/images/images/agency-seo-desk-front-1200x570.jpg" alt="">
                </div>
            </div>



        </div>

    </div>


    <!-- sezione blu scuro con img cards-->
    <!-- testo -->
    <!-- 4 immagini -->


    <!-- sezione con sfondo celeste e card piani tariffari -->
    <!-- sviluppo carta con buisness plan -->
    <!-- 4 carte -->


    <!-- sezione con news -->
    <!-- 3 immagini con descrizione -->
    <!-- bottone centrale -->


    <!-- feedback dei clienti -->
    <!-- foto cliente -->
    <!-- recensione -->

    <!-- carosello automatico partners-->

    <!-- footer jumbo -->
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>