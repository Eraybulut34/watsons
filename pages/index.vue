<template>
  <div class="home">
    <div class="home-main-header container">
      <div class="flex-row col-12 px-0 mx-0">
        <img src="../static/watsons-icon.png" class="col-3 mx-0 px-0 " alt="">
        <div class="col-6 flex-row">
          <i class="absolute zIndex100 ml-1">
            <img src="../static/search.png" alt="">
          </i>
          <input class="col-12 input py-1 ml-1" placeholder="Write the product or category you are looking for"
            type="text">
        </div>
        <div class="col-3">
          <span>Hello,Clara Clara</span>
          <img src="../static/clara.png" alt="">
        </div>

      </div>
      <div class="home-main-header-bottom flex-row justify-space-between col-12 mx-2">
        <div class="title height-auto" v-for="(title,i) in titles" :key="i">{{title}}</div>
      </div>
    </div>
    <div class="home-carousel flex-row justify-space-between">
      <div><img src="../static/left-arrow.png" class="px-4" alt=""></div>
      <div class="carousel-inner flex-row">
        <div class="carousel-left col-6 flex-column">
          <div class="carousel-small-title">
            NATURALS BY WATSONS
          </div>
          <div class="caorusel-big-title">
            The New 2021 Collection
          </div>
          <div class="carousel-description">
            Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.
          </div>
        </div>
        <div class="carousel-right flex-row">
<img src="../static/bottle.png" alt="">
<img src="../static/bottle2.png" alt="">
        </div>
      </div>
      <div ><img src="../static/right-arrow.png" class="px-4" alt=""></div>
    </div>
    <div class="home-main-content">
    </div>
    <div class="signup-newsletter">
    </div>
    <div class="ads">
    </div>

    <div class="featured-categories">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        'CAMPAIGNS',
        'PERSONAL CARE',
        'SKIN CARE',
        'MAKE-UP',
        'MOTHER & BABY',
        'MEN CARE',
        'HEALTHY LIFE',
        'BRANDS'
      ]
    }
  }
}
</script>

<style>
.home {
  width: 100%
}

.home-main-header {
  background-color: #fff;
  padding: 10px;
  height: 10rem;
}

.home-carousel {
  background-color: #F2F0FF;
  color: #fff;
  padding: 10px;
  height: 28.5rem;
}

.home-main-content {
  background-color: #fff;
  color: #fff;
  padding: 10px;
  height: 40rem;
}

.signup-newsletter {
  background-color: #F2F0FF;
  color: #fff;
  padding: 10px;
  height: 12rem;
}

.ads {
  background-color: #10A0AE;
  color: #fff;
  padding: 10px;
  height: 28.5rem;
}

.featured-categories {
  background-color: #fff;
  color: #fff;
  padding: 10px;
  height: 66rem;
}

.home-main-header-bottom {
  max-height: 1.5rem;
  margin-bottom: 2rem;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-small-title{
  color: #8493A8;
  font-weight: 700;
  font-size: 1rem;
  line-height: 16px;
}

.caorusel-big-title{
  color: #2A2A48;
  font-weight: 700;
  font-size: 2.7rem;
  line-height: 48px;
}

.carousel-description{
  color: #485363;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 24px;
}
</style>
