<script>
	export let label = '';
	export let value = '';
	export let highlight = false; // ex: pour Available
</script>

<div class="info-line">
	<span class="label">{label}:</span>
	<span class="value {highlight ? 'highlight' : ''}">{value}</span>
</div>

<style>
	.info-line {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.875rem;
		margin-bottom: 6px;
	}

	.label {
		background: #f59e0b;
		color: #ffffff;
		padding: 2px 6px;
		border-radius: 4px;
		font-weight: 600;
		min-width: 90px;
		display: inline-block;
		margin-right: 6px;
	}

	.value {
		color: #4b5563;
	}

	.value.highlight {
		color: #10b981;
		font-weight: 600;
	}
</style>
