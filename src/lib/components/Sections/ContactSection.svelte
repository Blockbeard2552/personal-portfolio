<script lang="ts">
	import { Button, SectionHeadline } from '$components';

	let contactName = $state('');
	let contactEmail = $state('');
	let projectInfo = $state('');
	let isFormInvalid = $state(false);
	let isEmailSent = $state(false);
	let showErrorMessage = $state(false);
	let isLoading = $state(false);

	$inspect(isEmailSent);

	async function onSubmit(event: Event) {
		event.preventDefault();

		if (contactName && contactEmail && projectInfo) {
			// send data to backend
			isLoading = true;
			const response = await fetch('/api/send-mail', {
				method: 'POST',
				body: JSON.stringify({
					contactName,
					contactEmail,
					projectInfo
				}),
				headers: { 'Content-Type': 'application/json' }
			});
			isLoading = false;
			if (response.ok) {
				isEmailSent = true;
			} else {
				showErrorMessage = true;
			}
		} else {
			isFormInvalid = true;
		}
	}

	$effect(() => {
		if (contactName || contactEmail || projectInfo) {
			isFormInvalid = false;
		}
	});
</script>

<section class="mt-l">
	<SectionHeadline sectionName="contact-form">Let's Talk</SectionHeadline>
	<div class="form-container default-margin mt-m">
		{#if isEmailSent}
			<div class="spinner-container">
				<h3>Thank you for getting in contact, I usually get back to you within 24 hours</h3>
			</div>
		{:else if isLoading}
			<div class="spinner-container">
				<div class="spinner"></div>
				<h3>Sending your message...</h3>
			</div>
		{:else if showErrorMessage}
			<h3>
				We seem to be having trouble with our server at the moment. Please send me an email directly
				to <a class="link" href="mailto:joey.stephens524@gmail.com">joey.stephens524@gmail.com</a>"
			</h3>
		{:else}
			<form>
				<input
					class={`text-input mb-m`}
					class:input-error={isFormInvalid && !Boolean(contactName.length)}
					placeholder="Your Name"
					bind:value={contactName}
				/>
				<input
					class="text-input mb-m"
					class:input-error={isFormInvalid && !Boolean(contactEmail.length)}
					placeholder="Your Email"
					bind:value={contactEmail}
				/>
				<textarea
					class="textarea mb-m"
					class:input-error={isFormInvalid && !Boolean(projectInfo.length)}
					placeholder="Let me know how I can help you."
					bind:value={projectInfo}
				></textarea>
				<Button onclick={onSubmit}>Submit</Button>
			</form>
		{/if}

		<div class="form-text">
			<h3 class="bold mb-s">Talk to me about your project</h3>
			<p>
				I always get excited about new projects and the oppertunity they bring. If you have any
				questions about a project or just want to chat, don't hesitate to get in touch.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		padding: 100px 20px; /* Adjust padding for smaller screens */
	}

	.form-container {
		display: flex;
		flex-wrap: wrap; /* Allow the form and text to stack */
		justify-content: space-between;
		gap: 20px; /* Add spacing between elements */
	}

	.form-text {
		width: 39%; /* Default width for larger screens */
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 45%; /* Default width for larger screens */
	}

	form * {
		font-size: 18px; /* Slightly smaller font for better readability on mobile */
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		color: black;
	}

	input,
	textarea {
		background-color: rgba(0, 0, 0, 0.035);
		border: none;
		border-radius: 10px;
		padding: 10px;
		width: 100%;
		outline: none;
	}

	input {
		height: 48px;
		margin-bottom: 10px;
	}

	textarea {
		height: 200px;
		margin-bottom: 40px;
	}

	textarea::placeholder,
	input::placeholder {
		font-size: 18px;
		font-weight: 400;
	}

	.input-error {
		background-color: rgba(223, 87, 87, 0.667);
	}

	.input-error::placeholder {
		color: white;
	}

	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-left-color: black;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		margin-right: 10px;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.spinner-container {
		display: flex;
		align-items: center;
	}

	/* Responsive Styles */
	@media (max-width: 768px) {
		.form-container {
			flex-direction: column; /* Stack form and text vertically */
		}

		.form-text,
		form {
			width: 100%; /* Take full width on smaller screens */
		}

		textarea {
			height: 150px; /* Reduce height for smaller screens */
		}
	}

	@media (max-width: 480px) {
		form * {
			font-size: 16px; /* Further reduce font size for smaller devices */
		}

		input {
			height: 40px; /* Adjust input height */
		}

		textarea {
			height: 120px; /* Further reduce textarea height */
		}
	}
</style>
