<script lang="ts">
	import { base } from '$app/paths';
	import { Column, Grid, Row } from 'carbon-components-svelte';
	import DownloadButton from '../ui/Button.svelte';

	export let name: string;
	export let title: string;
	export let description: string;
	export let imageUrl: string = 'https://via.placeholder.com/300x400';
	const cvPath = `${base}/files/pdf/CV_Donatien_KOFFI.pdf`;
</script>

<section class="hero-section">
	<div class="hero-wrapper">
		<Grid>
			<Row>
				<Column sm={4} md={4} lg={6}>
					<div class="text-content">
						<h1 class="name">{name}</h1>
						<h2 class="title">{title}</h2>
						<p class="description">{description}</p>
						<DownloadButton label="HIRE ME" href={cvPath} />
					</div>
				</Column>
				<Column sm={4} md={4} lg={6}>
					<div class="image-container">
						<img src={imageUrl} alt="Profile" class="profile-img" />
					</div>
				</Column>
			</Row>
		</Grid>
	</div>
	<!-- Décorations -->
	<div class="decorative-elements">
		<div class="circle-1"></div>
		<div class="circle-2"></div>
		<div class="circle-3"></div>
		<div class="square-1"></div>
		<div class="square-2"></div>
		<div class="triangle"></div>
	</div>
</section>

<style>
	.hero-section {
		padding: 40px 20px;
		background: white;
		position: relative;
		z-index: 1;
		flex-shrink: 0;
	}

	.hero-wrapper {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.text-content {
		padding: 20px;
	}

	.name {
		font-size: 2.5rem;
		font-weight: 800;
		color: #1f2937;
		margin-bottom: 8px;
	}

	.title {
		font-size: 1.25rem;
		font-weight: 600;
		color: #f59e0b;
		margin-bottom: 16px;
	}

	.description {
		font-size: 1rem;
		color: #4b5563;
		line-height: 1.6;
		margin-bottom: 24px;
	}

	.hire-button {
		background-color: #f59e0b !important;
		color: white !important;
		border: none !important;
		border-radius: 4px !important;
		padding: 10px 20px !important;
		font-weight: 600;
	}

	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.profile-img {
		max-width: 300px;
		max-height: 400px;
		width: 100%;
		object-fit: cover;
		border-radius: 12px;
	}
	/* Flottement générique */
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

	.decorative-elements {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
	}

	/* Comportement de base pour tous */
	.decorative-elements div {
		animation: float 6s ease-in-out infinite;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		cursor: pointer;
	}

	/* ✅ Glow spécifique par couleur */
	.circle-1 {
		top: 20px;
		left: 20px;
		width: 20px;
		height: 20px;
		background: #f59e0b;
		border-radius: 50%;
		position: absolute;
		box-shadow: 0 0 6px rgba(245, 158, 11, 0.6);
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
		box-shadow: 0 0 5px rgb(255, 255, 255);
	}
	.triangle:hover {
		transform: scale(1.2);
		box-shadow: 0 0 12px rgba(239, 68, 68, 0.9);
	}
</style>
