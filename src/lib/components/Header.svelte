<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';

	let isMenuOpen = false;

	function goToContactForm() {
		goto('/#contact-form');
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMenuOpen) {
			closeMenu();
		}
	}
</script>

<nav class="navbar" aria-label="Main navigation">
	<a href="/" class="logo">JDS</a>

	<button 
		class="menu-toggle" 
		onclick={toggleMenu} 
		onkeydown={handleKeyDown}
		aria-label="Toggle navigation menu"
		aria-expanded={isMenuOpen}
		aria-controls="main-menu"
	>
		<span class="menu-icon" aria-hidden="true">{isMenuOpen ? '✖' : '☰'}</span>
	</button>

	<div 
		id="main-menu"
		class={`navbar-links ${isMenuOpen ? 'open' : ''}`}
		role="menu"
		aria-hidden={!isMenuOpen}
		onkeydown={handleKeyDown}
	>
		<a href="/#about-me" class="nav-link" onclick={closeMenu} role="menuitem">About Me</a>
		<a href="/#my-work" class="nav-link" onclick={closeMenu} role="menuitem">My Work</a>
		<Button
			className="nav-bar"
			onclick={() => {
				goToContactForm();
				closeMenu();
			}}
		>
			Contact Me
		</Button>
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		position: relative;
		z-index: 2; /* Ensure navbar stays above the menu */
	}

	.logo {
		font-size: 35px;
		font-weight: bold;
		color: black;
		text-decoration: none;
	}

	.logo:focus {
		outline: 2px solid #007acc;
		outline-offset: 2px;
	}

	.navbar-links {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; /* Center items horizontally within the viewport */
		position: fixed; /* Make the nav cover the entire viewport */
		top: 10%;
		right: 0;
		height: 100%;
		width: 100%;
		background-color: white;
		padding: 40px 20px; /* Ensure padding keeps content away from edges */
		gap: 20px;
		transform: translateX(100%); /* Start off-screen */
		transition: transform 0.3s ease-in-out;
	}

	.navbar-links.open {
		transform: translateX(0); /* Slide into view when open */
	}

	.nav-link {
		font-size: 24px;
		text-align: center; /* Center text alignment */
		color: black;
		width: 100%; /* Ensure links take up the available space */
	}

	.nav-link:hover {
		text-decoration: underline;
	}

	.nav-link:focus {
		outline: 2px solid #007acc;
		outline-offset: 2px;
		text-decoration: underline;
	}

	.nav-bar {
		width: 100%; /* Full width button for mobile */
		text-align: center;
	}

	.menu-toggle {
		display: block;
		background: none;
		border: none;
		font-size: 28px;
		cursor: pointer;
	}

	.menu-toggle:focus {
		outline: 2px solid #007acc;
		outline-offset: 2px;
	}

	.menu-icon {
		font-size: 28px;
		color: black;
	}

	/* Desktop layout */
	@media (min-width: 769px) {
		.menu-toggle {
			display: none; /* Hide menu toggle button on larger screens */
		}

		.navbar-links {
			position: static;
			flex-direction: row;
			background: none;
			height: auto;
			width: auto;
			transform: none; /* No transform on desktop */
			gap: 60px;
			padding: 0;
		}

		.nav-link {
			font-size: 18px;
			text-align: left;
		}
	}
</style>
