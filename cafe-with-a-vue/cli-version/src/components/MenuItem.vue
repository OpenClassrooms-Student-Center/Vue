<script>
export default {
  name: 'MenuItem',
  props: ['addToShoppingCart', 'image', 'inStock', 'name', 'price', 'quantity'],
  data() {
    return {
      onSale: false
    }
  },
  computed: {
    generatedPrice() {
      if (this.onSale) {
        return (this.price * 0.9).toFixed(2)
      } else {
        return this.price
      }
    }
  },
  beforeMount() {
    const today = new Date().getDate()

    if (today % 2 === 0) {
      this.onSale = true
    }
  }
}
</script>

<template>
  <div>
    <h3>{{ name }}</h3>
    <img :src="image.source" :alt="image.alt" />
    <p>Price: {{ generatedPrice }} <span v-if="onSale">(10% off!)</span></p>
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>
    <div>
      <label for="add-item-quantity">Quantity: {{ quantity }}</label>
      <input v-model.number="quantity" id="add-item-quantity" type="number" />
      <button @click="addToShoppingCart(quantity)">
        Add to Shopping Cart
      </button>
    </div>
  </div>
</template>

<style></style>
