<script lang="ts">
	interface ExperienceTableProps {
		workExperience: SanityWorkExperience[];
	}

	let { workExperience }: ExperienceTableProps = $props();
</script>

<section class="default-margin work-experience mt-l">
	<h2 class="headline">Past Work <br /> Experience</h2>
	<ul class="work-experience-list">
		{#each workExperience as job}
			<li class="work-item">
				<article>
					<h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
					<div class="company-and-date">
						<p>{job.company}</p>
						<p class="dark-grey"></p>
						{job.startDate.slice(0, 7)}
						{#if job.endDate}
							/ {job.endDate.slice(0, 7)}
						{:else}
							/ present
						{/if}
					</div>
				</article>
			</li>
		{/each}
	</ul>
</section>

<style>
	.work-experience {
		display: grid;
		justify-content: space-between;
		width: 100%; /* Allow it to scale within its container */
		max-width: 1200px; /* Set a maximum width for larger screens */
		margin: 0 auto; /* Center the section horizontally */
		grid-template-columns: 1fr; /* Default to one column */
		gap: 16px; /* Add spacing between grid items */
		padding: 0 16px; /* Prevent content from touching the viewport edges */
		padding-top: 24px;
		box-sizing: border-box; /* Ensure padding is included in the element's total width */
		overflow-x: hidden; /* Prevent horizontal overflow */
	}

	/* Media query for larger screens */
	@media (min-width: 768px) {
		.work-experience {
			grid-template-columns: repeat(2, 1fr); /* Two columns */
		}
	}
	.work-experience-list {
		width: 100%; /* Allow list to scale within container */
		box-sizing: border-box; /* Include padding/border in element's total width */
		overflow-x: hidden; /* Prevent list content from overflowing */
	}
	.headline {
		text-align: center;
	}
	.work-item {
		border-bottom: 1px solid #f0eded;
		padding-bottom: 12px;
	}
	.work-item:not(:first-of-type) {
		padding-top: 16px;
	}
	.work-item {
		word-wrap: break-word; /* Break long words that could overflow */
		overflow-wrap: break-word; /* Compatibility for word breaking */
	}
	.company-and-date {
		display: flex;
		justify-content: space-between;
	}
</style>
