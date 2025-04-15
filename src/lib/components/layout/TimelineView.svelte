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
				'Intégration à une équipe backend : découverte du fonctionnement et des outils de l’entreprise.',
				'Participation à un projet : analyse d’un document Excel, élaboration de diagrammes UML, génération du schéma Prisma et utilisation de PostgreSQL comme SGBD.',
				'Mise en place d’un système de connexion utilisateur (JWT pour les tokens, bcrypt pour le chiffrement des mots de passe).',
				'Implémentation d’une matrice de rôles et configuration des guards NestJS pour gérer les autorisations.',
				'Création de filtres optimisés afin de fournir des informations pertinentes aux utilisateurs.',
				'Transition vers un second projet : apprentissage de la Clean Architecture et mise en œuvre du pattern CQRS.',
				'Développement d’un microservice de paiement : intégration des APIs Stripe et PayPal.',
				'Réalisation de fonctionnalités dans d’autres microservices (blocage et signalement d’utilisateurs, etc.).',
				'Utilisation de Kafka pour la communication entre microservices, Redis pour la mise en cache et MongoDB pour certaines données non relationnelles.',
				'Documentation des APIs avec Swagger et tests via Postman dans le cadre de tous les projets de l’entreprise.'
			]}
		>
			<BadgeDate slot="badge" date="11/2023-08/2024" showDuration={true} />
		</TimelineItem>

		<TimelineItem
			title="Développeur BackEnd (Stage)"
			subtitle="Direction de la Stratégie et de la Transformation Digitale (DSTD) CIE"
			descriptionList={[
				'Encadré par un tuteur pour découvrir les méthodologies internes (conception RESTful, gestion de code, intégration continue, etc.).',
				'Application des bonnes pratiques de développement pour créer des services performants et sécurisés.',
				'Gestion du code source, suivi de versions et collaboration en équipe, renforçant les compétences en contrôle de version.',
				'Suivi régulier des objectifs et partage de l’état des travaux, développant les aptitudes en communication et gestion de projet.',
				'Mise en place de projets structurés avec NestJS, compréhension des modules, des contrôleurs et des principes de conception modulaire.',
				'Modélisation de la base de données à partir de diagrammes UML, puis utilisation de Prisma pour générer et exécuter des requêtes SQL de manière optimisée.',
				'Configuration et maintenance de la base de données PostgreSQL, avec un focus sur la fiabilité et la performance.',
				'Participation au développement d’interfaces utilisateurs avec Angular, acquérant une compréhension du cycle de développement complet (frontend-backend).',
				'Mise en œuvre de Docker pour containeriser les applications et faciliter leur déploiement.',
				'Adaptation aux workflows d’entreprise (sprints, revues, rétrospectives), assurant une collaboration fluide et des livraisons régulières.'
			]}
		>
			<BadgeDate slot="badge" date="08/2023-11/2023" showDuration={true} />
		</TimelineItem>

		<TimelineItem
			title="Développeur FrontEnd (Stage)"
			subtitle="Synelia (Smile Group)"
			descriptionList={[
				'Intégré à une équipe frontend pour découvrir les méthodologies de travail et les outils utilisés.',
				'Accompagné par le responsable mobile pour apprendre le framework Flutter et comprendre la conception des applications mobiles de l’entreprise.',
				'Contribution à un projet mobile existant avec pour mission de corriger des dysfonctionnements et d’apporter des améliorations.',
				'Changement d’équipe pour rejoindre le pôle frontend web et découverte du framework Angular ainsi que de l’architecture des projets web.',
				'Participation à un projet Angular : intégration de maquettes, consommation d’APIs et mise en place des fonctionnalités liées à l’interface utilisateur.',
				'Utilisation de Postman pour tester et valider les endpoints délivrés par l’équipe backend.',
				'Prise en compte des retours et remarques de l’équipe de test fonctionnel pour améliorer la qualité du produit.',
				'Reporting quotidien de l’avancement des tâches via une application dédiée, renforçant la communication et le suivi du projet.'
			]}
		>
			<BadgeDate slot="badge" date="05/2022-11/2022" showDuration={true} />
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
