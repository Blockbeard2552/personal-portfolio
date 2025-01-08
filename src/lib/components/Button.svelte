<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		children: Snippet;
		onclick: (e: MouseEvent) => void | (() => void);
		className?: string;
	}
	let { children, className, ...props }: ButtonProps = $props();
</script>

<button class={`btn ${className}`}>
	{@render children()}
</button>

<style>
	.btn {
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		background-color: black;
		color: white;
		font-size: 1.2rem;
		padding: 1rem 2rem;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}
</style>
