<script>
	import { page } from '$app/stores';
	import { Button } from 'carbon-components-svelte';
	import Book from 'carbon-icons-svelte/lib/Book.svelte';
	import Code from 'carbon-icons-svelte/lib/Code.svelte';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import Portfolio from 'carbon-icons-svelte/lib/Portfolio.svelte';
	import Result from 'carbon-icons-svelte/lib/Result.svelte';

	$: currentHash = $page.url.hash || '#work';
</script>

<div class="right-menu">
	<div class="menu-items">
		<a href="#work" class:active={currentHash === '#work'}>
			<div class="icon-wrapper">
				<Portfolio size={24} color={currentHash === '#work' ? '#f59e0b' : '#64748b'} />
			</div>
		</a>
		<a href="#projects" class:active={currentHash === '#projects'}>
			<div class="icon-wrapper">
				<Code size={24} color={currentHash === '#projects' ? '#f59e0b' : '#64748b'} />
			</div>
		</a>
		<a href="#hard-skills" class:active={currentHash === '#hard-skills'}>
			<div class="icon-wrapper">
				<Result size={24} color={currentHash === '#hard-skills' ? '#f59e0b' : '#64748b'} />
			</div>
		</a>
		<a href="#education" class:active={currentHash === '#education'}>
			<div class="icon-wrapper">
				<Book size={24} color={currentHash === '#education' ? '#f59e0b' : '#64748b'} />
			</div>
		</a>
	</div>
	<Button icon={Menu} kind="ghost" class="menu-button" />
</div>

<style>
	@keyframes pulse-border {
		0% {
			border: 2px solid rgba(245, 158, 11, 1);
			box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
		}
		50% {
			border: 2px solid rgba(245, 158, 11, 0.5);
			box-shadow: 0 0 20px rgba(245, 158, 11, 0.8);
		}
		100% {
			border: 2px solid rgba(245, 158, 11, 1);
			box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
		}
	}

	@keyframes glow {
		0% {
			background-color: rgba(245, 158, 11, 0.1);
			transform: scale(1.1);
		}
		50% {
			background-color: rgba(245, 158, 11, 0.2);
			transform: scale(1.15);
		}
		100% {
			background-color: rgba(245, 158, 11, 0.1);
			transform: scale(1.1);
		}
	}

	.right-menu {
		position: fixed;
		top: 0;
		right: 0;
		width: 60px;
		height: 100vh;
		background: #ffffff;
		border-left: 1px solid #e5e7eb;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0;
		z-index: 999;
	}

	.menu-items {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 24px;
		flex: 1;
	}

	.menu-items a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		position: relative;
		padding: 12px 0;
		transition: all 0.3s ease;
	}

	.icon-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.active .icon-wrapper {
		animation: pulse-border 2s infinite;
		background-color: rgba(245, 158, 11, 0.1);
	}

	@media (max-width: 768px) {
		.right-menu {
			display: none;
		}
	}
</style>
