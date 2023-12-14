<script>



export default {

    props: {
        obj: "Object"

    }
}

</script>

<template>
    <div class="card">
        <div class="row">
            <div class="col">

                <h3 class="card-title">
                    {{ obj.name }}
                </h3>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span class="currency">{{ obj.currency }}</span>
                <span class="integer-part">{{ obj.integerPart }}</span>
                <div class="d-flex flex-column">

                    <span class="decimal-part">{{ obj.decimalPart }}</span>
                    <span class="time"> {{ obj.timeDuration }}</span>
                </div>
            </div>
        </div>
        <div class="description">

            <div class="row">
                <div class="col">
                    <span>{{ obj.featureOne }} Projects</span>

                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span>{{ obj.featureTwo }} GB Storage</span>

                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span>{{ obj.featureThree }} Users</span>

                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a :href="obj.link">
                        <button class="btn btn-outline-secondary rounded-pill">START NOW</button>
                    </a>
                </div>

            </div>
        </div>







    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;


.card-title {
    margin: 2rem auto;
    font-weight: bold;
}

.col {
    display: flex;
    justify-content: center;

    .currency {
        font-weight: bold;
        font-size: 1rem;
        align-self: center;
    }

    .integer-part,
    .decimal-part {
        color: $themeColorBlue;
        font-weight: bold;
    }


    .integer-part {

        font-size: 2rem;
    }

    .decimal-part {
        font-size: 1rem;
    }

    .time {
        font-size: xx-small;
        font-weight: bold;
    }


}

.description {


    span {
        margin: 1rem 0;
    }

    a {
        margin: 2rem 0;
    }

}
</style>