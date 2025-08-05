<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	const GA_ID = 'G-YG993BQZ2Y';

	function gtag(command: string, targetId?: string | Date, config?: Record<string, unknown>) {
		if (browser) {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push(arguments);
		}
	}

	function initializeAnalytics() {
		if (!browser) return;
		
		try {
			window.dataLayer = window.dataLayer || [];
			gtag('js', new Date());
			gtag('config', GA_ID, {
				page_title: document.title,
				page_location: window.location.href
			});
		} catch (error) {
			console.warn('Analytics initialization failed:', error);
		}
	}

	function trackPageView(url: string) {
		if (!browser) return;
		
		try {
			gtag('config', GA_ID, {
				page_path: url,
				page_title: document.title,
				page_location: window.location.href
			});
		} catch (error) {
			console.warn('Page view tracking failed:', error);
		}
	}

	// Initialize on mount
	if (browser) {
		initializeAnalytics();
	}

	// Track route changes
	afterNavigate((navigation) => {
		if (navigation.to?.url.pathname) {
			trackPageView(navigation.to.url.pathname);
		}
	});
</script>

<svelte:head>
	{#if browser}
		<script async src="https://www.googletagmanager.com/gtag/js?id={GA_ID}"></script>
	{/if}
</svelte:head>

<style>
	/* No visual component needed */
</style>