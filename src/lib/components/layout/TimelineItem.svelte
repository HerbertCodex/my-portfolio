<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let description: string = '';
	export let descriptionList: string[] = [];
</script>

<div class="timeline-item">
	<div class="card-content">
		<div class="header">
			<div class="badge-container">
				<slot name="badge" />
			</div>
			<p class="subtitle">{subtitle}</p>
		</div>

		<div class="body">
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
</div>

<style>
	.timeline-item {
		padding: 1rem 0;
		border-bottom: 1px solid #f3f4f6;
	}

	.card-content {
		background: white;
		border-radius: 8px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.header {
		background: #f8fafc;
		padding: 1rem;
		border-bottom: 1px solid #e2e8f0;
	}

	.badge-container {
		margin-bottom: 0.5rem;
	}

	.body {
		padding: 1rem;
	}

	.title {
		font-weight: 600;
		font-size: 1.1rem;
		margin-bottom: 0.75rem;
		color: #111827;
	}

	.subtitle {
		color: #6b7280;
		font-size: 0.875rem;
	}

	.desc {
		font-size: 0.875rem;
		color: #4b5563;
		white-space: pre-wrap;
		line-height: 1.5;
	}

	.desc-list {
		list-style: none;
		padding-left: 0;
		margin-top: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.desc-list li {
		font-size: 0.875rem;
		color: #4b5563;
		display: flex;
		align-items: flex-start;
		line-height: 1.5;
		padding-left: 1.5rem;
		position: relative;
	}

	.desc-list li::before {
		content: '▪️';
		position: absolute;
		left: 0;
		color: #f59e0b;
		font-size: 0.8rem;
	}

	@media (min-width: 768px) {
		.timeline-item {
			display: flex;
			justify-content: space-between;
			gap: 1.5rem;
		}

		.card-content {
			display: flex;
			width: 100%;
		}

		.header {
			flex: 1;
			border-bottom: 0;
			border-right: 1px solid #e2e8f0;
		}

		.body {
			flex: 3;
		}
	}

	@media (hover: hover) {
		.card-content:hover {
			transform: translateY(-2px);
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		}
	}
</style>
