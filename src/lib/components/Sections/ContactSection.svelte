<script lang="ts">
	import { Button, SectionHeadline } from '$components';

	let contactName = $state('');
	let contactEmail = $state('');
	let projectInfo = $state('');
	let isFormInvalid = $state(false);
	let isEmailSent = $state(false);
	let showErrorMessage = $state(false);
	let isLoading = $state(false);

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

<section class="mt-l" aria-labelledby="contact-form">
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
			<form onsubmit={onSubmit} novalidate aria-label="Contact form">
				{#if isFormInvalid}
					<div class="error-message" role="alert" aria-live="polite">
						Please fill in all required fields.
					</div>
				{/if}
				
				<div class="input-group">
					<label for="contact-name" class="visually-hidden">Your Name (required)</label>
					<input
						id="contact-name"
						type="text"
						class={`text-input mb-m`}
						class:input-error={isFormInvalid && !Boolean(contactName.length)}
						placeholder="Your Name"
						required
						aria-required="true"
						aria-invalid={isFormInvalid && !Boolean(contactName.length)}
						aria-describedby={isFormInvalid && !Boolean(contactName.length) ? 'name-error' : undefined}
						bind:value={contactName}
					/>
					{#if isFormInvalid && !Boolean(contactName.length)}
						<span id="name-error" class="error-text" role="alert">Name is required</span>
					{/if}
				</div>
				
				<div class="input-group">
					<label for="contact-email" class="visually-hidden">Your Email Address (required)</label>
					<input
						id="contact-email"
						type="email"
						class="text-input mb-m"
						class:input-error={isFormInvalid && !Boolean(contactEmail.length)}
						placeholder="Your Email"
						required
						aria-required="true"
						aria-invalid={isFormInvalid && !Boolean(contactEmail.length)}
						aria-describedby={isFormInvalid && !Boolean(contactEmail.length) ? 'email-error' : undefined}
						bind:value={contactEmail}
					/>
					{#if isFormInvalid && !Boolean(contactEmail.length)}
						<span id="email-error" class="error-text" role="alert">Email is required</span>
					{/if}
				</div>
				
				<div class="input-group">
					<label for="project-info" class="visually-hidden">Project Information (required)</label>
					<textarea
						id="project-info"
						class="textarea mb-m"
						class:input-error={isFormInvalid && !Boolean(projectInfo.length)}
						placeholder="Let me know how I can help you."
						required
						aria-required="true"
						aria-invalid={isFormInvalid && !Boolean(projectInfo.length)}
						aria-describedby={isFormInvalid && !Boolean(projectInfo.length) ? 'project-error' : undefined}
						bind:value={projectInfo}
					></textarea>
					{#if isFormInvalid && !Boolean(projectInfo.length)}
						<span id="project-error" class="error-text" role="alert">Project information is required</span>
					{/if}
				</div>
				
				<Button onclick={onSubmit} type="submit" aria-describedby="submit-help">Submit</Button>
				<span id="submit-help" class="visually-hidden">Submit the contact form to send your message</span>
			</form>
		{/if}

		<div class="form-text">
			<h3 class="bold mb-s">Talk to me about your project</h3>
			<p>
				I always get excited about new projects and the opportunity they bring. If you have any
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

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}

	.input-group {
		position: relative;
		width: 100%;
	}

	.error-message {
		background-color: #fee;
		border: 1px solid #fcc;
		color: #c33;
		padding: 12px;
		border-radius: 8px;
		margin-bottom: 16px;
		font-weight: 500;
	}

	.error-text {
		color: #c33;
		font-size: 14px;
		font-weight: 500;
		margin-top: 4px;
		display: block;
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
