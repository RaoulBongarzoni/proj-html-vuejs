<script>



export default {


}
</script>

<template>
    <div class="card ">
        <div class="row ">
            <div class="col-6">

                <div class="card-body">
                    <h1 class="card-title fw-bold">SEM Campaigns Made Simple With Avada</h1>
                    <h6 class="card-subtitle mt-2 text-white">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                        Ipsa, dignissimos temporibus laudantium odit iusto vero.
                    </h6>
                    <div class="d-flex justify-content-start">
                        <button class="btn btn-yellow-rounded ">asddasd</button>

                        <button class="btn btn-blue-rounded ">zadasd</button>
                    </div>
                </div>
            </div>
            <div class="col-6 d-flex justify-content-center">
                <img src="../assets/images/images/best-sem-seo-services-slide-2.png" alt="" class="w-100">
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.card {
    background-color: transparent;
    color: white;
    border: none;
    margin-bottom: 7rem;

    .btn {
        margin: 2rem 2rem 0 0;
        padding: 0.5rem 2rem;
        color: white;
        border-radius: 16pc;
    }

    .btn-yellow-rounded {
        background-color: $themeColorYellow;
    }

    .btn-blue-rounded {
        background-color: $themeColorBlue;
    }
}

// ...qui eventuale SCSS di AppComponent
</style>