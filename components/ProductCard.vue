<template>
  <div class="product-card">
    <div class="product-card-image center">
      <img :src="product.thumbnail" width="40%" alt="product-image">
    </div>
    <div class="product-card-content center">
      <div>
        <h3 class="product-card-content-title center">{{ product.title }}</h3>
      </div>
      <div class="product-card-content-price">
        <h3>{{ product.description.slice(0,35) }}</h3>
      </div>
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
}

.product-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.product-card-content-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #505357;
}

.product-card-content-price {
  font-size: 1rem;
  font-weight: 600;
  color: #505357;
  padding: 1rem;
}

.product-card-image {
  width: 70%;
  height: 12.5rem;
}
</style>
