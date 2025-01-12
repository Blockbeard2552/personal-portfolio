<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		children: Snippet;
		onclick: ((e: MouseEvent) => void) | (() => void);
		className?: string;
	}

	let { children, className, ...props }: ButtonProps = $props();
</script>

<button class={`btn ${className}`} {...props}>
	{@render children()}
</button>

<style>
	.btn {
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		background-color: black;
		color: white;
		font-size: 1.2rem; /* Default font size */
		padding: 1rem 2rem; /* Default padding */
		border: none;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}

	.btn:hover {
		background-color: #333; /* Slightly lighter black on hover */
	}

	.btn:active {
		transform: scale(0.98); /* Add click feedback */
	}

	/* Mobile-friendly adjustments */
	@media (max-width: 768px) {
		.btn {
			font-size: 1rem; /* Reduce font size slightly for smaller screens */
			padding: 0.8rem 1.5rem; /* Adjust padding to fit smaller devices */
		}
	}

	@media (max-width: 480px) {
		.btn {
			font-size: 0.9rem; /* Further reduce font size for very small devices */
			padding: 0.6rem 1rem; /* Reduce padding further */
			border-radius: 8px; /* Slightly smaller border radius */
		}
	}
</style>
