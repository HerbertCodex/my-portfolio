<script lang="ts">
	import { page } from '$app/stores';
	import HeroSection from '$lib/components/layout/HeroSection.svelte';
	import RightMenu from '$lib/components/layout/RightMenu.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import TechnicalSkills from '$lib/components/layout/TechnicalSkills.svelte';
	import 'carbon-components-svelte/css/all.css';
	import Education from './education/+page.svelte';
	import Work from './work/+page.svelte';

	export let name: string = 'DONATIEN KOFFI';
	export let title: string = 'ARTISAN DEVELOPER';
	export let description: string =
		"Étudiant en Master MIAGE à l'Université de Rennes, je recherche un(e)alternance/stage dans les domaines de l'IT. Curieux, structuré et passionné par les infrastructures modernes (Docker, Kafka, CI/CD...).";
	export let imageUrl: string = 'https://placehold.co/1000';
	export let profileImageUrl: string = 'https://placehold.co/50';

	$: activeSection = $page.url.hash.slice(1) || 'work';
</script>

<div class="app-container">
	<div class="app-layout">
		<Sidebar {profileImageUrl} />
		<div class="main-content">
			<HeroSection {name} {title} {description} {imageUrl} />
			<div class="sections-container">
				<div id="work" class="section" class:active={activeSection === 'work'}>
					<Work />
				</div>
				<div id="education" class="section" class:active={activeSection === 'education'}>
					<Education />
				</div>
				<div id="hard-skills" class="section" class:active={activeSection === 'hard-skills'}>
					<TechnicalSkills />
				</div>
			</div>
		</div>
		<RightMenu />
	</div>
</div>

<style>
	.app-container {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
	}

	.app-layout {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.main-content {
		flex: 1;
		padding-left: 270px;
		padding-right: 60px;
		overflow-y: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.main-content::-webkit-scrollbar {
		width: 0;
		display: none;
	}

	.sections-container {
		width: 100%;
	}

	.section {
		display: none;
		width: 100%;
	}

	.section.active {
		display: block;
	}

	@media (max-width: 768px) {
		.main-content {
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
