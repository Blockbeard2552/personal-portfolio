<script>
	import {
		HeroSection,
		AboutMeSection,
		MyWorkSection,
		SkillsSection,
		ContactSection
	} from '$components';

	const { data } = $props();
	let { workExperience, projects, skills } = data;
</script>

<svelte:head>
	<title>Joseph Stephens - Full Stack Developer & Software Engineer</title>
	<meta
		name="description"
		content="Full Stack Developer specializing in JavaScript, and modern web technologies. View my portfolio of web applications, software projects, and professional experience."
	/>
	<meta
		name="keywords"
		content="Joseph Stephens, Full Stack Developer, Software Engineer, JavaScript, React, SvelteKit, Node.js, Web Development"
	/>
	<meta name="author" content="Joseph Stephens" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://josephdstephens.com/" />
	<meta property="og:title" content="Joseph Stephens - Full Stack Developer & Software Engineer" />
	<meta
		property="og:description"
		content="Full Stack Developer specializing in JavaScript, and modern web technologies. View my portfolio of web applications and software projects."
	/>
	<meta property="og:image" content="https://josephdstephens.com/og-image.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://josephdstephens.com/" />
	<meta
		property="twitter:title"
		content="Joseph Stephens - Full Stack Developer & Software Engineer"
	/>
	<meta
		property="twitter:description"
		content="Full Stack Developer specializing in JavaScript, and modern web technologies. View my portfolio of web applications and software projects."
	/>
	<meta property="twitter:image" content="https://josephdstephens.com/og-image.png" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://josephdstephens.com/" />

	<!-- Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Joseph Stephens",
			"jobTitle": "Full Stack Developer",
			"description": "Full Stack Developer specializing in JavaScript, and modern web technologies",
			"url": "https://josephdstephens.com",
			"sameAs": [
				"https://github.com/Blockbeard2552",
				"https://www.linkedin.com/in/joseph-d-stephens-9128b1299/",
				"https://www.youtube.com/@josephdstephens6504"
			],
			"knowsAbout": [
				"JavaScript",
				"React",
				"SvelteKit",
				"Node.js",
				"Full Stack Development",
				"Software Engineering"
			]
		}
	</script>
</svelte:head>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />
