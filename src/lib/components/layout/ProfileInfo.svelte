<script lang="ts">
	export let label: string;
	export let value: string;
	export let highlight: boolean = false;
</script>

<div class="profile-info">
	<span class="label">{label}</span>
	<span class="value" class:neon={highlight}>{value}</span>
</div>

<style>
	.profile-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 0;
		border-bottom: 1px solid #e5e7eb;
	}

	.label {
		color: #64748b;
		font-size: 0.9rem;
	}

	.value {
		color: #1f2937;
		font-weight: 500;
		padding: 4px 8px;
		border-radius: 4px;
	}

	@keyframes pulse-border {
		0% {
			border: 2px solid rgba(245, 158, 11, 0.8);
			box-shadow: 0 0 5px rgba(245, 158, 11, 0.8);
		}
		50% {
			border: 2px solid rgba(245, 158, 11, 0.8);
			box-shadow: 0 0 150px rgba(245, 158, 11, 0.8);
		}
		100% {
			border: 2px solid rgba(245, 158, 11, 0.8);
			box-shadow: 0 0 1px rgba(245, 158, 11, 0.8);
		}
	}

	.neon {
		color: #22c55e;
		font-weight: 500;
		animation: pulse-border 2s infinite;
	}
</style>
