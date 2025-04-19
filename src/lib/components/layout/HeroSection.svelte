<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/components/ui/Button.svelte';
	import { Column, Grid, Row } from 'carbon-components-svelte';

	export let name: string;
	export let title: string;
	export let description: string;
	export const circleColor: string = '#f59e0b';

	const cvPath = `${base}/files/pdf/CV_Donatien_KOFFI.pdf`;

	function handleDecorClick(event: MouseEvent) {
		const element = event.target as HTMLElement;
		const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6'];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		element.style.background = randomColor;
		if (element.classList.contains('triangle')) {
			element.style.borderBottomColor = randomColor;
		}
	}
</script>

<section class="hero-section">
	<div class="hero-wrapper">
		<Grid>
			<Row>
				<Column>
					<div class="text-content">
						<div class="content-wrapper">
							<h1 class="name">{name}</h1>
							<h2 class="title">{title}</h2>
							<p class="description">{description}</p>
							<div class="button-wrapper">
								<Button label="TELECHARGER MON CV" href={cvPath} />
							</div>
						</div>
					</div>
				</Column>
			</Row>
		</Grid>
	</div>
	<div class="decorative-elements" aria-hidden="true">
		<div class="circle-1" on:click={handleDecorClick}></div>
		<div class="circle-2" on:click={handleDecorClick}></div>
		<div class="circle-3" on:click={handleDecorClick}></div>
		<div class="square-1" on:click={handleDecorClick}></div>
		<div class="square-2" on:click={handleDecorClick}></div>
		<div class="triangle" on:click={handleDecorClick}></div>
	</div>
</section>

<style>
	.hero-section {
		padding: 40px 20px;
		background: white;
		position: relative;
		z-index: 1;
		flex-shrink: 0;
		min-height: 80vh;
		display: flex;
		align-items: center;
	}

	.hero-wrapper {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.text-content {
		padding: 20px;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.content-wrapper {
		max-width: 800px;
		text-align: center;
	}

	.name {
		font-size: 2.5rem;
		font-weight: 800;
		color: #1f2937;
		margin-bottom: 12px;
		line-height: 1.2;
	}

	.title {
		font-size: 1.25rem;
		font-weight: 600;
		color: #f59e0b;
		margin-bottom: 20px;
		line-height: 1.4;
	}

	.description {
		font-size: 1.1rem;
		color: #374151;
		line-height: 1.6;
		margin-bottom: 32px;
		margin-left: auto;
		margin-right: auto;
		max-width: 600px;
	}

	.button-wrapper {
		display: flex;
		justify-content: center;
		width: 100%;
		max-width: 400px; /* Limite la largeur maximale du bouton */
		margin: 0 auto; /* Centre le bouton */
	}

	/* Animations variées */
	@keyframes float {
		0% {
			transform: translateY(0) translateX(0);
		}
		50% {
			transform: translateY(-15px) translateX(4px);
		}
		100% {
			transform: translateY(0) translateX(0);
		}
	}

	@keyframes floatSlow {
		0% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-10px) rotate(5deg);
		}
		100% {
			transform: translateY(0) rotate(0deg);
		}
	}

	@keyframes floatFast {
		0% {
			transform: translateX(0) rotate(45deg);
		}
		50% {
			transform: translateX(8px) rotate(50deg);
		}
		100% {
			transform: translateX(0) rotate(45deg);
		}
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
			opacity: 0.7;
		}
		50% {
			transform: scale(1.3);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 0.7;
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	.decorative-elements {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
	}

	.decorative-elements div {
		pointer-events: auto;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		cursor: pointer;
	}

	.circle-1 {
		top: 20px;
		left: 20px;
		width: 20px;
		height: 20px;
		background: #f59e0b;
		border-radius: 50%;
		position: absolute;
		box-shadow: 0 0 6px rgba(245, 158, 11, 0.6);
		animation: pulse 5s ease-in-out infinite;
	}
	.circle-1:hover {
		transform: scale(1.2);
		box-shadow: 0 0 12px rgba(245, 158, 11, 1);
	}

	.circle-2 {
		top: 30px;
		right: 60px;
		width: 15px;
		height: 15px;
		background: #10b981;
		border-radius: 50%;
		position: absolute;
		box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);
		animation: floatSlow 8s ease-in-out infinite;
	}
	.circle-2:hover {
		transform: scale(1.2);
		box-shadow: 0 0 12px rgba(16, 185, 129, 0.9);
	}

	.circle-3 {
		bottom: 20px;
		left: 40px;
		width: 12px;
		height: 12px;
		background: #10b981;
		border-radius: 50%;
		position: absolute;
		box-shadow: 0 0 5px rgba(16, 185, 129, 0.4);
		animation: bounce 4s ease-in-out infinite;
	}
	.circle-3:hover {
		transform: scale(1.2);
		box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
	}

	.square-1 {
		top: 50px;
		right: 20px;
		width: 20px;
		height: 20px;
		background: #f59e0b;
		transform: rotate(45deg);
		position: absolute;
		box-shadow: 0 0 6px rgba(245, 158, 11, 0.5);
		animation: spin 10s linear infinite;
	}
	.square-1:hover {
		transform: scale(1.2) rotate(45deg);
		box-shadow: 0 0 12px rgba(245, 158, 11, 1);
	}

	.square-2 {
		bottom: 30px;
		left: 80px;
		width: 15px;
		height: 15px;
		background: #3b82f6;
		transform: rotate(45deg);
		position: absolute;
		box-shadow: 0 0 6px rgba(59, 130, 246, 0.5);
		animation: floatFast 7s ease-in-out infinite;
	}
	.square-2:hover {
		transform: scale(1.2) rotate(45deg);
		box-shadow: 0 0 12px rgba(59, 130, 246, 1);
	}

	.triangle {
		bottom: 20px;
		right: 30px;
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid #ef4444;
		position: absolute;
		box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);
		animation: pulse 6s ease-in-out infinite;
	}
	.triangle:hover {
		transform: scale(1.2);
		box-shadow: 0 0 12px rgba(239, 68, 68, 0.9);
	}

	@media (max-width: 640px) {
		.hero-section {
			padding: 20px;
			min-height: 60vh;
		}

		.text-content {
			padding: 16px;
		}

		.name {
			font-size: 2rem;
		}

		.title {
			font-size: 1.1rem;
		}

		.description {
			font-size: 1rem;
		}
	}
</style>
