<script>
	export let label = 'Webpack, Gulp';
	export let icon = '🧩';
</script>

<div class="extra-skill">
	<span class="icon">{icon}</span>
	<span class="text">{label}</span>
</div>

<style>
	.extra-skill {
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		color: #374151;
		margin-bottom: 8px;
		gap: 8px;
	}

	.icon {
		font-size: 1rem;
		line-height: 1;
	}

	.text {
		flex: 1;
		font-weight: 500;
	}
</style>
