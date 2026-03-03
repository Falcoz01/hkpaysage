import type { Service } from "@/types";

export const services: Service[] = [
  // ─── Groupe 1 ─────────────────────────────────────────────────────────────
  {
    slug: "tonte",
    title: "Tonte",
    shortDescription: "Tonte régulière de vos pelouses pour un gazon toujours impeccable.",
    description:
      "Nous assurons la tonte de vos pelouses avec du matériel professionnel silencieux et performant. Passage adapté à la saison, ramassage de l'herbe inclus sur demande. Idéal pour les particuliers comme pour les résidences.",
    icon: "Scissors",
    benefits: [
      { label: "Matériel professionnel silencieux" },
      { label: "Fréquence adaptée à la saison" },
      { label: "Ramassage de l'herbe inclus" },
      { label: "Finitions bordures soignées" },
    ],
    startingPrice: "Sur devis",
    featured: true,
  },
  {
    slug: "debroussaillage",
    title: "Débroussaillage",
    shortDescription: "Élimination des broussailles et végétation envahissante.",
    description:
      "Nous intervenons pour débroussailler vos terrains, parcelles ou jardins envahis par les ronces, herbes folles et arbustes indésirables. Intervention rapide avec évacuation des déchets verts en déchetterie agréée.",
    icon: "TreePine",
    benefits: [
      { label: "Élimination complète des broussailles" },
      { label: "Évacuation des déchets verts incluse" },
      { label: "Intervention rapide" },
      { label: "Terrains petits et grands" },
    ],
    startingPrice: "Sur devis",
    featured: true,
  },
  {
    slug: "desherbage",
    title: "Désherbage",
    shortDescription: "Désherbage manuel ou thermique de vos allées, massifs et pelouses.",
    description:
      "Le désherbage est indispensable pour garder vos espaces verts sains et esthétiques. Nous proposons le désherbage manuel et thermique (sans produits chimiques) pour respecter votre jardin et l'environnement.",
    icon: "Leaf",
    benefits: [
      { label: "Méthodes manuelles ou thermiques" },
      { label: "Sans produits chimiques (option éco)" },
      { label: "Allées, massifs, potagers" },
      { label: "Conseils anti-repousse offerts" },
    ],
    startingPrice: "Sur devis",
    featured: false,
  },
  {
    slug: "creation-entretien-gazon",
    title: "Création & entretien de gazon",
    shortDescription: "Création de pelouse par semis ou engazonnement, entretien inclus.",
    description:
      "De la préparation du sol au premier semis, nous créons votre pelouse de A à Z. Amendement, nivellement, choix de la variété adaptée et conseils d'entretien pour une belle pelouse durable.",
    icon: "Sprout",
    benefits: [
      { label: "Préparation complète du sol" },
      { label: "Variétés adaptées à votre exposition" },
      { label: "Semis ou pose en rouleau" },
      { label: "Conseils d'entretien personnalisés" },
    ],
    startingPrice: "Sur devis",
    featured: true,
  },
  {
    slug: "gazon-plaquage",
    title: "Gazon de plaquage",
    shortDescription: "Pose de gazon en rouleau pour un résultat vert immédiat.",
    description:
      "Le gazon de plaquage permet d'obtenir une pelouse verte et dense dès le premier jour. Nous réalisons la préparation du sol, la pose et le premier arrosage. Résultat garanti et utilisable rapidement.",
    icon: "Square",
    benefits: [
      { label: "Résultat immédiat dès la pose" },
      { label: "Sol préparé et nivelé" },
      { label: "Gazon de qualité professionnelle" },
      { label: "Utilisable en quelques jours" },
    ],
    startingPrice: "Sur devis",
    featured: false,
  },
  {
    slug: "arrosage-automatique",
    title: "Installation & arrosage automatique",
    shortDescription: "Systèmes d'irrigation intelligents, économes en eau.",
    description:
      "Nous concevons et installons des systèmes d'arrosage automatique adaptés à chaque zone de votre jardin : pelouse, massifs, haies, potager. Programmateurs intelligents, capteurs de pluie, goutte-à-goutte.",
    icon: "Droplets",
    benefits: [
      { label: "Étude et conception sur mesure" },
      { label: "Économie d'eau jusqu'à 50 %" },
      { label: "Compatible WiFi / domotique" },
      { label: "Mise en route et réglages inclus" },
    ],
    startingPrice: "Sur devis",
    featured: false,
  },
  {
    slug: "taille-haies-arbustes",
    title: "Taille de haies & arbustes",
    shortDescription: "Taille et entretien de vos haies et arbustes toute l'année.",
    description:
      "Nos équipes taillent vos haies (thuyas, charmes, lauriers, leylandii) et arbustes avec précision, au bon moment de l'année. Évacuation des tailles incluse. Résultat soigné, net et durable.",
    icon: "Scissors",
    benefits: [
      { label: "Taille de toutes espèces" },
      { label: "Respect des périodes de taille" },
      { label: "Évacuation des déchets incluse" },
      { label: "Finitions nettes et précises" },
    ],
    startingPrice: "Sur devis",
    featured: false,
  },
  {
    slug: "contrat-annuel",
    title: "Contrat annuel d'entretien",
    shortDescription: "Un jardin toujours impeccable grâce à nos passages réguliers.",
    description:
      "Confiez l'entretien de votre jardin à HK Paysage avec un contrat annuel personnalisé. Tonte, taille, désherbage, débroussaillage, nettoyage : interventions planifiées et rapport après chaque passage.",
    icon: "Shield",
    benefits: [
      { label: "Calendrier d'intervention planifié" },
      { label: "Équipe attribuée et fidèle" },
      { label: "Rapport après chaque passage" },
      { label: "Tarif préférentiel contrat" },
    ],
    startingPrice: "Sur devis",
    featured: true,
  },
  {
    slug: "plantation",
    title: "Plantation",
    shortDescription: "Plantation d'arbustes, vivaces, haies, fleurs et potagers.",
    description:
      "Nous sélectionnons et plantons les végétaux adaptés à votre sol, votre exposition et vos goûts. Arbustes à fleurs, vivaces, rosiers, haies champêtres — chaque plantation est réalisée avec soin pour une reprise garantie.",
    icon: "Flower2",
    benefits: [
      { label: "Sélection végétaux adaptés" },
      { label: "Conseil espèces et associations" },
      { label: "Paillage et protection inclus" },
      { label: "Garantie de reprise végétaux" },
    ],
    startingPrice: "Sur devis",
    featured: false,
  },
  {
    slug: "beton-drainant",
    title: "Béton drainant",
    shortDescription: "Revêtement perméable esthétique et écologique pour vos allées.",
    description:
      "Le béton drainant est une solution idéale pour vos allées, cours et parkings. Perméable à l'eau, il évite les flaques et réduit le ruissellement. Disponible en plusieurs teintes, il s'intègre élégamment à votre extérieur.",
    icon: "Square",
    benefits: [
      { label: "Perméable à l'eau — zéro flaque" },
      { label: "Plusieurs teintes disponibles" },
      { label: "Résistant et durable" },
      { label: "Allées, cours, parkings" },
    ],
    startingPrice: "Sur devis",
    featured: false,
  },
  {
    slug: "elagage",
    title: "Élagage",
    shortDescription: "Élagage et abattage de vos arbres en toute sécurité.",
    description:
      "Nos équipes qualifiées interviennent pour l'élagage, la réduction de couronne ou l'abattage de vos arbres en toute sécurité. Matériel de grimpe professionnel. Broyage et évacuation des déchets inclus.",
    icon: "TreePine",
    benefits: [
      { label: "Intervenants qualifiés et assurés" },
      { label: "Matériel de cordiste (grimpe)" },
      { label: "Broyage et évacuation inclus" },
      { label: "Intervention sécurisée" },
    ],
    startingPrice: "Sur devis",
    featured: false,
  },
  {
    slug: "beton-desactive",
    title: "Béton désactivé",
    shortDescription: "Finition haut de gamme pour allées, terrasses et cours.",
    description:
      "Le béton désactivé offre une finition élégante et antidérapante. Le lavage à l'eau révèle les graviers en surface pour un aspect naturel et qualitatif. Idéal pour les allées carrossables, tours de piscine et terrasses.",
    icon: "Leaf",
    benefits: [
      { label: "Surface antidérapante naturelle" },
      { label: "Aspect minéral haut de gamme" },
      { label: "Multiples coloris de granulats" },
      { label: "Allées, terrasses, tour de piscine" },
    ],
    startingPrice: "Sur devis",
    featured: false,
  },
  {
    slug: "nettoyage-haute-pression",
    title: "Nettoyage haute pression",
    shortDescription: "Nettoyage professionnel de vos surfaces extérieures à haute pression.",
    description:
      "Nous redonnons une seconde jeunesse à vos terrasses, allées, murets, clôtures et dallages grâce à nos équipements haute pression professionnels. Résultats immédiats et durables, sans produits agressifs pour la plupart des surfaces.",
    icon: "Droplets",
    benefits: [
      { label: "Terrasses, allées, dallages" },
      { label: "Murets, clôtures, mobilier de jardin" },
      { label: "Résultat immédiat et visible" },
      { label: "Sans produits chimiques agressifs" },
    ],
    startingPrice: "Sur devis",
    featured: false,
  },
];

export const serviceTypes = services.map((s) => s.title);
