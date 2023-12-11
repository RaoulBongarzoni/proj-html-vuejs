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
    <!-- sezione jumbo con carosello -->
    <!-- deve contenere varie jumbocard con stesso formato-->



    <!-- sezione con testo scritto e carte e immagine-->
    <!-- testo -->
    <!-- 3 cards -->
    <!-- immagine -->


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