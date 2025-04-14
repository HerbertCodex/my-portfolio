<script lang="ts">
	export let label: string;
	export let href: string;
</script>

<a {href} class="download-btn" download>
	<span>{label}</span>
	<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
		<path
			fill-rule="evenodd"
			d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm6 2a1 1 0 112 0v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 10.586V5z"
			clip-rule="evenodd"
		/>
	</svg>
</a>

<style>
	.download-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		background-color: #f59e0b;
		color: white;
		font-weight: 600;
		padding: 12px;
		border-radius: 6px;
		text-decoration: none;
		transition: background 0.3s ease;
		font-size: 0.875rem;
		width: 100%;
	}

	.download-btn:hover {
		background-color: #d97706;
	}

	.icon {
		width: 18px;
		height: 18px;
	}
</style>
