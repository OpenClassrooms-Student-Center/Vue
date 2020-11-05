<script>
export default {
	name: "Contact",
	data() {
		return {
			address: "18 avenue du Beurre, Paris, France",
			email: "hello@cafewithavue.bakery",
			phone: "01 88 88 88 88"
		}
	}
}
</script>

<template>
	<div>
		<h2>Contactez nous</h2>
		<p>Adresse : {{ address }}</p>
		<p>Téléphone : {{ phone }}</p>
		<p>Email : {{ email }}</p>
		<p>Horaires :</p>
		<ul>
			<li>L-V: 06:00 à 16:00</li>
			<li>Samedi: 07:00 à 14:00</li>
			<li>Dimanche: 07:00 à 12:00</li>
		</ul>
	</div>
</template>

<style></style>
