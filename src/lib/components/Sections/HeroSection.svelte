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
	<h1 class="hero-title">Web Developer</h1>
	<h1 class="hero-subtitle">business management systems and interactive user experiences.</h1>
	<Button {onclick}>Let's Talk!</Button>
</section>

<style>
	.hero-section {
		padding-top: 60px;
	}

	.hero-title {
		font-size: 7vmax;
	}

	.hero-subtitle {
		font-size: 6vmax;
		color: grey;
		margin-bottom: 16px;
	}
</style>
