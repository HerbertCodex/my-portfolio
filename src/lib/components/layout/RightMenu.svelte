<script>
	import { Button } from 'carbon-components-svelte';
	import { Email, Folder, Home, Menu, User } from 'carbon-icons-svelte';
</script>

<div class="right-menu">
	<div class="menu-items">
		<a href="#"><Home size={24} color="#f59e0b" /></a>
		<a href="#"><User size={24} color="#f59e0b" /></a>
		<a href="#"><Folder size={24} color="#f59e0b" /></a>
		<a href="#"><Email size={24} color="#f59e0b" /></a>
	</div>
	<Button icon={Menu} kind="ghost" class="menu-button" />
</div>

<style>
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
		gap: 24px;
	}

	.menu-button {
		background: none !important;
		border: none !important;
	}

	@media (max-width: 768px) {
		.right-menu {
			width: 50px;
		}
	}
</style>
