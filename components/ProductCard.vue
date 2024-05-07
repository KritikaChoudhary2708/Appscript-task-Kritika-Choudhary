<script setup >
const { product } = defineProps(['product'])
const isLiked = ref(false) 
</script>

<template>
<v-card width="300px"  class="" variant="text">
    <v-row>
        <v-col class="">
            <img :src="product.image" :alt="product.title" width="300px" height="359px" >
        </v-col>
    </v-row>
    <v-row>
        <v-col >
            <v-card width=""  variant="text">
                
                <div> <h3 class="text single-line">{{ product.title.toUpperCase()}}</h3></div>
                <div class="d-flex">
                    <nav class="product-description pr-2">
                        <NuxtLink to=""><U>Sign In</U></NuxtLink> or
                        <NuxtLink to=""> Create an account to see the pricing </NuxtLink>
                    </nav>

                
                            <v-icon size="24" @click="isLiked=!isLiked;" v-if="!isLiked" icon="mdi-cards-heart-outline"></v-icon>
                            <v-icon size="24"  @click="isLiked=!isLiked;" v-if="isLiked" icon="mdi-cards-heart" color="red"></v-icon>
                        
                </div>

               
            </v-card>
            
        </v-col>
    </v-row>
   
   
   
    
</v-card>
        
   
</template>

<style scoped>
.h3{
    font-size: 18px;
    font-weight: 700;
    line-height: 21.6px;
   
}
.text.single-line {
  overflow: hidden !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 50px;
}

.product-description{
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    color: #888792;
;
}

</style>