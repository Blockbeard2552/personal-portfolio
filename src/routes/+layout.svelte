<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import Analytics from '$components/Analytics.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Analytics />
<a href="#main-content" class="skip-link">Skip to main content</a>
<Header />
<main id="main-content" tabindex="-1">
	{@render children()}
</main>
<Footer />

<style>
	.skip-link {
		position: absolute;
		top: -40px;
		left: 6px;
		background: #000;
		color: #fff;
		padding: 8px;
		z-index: 100;
		text-decoration: none;
		border-radius: 4px;
	}
	
	.skip-link:focus {
		top: 6px;
	}
</style>
