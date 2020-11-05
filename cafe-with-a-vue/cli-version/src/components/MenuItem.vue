<script>
import BaseButton from "./BaseButton.vue"

export default {
	name: "MenuItem",
	components: {
		BaseButton
	},
	props: {
		image: {
			type: Object,
			required: true
		},
		inStock: {
			type: Boolean,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		quantity: {
			type: Number,
			defaut: 1
		}
	},
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
	methods: {
		updateShoppingCart(quantity) {
			this.$emit("add-items-to-cart", quantity)
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
	<div class="menu-item">
		<img class="menu-item__image" :src="image.source" :alt="image.alt" />
		<div>
			<h3>{{ name }}</h3>
			<p>
				Prix : {{ generatedPrice }}
				<span v-if="onSale">(10% de réduction !)</span>
			</p>
			<p v-if="inStock">En stock</p>
			<p v-else>En rupture de stock</p>
			<div>
				<label for="add-item-quantity">Quantité : {{ quantity }}</label>
				<input v-model.number="quantity" id="add-item-quantity" type="number" />
				<BaseButton @click="updateShoppingCart(quantity)">
					Ajouter au panier
				</BaseButton>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.menu-item {
	display: flex;
	width: 500px;
	justify-content: space-between;
	margin-bottom: 30px;

	&__image {
		max-width: 300px;
	}
}
</style>
