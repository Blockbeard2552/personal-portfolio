<script lang="ts">
	import { Button, SectionHeadline } from '$components';

	let contactName = $state('Joseph Stephens');
	let contactEmail = $state('joey.stephens524@gmail.com');
	let projectInfo = $state('Something amazing');
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
				I'm available for freelance work. If you have a project that you want to get started, think
				you need my help with something, or just fancy saying hi, then get in touch.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		padding: 140px;
	}

	.form-container {
		display: flex;
		justify-content: space-between;
	}

	.form-text {
		width: 39%;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 45%;
	}

	form * {
		font-size: 20px;
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		color: black;
	}

	input {
		background-color: rgba(0, 0, 0, 0.035);
		border: none;
		border-radius: 10px;
		padding: 10px;
		margin-bottom: 10px;
		width: 100%;
		outline: none;
		border: none;
	}

	input {
		height: 48px;
	}

	textarea {
		height: 200px;
		margin-bottom: 40px;
	}

	textarea::placeholder input::placeholder {
		font-size: 20px;
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
</style>
