<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="hero-section default-margin">
	<h3>Hello! I'm Joey</h3>
	<div class="underscore mb-m"></div>
	<h1>I am a Svelte developer specializing in</h1>
	<h1 class="dark-grey mb-m">business management systems and interactive user experiences.</h1>
	<Button {onclick}>Let's Talk!</Button>
</section>

<style>
	.hero-section {
		padding-top: 60px;
	}
</style>
