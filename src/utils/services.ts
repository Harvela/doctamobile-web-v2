export const services = [
  {
    name: 'Consultation sur demande: Rendez-vous initié par le Client (RDVIC)',
    color: '#F7FBFF',
    description:
      ' Il s’agit des rendez-vous de consultation (curative, préventive) sur demande du client à chaque fois qu’il a besoin d’être vu. En général le client abonné fera les réservations des rendez-vous via l’application doktamobile via un lien qui lui sera communiqué via une brochure qui lui sera remise au moment que sa carte d’abonnement. Le client n’est pas à l’aise avec l’usage du site internet, pourra passer par d’autre canaux qui lui sont familiers (appel téléphonique direct, les réseaux sociaux, mails, SMS, etc). Le cas échéant, le secrétariat de la CMMF remplira le formulaire de demande de rendez-vous selon les procédures de la CMMF (cfr manuel des procédures).',
  },
  {
    name: 'Visite à domicile de suivi: Rendez-vous initié par le prestataire (RDVIP)',
    color: '#FEF4E7',
    description:
      'Le RDVIC est  une visite à domicile initiée par le médecin traitant qui a vu le patient en collaboration ce dernier dans le cadre de suivi conformément aux procédures de CRESAMEF.',
  },
  {
    name: 'Consultation Super Spéciale & spécifique',
    color: '#F7FFFA',
    description:
      'En plus des médecins spécialistes en médecine de famille s’occupant de son bien être durant tout le temps de son abonnement, le patient aura le privilège d’être consulté et prise en charge par des super spécialité et soins spéciaux en fonction de son problème de santé : Cardiologue, diabétologue, neurologue, ophtalmologue, ORListe, Odontologue, Kinésithérapeute, psychologue, psychiatre etc..)',
  },
  {
    name: 'Promotion & Prévention',
    color: '#FFF5F5',
    description:
      'Les clients ayant souscrit au présent paquet ont droit aux services promotionnels et préventifs suivants :',
    subServices: [
      {
        name: 'Nutrition',
        description:
          'Le client a droit d’être vu et suivi par spécialiste en Nutrition/Diététique sans payer des frais supplémentaires.',
      },
      {
        name: 'Santé sexuelle et reproductive',
        description:
          'Service de planning familial et éducation sexuel selon le désir du client.',
      },
      {
        name: 'Education thérapeutique du Patient (ETP)',
        description:
          'Education thérapeutique du Patient (ETP) avec maladie chronique non transmissible',
      },
      {
        name: 'Basic Life Support',
        description: 'Premier secours en/réanimation de base et autre.',
      },
      {
        name: 'Kinésithérapie préventive',
        description: '',
      },
      {
        name: 'Sécurité en milieu domestique, scolaire et professionnel',
        description: '',
      },
    ],
  },
  {
    name: 'Visite à domicile (VAD) systématique',
    color: '#F7FFFA',
    description:
      'Il s’agit d’un rendez-vous mensuel systématique (RVMS) dans le but de suivi de proximité ne faisant à aucune demande ou consultation. Que le ménage ait un problème de santé ou pas le médecin passe une fois le mois.',
  },
  {
    name: 'Télémédecine',
    color: '#EAE8F1',
    description:
      'Via un téléphone ou une tablette ou un ordinateur, le client peut s’il désire bénéficier des certains services à distance (en ligne) via un progiciel spécial de clinique Mobile de Médecine de Famille (**Doktamobile**). Les services disponibles en télémédecines sont :',
    subServices: [
      {
        name: 'Télésuivi',
        description:
          'Le client sera suivi à distance qu’il soit à Goma ou ailleurs et ce même s’il n’a sollicité aucun service.',
      },
      {
        name: 'Télé conseil/expertise',
        description:
          'Le client bénéficiera à volonté des services promotionnels et préventifs à distance.',
      },
      {
        name: 'Téléconsultation',
        description:
          'être consulté en ligne en appel vidéo ou vocal via le progiciel par des médecins spécialistes de Goma, des autres villes Congolaises et même de l’extérieur du pays. Cette consultation sera sanctionnée par une prescription médicale (ordonnance: any, bons: any d: any’examen: any, etc: any.)',
      },
    ],
  },
  {
    name: 'Check-up santé (bilan de santé)',
    color: '#FDECEA',
    description: 'Les clients ont droit aux bilans de santé suivants :',
    subServices: [
      {
        name: 'Bilan annuel',
        description:
          'Un examen clinique du patient par un médecin généraliste.',
        subServices: [
          {
            name: 'Bilan prostatique',
            description:
              'Un examen clinique du patient par un médecin spécialiste en urologie.',
          },
          {
            name: 'Bilan cardiaque simple',
            description:
              "Un examen clinique du patient par un médecin généraliste, comprenant une écoute du rythme cardiaque, une mesure de la tension artérielle, une palpation du thorax, un calcul de l'IMC, un électrocardiogramme et une prise de sang.",
          },
          {
            name: 'Bilan cardiaque complet',
            description:
              "Un examen plus complet comprenant une échographie cardiaque, une échographie Doppler cardiaque et échographie de l'aorte abdominale, un écho doppler des troncs supra-aortiques, un test d'effort, un monitoring de la pression artérielle sur 24 heures et une pose d'un holter cardiaque.",
          },
          {
            name: 'Bilan lipidique',
            description:
              'Une prise de sang pour analyser le taux de lipides dans le sang.',
          },
          {
            name: 'Détection du cancer du sein',
            description:
              'Un examen clinique des seins par un médecin généraliste ou un gynécologue, ou une mammographie.',
          },
        ],
      },
      {
        name: 'Bilan dentaire',
        description:
          'Un examen clinique des dents et des gencives par un dentiste.',
      },
      {
        name: 'Bilan ophtalmique',
        description: 'Un examen clinique des yeux par un ophtalmologue.',
      },
      {
        name: "Détection du cancer du col de l'utérus",
        description: 'Un frottis cervico-utérin.',
      },
    ],
  },
  {
    name: 'Check-up santé (Bilan circonstanciel)',
    color: '#F7FBFF',
    description: 'Check-up santé dans des circonstances particulières ',
    subServices: [
      {
        name: 'Laboratoire',
        description:
          'Des examens de laboratoire, tels que des analyses sanguines, urinaires, etc.',
      },
      {
        name: 'Imagerie médicale',
        description:
          "Des examens d'imagerie médicale, tels qu'une radiographie, une échographie, une IRM, etc.",
      },
      {
        name: 'CPN à domicile en collaboration avec une formation sanitaire',
        description:
          'Une consultation prénatale à domicile, en collaboration avec une formation sanitaire.',
      },
      {
        name: 'Bilan spécifique à une maladie chronique non transmissible',
        description:
          "Un bilan de santé spécifique à une maladie chronique non transmissible, tel qu'un bilan diabétologique, un bilan hypertenseur, etc.",
      },
    ],
  },
  {
    name: 'Ambulance',
    color: '#FEF4E7',
    description:
      'Le client ayant souscrit à certain bouquet aura droit à nombre (quota) limité d’évacuation par   ambulance vers l’un des hôpitaux partenaire de CRESAMEF à de Goma ou vers l’aéroport. Ce quota sera fixé en fonction du type de package.',
  },
  {
    name: 'Prélèvement à domicile',
    color: '#F7FFFA',
    description:
      'Le client ayant souscrit à certains paquets aura droit au prélèvement à domicile s’ils le souhaitent. Le coût du déplacement du technicien sera totalement ou partiellement à la charge de la CMMF en fonction du type de paquet.Pour ce qui est des examens, la CMMF supportera partiellement ou tatalement le coût des examens de labo repris sur la liste de Bilan circonstanciel du présent paquet.',
  },
  {
    name: 'Livraison des médicaments à domicile',
    color: '#FFF5F5',
    description:
      'Les clients ayant souscrit à ce paquet se verront livrer les médicaments à domiciles. Il convient de noter que les médicaments sont à la charge du client exceptés ceux repris sur la liste bonus du paquet VIP. Les médicaments repris sur la liste Bonus paquet VIP seront livré sans frais supplémentaires. En revanche, pour les médicaments non répertoriés dans cette liste bonus, la livraison à domicile sera faite si et seulement si le client consent de payer à la CMMF l’équivalent du coût de l’achat du (des) médicament (s) ',
  },
  {
    name: 'Hospitalisation à domicile',
    color: '#EAE8F1',
    description:
      "Pour les clients, la CMMF fournira un(e) infirmier(e) qualifié(e) qui assurera la surveillance et les soins infirmier sous la supervision directe des médecins spécialistes de la CMMF. Le patient aura droit à un tour salle une à plusieurs fois par jour selon les cas. Néanmoins, les médicaments et les consommables seront à la charge du client à 100% ; La CMMF supportera uniquement le coût de la mobilisation du personnel et de services à 100%. Pour les bilans de laboratoire et imagerie médicale seront à 100% à la charge du patient. Ce service inclut essentiellement les soins gériatriques (soins pour personnes âgées/vieillards) et palliatifs (soins de fin de vie pour patient en stade avancé d'une maladie incurable).",
  },
  {
    name: 'Consultation à domicile (RDVIC) en dehors de Goma',
    color: '#FDECEA',
    description:
      'Si le Client est en séjour à Kinshasa ou dans une autre ville où CRESAMEF a un point focal il pourra bénéficier de service de consultation à domicile ou dans son hôtel et même d’une orientation s’il désire fréquente une structure sanitaire client bénéficiera d’un suivi. Le cas échéant CRESAMEF couvrira totalement les honoraires du médecin point focal, en revanche le coût de transport du médecin sera couvert partiellement ou totalement par CRESAMEF en fonction du type de package.',
  },
  {
    name: 'Facilitation de tourisme médical & évacuation à l’étranger',
    color: '#F7FBFF',
    description:
      'Le tourisme médical, tourisme de santé ou encore tourisme hospitalier, se réfère au déplacement dans un pays autre que le pays de résidence, dans le but de bénéficier d’un acte médical non disponible ou difficilement accessible dans son propre pays, soit pour des raisons de législation soit pour des raisons relatives à l’offre de soins. Si un un client désire aller se faire soigner ou examiner à l’étranger (Burundi, Inde, …), la CMMF lui facilitera la prise de contact et l’aidera à obtenir tous les renseignements nécessaires y relatifs. En principe CESAMEF empochera la commission qui lui sera versé par le client et la retro-comission versé par la structure à l’étranger. Certains paquets paquets prendront en charge la totalité de frais de commission et d’autre partiellement. En dehors desdits paquets, le client payera la totalité',
  },
  {
    name: 'Accompagnement médical',
    color: '#FEF4E7',
    description: `Ce service inclut :

* Gardiennage médical : Tous les frais sont à la charge du client avec une réduction d'un pourcentage repris sur le paquet d'abonnement. La restauration est totalement à la charge du Client.
* Accompagnement d'un malade en RDC. CRESAMEF supporte uniquement le billet retour par bateau de son personnel qui a accompagné le client. Le reste des frais sont à la charge du client.`,
  },
];
