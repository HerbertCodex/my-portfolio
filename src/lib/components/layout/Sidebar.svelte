<script>
	export let profileImageUrl = 'https://via.placeholder.com/150';

	import LogoFacebook from 'carbon-icons-svelte/lib/LogoFacebook.svelte';
	import LogoInstagram from 'carbon-icons-svelte/lib/LogoInstagram.svelte';
	import LogoLinkedin from 'carbon-icons-svelte/lib/LogoLinkedin.svelte';
	import LogoTwitter from 'carbon-icons-svelte/lib/LogoTwitter.svelte';
	import LogoYoutube from 'carbon-icons-svelte/lib/LogoYoutube.svelte';

	import ProfileInfo from '$lib/components/layout/ProfileInfo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import ExtraSkill from '$lib/components/ui/ExtraSkill.svelte';
	import ProgressBar from '$lib/components/ui/ProgressBar.svelte';
</script>

<aside class="sidebar">
	<div class="sidebar-inner">
		<!-- Profile Image -->
		<img src={profileImageUrl} alt="Profile" class="profile-img" />

		<!-- Social icons -->
		<div class="socials">
			<a href="#"><LogoFacebook /></a>
			<a href="#"><LogoTwitter /></a>
			<a href="#"><LogoLinkedin /></a>
			<a href="#"><LogoYoutube /></a>
			<a href="#"><LogoInstagram /></a>
		</div>

		<!-- Infos personnelles -->
		<div class="info-box">
			<ProfileInfo label="Age" value="24" />
			<ProfileInfo label="Residence" value="BD" />
			<ProfileInfo label="Freelance" value="Available" highlight={true} />
			<ProfileInfo label="Address" value="Dhaka, Bangladesh" />
		</div>

		<!-- Langues -->
		<div class="section">
			<h4>Languages</h4>
			<ProgressBar label="Bangla" value={100} />
			<ProgressBar label="English" value={80} />
			<ProgressBar label="Spanish" value={60} />
		</div>

		<!-- Skills -->
		<div class="section">
			<h4>Skills</h4>
			<ProgressBar label="HTML" value={90} />
			<ProgressBar label="CSS" value={85} />
			<ProgressBar label="JS" value={80} />
			<ProgressBar label="PHP" value={75} />
			<ProgressBar label="WordPress" value={85} />
		</div>

		<!-- Extra skills -->
		<div class="section">
			<h4>Extra Skills</h4>
			<ExtraSkill label="Bootstrap, Materialize" icon="🎨" />
			<ExtraSkill label="Stylus, Sass, Less" icon="🎯" />
			<ExtraSkill label="Gulp, Webpack, Grunt" icon="⚙️" />
			<ExtraSkill label="Git Knowledge" icon="🔧" />
		</div>

		<!-- Download CV -->
		<Button label="DOWNLOAD CV" href="/cv-rayan.pdf" />
	</div>
</aside>

<style>
	.sidebar {
		overflow-y: auto;
		flex-shrink: 0;
		width: 270px;
		background: #ffffff;
		border-right: 3px solid #f59e0b;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		padding: 20px;
		box-shadow: 2px 0 8px rgba(0, 0, 0, 0.03);
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: auto;
		transition: all 0.3s ease;
	}

	.sidebar-inner {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 100%;
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
		align-items: center;
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

	/* ✅ RESPONSIVE FIX */
	@media (max-width: 1024px) {
		.sidebar {
			position: relative;
			width: 100%;
			height: auto;
			border-right: none;
			border-bottom: 3px solid #f59e0b;
			flex-direction: column;
			align-items: center;
			overflow-y: visible;
			padding: 20px 16px;
		}

		.sidebar-inner {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.profile-img {
			margin-bottom: 12px;
		}

		.section,
		.info-box {
			width: 100%;
			max-width: 600px;
		}
	}
</style>
