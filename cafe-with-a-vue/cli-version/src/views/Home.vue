<template>
  <div>
    <h1>{{ restaurantName }}</h1>
    <p>
      Welcome to {{ restaurantName }}! We are known for our freshly baked bread
      and french pastries! Give you morning a warm start or treat yourself in
      the middle of the day. Our butter is imported from local farmers in
      France. Once you take your first bite, you will see why everyone can't get
      enough!
    </p>

    <h2>Menu</h2>
    <MenuItem
      v-for="item in simpleMenu"
      :addToShoppingCart="addToShoppingCart"
      :name="item.name"
      :image="item.image"
      :quantity="item.quantity"
      :inStock="item.inStock"
      :key="item.name"
    />

    <h2>Shopping Cart: {{ shoppingCart }} items</h2>

    <footer>{{ copyright }}</footer>
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem'

export default {
  name: 'Home',
  components: {
    MenuItem
  },
  data() {
    return {
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
