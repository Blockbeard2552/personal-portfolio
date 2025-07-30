<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Privacy Policy - Joseph Stephens</title>
	<meta name="description" content="Privacy policy for Joseph Stephens' portfolio website" />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="rounded-lg bg-white p-8 shadow-sm">
			<h1 class="mb-8 text-3xl font-bold text-gray-900">Privacy Policy</h1>

			<div class="prose prose-gray max-w-none">
				<p class="mb-6 text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

				<h2>Information We Collect</h2>
				<p>This website collects the following information:</p>
				<ul>
					<li>
						<strong>Analytics Data:</strong> We use Google Analytics to understand how visitors interact
						with our site. This includes page views, session duration, and general location data.
					</li>
					<li>
						<strong>Contact Information:</strong> When you use our contact form, we collect your name,
						email address, and project information to respond to your inquiry.
					</li>
				</ul>

				<h2>How We Use Your Information</h2>
				<ul>
					<li>To improve our website and user experience</li>
					<li>To respond to your contact form submissions</li>
					<li>To understand website traffic and usage patterns</li>
				</ul>

				<h2>Cookies and Tracking</h2>
				<p>
					This website uses Google Analytics, which may set cookies to track website usage. These
					cookies help us understand how visitors use our site but do not collect personally
					identifiable information.
				</p>

				<h2>Data Sharing</h2>
				<p>We do not sell, trade, or share your personal information with third parties, except:</p>
				<ul>
					<li>With Google Analytics for website analytics purposes</li>
					<li>When required by law</li>
				</ul>

				<h2>Data Security</h2>
				<p>
					We implement appropriate security measures to protect your information. Contact form
					submissions are transmitted securely and stored only as needed to respond to your inquiry.
				</p>

				<h2>Your Rights</h2>
				<p>You have the right to:</p>
				<ul>
					<li>Request information about what personal data we have about you</li>
					<li>Request deletion of your personal data</li>
					<li>Opt-out of Google Analytics tracking by using browser settings or ad blockers</li>
				</ul>

				<h2>Contact</h2>
				<p>
					If you have questions about this privacy policy, please contact me at <a
						href="mailto:owner@josephdstephens.com"
						class="text-blue-600 hover:text-blue-800">owner@josephdstephens.com</a
					>.
				</p>

				<h2>Changes to This Policy</h2>
				<p>
					This privacy policy may be updated from time to time. The last updated date is shown at
					the top of this page.
				</p>
			</div>

			<div class="mt-8 border-t border-gray-200 pt-6">
				<a href="/" class="font-medium text-blue-600 hover:text-blue-800">← Back to Portfolio</a>
			</div>
		</div>
	</div>
</div>

<style>
	.prose h2 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #111827;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.prose p {
		color: #374151;
		margin-bottom: 1rem;
		line-height: 1.625;
	}

	.prose ul {
		color: #374151;
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	.prose li {
		margin-bottom: 0.5rem;
	}

	.prose a {
		color: #2563eb;
		text-decoration: underline;
	}

	.prose a:hover {
		color: #1e40af;
	}
</style>
