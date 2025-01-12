<script lang="ts">
	let { data } = $props();

	const { company, name, dateAccomplished, stack, projectImageUrl, content } = data.project;

	function getTagFromStyle(style: ProcessedTextContent['style']): string {
		if (style === 'normal') {
			return 'p';
		} else {
			return style;
		}
	}
	$inspect(data);
</script>

<main class="work-page default-margin">
	<h4>{company}</h4>
	<div class="underscore"></div>
	<h2 class="mb-s">{name}</h2>
	<img class="project-image" src={projectImageUrl} alt="" />
	<div class="project-container">
		<div class="meta-data">
			<h3 class="mb-s">Date</h3>
			<p>{dateAccomplished.slice(0, 7)}</p>
			<h3 class="semi-bold mt-m">Tech Stack</h3>
			<ul>
				{#each stack as skill}
					<li>{skill}</li>
				{/each}
			</ul>
		</div>
		<div class="project-text">
			{#each content as block}
				{#if block.type === 'text'}
					<svelte:element this={getTagFromStyle(block.style)}>{block.textToRender}</svelte:element>
				{:else}
					<img class="content-image" src={block.url} alt="" />}
				{/if}
			{/each}
		</div>
	</div>
</main>

<style>
	/* General Styling */
	.work-page {
		padding: 40px 20px; /* Reduced padding for better spacing on smaller screens */
	}

	h4 {
		font-size: 18px; /* Adjusted font size for smaller screens */
	}

	h2 {
		font-size: 28px;
		margin-bottom: 16px;
	}

	.underscore {
		width: 100px;
		height: 2px;
		background-color: black;
		margin: 8px 0;
	}

	.project-image {
		width: 100%;
		max-height: 450px;
		object-fit: cover;
		border-radius: 10px; /* Added a slight border radius for a more modern look */
		margin-bottom: 20px;
	}

	.content-image {
		width: 100%;
		border-radius: 10px; /* Consistency in design with a border radius */
		margin: 20px 0; /* Added spacing between content images */
	}

	.project-container {
		display: flex;
		gap: 40px;
	}

	.meta-data {
		min-width: 200px;
	}

	.meta-data h3 {
		font-size: 20px;
		margin-bottom: 8px;
	}

	.meta-data ul {
		margin-top: 12px;
		padding-left: 20px;
	}

	.meta-data ul li {
		font-size: 16px;
		line-height: 1.6;
	}

	.project-text p,
	.project-text h3,
	.project-text ul,
	.project-text li {
		font-size: 16px;
		line-height: 1.6;
	}

	/* Mobile-Friendly Adjustments */
	@media (max-width: 768px) {
		.work-page {
			padding: 20px; /* Reduced padding for smaller screens */
		}

		h2 {
			font-size: 24px; /* Adjusted font size for mobile */
		}

		.project-container {
			flex-direction: column; /* Stack the meta-data and project-text vertically */
		}

		.meta-data {
			min-width: 100%; /* Allow meta-data to take full width */
			margin-bottom: 20px; /* Add spacing between meta-data and project-text */
		}

		.project-text p,
		.project-text h3,
		.project-text ul,
		.project-text li {
			font-size: 14px; /* Slightly smaller font size for better readability on mobile */
		}
	}

	@media (max-width: 480px) {
		h4 {
			font-size: 16px; /* Further reduced font size for very small devices */
		}

		h2 {
			font-size: 20px; /* Adjusted for very small screens */
		}

		.meta-data ul li {
			font-size: 14px; /* Smaller font size for tech stack list */
		}

		.project-image {
			max-height: 300px; /* Reduce image height to avoid taking up too much space on small devices */
		}

		.content-image {
			margin: 16px 0; /* Reduced margin between images on small devices */
		}
	}
</style>
