<script lang="ts">
	import { SectionHeadline, Button, ExperienceTable } from '$components';
	import image from '$assets/about-me.png';
	import { goto } from '$app/navigation';

	interface AboutMeProps {
		workExperience: SanityWorkExperience[];
	}

	let { workExperience }: AboutMeProps = $props();

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
			<Button className="mt-m" {onclick}>Tell Me About Your Project!</Button>
		</div>
	</div>
	<ExperienceTable {workExperience} />
</section>

<style>
	.content-container {
		display: grid;
		justify-content: space-between;
		align-items: strertch;
	}

	.image {
		width: 846px;
		max-height: 546px;
		border-radius: 20px;
		object-fit: contain;
		margin-bottom: 20px;
	}

	.text {
		width: 100%;
		text-align: left;
	}
</style>
