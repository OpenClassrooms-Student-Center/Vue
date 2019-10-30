<template>
  <div id="app">
    <h1>{{ restaurantName }}</h1>
    <p>
      Welcome to {{ restaurantName }}! We are known for our freshly baked bread
      and french pastries! Give you morning a warm start or treat yourself in
      the middle of the day. Our butter is imported from local farmers in
      France. Once you take your first bite, you will see why everyone can't get
      enough!
    </p>

    <h2>Menu</h2>
    <div v-for="item in simpleMenu" :key="item.name">
      <h3>{{ item.name }}</h3>
      <img :src="item.image.source" :alt="item.image.alt" />
      <p v-if="item.inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <div>
        <label for="add-item-quantity">Quantity: {{ item.quantity }}</label>
        <input
          v-model.number="item.quantity"
          id="add-item-quantity"
          type="number"
        />
        <button @click="addToShoppingCart(item.quantity)">
          Add to Shopping Cart
        </button>
      </div>
    </div>

    <h2>Shopping Cart: {{ shoppingCart }} items</h2>

    <h2>Contact Us</h2>
    <p>Address: {{ address }}</p>
    <p>Phone: {{ phone }}</p>
    <p>Email: {{ email }}</p>
    <p>Hours:</p>
    <ul>
      <li>M-F: 06:00 to 16:00</li>
      <li>Saturday: 07:00 to 14:00</li>
      <li>Sunday: 07:00 to 12:00</li>
    </ul>
    <footer>{{ copyright }}</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      address: '9274 Beurre Ave, Paris, France',
      email: 'hello@cafewithavue.bakery',
      phone: '+08 88 88 88 88 88',
      restaurantName: 'Cafe with A Vue',
      shoppingCart: 0,
      simpleMenu: [
        {
          name: 'Crossiant',
          image: {
            source: '/images/crossiant.jpg',
            alt: 'A crossiant'
          },
          inStock: true,
          quantity: 1
        },
        {
          name: 'French Baguette',
          image: {
            source: '/images/french-baguette.jpeg',
            alt: 'Four French Baguettes'
          },
          inStock: true,
          quantity: 1
        },
        {
          name: 'Éclair',
          image: {
            source: '/images/eclair.jpg',
            alt: 'Chocolate Éclair'
          },
          inStock: false,
          quantity: 1
        }
      ]
    }
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear()

      return `Copyright ${this.restaurantName} ${currentYear}`
    }
  },
  methods: {
    addToShoppingCart(amount) {
      this.shoppingCart += amount
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
