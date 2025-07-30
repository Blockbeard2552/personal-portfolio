<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="hero-section default-margin" aria-label="Hero introduction">
	<h3>Joseph D. Stephens</h3>
	<div class="underscore mb-m"></div>
	<h1 class="hero-title">Digital Marketing, Web Design, and Web Development</h1>
	<h1 class="hero-subtitle">I help businesses succeed online</h1>
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
