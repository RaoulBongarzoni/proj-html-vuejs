<script>
import { store } from "../store.js"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCube, Navigation, Pagination, A11y } from 'swiper/modules'
import Card from "./AppJumboTextCard.vue"

import 'swiper/css';
import 'swiper/css/effect-cube';
export default {
    components: {
        Swiper, SwiperSlide, Card

    },
    data() {
        return {
            store, EffectCube, Navigation, Pagination, A11y


        }
    }

}

</script>

<template>
    <swiper :slides-per-view="1" :modules="[EffectCube, Navigation, Pagination, A11y]" :effect="'cube'" :cubeEffect="{
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
    }" :navigation="{ clickable: true }" :pagination="{ clickable: true }">
        <swiper-slide v-for="element in store.jumboImages">

            <Card :img="element" />
        </swiper-slide>

    </swiper>
</template>

<style></style>