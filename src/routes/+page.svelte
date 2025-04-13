<script>
	import HeroSection from '$lib/components/layout/HeroSection.svelte';
	import RightMenu from '$lib/components/layout/RightMenu.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import 'carbon-components-svelte/css/all.css';

	export let name = 'RAYAN ADLARD';
	export let title = 'FRONT-END DEVELOPER';
	export let description =
		'Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Et, Volutpat Feugiat Placerat Lobortis. Natoque Rutrum Semper Sed Suspendisse Nunc Lectus.';
	export let imageUrl = 'https://placehold.co/1000';
	export let profileImageUrl = 'https://placehold.co/50';
</script>

<div class="app-layout">
	<Sidebar {profileImageUrl} />
	<!-- ✅ DOIT ÊTRE ICI -->

	<div class="main-content">
		<HeroSection {name} {title} {description} {imageUrl} />
	</div>

	<RightMenu />
</div>

<style>
	.app-layout {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		min-height: 100vh;
		overflow: hidden;
	}

	.main-content {
		margin-left: 240px;
		padding-right: 60px;
		overflow: hidden;
		width: calc(100vw - 240px - 60px);
		height: 100vh;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	@media (max-width: 768px) {
		.main-content {
			margin-left: 0;
			padding-right: 0;
			width: 100vw;
		}
	}
</style>
