<script setup lang="ts">

</script>

<template>
    <div class="banner justify-center align-center  grid-container" >
        <div class="grid-item d-flex mx-auto justify-between " v-for="p in 3" >
            <img src="/assets/images/banner-logo.svg" class="pr-2">
            <p>Lorem ipsum dolor</p>
            <v-spacer></v-spacer>
        </div>
      
    </div>
</template>

<style lang="scss" scoped>
.banner{
    background-color: black;
    display: flex;
    height: 32px;
    color: #EB4C6B;
    font-size: 12px;
}
</style>