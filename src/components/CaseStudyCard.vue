<script>
export default {

    props: {

        obj: "Object"
    }

}

</script>
<template>
    <div class="card">
        <img :src="obj.src" :alt="obj.alt">
        <a :href="obj.link">a
        </a>
    </div>
</template>


<style scoped lang="scss">
.card {
    border: 0;
    border-radius: 0%;
}
</style>