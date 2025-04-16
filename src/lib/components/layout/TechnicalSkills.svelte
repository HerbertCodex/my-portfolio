<script lang="ts">
	import { base } from '$app/paths';

	interface TechSkill {
		name: string;
		logo: string;
		isPrimary: boolean;
		category: string;
	}

	const skills: TechSkill[] = [
		// Languages & Frameworks
		{
			name: 'TypeScript',
			logo: `${base}/logos/languages/typescript.svg`,
			isPrimary: true,
			category: 'Languages & Frameworks'
		},
		{
			name: 'Python',
			logo: `${base}/logos/languages/python.gif`,
			isPrimary: false,
			category: 'Languages & Frameworks'
		},
		{
			name: 'Css3',
			logo: `${base}/logos/languages/css3.svg`,
			isPrimary: true,
			category: 'Languages & Frameworks'
		},
		{
			name: 'Html5',
			logo: `${base}/logos/languages/html5.svg`,
			isPrimary: true,
			category: 'Languages & Frameworks'
		},

		// Frontend
		{
			name: 'Svelte',
			logo: `${base}/logos/frameworks/svelte.svg`,
			isPrimary: true,
			category: 'Frontend'
		},
		{
			name: 'Next.js',
			logo: `${base}/logos/frameworks/nextjs.svg`,
			isPrimary: false,
			category: 'Frontend'
		},

		// Backend
		{
			name: 'NestJS',
			logo: `${base}/logos/frameworks/nestjs.svg`,
			isPrimary: true,
			category: 'Backend'
		},
		{
			name: 'Express.js',
			logo: `${base}/logos/frameworks/express-js.svg`,
			isPrimary: true,
			category: 'Backend'
		},
		{
			name: 'fastify',
			logo: `${base}/logos/frameworks/fastify.png`,
			isPrimary: true,
			category: 'Backend'
		},
		{
			name: 'Node.js',
			logo: `${base}/logos/frameworks/nodejs.svg`,
			isPrimary: true,
			category: 'Backend'
		},
		{
			name: 'Spring Boot',
			logo: `${base}/logos/frameworks/spring-boot.svg`,
			isPrimary: false,
			category: 'Backend'
		},

		// Databases
		{
			name: 'PostgreSQL',
			logo: `${base}/logos/languages/postgresql.svg`,
			isPrimary: true,
			category: 'Databases'
		},
		{
			name: 'MySQL',
			logo: `${base}/logos/languages/sql.png`,
			isPrimary: false,
			category: 'Databases'
		},
		{
			name: 'MongoDB',
			logo: `${base}/logos/languages/mongodb.svg`,
			isPrimary: false,
			category: 'Databases'
		},

		// DevOps & Tools
		{
			name: 'Git',
			logo: `${base}/logos/tools/git.svg`,
			isPrimary: true,
			category: 'DevOps & Tools'
		},
		{
			name: 'Docker',
			logo: `${base}/logos/tools/docker.svg`,
			isPrimary: true,
			category: 'DevOps & Tools'
		},
		{
			name: 'Kubernetes',
			logo: `${base}/logos/tools/kubernetes.svg`,
			isPrimary: false,
			category: 'DevOps & Tools'
		},

		// Modeling & Design
		{
			name: 'UML',
			logo: `${base}/logos/tools/uml.png`,
			isPrimary: true,
			category: 'Modeling & Design'
		},
		{
			name: 'API Design',
			logo: `${base}/logos/tools/api.png`,
			isPrimary: true,
			category: 'Modeling & Design'
		},

		// IDEs & Editors
		{
			name: 'Android Studio',
			logo: `${base}/logos/tools/android-studio.svg`,
			isPrimary: true,
			category: 'IDEs & Editors'
		},
		{
			name: 'Windsurf',
			logo: `${base}/logos/tools/windsurf.png`,
			isPrimary: false,
			category: 'IDEs & Editors'
		},

		// AI Tools
		{
			name: 'Gemini',
			logo: `${base}/logos/tools/bard.svg`,
			isPrimary: false,
			category: 'AI Tools'
		},
		{
			name: 'Claude',
			logo: `${base}/logos/tools/claude.svg`,
			isPrimary: false,
			category: 'AI Tools'
		}
	];

	$: groupedSkills = skills.reduce(
		(acc, skill) => {
			if (!acc[skill.category]) {
				acc[skill.category] = [];
			}
			acc[skill.category].push(skill);
			return acc;
		},
		{} as Record<string, TechSkill[]>
	);
</script>

<div class="technical-skills-container">
	<div class="content-wrapper">
		<h2 class="main-title">Technical Skills</h2>
		<p class="subtitle">Technologies & Outils</p>

		{#each Object.entries(groupedSkills) as [category, categorySkills]}
			<div class="category-section">
				<h3 class="category-title">{category}</h3>
				<div class="skills-grid">
					{#each categorySkills as skill}
						<div class="skill-card" class:primary={skill.isPrimary}>
							<div class="skill-header">
								<img src={skill.logo} alt={skill.name} class="skill-logo" />
								<span class="skill-name">{skill.name}</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.technical-skills-container {
		width: 100%;
		padding: 2rem 1rem;
		background-color: white;
	}

	.content-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.main-title {
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
		color: #1f2937;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		text-align: center;
		font-size: 1.1rem;
		color: #6b7280;
		margin-bottom: 3rem;
	}

	.category-section {
		margin-bottom: 2.5rem;
	}

	.category-title {
		font-size: 1.1rem;
		font-weight: 600;
		color: #374151;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid #f59e0b;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
	}

	.skill-card {
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		padding: 1rem;
		transition: all 0.2s ease;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		cursor: pointer;
	}

	.skill-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 2px 4px rgba(245, 158, 11, 0.1);
	}

	.skill-card.primary {
		background-color: rgba(245, 158, 11, 0.05);
		border-color: rgba(245, 158, 11, 0.2);
	}

	.skill-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.skill-logo {
		width: 2rem;
		height: 2rem;
		object-fit: contain;
	}

	.skill-name {
		font-weight: 500;
		color: #111827;
	}

	/* Animation subtile au survol */
	@media (hover: hover) {
		.skill-card:hover {
			background-color: rgba(245, 158, 11, 0.08);
			border-color: rgba(245, 158, 11, 0.3);
		}

		.skill-card:hover .skill-name {
			color: #f59e0b;
		}
	}

	.skill-level {
		font-size: 0.875rem;
		color: var(--level-color);
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		background-color: color-mix(in srgb, var(--level-color) 10%, white);
		align-self: flex-start;
	}

	@media (max-width: 640px) {
		.technical-skills-container {
			padding: 1rem 0.5rem;
		}

		.content-wrapper {
			padding: 0 0.5rem;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}

		.main-title {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 1rem;
			margin-bottom: 2rem;
		}
	}
</style>
