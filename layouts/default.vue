<script setup lang="ts">

</script>

<template>
    <div class="border">
        <v-row class="border" width="100%">
            <v-col>
                <Header></Header>
            </v-col>
        </v-row>
        
    </div>
    <div>
        <slot/>
    </div>
    <div>
        <v-row>
            <v-col>
                <Footer></Footer>
            </v-col>
        </v-row>
    </div>
</template>

<style lang="scss" scoped>

</style>