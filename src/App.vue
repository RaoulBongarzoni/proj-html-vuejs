<script>

import PageHeader from "./components/PageHeader.vue"
import PageMain from "./components/PageMain.vue"
import PageFooter from "./components/Pagefooter.vue"
import PageJumbo from "./components/PageJumbo.vue"

/* 
import axios from 'axios'; //importo Axios */
import { store } from "./store.js" //state management

export default {
	components: {
		PageHeader,
		PageFooter,
		PageMain,
		PageJumbo

	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.doThings();

		// axios.get("indirizzo").then(risultato => {
		// 	console.log(risultato);
		// }).catch(errore => {
		// 	console.error(errore);
		// });
	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<div class="d-flex justify-content-center" style="position: relative;">
		<PageHeader style="position: absolute; width: 100%; margin: 0 auto" />
		<PageJumbo /><!-- sezione con carosello da completare -->
	</div>
	<PageMain />
	<PageFooter />
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
</style>