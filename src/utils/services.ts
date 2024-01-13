export const services = [
  {
    name: 'Consultation sur demande',
    color: '#F7FBFF',
    description:
      'De façon illimitée, le Chef de ménage ou son délégué a le droit de réserver/demander une consultation/un rendez-vous à chaque fois qu’un membre du ménage a un problème de santé, et ce, selon les termes du contrat d’abonnement.',
  },
  {
    name: 'Visite à domicile de suivi',
    color: '#FEF4E7',
    description:
      'Selon l’appréciation du médecin et la présentation de la situation du patient, le médecin traitant qui a vu le patient en RDVIC peut initier en collaboration avec son patient une visite à domicile dans le cadre de suivi.',
  },
  {
    name: 'Consultation Super Spéciale & spécifique',
    color: '#F7FFFA',
    description:
      'En plus des médecins spécialistes s’occupant de son bien être durant tout le temps de son abonnement, le patient aura le privilège d’être consulté et prise en charge par des super spécialité et soins spéciaux en fonction de son problème de santé : Cardiologue, diabétologue, neurologue, ophtalmologue, ORListe, Dentiste, Kinésithérapeute, psychologue, psychiatre etc..)',
  },
  {
    name: 'Services Promotion & prévention',
    color: '#FFF5F5',
    description:
      'Les clients ayant souscrit au présent paquet ont droit aux services promotionnels et préventifs suivants',
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
        description: 'Kinésithérapie préventive',
      },
      {
        name: 'Sécurité en milieu domestique, scolaire et professionnel',
        description:
          'Sécurité en milieu domestique, scolaire et professionnel.',
      },
    ],
  },
  {
    name: 'Télémédecine',
    color: '#EAE8F1',
    description:
      'Via un téléphone ou une tablette ou un ordinateur, le client peut s’il désire bénéficier des certains services à distance (en ligne) via un progiciel spécial de clinique Mobile de Médecine de Famille.',
    subServices: [
      {
        name: 'Téléconsultation',
        description:
          'être consulté en ligne en appel vidéo ou vocal via le progiciel par des médecins spécialistes de Goma, des autres villes Congolaises et même de l’extérieur du pays. Cette consultation sera sanctionnée par une prescription médicale (ordonnance: any, bons: any d: any’examen: any, etc: any.) ; Si la téléconsultation est initié par le prestatire CRESAMEF, le client ne paiera aucun frais supplémentaire ; en revanche si la téléconsultation est sollicité par le client, ce dernier prendra en charge à 50% les frais supplémentaires y relatifs',
      },
      {
        name: 'Télésuivi',
        description:
          'Le client sera suivi à distance qu’il soit à Goma ou ailleurs et ce même s’il n’a sollicité aucun service. Ce suivi est systématique pour ce paquet.',
      },
      {
        name: 'Télé conseil/expertise',
        description:
          'Le client bénéficiera à volonté des services promotionnels et préventifs à distance.',
      },
    ],
  },
  {
    name: 'Check-up santé (bilan de santé)',
    color: '#FDECEA',
    description:
      'Les clients ayant souscrit au présent paquet ont droit aux bilans de santé suivants :',
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
      "Les clients ayant souscrit au présent paquet ont droit à un nombre d'évacuations gratuites par an à bord d'une ambulance pour être évacué à l'un de nos hôpitaux partenaires en ville de Goma ou vers l'aéroport. Au-delà de ce quota, le client va devoir prendre en charge les frais de l'ambulance à 50%.",
  },
  {
    name: 'Prélèvement à domicile',
    color: '#F7FFFA',
    description:
      "Les clients ayant souscrit au présent paquet auront droit au prélèvement à domicile s'ils le souhaitent. Le coût du déplacement du technicien sera à la charge de la CMMF à un pourcentage dependant du paquet d'abonnement. Pour ce qui est des examens, la CMMF supportera le coût des examens de laboratoire repris sur la liste de Bilan circonstanciel du présent paquet.",
  },
  {
    name: 'Livraison des médicaments à domicile',
    color: '#FFF5F5',
    description:
      "Les clients ayant souscrit au présent paquet se verront livrer les médicaments à domicile. Il convient de noter que les coûts relatifs à l'achat des médicaments sont à la charge du Client. La CMMF prend uniquement en charge les frais mentionné sur le paquet d'abonnement. Ainsi la livraison à domicile sera faite si et seulement si le client consent de payer à la CMMF l'équivalent du coût de l'achat du (des) médicament (s).",
  },
  {
    name: 'Hospitalisation à domicile',
    color: '#EAE8F1',
    description:
      "Pour les clients ayant souscrit au présent paquet, la CMMF fournira un(e) infirmier(e) qualifié(e) qui assurera la surveillance et les soins infirmier sous la supervision directe des médecins spécialistes de la CMMF. Le patient aura droit à un tour salle une à plusieurs fois par jour selon les cas. Néanmoins, les médicaments et les consommables seront à la charge du client à 100% ; La CMMF supportera uniquement le coût de la mobilisation du personnel et de services à 100%. Pour les bilans de laboratoire et imagerie médicale seront à 100% à la charge du patient. Ce service inclut essentiellement les soins gériatriques (soins pour personnes âgées/vieillards) et palliatifs (soins de fin de vie pour patient en stade avancé d'une maladie incurable).",
  },
  {
    name: 'Consultation à domicile (RDVIC) en dehors de Goma',
    color: '#FDECEA',
    description:
      "Les clients ayant souscrit au présent paquet peuvent bénéficier d'une consultation à domicile ou dans leur hôtel à Kinshasa, à condition de payer les frais de déplacement du médecin, soit 5 $ (au taux du jour). La CMMF paiera les honoraires du médecin une seule fois par mois.",
  },
  {
    name: 'Facilitation de tourisme médical & évacuation à l’étranger',
    color: '#F7FBFF',
    description:
      "Si un membre d'un ménage ayant souscrit au présent paquet désire aller se faire soigner ou examiner à l'étranger (Burundi, Inde, ...), la CMMF lui facilitera la prise de contact et l'aidera à obtenir tous les renseignements nécessaires y relatifs. Cependant, il payera les frais de commission avec une réduction de 15%. Le coût relatif au voyage et aux soins à l'étranger sera à la charge du Client lui-même.",
  },
  {
    name: 'Accompagnement médical',
    color: '#FEF4E7',
    description: `Ce service inclut :

* Gardiennage médical : Tous les frais sont à la charge du client avec une réduction d'un pourcentage repris sur le paquet d'abonnement. La restauration est totalement à la charge du Client.
* Accompagnement d'un malade en RDC. CRESAMEF supporte uniquement le billet retour par bateau de son personnel qui a accompagné le client. Le reste des frais sont à la charge du client.`,
  },
];
