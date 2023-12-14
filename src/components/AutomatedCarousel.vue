<script>
import { store } from "../store.js"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import Card from "./AppJumboTextCard.vue"

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';


export default {
    components: {
        Swiper, SwiperSlide, Card

    },
    data() {
        return {
            store, Navigation, Pagination, A11y, Autoplay


        }
    }

}


</script>


<template>
    <swiper :slides-per-view="4" :modules="[Navigation, Pagination, A11y, Autoplay]" :navigation="{ clickable: true }"
        :pagination="{ clickable: true }">
        <swiper-slide v-for="element in store.ClientsImages">
            <img :src="element" alt="client">


        </swiper-slide>

    </swiper>
</template>







<style scoped lang="scss"></style>