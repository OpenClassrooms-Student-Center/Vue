<template>
	<div class="hello">
		<h1>{{ title }}</h1>
		<Counter />
		<p>
			Pour découvrir le guide sur comment configurer / customiser ce projet,<br />
			jetez un oeil à
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener"
				>la documentation de Vue-CLI</a
			>.
		</p>
		<h3>Plugins CLI installés</h3>
		<ul>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
					target="_blank"
					rel="noopener"
					>babel</a
				>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
					target="_blank"
					rel="noopener"
					>eslint</a
				>
			</li>
		</ul>
		<h3>Liens essentiels</h3>
		<ul>
			<li>
				<a href="https://fr.vuejs.org/index.html" target="_blank" rel="noopener"
					>Documentation principale</a
				>
			</li>
			<li>
				<a href="https://forum.vuejs.org" target="_blank" rel="noopener"
					>Forum</a
				>
			</li>
			<li>
				<a href="https://chat.vuejs.org" target="_blank" rel="noopener"
					>Chat de la communauté</a
				>
			</li>
			<li>
				<a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
					>Twitter</a
				>
			</li>
			<li>
				<a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
			</li>
		</ul>
		<h3>Ecosystème</h3>
		<ul>
			<li>
				<a href="https://router.vuejs.org/fr/" target="_blank" rel="noopener"
					>vue-router</a
				>
			</li>
			<li>
				<a href="https://vuex.vuejs.org/fr/" target="_blank" rel="noopener"
					>vuex</a
				>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-devtools#vue-devtools"
					target="_blank"
					rel="noopener"
					>vue-devtools</a
				>
			</li>
			<li>
				<a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
					>vue-loader</a
				>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/awesome-vue"
					target="_blank"
					rel="noopener"
					>awesome-vue</a
				>
			</li>
		</ul>
	</div>
</template>

<script>
import Counter from "./Counter"

export default {
	name: "HelloWorld",
	data: {
		title: "OpenClassrooms - Quiz de la section 2"
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
