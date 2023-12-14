<script>



export default {
    props: {

        obj: "Object",

    }



}
</script>



<template>
    <div class="card">
        <div class="card-body">

            <img :src="obj.img" :alt="obj.alt">

            <h5 class="card-title fw-bold">{{ obj.title }}</h5>
            <span>{{ obj.date }}</span>

            <p>{{ obj.text }}</p>
        </div>

    </div>
</template>



<style scoped lang="scss">
@use '../styles/partials/variables' as *;


.card {
    background-color: transparent;
    border: none;
    border-radius: 0;

    .card-body {
        text-align: center;

        h5 {
            color: $themeColorYellow;
            margin: 1rem 0 0.5rem 0;
        }

        ;



        span {
            font-size: x-small;
            padding-bottom: 2rem
        }


    }


}
</style>