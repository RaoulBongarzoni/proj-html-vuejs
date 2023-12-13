<script>


export default {

    /*     data() {
            return {
                FontAwesomeIcon,
            }
        }, */

    props: {
        iconName: "String",
        title: "String",
        subtitle: "String",
        link: "string"


    }




}
/*  import */

</script>
<template>
    <div class="card">
        <div class="card-body">

            <font-awesome-icon :icon="'fa-solid' + ' ' + 'fa-' + iconName" size="lg" class="my-4 colorYellow" />
            <h4 class="card-title fw-bold">
                {{ title }}
            </h4>
            <p>
                {{ subtitle }}
            </p>
            <a v-if="link" :href="link">read more..</a>




        </div>
    </div>
</template>
<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.card {
    border: none;
    border-radius: 0;

    a {
        text-decoration: none;
        color: $themeColorYellow;
    }

    .colorYellow {
        color: $themeColorYellow;
    }
}
</style>