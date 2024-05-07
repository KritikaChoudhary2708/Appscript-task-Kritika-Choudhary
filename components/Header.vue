<script setup lang="ts">

</script>

<template>
    <div>
        <header class="card">
        <Banner></Banner>
            
            <div class=" d-flex  heading grid-container">
                <div class="grid-item ml-9 mr-auto">
                    <img src="/assets/images/logo.svg" width="35.61px" height="35.66px">
                </div>
                <div class="grid-item ml-auto mr-16 ">
                    <h2 class="">LOGO</h2>
                </div>
                <div class="grid-item ht-6 ml-auto mr-16 d-flex align-center justify-center">
                    <img class="mr-6" src="/assets/images/search.svg">
                    <img class="mr-6" src="/assets/images/wishlist.svg">
                    <img class="mr-6" src="/assets/images/cart.svg">
                    <img class="mr-6" src="/assets/images/profile.svg">
                    <div >
  <span class="language">ENG  </span> <img class="" src="/assets/images/dropdown-arrow.svg" width="10px">
  
</div>
                </div>
            </div>
            <div class="">
                <ui class="d-flex justify-center align-center">
                    <li>SHOP</li>
                    <li>SKILL</li>
                    <li>STORY</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ui>
            </div>
          
      
        </header>

</div>
</template>
<style lang="scss" scoped>
.card{
    height:220px
}
.heading{
    padding-top:40px;
    padding-bottom: 60px;
}
h2{
    font-size: 36px;
    font-weight: 800;
    font-family: "Inter";
    line-height: 43.57px;
    letter-spacing: 1px;
}
.language {
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
li{
    display: inline;
    padding: 0 16px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
h1{
    font-weight: 400;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: 1px;
}
.title-tag{
    min-height: 168px;
    width: 730px;
    margin-top: 72px;

}
</style>