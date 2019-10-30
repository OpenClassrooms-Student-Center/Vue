<template>
  <div>
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Welcome to {{ restaurantName }}! We are known for our freshly baked bread
      and french pastries! Give you morning a warm start or treat yourself in
      the middle of the day. Our butter is imported from local farmers in
      France. Once you take your first bite, you will see why everyone can't get
      enough!
    </p>

    <section class="menu">
      <h2>Menu</h2>
      <MenuItem
        v-for="item in simpleMenu"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :quantity="item.quantity"
        :inStock="item.inStock"
        :key="item.name"
      />
    </section>

    <div class="shopping-cart">
      <h2>Shopping Cart: {{ shoppingCart }} items</h2>
    </div>

    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters({
      copyright: 'copyright'
    }),
    ...mapState({
      restaurantName: 'restaurantName',
      shoppingCart: 'shoppingCart',
      simpleMenu: 'simpleMenu'
    })
  }
}
</script>

<style lang="scss">
.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  font-style: italic;
  text-align: center;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}
</style>
