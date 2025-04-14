<script lang="ts">
	import { onMount } from 'svelte';

	export let label: string;
	export let value: number;
	export let color: string = '#f59e0b';
	let animatedWidth: number;

	onMount(() => {
		requestAnimationFrame(() => {
			animatedWidth = value;
		});
	});
</script>

<div class="progress-bar">
	<div class="label-row">
		<span class="label">{label}</span>
		<span class="value">{value}%</span>
	</div>
	<div class="track">
		<div class="fill" style="width: {animatedWidth}%; background-color: {color};"></div>
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
		transition: width 0.8s cubic-bezier(0.65, 0, 0.35, 1);
		border-radius: 9999px;
	}
</style>
