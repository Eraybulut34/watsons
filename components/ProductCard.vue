<template>
  <div class="product-card">
    <div class="product-card-image center">
      <img :src="product.thumbnail" width="70%" alt="product-image" class="product-card-image-picture">
    </div>
    <div class="product-card-content">
      <div>
        <span class="product-card-content-title center">{{ product.title }}</span>
      </div>
      <div class="product-card-content-price">
        <span>{{ product.description.slice(0,25) }}</span>
      </div>
      <button class="product-shop-button">
        SHOP NOW
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
.product-card {
  background-color: rgba(236, 236, 236, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 16.25rem;
  height: 21rem;
}

.product-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.product-card-content-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2A2A48;
  padding:  0 2rem;
  text-align: center;
}

.product-card-content-price {
  font-size: 1rem;
  font-weight: 400;
  color: #485363;
  padding: 0 1.5rem;
  text-align: center;
}

.product-card-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
}

.product-card-image-picture {
  padding: 0;
}
.product-shop-button {
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  background-color: #FF27AD;
  border: none;
  border-radius: 0.3rem;
  height: 2rem;
  width: 90%;
  margin: 1rem 0;
}
</style>
