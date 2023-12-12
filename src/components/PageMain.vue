<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import AgencyCard from "./AppAgencycard.vue"

export default {
    name: "AppComponent",
    components: {
        AgencyCard
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
    <!-- **************************************************************************************************** -->
    <!-- sezione con testo scritto e carte e immagine-->
    <div class="bg-white-wash">
        <div class="container pt-5">
            <!-- testo -->
            <div class="row">
                <div class="col-12 text-black d-flex flex-wrap justify-content-center">
                    <h2 class="fw-bold my-3">lorenasdasdasdasdazsdas asdasd asdasdad
                    </h2>
                    <p class="w-50 text-center pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae itaque
                        dolorum veniam
                        eum illo
                        quam
                        libero sequi, fuga maxime necessitatibus ea, veritatis omnis et, quos officia explicabo velit
                        eveniet. Deserunt!</p>
                </div>
            </div>
            <!-- 3 cards -->
            <div class="row text-black text-center">
                <div class="col-4">
                    <AgencyCard :title="'establish goals'" :iconName="'road'" />
                </div>
                <div class="col-4">
                    <AgencyCard :title="'establish goals'" :iconName="'video'" />
                </div>
                <div class="col-4">
                    <AgencyCard :title="'establish goals'" :iconName="'droplet'" />
                </div>

            </div>
            <!-- immagine -->
            <div class="row">
                <div class="col-12">
                    <img src="../assets/images/images/agency-seo-desk-front-1200x570.jpg" alt="" class="w-100">
                </div>
            </div>

        </div>
    </div>
    <!-- ******************************************************************************************************** -->

    <!-- sezione blu scuro con img cards-->
    <div class="bg-darkBlue">
        <div class="container">
            <!-- testo -->
            <div class="row">
                <div class="col-12 text-white d-flex flex-wrap justify-content-center">
                    <h2 class="fw-bold my-3">lorenasdasdasdasdazsdas asdasd asdasdad
                    </h2>
                    <p class="w-50 text-center pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae itaque
                        dolorum veniam
                        eum illo
                        quam
                        libero sequi, fuga maxime necessitatibus ea, veritatis omnis et, quos officia explicabo velit
                        eveniet. Deserunt!</p>
                </div>
            </div>
            <div class="row text-black text-center pb-5">
                <div class="col-3">
                    <AgencyCard :title="'establish goals'" :iconName="'road'" />
                </div>
                <div class="col-3 dark-column">
                    <AgencyCard :title="'establish goals'" :iconName="'video'" />
                </div>
                <div class="col-3">
                    <AgencyCard :title="'establish goals'" :iconName="'droplet'" />
                </div>
                <div class="col-3">
                    <AgencyCard :title="'establish goals'" :iconName="'droplet'" class="background-dark" />
                </div>

            </div>
            <!-- immagini -->
        </div>
    </div>
    <!-- **************************************************************************************** -->
    <div class="bg-white-wash">
        <div class="container pt-5">
            <div class="row">

                <div class="col-12 text-black d-flex flex-wrap justify-content-center">
                    <h2 class="fw-bold my-3">lorenasdasdasdasdazsdas asdasd asdasdad
                    </h2>
                    <p class="w-50 text-center pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae itaque
                        dolorum veniam
                        eum illo
                        quam
                        libero sequi, fuga maxime necessitatibus ea, veritatis omnis et, quos officia explicabo velit
                        eveniet. Deserunt!</p>
                </div>

            </div>
            <div class="row">
                <div class="col-12">


                    <div class="row">

                        <div class="col-4">
                            <img src="../assets/images/images/case-study-gallery-1-1-400x300.jpg" alt="">

                        </div>
                        <div class="col-4">
                            <img src="../assets/images/images/case-study-gallery-1-1-400x300.jpg" alt="">

                        </div>
                        <div class="col-4">
                            <img src="../assets/images/images/case-study-gallery-1-1-400x300.jpg" alt="">

                        </div>


                    </div>
                    <div class="row">

                        <div class="col-4">
                            <img src="../assets/images/images/case-study-gallery-1-1-400x300.jpg" alt="">

                        </div>
                        <div class="col-4">
                            <img src="../assets/images/images/case-study-gallery-1-1-400x300.jpg" alt="">

                        </div>
                        <div class="col-4">
                            <img src="../assets/images/images/case-study-gallery-1-1-400x300.jpg" alt="">

                        </div>


                    </div>

                </div>
            </div>
            <button class="btn">adadasd</button>
        </div>

    </div>

    <!-- ******************************************************************* -->
    <!-- sezione piani-->
    <!-- CREO COMPONENTE DESCRIZIONE SEZIONI GENERICO -->
    <!-- MI CREO UN COMPONENTE CARTA -->
    <!-- PASSO PIANI TARIFFARI TRAMITE PROPS E LO STORE -->



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
@use '../styles/partials/variables' as *;


.bg-white-wash {
    background-color: $themeColorLight;
}

.bg-darkBlue {

    background-image: url(../assets/images/images/pattern_background.png);
    background-size: cover;
    background-color: $themeColorDarkBlue;
    color: white;

    .background-dark {
        background-color: $themeColorBlue;
    }
}

// ...qui eventuale SCSS di AppComponent
</style>