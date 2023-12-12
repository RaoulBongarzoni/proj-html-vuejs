<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {

    /*     data() {
            return {
                FontAwesomeIcon,
            }
        }, */

    props: {
        iconName: "String",
        title: "String",
        subtite: "String"


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
                {{ string }}
            </p>



        </div>
    </div>
</template>
<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.card {
    border: none;

    .colorYellow {
        color: $themeColorYellow;

    }
}
</style>