<script>
	import { base } from '$app/paths';
	import LogoFacebook from 'carbon-icons-svelte/lib/LogoFacebook.svelte';
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
	import LogoLinkedin from 'carbon-icons-svelte/lib/LogoLinkedin.svelte';
	import LogoTwitter from 'carbon-icons-svelte/lib/LogoTwitter.svelte';
	import LogoYoutube from 'carbon-icons-svelte/lib/LogoYoutube.svelte';

	import ProfileInfo from '$lib/components/layout/ProfileInfo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import ProgressBar from '$lib/components/ui/ProgressBar.svelte';
	import Skill from '$lib/components/ui/Skill.svelte';

	export let profileImageUrl = 'https://via.placeholder.com/150';
	export let isMobile = false;
	const cvPath = `${base}/files/pdf/CV_Donatien_KOFFI.pdf`;
</script>

<aside class="sidebar" class:mobile={isMobile}>
	<div class="sidebar-content">
		<div class="sidebar-inner">
			<!-- Profile Image -->
			<!-- <img src={profileImageUrl} alt="Profile" class="profile-img" /> -->

			<!-- Social icons -->
			<div class="socials">
				<a href="https://www.linkedin.com/in/donatien-koffi/"><LogoFacebook /></a>
				<a href="https://www.linkedin.com/in/donatien-koffi/"><LogoTwitter /></a>
				<a href="https://www.linkedin.com/in/donatien-koffi/"><LogoLinkedin /></a>
				<a href="https://www.linkedin.com/in/donatien-koffi/"><LogoYoutube /></a>
				<a href="https://www.linkedin.com/in/donatien-koffi/"><LogoInstagram /></a>
			</div>

			<!-- Infos personnelles -->
			<div class="info-box">
				<ProfileInfo label="Mobilité" value="Toute la France" />
				<ProfileInfo label="Résidence" value="Rennes" />
				<ProfileInfo label="Téléphone" value="+33 743307711" />
				<ProfileInfo label="Status" value="Disponible" highlight={true} />
			</div>

			<!-- Langues -->
			<div class="section">
				<h4>Languages</h4>
				<ProgressBar label="Français" value={100} />
				<ProgressBar label="Anglais" value={40} />
			</div>

			<span class="divider"></span>

			<div class="section">
				<div class="divider">
					<h4>Soft Skills</h4>
				</div>
				<Skill label="Rigueur et capacité d'analyse" icon="🎯" />
				<Skill label="Esprit d'équipe et communication" icon="👥" />
				<Skill label="Adaptabilité et autonomie" icon="🔄" />
				<Skill label="Curiosité et veille technologique" icon="🔍" />
			</div>

			<!-- Download CV -->
			<Button label="MON CV" href={cvPath} />
		</div>
	</div>
</aside>

<style>
	.divider {
		font-size: 0.75rem;
		color: #6b7280;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 16px 0 8px;
		padding-top: 16px;
		border-top: 1px solid #e5e7eb;
		font-weight: 600;
	}
	.sidebar {
		width: 270px;
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		background: #ffffff;
		border-right: 3px solid #f59e0b;
		z-index: 10;
	}

	/* Ajoutez ces styles pour le mobile */
	.sidebar.mobile {
		position: static;
		width: 100%;
		height: 100%;
		border-right: none;
	}

	.sidebar-content {
		height: 100%;
		overflow-y: auto;
		padding: 20px;
		scrollbar-width: thin;
		scrollbar-color: #f59e0b transparent;
		scroll-behavior: smooth;
	}

	.sidebar-inner {
		width: 100%;
		display: flex;
		flex-direction: column;
		max-width: 100%;
		padding-bottom: 20px;
	}

	.profile-img {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		object-fit: cover;
		margin: 0 auto 16px;
	}

	.socials {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-bottom: 20px;
		flex-wrap: wrap;
	}

	.socials a {
		display: flex;
		justify-content: center;
		background: #f59e0b;
		padding: 8px;
		border-radius: 50%;
		color: white;
		transition: background 0.3s;
	}

	.socials a:hover {
		background: #d97706;
	}

	.info-box {
		margin-bottom: 20px;
	}

	.section {
		margin-bottom: 20px;
	}

	.section h4 {
		font-size: 0.95rem;
		font-weight: 600;
		margin-bottom: 10px;
		color: #1f2937;
	}

	.sidebar::-webkit-scrollbar {
		width: 3px;
	}

	.sidebar::-webkit-scrollbar-track {
		background: transparent;
		border-radius: 4px;
	}

	.sidebar::-webkit-scrollbar-thumb {
		background-color: #f59e0b;
		border-radius: 4px;
		border: 2px solid transparent;
		background-clip: padding-box;
	}

	.sidebar::-webkit-scrollbar-thumb:hover {
		background-color: #d97706;
	}

	@media (max-width: 768px) {
		.sidebar-content {
			padding: 15px;
			height: 100vh;
			overflow-y: auto;
		}
	}
</style>
