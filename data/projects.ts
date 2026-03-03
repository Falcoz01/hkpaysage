import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "terrain-de-boules-meyzieu",
    title: "Terrain de boules à Meyzieu",
    category: "Création de jardin",
    location: "Meyzieu (69)",
    duration: "2 semaines",
    year: 2024,
    objective:
      "Création d'un terrain de boules en stabilisé sur-mesure dans un jardin privatif à Meyzieu : terrassement, bordures, grave stabilisée et finitions.",
    coverImage: "/images/terrain-de-boule1.jpeg",
    images: [
      "/images/terrain-de-boule1.jpeg",
      "/images/terrain-de-boule2.jpeg",
      "/images/terrain-de-boule3.jpeg",
      "/images/terrain-de-boule4.jpeg",
    ],
    steps: [
      { title: "Terrassement & délimitation", description: "Piquetage et terrassement de la zone, évacuation des terres et réglage du fond de forme." },
      { title: "Pose des bordures", description: "Implantation des bordures béton pour délimiter proprement le terrain et contenir le stabilisé." },
      { title: "Apport de grave stabilisée", description: "Mise en place d'une couche de grave calcaire compactée au rouleau pour un terrain lisse et drainant." },
      { title: "Finitions & nettoyage", description: "Réglage fin de la surface, vérification de la planéité et nettoyage complet du chantier." },
    ],
    tags: ["Terrain de boules", "Stabilisé", "Aménagement", "Meyzieu"],
    featured: true,
  },
  {
    slug: "espace-mineral-chavanoz",
    title: "Espace minéral décoratif à Chavanoz",
    category: "Création de jardin",
    location: "Chavanoz (38)",
    duration: "2 jours",
    year: 2024,
    objective:
      "Créer un espace minéral bicolore entre une terrasse bois et le gazon : galets blancs encadrés de basalte noir sur géotextile, pour un rendu graphique et zéro entretien.",
    coverImage: "/images/chavanoz-mineral1.jpeg",
    images: [
      "/images/chavanoz-mineral1.jpeg",
    ],
    steps: [
      { title: "Préparation du terrain", description: "Décaissement de la zone, nivellement et compactage du fond de forme pour une surface stable et drainante." },
      { title: "Pose du géotextile", description: "Mise en place d'un feutre anti-mauvaises herbes haute densité pour bloquer toute repousse végétale durablement." },
      { title: "Délimitation & bordures", description: "Implantation des bordures pour séparer proprement la zone minérale du gazon et de la terrasse bois." },
      { title: "Apport des minéraux", description: "Pose de la bordure de basalte noir puis remplissage central en galets de marbre blanc pour un effet graphique bicolore." },
    ],
    tags: ["Minéral", "Galets", "Basalte", "Zéro entretien", "Décoratif"],
    featured: true,
  },
  {
    slug: "elagage-arbre-lyon",
    title: "Élagage en hauteur à la corde",
    category: "Entretien",
    location: "Lyon (69)",
    duration: "1 jour",
    year: 2024,
    objective:
      "Réduction et nettoyage d'un grand conifère en milieu contraint : intervention à la corde par un grimpeur arboriste, évacuation des branches et mise en sécurité de l'arbre.",
    coverImage: "/images/elagage-arbre1.jpeg",
    images: [
      "/images/elagage-arbre1.jpeg",
    ],
    steps: [
      { title: "Évaluation & sécurisation", description: "Diagnostic de l'arbre, balisage de la zone de travail et mise en place des équipements de sécurité." },
      { title: "Montée en grimpeur arboriste", description: "Ascension à la corde avec équipement certifié pour accéder à toutes les parties de l'arbre en toute sécurité." },
      { title: "Élagage & réduction", description: "Coupe sélective des branches mortes, sèches ou trop charpentières pour alléger et rééquilibrer le houppier." },
      { title: "Évacuation & broyage", description: "Descente contrôlée des branches, broyage sur place et évacuation des déchets verts en filière agréée." },
    ],
    tags: ["Élagage", "Grimpeur arboriste", "Conifère", "Hauteur"],
    featured: true,
  },
  {
    slug: "plantation-olivier-jonage",
    title: "Plantation d'un olivier sur tige",
    category: "Plantations",
    location: "Jonage (69)",
    duration: "1 jour",
    year: 2024,
    objective:
      "Planter un olivier méditerranéen sur tige dans un jardin en pente, avec mise en place d'un arrosage intégré et préparation du sol pour garantir la reprise.",
    coverImage: "/images/plantation-olivier1.jpeg",
    images: [
      "/images/plantation-olivier1.jpeg",
    ],
    steps: [
      { title: "Préparation de la fosse", description: "Creusement d'une fosse adaptée au volume racinaire, amendement du sol avec terreau et sable de drainage." },
      { title: "Mise en place de l'arbre", description: "Positionnement et calage de l'olivier, vérification de la verticalité et comblement progressif avec la terre amendée." },
      { title: "Arrosage intégré", description: "Installation d'un goutte-à-goutte directement au pied du tronc pour assurer un arrosage régulier pendant la reprise." },
      { title: "Finitions & cuvette", description: "Création d'une cuvette d'arrosage, paillage du pied et premier arrosage d'installation copieux." },
    ],
    tags: ["Olivier", "Plantation", "Méditerranéen", "Arrosage"],
    featured: true,
  },
  {
    slug: "topiaire-boule-anthon",
    title: "Taille topiaire — boule géante",
    category: "Entretien",
    location: "Anthon (38)",
    duration: "1 jour",
    year: 2024,
    objective:
      "Taille artistique d'un if centenaire en sphère parfaite de plus de 2 mètres de diamètre, à l'échelle, dans un jardin avec piscine.",
    coverImage: "/images/topiaire-boule1.jpeg",
    images: [
      "/images/topiaire-boule1.jpeg",
    ],
    steps: [
      { title: "Analyse de la forme", description: "Évaluation du volume de l'arbre et tracé mental de la sphère cible avant toute coupe." },
      { title: "Dégrossissage à l'échelle", description: "Première passe de taille depuis l'échelle pour enlever l'excédent de végétation et approcher la forme ronde." },
      { title: "Taille de précision", description: "Finition à la cisaille manuelle en tournant autour de l'arbre pour obtenir une sphère parfaitement régulière." },
      { title: "Nettoyage & soufflage", description: "Ramassage des résidus de taille, nettoyage du sol autour de l'if et vérification de la régularité de la forme." },
    ],
    tags: ["Topiaire", "Taille artistique", "If", "Boule", "Art topiaire"],
    featured: true,
  },
  {
    slug: "gazon-rouleau-jons",
    title: "Gazon en rouleau — finition stade",
    category: "Création de jardin",
    location: "Jons (01)",
    duration: "3 jours",
    year: 2024,
    objective:
      "Création d'une pelouse en gazon en rouleau avec préparation du sol, apport de terre végétale et tonte de finition aux rayures impeccables façon terrain de sport.",
    coverImage: "/images/gazon-rouleau1.jpeg",
    images: [
      "/images/gazon-rouleau1.jpeg",
    ],
    steps: [
      { title: "Préparation du sol", description: "Fraisage, nivellement et apport de 10 cm de terre végétale criblée pour un support fertile et bien drainé." },
      { title: "Pose du gazon en rouleau", description: "Déroulage et jointement des rouleaux en quinconce, plaquage au rouleau lesté pour un contact parfait avec le sol." },
      { title: "Tuteurage des arbres", description: "Mise en place des tuteurs et attaches pour les jeunes arbres plantés en lisière de pelouse." },
      { title: "Premier arrosage & tonte", description: "Arrosage intensif d'installation sur 3 jours, puis première tonte avec tracteur à raies alternées pour un effet rayures parfaites." },
    ],
    tags: ["Gazon en rouleau", "Pelouse", "Rayures", "Création"],
    featured: true,
  },
  {
    slug: "entretien-pelouse-colombier",
    title: "Entretien pelouse — propriété avec piscine",
    category: "Entretien",
    location: "Colombier-Saugnieu (69)",
    duration: "Contrat annuel",
    year: 2024,
    objective:
      "Entretien régulier d'une grande pelouse de propriété avec piscine à débordement et vue panoramique sur la campagne : tonte, ramassage et finitions soignées.",
    coverImage: "/images/tonte-pelouse1.jpeg",
    images: [
      "/images/tonte-pelouse1.jpeg",
    ],
    steps: [
      { title: "Tonte rythmique", description: "Passage du tracteur-tondeuse en bandes alternées pour un résultat bicolore régulier et un gazon uniforme." },
      { title: "Finitions aux bordures", description: "Coupe au coupe-bordure le long de la piscine, des allées et des massifs pour un rendu net et soigné." },
      { title: "Ramassage & évacuation", description: "Collecte des résidus de tonte et évacuation en compostage ou filière verte selon la saison." },
    ],
    tags: ["Tonte", "Entretien", "Pelouse", "Piscine", "Grande propriété"],
    featured: false,
  },
];

export const projectCategories = [
  "Toutes",
  "Création de jardin",
  "Terrasse & Allées",
  "Plantations",
  "Entretien",
  "Avant / Après",
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(count = 6): Project[] {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return [...featured, ...rest].slice(0, count);
}
