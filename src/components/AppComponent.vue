<script>
import { store } from "../store.js" //state management


export default {
    name: "AppComponent",
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <div>
        <h1>Sono un componente!</h1>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>