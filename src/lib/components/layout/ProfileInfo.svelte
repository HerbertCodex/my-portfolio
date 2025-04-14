<script lang="ts">
	export let label: string;
	export let value: string;
	export let highlight: boolean = false;
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
	}

	.value {
		color: rgb(0, 0, 0);
	}

	.value.highlight {
		color: #10b981;
		font-weight: 600;
	}
</style>
