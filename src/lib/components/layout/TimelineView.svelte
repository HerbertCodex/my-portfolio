<script lang="ts">
	import TimelineItem from '$lib/components/layout/TimelineItem.svelte';
	import TimelineSection from '$lib/components/layout/TimelineSection.svelte';
	import BadgeDate from '$lib/components/ui/BadgeDate.svelte';

	export let section: string = 'work'; // 'education' ou 'work'
</script>

{#if section === 'work'}
	<TimelineSection title="Work History" subtitle="Expériences professionnelles">
		<TimelineItem
			title="Développeur BackEnd"
			subtitle="Everest Consulting"
			descriptionList={[
				"Développement d'architectures backend JavaScript et TypeScript (NestJS)",
				'Gestion bases de données relationnelles (PostgreSQL, MySQL) et NoSQL (MongoDB)',
				'Mise en œuvre dʼarchitectures distribuées avec Kafka, Redis',
				'Conteneurisation Docker, sécurisation JWT, tests automatisés',
				'Tests et documentation des APIs avec Swagger et Postman',
				'Intégration de systèmes de paiement (Stripe, PayPal)'
			]}
		>
			<BadgeDate slot="badge" date="2023-2024" />
		</TimelineItem>
		<TimelineItem
			title=" Développeur FrontEnd"
			subtitle="Smile Group (Synelia)"
			descriptionList={[
				'Développement de composants réutilisables en TypeScript / Angular',
				'Création dʼinterfaces responsives avec HTML5, CSS3, SCSS',
				'Consommation dʼAPIs REST et participation à la définition des contrats dʼAPI',
				'Participation aux rituels Agile (Daily Standups, Sprint Planning)',
				'Collaboration avec les équipes backend sur lʼintégration des APIs'
			]}
		>
			<BadgeDate slot="badge" date="2021 - 2022" />
		</TimelineItem>
	</TimelineSection>
{:else if section === 'education'}
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
{/if}
