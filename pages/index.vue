<script setup >

//fetch the products
const {data : products}= await useFetch('https://fakestoreapi.com/products')
</script>

<template>
    <v-card class="border">
        <v-row>
            <v-col  v-for="p in products">
                <product-card :product = "p"></product-card>
            </v-col>
        </v-row>

    </v-card>
 
</template>

<style lang="scss" scoped>

</style>