<script lang="ts">
	import SectionHeadline from '$components/SectionHeadline.svelte';

	interface SkillsSectionProps {
		skills: Skill[];
	}

	let { skills }: SkillsSectionProps = $props();
</script>

<section class="mt-l" aria-labelledby="Skills">
	<SectionHeadline sectionName="Skills">Skills</SectionHeadline>
	<div class="wrapper default-margin">
		<div class="skills-container mt-m">
			{#each skills as skill}
				<i class={skill.iconClass}></i>
			{/each}
		</div>
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.skills-container {
		width: 40%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 16px;
		column-gap: 10px;
	}

	i {
		font-size: 8vmin;
		color: black;
	}
</style>
