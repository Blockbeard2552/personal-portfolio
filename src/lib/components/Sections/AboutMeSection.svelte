<script lang="ts">
	import { SectionHeadline, Button, ExperienceTable } from '$components';
	import image from '$assets/about-me.png';
	import { goto } from '$app/navigation';

	interface AboutMeProps {
		workExperience: SanityWorkExperience[];
	}

	let { workExperience }: AboutMeProps = $props();

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="about-me mt-l">
	<SectionHeadline sectionName="about-me">About Me</SectionHeadline>
	<div class="mt-m content-container default-margin">
		<img class="image" src={image} alt="me" />
		<div class="text">
			<p>
				Hey, my name is Joseoh, the driving force behind my freelancing agency specializing in
				digital marketing and web development.
			</p>
			<p>
				With years of hands-on experience tackling real-world business management and coding
				challenges while meeting diverse client needs, I've built a deep understanding of the tech
				landscape. I have developed a diverse set of technologies and honed the skills required to
				solve complex problems for businesses and to help them get the most out of the tools and
				assets available to us today.
			</p>
			<p>
				I deeply value the relationship I have with my clients and the importance of their
				relastionship they have with their customers. I enjoy working with them to understand their
				needs and to help them achieve their goals.
			</p>
			<Button className="mt-m" {onclick}>Tell Me About Your Project!</Button>
		</div>
	</div>
	<ExperienceTable {workExperience} />
</section>

<style>
	.content-container {
		display: grid;
		grid-template-columns: 1fr 1fr; /* Default 2-column grid for larger screens */
		gap: 20px; /* Add space between the columns */
		justify-content: space-between;
		align-items: center;
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

	/* Responsive styles */
	@media (max-width: 1024px) {
		.content-container {
			grid-template-columns: 1fr; /* Switch to single-column layout for smaller screens */
		}

		.image {
			width: 100%; /* Ensure the image is responsive */
			max-height: 400px; /* Limit height on smaller screens */
			object-fit: cover; /* Cover the available space */
		}

		.text {
			text-align: justify; /* Improve readability on smaller screens */
		}
	}

	@media (max-width: 768px) {
		.about-me {
			padding: 20px; /* Reduce padding for smaller devices */
		}

		.image {
			max-height: 300px; /* Further limit image height */
		}

		.text p {
			font-size: 16px; /* Adjust font size for smaller screens */
			line-height: 1.6; /* Improve text readability */
		}

		.text {
			margin-top: 20px; /* Add some spacing above the text on mobile */
		}
	}

	@media (max-width: 480px) {
		.image {
			max-height: 200px; /* Ensure the image doesn't take up too much space on very small screens */
		}

		.text p {
			font-size: 14px; /* Further reduce font size for smaller screens */
		}
	}
</style>
