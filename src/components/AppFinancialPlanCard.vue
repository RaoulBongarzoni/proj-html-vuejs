<script>

export default {
    props: {
        FinancialPlan: "Object"


    }


}
</script>


<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                {{ FinancialPlan.title }}

            </h3>
            <span>
                {{ FinancialPlan.cost }}
            </span>
            <p>{{ FinancialPlan.feature1 }}</p>
            <p>{{ FinancialPlan.feature2 }}</p>
            <p>{{ FinancialPlan.feature3 }}</p>

            <button class="btn btn-outline-secondary">start today</button>
        </div>


    </div>
</template>


<style></style>
