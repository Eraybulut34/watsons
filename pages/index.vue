<template>
  <div class="home">
    <div class="home-main-header container">
      <div class="flex-row col-12 px-0 mx-0 grid-2">
        <img src="../static/watsons-icon.png" class="mx-0 px-0 watsons-icon" alt="">
        <div class="col-7 flex-row search-bar">
          <i class="absolute zIndex100 ml-3">
            <img src="../static/search.png" alt="">
          </i>
          <input class="col-12 input py-1 pl-5" placeholder="Write the product or category you are looking for"
            type="text">
        </div>
        <div class="col-2 flex-row hello">
          <span class="hello-text pa-1">Hello,Clara Clara</span>
          <img src="../static/clara.png" alt="">
        </div>
        <div class="search-icon">
          <img src="../static/search.png" alt="">
        </div>
        <div class="more-icon">
          <img src="../static/more-icon.png" alt="">
        </div>
        <div class="basket-icon">
          <img src="../static/basket-icon.png" alt="">
        </div>
        <div class="hamburger">
          <img src="../static/hamburger.png" alt="">
        </div>
      </div>
      <div class="home-main-header-bottom flex-row justify-space-between col-12 mx-2">
        <span class="title height-auto" v-for="(title,i) in titles" :key="i">{{title}}</span>
      </div>
    </div>
    <div class="home-carousel flex-row justify-space-between">
      <div><img src="../static/left-arrow.png" class="px-4 arrow" alt=""></div>
      <div class="carousel-inner">
        <div class="carousel-left flex-column">
          <div class="carousel-small-title">
            NATURALS BY WATSONS
          </div>
          <div class="caorusel-big-title">
            The New 2021 Collection
          </div>
          <div class="carousel-description">
            Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let
            your hair be flexible and fresh.
          </div>
          <button class="shop-now-button">
            SHOP NOW
          </button>
        </div>
        <div class="carousel-right">
          <img src="../static/left-bottle.png">
          <img src="../static/bottle2.png" class="last-image">
        </div>
      </div>
      <div><img src="../static/right-arrow.png" class="px-4 arrow" alt=""></div>
    </div>
    <div class="home-main-content flex-column">
      <div class="featured-products-title">Featured Products</div>
      <div class="products grid-1">
        <ProductCard v-for="p in products" :key="p.id" :product="p" />
      </div>
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
import axiosService from "../services/axios-service"
import ProductCard from "../components/ProductCard.vue"
export default {
  data() {
    return {
      titles: [
        "CAMPAIGNS",
        "PERSONAL CARE",
        "SKIN CARE",
        "MAKE-UP",
        "MOTHER & BABY",
        "MEN CARE",
        "HEALTHY LIFE",
        "BRANDS"
      ],
      products: new Array
    };
  },
  methods: {
    getProducts() {
      axiosService.get("/products").then(res => this.products = res.data.products.slice(10, 13))
    }
  },
  mounted() {
    this.getProducts();
  },
  components: { ProductCard }
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
  width: 100%
}

.home-carousel {
  background-color: #F2F0FF;
  color: #fff;
  padding: 8rem;
}

.home-main-content {
  background-color: #fff;
  color: #fff;
  padding: 10px;
  padding-bottom: 1rem;
}

.hello-text {

  font-size: 1rem
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
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  max-height: 1.5rem;
  margin-bottom: 2rem;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
}


.carousel-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.carousel-small-title {
  color: #8493A8;
  font-weight: 700;
  font-size: 1rem;
  line-height: 16px;
}

.caorusel-big-title {
  color: #2A2A48;
  font-weight: 700;
  font-size: 2.7rem;
  line-height: 48px;
}

.carousel-description {
  color: #485363;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 24px;
}

.featured-products-title {
  text-align: center;
  color: #0099A8;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 48px;
  margin: 2rem 0;
}

.shop-now-button {
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  background-color: #FF27AD;
  border: none;
  border-radius: 0.3rem;
  height: 3rem;
  margin: 1rem 0;
}

.watsons-icon {
  width: 10rem;
  height: 3rem;
}

.products{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding-bottom: 1rem;;
}


@media screen and (max-width: 600px) {
  .px-4 {
    padding: 0px;
    margin: 0px;
  }

  .flex-row {
    flex-direction: column;
  }

  .hello {
    display: none;
  }

  .search-bar {
    display: none;
  }

  .watsons-logo {
    width: 22%;
  }

  .more-icon {
    display: none;
  }

  .home-main-header {
    height: 4.5rem;
  }

  .home-main-header-bottom {
    display: none;
  }

  .arrow {
    display: none;
  }

  .home-carousel {
    padding: 0;
  }

  .carousel-small-title {
    font-size: 0.8rem;
  }

  .caorusel-big-title {
    font-size: 1.5rem;
  }

  .carousel-description {
    font-size: 0.8rem;
  }

  .carousel-inner {
    flex-direction: column-reverse;
  }

  .carousel-left {
    padding: 2rem;
  }

  .first-image {
    display: none;
  }

  .last-image {
    display: none;
  }
  .search-icon{
    margin-left:2rem;
  }
  .product-card{
    width: 100%;
  }
  .product-card-content-title{
   padding: 0 2rem;
  }
  .product-card-image-picture{
    padding:0;
  }
  .products{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 600px) {
  .search-icon {
    display: none;
  }
  .shop-now-button {
    font-size:1rem;
    width: 9rem;
    height: 3rem;
  }
  .home-carousel{
    padding: 6rem;
  }
}
</style>
