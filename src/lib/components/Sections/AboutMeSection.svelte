<script lang="ts">
	import { SectionHeadline } from '$components';
	import image from '$assets/about-me.jpeg';
	import Button from '$components/Button.svelte';
	import { goto } from '$app/navigation';

	function onclick() {
		goto('/contact-form');
	}
</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName="about-me">About Me</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img class="image" src={image} alt="me" />
		<div class="text">
			<p>
				Hey, I'm Joey, the driving force behind my freelancing agency specializing in web
				development and business management systems and processes.
			</p>
			<p>
				With years of hands-on experience tackling real-world business management and coding
				challenges while meeting diverse client needs, I've built a deep understanding of the tech
				landscape. I have developed a diverse set of technologies to solve complex problems at any
				scale.
			</p>
			<p>
				Through my courses, I’m committed to sharing the insights and lessons I’ve learned in the
				field, so you can skip the pitfalls and fast-track your development journey. If you're eager
				to learn from real-world experience and practical know-how, let's dive in together.
			</p>
			<Button className="mt-m" {onclick}>Let's Talk!</Button>
		</div>
	</div>
</section>

<style>
	.content-container {
		display: flex;
		justify-content: space-between;
		align-items: strertch;
	}

	.image {
		width: 42%;
		border-radius: 20px;
		object-fit: cover;
	}

	.text {
		width: 55%;
		text-align: left;
	}
</style>
