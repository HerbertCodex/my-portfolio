<script lang="ts">
	interface Project {
		title: string;
		description: string;
		technologies: string[];
		imageUrl?: string;
		githubUrl?: string;
		demoUrl?: string;
	}

	export let projects: Project[] = [
		{
			title: 'Portfolio Personnel',
			description:
				'Portfolio développé avec SvelteKit et TailwindCSS, présentant mon parcours professionnel et mes compétences techniques.',
			technologies: ['SvelteKit', 'TypeScript', 'TailwindCSS']
		},
		{
			title: 'Application Android de Navigation',
			description:
				'Projet personnel en cours de développement avec Kotlin et Jetpack Compose. Cette application permet aux utilisateurs de naviguer d’un point A à un point B, en synchronisant les données de navigation avec un backend via Room et Retrofit.',
			technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit']
		},
		{
			title: 'Backend de Navigation',
			description:
				'Projet personnel consistant en une API backend développée avec Encore.ts, utilisant Prisma comme ORM et PostgreSQL comme SGBD. Elle fournit des données de navigation à une application Android, avec une architecture modulaire.',
			technologies: ['Encore.ts', 'Prisma', 'PostgreSQL', 'TypeScript']
		},
		{
			title: 'API REST de Gestion Hôtelière',
			description:
				'API REST développée avec NestJS pour la gestion d’un hôtel, incluant la gestion des réservations de chambres, un système d’authentification JWT, une gestion des rôles pour contrôler l’accès aux ressources, et une documentation via Swagger. Utilise Prisma comme ORM et PostgreSQL comme SGBD.',
			technologies: ['NestJS', 'Prisma', 'PostgreSQL', 'TypeScript', 'JWT', 'Swagger']
		}
	];
</script>

<section class="projects-section">
	<div class="projects-container">
		<h2 class="title">Projets</h2>
		<div class="projects-grid">
			{#each projects as project}
				<div class="project-card">
					{#if project.imageUrl}
						<img src={project.imageUrl} alt={project.title} class="project-image" />
					{/if}
					<div class="project-content">
						<h3 class="project-title">{project.title}</h3>
						<p class="project-description">{project.description}</p>
						<div class="tech-stack">
							{#each project.technologies as tech}
								<span class="tech-badge">{tech}</span>
							{/each}
						</div>
						<div class="project-links">
							{#if project.githubUrl}
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="link github"
								>
									GitHub
								</a>
							{/if}
							{#if project.demoUrl}
								<a
									href={project.demoUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="link demo"
								>
									Demo
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.projects-section {
		width: 100%;
		padding: 2rem;
		display: flex;
		justify-content: center;
	}

	.projects-container {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 700;
		text-align: center;
		color: #111827;
		margin-bottom: 2rem;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		width: 100%;
	}

	.project-card {
		background: white;
		border-radius: 8px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.project-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.project-image {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.project-content {
		padding: 1.5rem;
	}

	.project-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: #111827;
		margin-bottom: 0.75rem;
	}

	.project-description {
		font-size: 0.875rem;
		color: #4b5563;
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.tech-badge {
		background: #f3f4f6;
		color: #374151;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		font-weight: 500;
	}

	.project-links {
		display: flex;
		gap: 1rem;
	}

	.link {
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-size: 0.875rem;
		font-weight: 500;
		text-decoration: none;
		transition: background-color 0.2s ease;
	}

	.github {
		background: #24292e;
		color: white;
	}

	.demo {
		background: #f59e0b;
		color: white;
	}

	.github:hover {
		background: #1b1f23;
	}

	.demo:hover {
		background: #d97706;
	}

	@media (max-width: 768px) {
		.projects-section {
			padding: 1rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
