<script lang="ts">
	import TimelineItem from '$lib/components/layout/TimelineItem.svelte';
	import TimelineSection from '$lib/components/layout/TimelineSection.svelte';
	import BadgeDate from '$lib/components/ui/BadgeDate.svelte';
</script>

<div class="timeline-container">
	<TimelineSection title="Education" subtitle="Formations & diplômes">
		<TimelineItem
			title="Université de Rennes"
			subtitle="Master 1 Miage"
			description="L’Université de Rennes est un établissement public expérimental. Ouverte sur l’Europe et le monde, au cœur de la Région Bretagne et en lien avec Rennes Métropole et son écosystème, elle est bâtie sur une histoire commune et les atouts de ses membres fondateurs. Elle poursuit une ambition : relever les grands défis sociétaux d’un monde en transition en particulier dans les domaines de l’environnement, de la santé globale et du numérique."
		>
			<BadgeDate slot="badge" date="2024-2025" />
		</TimelineItem>
		<TimelineItem
			title="Université Félix Houphouët-Boigny"
			subtitle="Licence Miage"
			description="L’Université Félix-Houphouët-Boigny est une université ivoirienne située à Abidjan, dans le quartier de Cocody. Elle se distingue non seulement par son importance académique, mais aussi par les valeurs essentielles qui la guident. Celles-ci s’articulent autour d’un certain nombre de principes fondamentaux, parmi lesquels : le savoir, la rigueur, l’excellence, l’humilité, la solidarité et l’ouverture au monde."
		>
			<BadgeDate slot="badge" date="2021 - 2022" />
		</TimelineItem>
	</TimelineSection>
</div>

<style>
	.timeline-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 768px) {
		.timeline-container {
			padding: 0 0.5rem;
		}
	}
</style>
