<script>
	export let label = 'HTML';
	export let value = 80; // % entre 0 et 100
	export let color = '#f59e0b'; // facultatif
</script>

<div class="progress-bar">
	<div class="label-row">
		<span class="label">{label}</span>
		<span class="value">{value}%</span>
	</div>
	<div class="track">
		<div class="fill" style="width: {value}%; background-color: {color};"></div>
	</div>
</div>

<style>
	.progress-bar {
		margin-bottom: 12px;
	}

	.label-row {
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		color: #374151;
		margin-bottom: 4px;
	}

	.track {
		background-color: #e5e7eb;
		height: 6px;
		border-radius: 9999px;
		overflow: hidden;
	}

	.fill {
		height: 100%;
		transition: width 0.5s ease-in-out;
		border-radius: 9999px;
	}
</style>
