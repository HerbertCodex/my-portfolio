<script lang="ts">
	import HeroSection from '$lib/components/layout/HeroSection.svelte';
	import RightMenu from '$lib/components/layout/RightMenu.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import TimelineView from '$lib/components/layout/TimelineView.svelte';
	import 'carbon-components-svelte/css/all.css';

	export let name: string = 'DONATIEN KOFFI';
	export let title: string = 'ARTISAN DEVELOPER';
	export let description: string =
		"Étudiant en Master MIAGE à l'Université de Rennes, je recherche un(e)alternance/stage dans les domaines de l'IT. Curieux, structuré et passionné par les infrastructures modernes (Docker, Kafka, CI/CD...).";
	export let imageUrl: string = 'https://placehold.co/1000';
	export let profileImageUrl: string = 'https://placehold.co/50';
	let activeSection: string = 'work';

	function handleSectionChange(section: string) {
		activeSection = section;
	}
</script>

<div class="app-layout">
	<Sidebar {profileImageUrl} />
	<div class="main-content">
		<HeroSection {name} {title} {description} {imageUrl} />
		<TimelineView section={activeSection} />
	</div>

	<RightMenu on:changeSection={(e) => handleSectionChange(e.detail)} />
</div>

<style>
	.app-layout {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		min-height: 100vh;
		overflow-x: hidden;
	}

	.main-content {
		padding-left: 270px;
		padding-right: 60px;
		width: 100%;
		height: 100vh;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		box-sizing: border-box;
	}

	@media (max-width: 768px) {
		.main-content {
			margin-left: 0;
			padding-right: 0;
			width: 100vw;
		}
	}
</style>
