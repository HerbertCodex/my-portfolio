<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
</script>

<section class="timeline-section">
	<h2 class="title">{title}</h2>
	<p class="subtitle">{subtitle}</p>
	<div class="content">
		<slot />
	</div>
</section>

<style>
	.timeline-section {
		margin-bottom: 3rem;
		margin-top: 3rem;
		width: 100%;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 700;
		text-align: center;
		color: #111827;
		margin-bottom: 0.25rem;
	}

	.subtitle {
		text-align: center;
		font-size: 0.9rem;
		color: #6b7280;
		margin-bottom: 1.5rem;
	}

	.content {
		background: #ffffff;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
	}
</style>
