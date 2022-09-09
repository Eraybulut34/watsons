<template>
<div class="product-card">
  <div class="product-card-image">
    <img :src="product.image" alt="product image">
  </div>
  <div class="product-card-content">
    <div class="product-card-content-title">
      <h3>{{ product.title }}</h3>
    </div>
    <div class="product-card-content-price">
      <h3>{{ product.price }}</h3>
    </div>
    <div class="product-card-content-button">
      <button class="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
</template>


<script>
  export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>

</style>
