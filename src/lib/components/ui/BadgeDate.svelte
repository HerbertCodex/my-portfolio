<script lang="ts">
	export let date: string;
	export let showDuration: boolean = false;

	function calculateDuration(dateString: string): string {
		const dates = dateString.split(/\s*-\s*/);
		if (dates.length !== 2) return '';

		const [startDate, endDate] = dates.map((d) => {
			const [month, year] = d.split('/').map(Number);
			return { month: month || 1, year };
		});

		const monthsDiff = (endDate.year - startDate.year) * 12 + (endDate.month - startDate.month);
		const years = Math.floor(monthsDiff / 12);
		const months = monthsDiff % 12;

		let duration = '';
		if (years > 0) {
			duration += `${years} ${years > 1 ? 'ans' : 'an'}`;
		}
		if (months > 0) {
			if (duration) duration += ' ';
			duration += `${months} ${months > 1 ? 'mois' : 'mois'}`;
		}
		if (!duration) duration = '1 mois';

		return duration;
	}

	$: duration = calculateDuration(date);
</script>

<div class="badge-container">
	<div class="badge-group">
		<span class="badge">{date}</span>
		{#if showDuration && duration}
			<div class="duration-container">
				<span class="duration-label">Durée:</span>
				<span class="duration-value">{duration}</span>
			</div>
		{/if}
	</div>
</div>

<style>
	.badge-container {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.badge-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: white;
		border-radius: 8px;
		padding: 4px;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
		border: 1px solid #e5e7eb;
	}

	.badge {
		background-color: #f59e0b;
		color: white;
		padding: 4px 12px;
		font-size: 0.75rem;
		font-weight: 600;
		border-radius: 6px;
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}

	.duration-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4px 8px;
		gap: 2px;
		border-top: 1px solid #e5e7eb;
		margin-top: 4px;
		width: 100%;
	}

	.duration-label {
		color: #9ca3af;
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.duration-value {
		color: #1f2937;
		font-size: 0.75rem;
		font-weight: 600;
		padding: 2px 6px;
		border-radius: 4px;
		background-color: #f3f4f6;
	}

	@media (hover: hover) {
		.badge-group:hover {
			transform: translateY(-1px);
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			transition: all 0.2s ease;
		}

		.badge-group:hover .duration-value {
			background-color: #f59e0b15;
			color: #f59e0b;
		}
	}
</style>
