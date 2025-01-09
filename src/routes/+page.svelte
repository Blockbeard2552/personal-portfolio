<script>
	import { HeroSection, AboutMeSection } from '$components';

	const { data } = $props();

	$inspect(data);
</script>

<HeroSection />
<AboutMeSection />
