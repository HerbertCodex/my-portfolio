<script lang="ts">
	import { page } from '$app/stores';
	import HeroSection from '$lib/components/layout/HeroSection.svelte';
	import RightMenu from '$lib/components/layout/RightMenu.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import TechnicalSkills from '$lib/components/layout/TechnicalSkills.svelte';
	import 'carbon-components-svelte/css/all.css';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import { onMount } from 'svelte';
	import Education from './education/+page.svelte';
	import Work from './work/+page.svelte';

	export let name: string = 'DONATIEN KOFFI';
	export let title: string = 'ARTISAN DEVELOPER';
	export let description: string =
		"Étudiant en Master MIAGE à l'Université de Rennes, je recherche un(e) alternance/stage dans les domaines de l'IT. Curieux, structuré et passionné par les infrastructures modernes (Docker, Kafka, CI/CD...).";
	export let imageUrl: string = 'https://placehold.co/1000';
	export let profileImageUrl: string = 'https://placehold.co/50';

	$: activeSection = $page.url.hash.slice(1) || 'work';

	let isMobileMenuOpen = false;
	let isMobile = false;

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<!-- Mobile Header -->
{#if isMobile}
	<div class="mobile-header">
		<button class="menu-button" on:click={toggleMobileMenu}>
			<Menu size={24} />
		</button>
		<h1 class="mobile-title">{name}</h1>
	</div>
{/if}

<div class="app-container">
	<div class="app-layout">
		<!-- Sidebar: version desktop toujours visible, version mobile dans l'overlay -->
		{#if !isMobile}
			<Sidebar {profileImageUrl} isMobile={false} />
		{:else if isMobileMenuOpen}
			<div
				class="mobile-sidebar-overlay"
				class:active={isMobileMenuOpen}
				on:click={toggleMobileMenu}
			>
				<div
					class="mobile-sidebar-content"
					class:active={isMobileMenuOpen}
					on:click|stopPropagation
				>
					<Sidebar {profileImageUrl} isMobile={true} />
				</div>
			</div>
		{/if}

		<div class="main-content" class:mobile={isMobile}>
			<HeroSection {name} {title} {description} {imageUrl} />
			<div class="sections-container">
				{#if activeSection === 'work'}
					<Work />
				{:else if activeSection === 'education'}
					<Education />
				{:else if activeSection === 'hard-skills'}
					<TechnicalSkills />
				{/if}
			</div>
		</div>

		<!-- RightMenu uniquement sur desktop -->
		{#if !isMobile}
			<RightMenu />
		{/if}

		<!-- Navigation mobile en bas -->
		{#if isMobile}
			<nav class="mobile-nav">
				<a href="#work" class:active={activeSection === 'work'}>
					<span class="nav-icon">💼</span>
					<span class="nav-text">Work</span>
				</a>
				<a href="#hard-skills" class:active={activeSection === 'hard-skills'}>
					<span class="nav-icon">💡</span>
					<span class="nav-text">Skills</span>
				</a>
				<a href="#education" class:active={activeSection === 'education'}>
					<span class="nav-icon">🎓</span>
					<span class="nav-text">Education</span>
				</a>
			</nav>
		{/if}
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

	.main-content.mobile {
		padding: 0;
		padding-top: 60px;
		padding-bottom: 60px;
	}

	/* Mobile Header */
	.mobile-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 60px;
		background: white;
		display: flex;
		align-items: center;
		padding: 0 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		z-index: 100;
	}

	.menu-button {
		background: none;
		border: none;
		padding: 8px;
		cursor: pointer;
		color: #f59e0b;
	}

	.mobile-title {
		margin-left: 1rem;
		font-size: 1.2rem;
		font-weight: 600;
	}

	/* Mobile Sidebar Overlay */
	.mobile-sidebar-overlay {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}

	.mobile-sidebar-overlay.active {
		display: block;
	}

	.mobile-sidebar-content {
		position: fixed;
		top: 0;
		left: -270px;
		width: 270px;
		height: 100%;
		background: white;
		transition: transform 0.3s ease;
	}

	.mobile-sidebar-content.active {
		transform: translateX(270px);
	}

	/* Mobile Navigation */
	.mobile-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 60px;
		background: white;
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
		z-index: 100;
	}

	.mobile-nav a {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		color: #64748b;
		padding: 8px;
	}

	.mobile-nav a.active {
		color: #f59e0b;
	}

	.nav-icon {
		font-size: 1.5rem;
		margin-bottom: 4px;
	}

	.nav-text {
		font-size: 0.75rem;
	}

	.sections-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	@media (max-width: 768px) {
		.sections-container {
			padding: 1rem 0.5rem;
		}
	}
</style>
