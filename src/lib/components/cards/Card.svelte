<!-- Card.svelte -->
<script>
	import { Tile } from 'carbon-components-svelte';
	export let title = '';
	export let subtitle = '';
	export let icon = '';
</script>

<div class="custom-card-container">
	<Tile>
		<div class="card-content">
			<div class="icon-container">{icon}</div>
			<h3 class="title">{title}</h3>
			<p class="subtitle">{subtitle}</p>
		</div>
	</Tile>
</div>

<style>
	.custom-card-container {
		max-width: 300px;
		margin: 0 auto;
	}

	:global(.bx--tile) {
		border: 1px solid #e5e7eb !important;
		border-radius: 8px !important;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
		transition: box-shadow 0.3s ease;
		background: #ffffff !important;
	}

	:global(.bx--tile:hover) {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
	}

	.card-content {
		padding: 24px;
		text-align: center;
	}

	.icon-container {
		font-size: 2.5rem;
		color: #f59e0b;
		margin-bottom: 16px;
	}

	.title {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1f2937;
		margin: 0;
	}

	.subtitle {
		font-size: 0.875rem;
		color: #6b7280;
		font-weight: 400;
		margin-top: 4px;
	}
</style>
