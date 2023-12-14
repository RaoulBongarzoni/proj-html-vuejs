<script>
import { store } from "../store.js";//state management
import register from "../debug";//per debuggare il componente da console
import AgencyCard from "./AppAgencycard.vue";
import OurWorkCard from "./CaseStudyCard.vue";
import FinancialCard from "./FinancialPlanCard.vue";
import NewsCard from "./AppNewsCard.vue"
import autoCarousel from "./AutomatedCarousel.vue"






import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';

export default {
    name: "AppComponent",
    components: {
        AgencyCard,
        OurWorkCard,
        FinancialCard,
        NewsCard,
        autoCarousel

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
                <div v-for="element in store.firstSectionCards" class="col-4">
                    <AgencyCard :title="element.title" :iconName="element.iconName" :subtitle="element.subtitle" />
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
            <div class="row text-center pb-5">
                <div v-for="element in store.SecondSectionCards" class="col-3">
                    <AgencyCard :title="element.title" :iconName="element.iconName" :subtitle="element.subtitle"
                        :link="element.link" class="background-dark text-white" />
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

                        <div v-for="element in store.OurWorkElements " class="col-4">
                            <OurWorkCard :obj="element" />

                        </div>
                    </div>

                </div>
                <div class="col-12 d-flex justify-content-center">

                    <button class="btn rounded-pill text-white btn-warning my-5">adadasd</button>
                </div>
            </div>
        </div>

    </div>




    <!-- ******************************************************************* -->
    <!-- sezione piani-->
    <div class="bg-blue-img">
        <div class="container py-5">
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
                <div v-for="element in store.AppFinancialPlans" class="col-3">
                    <FinancialCard :obj="element" />
                </div>


            </div>
        </div>
    </div>

    <!-- CREO COMPONENTE DESCRIZIONE SEZIONI GENERICO -->
    <!-- MI CREO UN COMPONENTE CARTA -->
    <!-- PASSO PIANI TARIFFARI TRAMITE PROPS E LO STORE -->



    <!-- sezione con news -->
    <!-- 3 immagini con descrizione -->
    <!-- bottone centrale -->
    <div class="bg-white-wash">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 text-black d-flex flex-wrap justify-content-center">
                    <h2 class="fw-bold my-3">lorenasdasdasdasdazsdas asdasd asdasdad
                    </h2>
                    <p class="w-50 text-center pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                        itaque
                        dolorum veniam
                        eum illo
                        quam
                        libero sequi, fuga maxime necessitatibus ea, veritatis omnis et, quos officia explicabo velit
                        eveniet. Deserunt!</p>
                </div>

            </div>
            <div class="row">
                <div v-for="element in store.NewsSection" class="col-4">
                    <NewsCard :obj="element" />

                </div>

            </div>

            <div class="row ">
                <div class="col d-flex justify-content-center">

                    <button class="btn btn-warning rounded-pill text-white">GO TO NEWS</button>
                </div>
            </div>
        </div>
    </div>


    <!-- feedback dei clienti -->
    <!-- foto cliente -->
    <!-- recensione -->
    <div class="bg-white">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 text-black d-flex flex-wrap justify-content-center">
                    <h2 class="fw-bold my-3">lorenasdasdasdasdazsdas asdasd asdasdad
                    </h2>


                </div>
                <div class="col-12 text-black d-flex flex-wrap flex-column align-items-center">
                    <img src="../assets/images/images/testimonials-2.jpg" alt="" class="border rounded-circle">
                    <span>asjdflsakjdflaskjdhflakjsdhflasjhdflaksjdfhlaskjdfhlsdkfjh</span>
                    <span>
                        <span class="fw-bold">nome cognome</span>, creo tech
                    </span>

                </div>
            </div>
            <hr class="w-75 text-black m-auto">
            <div class="row">



                <autoCarousel />




            </div>
        </div>
    </div>
    <div class="bg-img-filtered">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 text-black d-flex flex-wrap justify-content-center">
                    <h2 class="fw-bold my-3">lorenasdasdasdasdazsdas asdasd asdasdad
                    </h2>
                    <p class="w-50 text-center pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                        itaque
                        dolorum veniam
                        eum illo
                        quam
                        libero sequi, fuga maxime necessitatibus ea, veritatis omnis et, quos officia explicabo velit
                        eveniet. Deserunt!</p>
                </div>

            </div>
            <div class="row">
                <!-- v-for per creare le carte <div class="col-4"></div>-->


            </div>
        </div>
    </div>




    <!-- footer jumbo -->
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.btn-warning {
    background-color: $themeColorYellow;
    font-size: x-small;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
}

.bg-white-wash {
    background-color: $themeColorLight;
}

.bg-blue-img {
    background-image: url(../assets/images/images/background1.jpg);
}

.bg-darkBlue {


    background-image: url(../assets/images/images/pattern_background.png), url(../assets/images/images/transparent.png);
    background-color: #051642;
    background-size: cover;

    color: white;

    .background-dark {
        background-color: #071b50;
    }
}


.bg-img-filtered {
    background-image: url(../assets/images/images/case-study-gallery-3-1.jpg);
}

// ...qui eventuale SCSS di AppComponent
</style>