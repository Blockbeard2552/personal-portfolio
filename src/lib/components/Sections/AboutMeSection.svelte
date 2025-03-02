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
				Hey, my name is Joseph, I am the driving force behind my freelancing agency specializing in
				digital marketing and web development.
			</p>
			<p>
				With years of hands-on experience in business management and coding, I have developed a deep
				understanding of the tech landscape. I have gained extensive knowledge and expertise across
				a diverse range of technologies, refining the skills needed to solve complex business
				challenges. My goal is to help businesses maximize the potential of the tools and assets
				available to them today.
			</p>
			<p>
				I deeply value the relationships I have with my clients and I understand the importance of
				the relastionships they have with their customers.
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
