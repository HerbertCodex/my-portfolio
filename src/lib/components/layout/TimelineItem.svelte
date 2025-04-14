<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let description: string = '';
	export let descriptionList: string[] = [];
</script>

<div class="timeline-item">
	<div class="left">
		<p class="subtitle">{subtitle}</p>
		<slot name="badge" />
	</div>

	<div class="right">
		<h4 class="title">{title}</h4>

		{#if descriptionList.length}
			<ul class="desc-list">
				{#each descriptionList as item}
					<li>{item}</li>
				{/each}
			</ul>
		{:else}
			<p class="desc">{description}</p>
		{/if}
	</div>
</div>

<style>
	.timeline-item {
		display: flex;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 1rem 0;
		border-bottom: 1px solid #f3f4f6;
	}

	.left {
		flex: 1;
		color: #6b7280;
		font-size: 0.875rem;
	}

	.right {
		flex: 3;
	}

	.title {
		font-weight: 600;
		font-size: 1rem;
		margin-bottom: 0.25rem;
		color: #111827;
	}

	.desc {
		font-size: 0.875rem;
		color: #4b5563;
		white-space: pre-wrap;
	}

	.subtitle {
		margin-bottom: 0.5rem;
	}

	.desc-list {
		list-style: none;
		padding-left: 0;
		margin-top: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.desc-list li {
		font-size: 0.875rem;
		color: #4b5563;
		display: flex;
		align-items: flex-start;
		line-height: 1.4;
	}

	.desc-list li::before {
		content: '▪️';
		margin-right: 0.5rem;
		color: #f59e0b;
		font-size: 0.8rem;
		line-height: 1.3;
	}
</style>
