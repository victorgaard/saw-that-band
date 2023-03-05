export type Concerts = {
  date: string;
  location: string;
};

export type Bands = {
  id: number;
  band: string;
  picture: string;
  genre: string[];
  concerts: Concerts[];
};

const bands: Bands[] = [
  {
    id: 1,
    band: '1349',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb7bc099045ff0a57585718e7b',
    genre: [
      'black metal',
      'dark black metal',
      'metal',
      'norwegian black metal',
      'norwegian metal',
      'technical black metal'
    ],
    concerts: [
      {
        date: '05-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 2,
    band: 'Adrenaline Mob',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb3cd16745a3375c9d1f239982',
    genre: ['modern hard rock', 'nyc metal'],
    concerts: [
      {
        date: '15-05-2015',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 3,
    band: 'Alcest',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb69013629d9b55ee04928af02',
    genre: [
      'atmospheric black metal',
      'blackgaze',
      'french black metal',
      'french metal',
      'french shoegaze',
      'post-black metal',
      'post-metal',
      'shoegaze'
    ],
    concerts: [
      {
        date: '06-09-2014',
        location: 'São Paulo'
      },
      {
        date: '05-08-2016',
        location: 'Wacken'
      },
      {
        date: '04-09-2016',
        location: 'São Paulo'
      },
      {
        date: '30-06-2018',
        location: 'São Paulo'
      },
      {
        date: '13-02-2020',
        location: 'Berlin'
      },
      {
        date: '18-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 4,
    band: 'Alestorm',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb1f737960c4e070e773691376',
    genre: ['pirate metal', 'metal', 'power metal', 'scottish metal'],
    concerts: [
      {
        date: '01-12-2017',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 5,
    band: 'Alice in Chains',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb6114a63659d0d5c0a801f733',
    genre: [
      'alternative metal',
      'alternative rock',
      'grunge',
      'nu metal',
      'rock'
    ],
    concerts: [
      {
        date: '08-11-2018',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 6,
    band: 'Almah',
    picture: 'https://i.scdn.co/image/ab67616d0000b273f68141d8a50a0f994ea091b2',
    genre: [
      'brazilian metal',
      'brazilian power metal',
      'brazilian progressive metal',
      'christian power metal',
      'neo classical metal',
      'power metal'
    ],
    concerts: [
      {
        date: '07-09-2017',
        location: 'Brasília'
      }
    ]
  },
  {
    id: 7,
    band: 'Amenra',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb80617c70997cb57119a0a4b1',
    genre: [
      'atmospheric sludge',
      'belgian metal',
      'drone metal',
      'post-doom metal',
      'post-metal'
    ],
    concerts: [
      {
        date: '26-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 8,
    band: 'Amon Amarth',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb131d4f2d863142fda3e0f69e',
    genre: [
      'alternative metal',
      'death metal',
      'melodic death metal',
      'metal',
      'power metal',
      'swedish death metal',
      'swedish melodeath',
      'swedish metal',
      'tolkien metal',
      'viking metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      },
      {
        date: '18-05-2014',
        location: 'Curitiba'
      },
      {
        date: '02-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 9,
    band: 'Amorphis',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebd843a566ac64b933b3f2229d',
    genre: [
      'finnish death metal',
      'finnish melodeath',
      'finnish metal',
      'folk metal',
      'gothic metal',
      'melodic death metal',
      'metal',
      'power metal',
      'progressive doom'
    ],
    concerts: [
      {
        date: '06-12-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 10,
    band: 'Anathema',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb3b2f51bb865ea1d25c236789',
    genre: ['gothic metal', 'progressive doom', 'progressive metal'],
    concerts: [
      {
        date: '05-09-2015',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 11,
    band: 'Andy McKee',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb5f81f7c715074b1a223ed268',
    genre: ['fingerstyle', 'instrumental bluegrass'],
    concerts: [
      {
        date: '05-09-2015',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 12,
    band: 'Angra',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebc717887800e7d7f537e06736',
    genre: [
      'brazilian metal',
      'brazilian power metal',
      'brazilian progressive metal',
      'latin metal',
      'metal',
      'neo classical metal',
      'power metal',
      'progressive metal',
      'progressive power metal',
      'speed metal',
      'symphonic metal'
    ],
    concerts: [
      {
        date: '14-04-2007',
        location: 'Goiânia'
      }
    ]
  },
  {
    id: 13,
    band: 'Antimatter',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb40b6be83b9f589d0ec28db8c',
    genre: ['dark rock', 'gothic metal', 'modern progressive rock'],
    concerts: [
      {
        date: '06-09-2015',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 14,
    band: 'Apocalyptica & Orchestra',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb7526751c3a833aac58be50aa',
    genre: ['alternative metal', 'bow pop', 'cello', 'finnish metal'],
    concerts: [
      {
        date: '01-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 15,
    band: 'Arch Enemy',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebb56d14cd84327f2eb5c481b3',
    genre: [
      'alternative metal',
      'death metal',
      'melodic death metal',
      'metal',
      'nu metal',
      'power metal',
      'swedish death metal',
      'swedish melodeath',
      'swedish metal'
    ],
    concerts: [
      {
        date: '08-02-2015',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 16,
    band: 'Arkona',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb1e1dab9447f2869f9d918afa',
    genre: [
      'folk metal',
      'medieval folk',
      'russian folk metal',
      'russian metal',
      'slavic folk metal',
      'slavic metal'
    ],
    concerts: [
      {
        date: '29-11-2013',
        location: 'Curitiba'
      },
      {
        date: '18-10-2015',
        location: 'Curitiba'
      },
      {
        date: '20-10-2018',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 17,
    band: 'Armahda',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebc6416ae218b9fe0be39c1613',
    genre: ['brazilian metal'],
    concerts: [
      {
        date: '26-03-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 18,
    band: 'Avantasia',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebb678d5904bcb79a1f5695b28',
    genre: [
      'german metal',
      'german power metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'opera metal',
      'power metal',
      'symphonic metal'
    ],
    concerts: [
      {
        date: '02-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 19,
    band: 'Axel Rudi Pell',
    picture: 'https://i.scdn.co/image/afdd5b3bc7afcd334c273ce74fdfd3b6764c86b0',
    genre: [
      'german metal',
      'german power metal',
      'hard rock',
      'metal',
      'power metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 20,
    band: 'Batushka',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebed77e8164cf6633ab8715db4',
    genre: ['polish black metal', 'polish metal', 'voidgaze'],
    concerts: [
      {
        date: '18-05-2018',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 21,
    band: 'Behemoth',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebd9b6eca591c714e728194db6',
    genre: [
      'black metal',
      'death metal',
      'metal',
      'pagan black metal',
      'polish black metal',
      'polish death metal',
      'polish metal'
    ],
    concerts: [
      {
        date: '02-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 22,
    band: 'Between the Buried and Me',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb87fc314a9b6b9f18e6e32278',
    genre: [
      'deathcore',
      'djent',
      'jazz metal',
      'melodic metalcore',
      'north carolina metal',
      'progressive metal'
    ],
    concerts: [
      {
        date: '22-09-2019',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 23,
    band: 'Birds in Row',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebc5a54990abd18ff6b73e2279',
    genre: [
      'chaotic hardcore',
      'dreamo',
      'french hardcore',
      'melodic hardcore',
      'post-doom metal',
      'rock alternatif francais'
    ],
    concerts: [
      {
        date: '13-02-2020',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 24,
    band: 'Blaas of Glory',
    picture: 'https://i.scdn.co/image/ab67616d0000b2739040f3014541c40f8cf8d246',
    genre: ['heavy metal marching band'],
    concerts: [
      {
        date: '03-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 25,
    band: 'Black Label Society',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebca9e1ddb61172c1b9672567a',
    genre: ['alternative metal', 'groove metal', 'metal', 'nu metal'],
    concerts: [
      {
        date: '16-08-2011',
        location: 'Goiânia'
      }
    ]
  },
  {
    id: 26,
    band: 'Black Sabbath',
    picture: 'https://i.scdn.co/image/5931700f9515dd6587230130beb615e0549e47dc',
    genre: [
      'album rock',
      'birmingham metal',
      'classic rock',
      'metal',
      'rock',
      'stoner rock',
      'uk doom metal'
    ],
    concerts: [
      {
        date: '30-11-2016',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 27,
    band: 'Blind Guardian',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb26139a78b669ae67aacde9f3',
    genre: [
      'german metal',
      'german power metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'power metal',
      'speed metal',
      'symphonic metal'
    ],
    concerts: [
      {
        date: '07-10-2015',
        location: 'Curitiba'
      },
      {
        date: '11-09-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 28,
    band: 'Booze & Glory',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebc264ab7cfef61742a905b694',
    genre: ['street punk rock', 'oi', 'polish-british punk rock'],
    concerts: [
      {
        date: '28-10-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 29,
    band: 'Borknagar',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb1928c0bb306d52dc53755f92',
    genre: [
      'black metal',
      'folk black metal',
      'folk metal',
      'metal',
      'norwegian black metal',
      'norwegian metal',
      'progressive black metal',
      'viking black metal',
      'viking metal'
    ],
    concerts: [
      {
        date: '06-08-2016',
        location: 'Wacken'
      },
      {
        date: '22-03-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 30,
    band: 'Brass Against',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb1e4df42ee7f6a759d19139e7',
    genre: ['modern alternative rock'],
    concerts: [
      {
        date: '17-05-2022',
        location: 'Cologne'
      }
    ]
  },
  {
    id: 31,
    band: 'Caspian',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb430da8342d113035178500e9',
    genre: [
      'american post-rock',
      'boston rock',
      'instrumental post-rock',
      'post-rock'
    ],
    concerts: [
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 32,
    band: 'Children of Bodom',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebe51866b7c973c8aafaf1fece',
    genre: [
      'finnish death metal',
      'finnish melodeath',
      'finnish metal',
      'melodic death metal',
      'metal',
      'power metal'
    ],
    concerts: [
      {
        date: '01-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 33,
    band: 'Circle II Circle',
    picture: 'https://i.scdn.co/image/71fd0dab0dec125918aaaa1f29d17d2c48b50ed8',
    genre: [
      'neo classical metal',
      'neo-trad metal',
      'power metal',
      'progressive metal',
      'progressive power metal'
    ],
    concerts: [
      {
        date: '02-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 34,
    band: 'Circus Maximus',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebd6989e2eac6349e58fd53a29',
    genre: [
      'neo classical metal',
      'norwegian metal',
      'progressive metal',
      'progressive power metal'
    ],
    concerts: [
      {
        date: '17-09-2016',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 35,
    band: 'Confraria da Costa',
    picture: 'https://i.scdn.co/image/ab67616d0000b27338298c3924c80d9297206b07',
    genre: ['gypsy punk', 'rock caipira', 'rock curitibano'],
    concerts: [
      {
        date: '25-11-2014',
        location: 'Curitiba'
      },
      {
        date: '28-11-2015',
        location: 'Curitiba'
      },
      {
        date: '07-02-2016',
        location: 'Curitiba'
      },
      {
        date: '01-12-2017',
        location: 'Curitiba'
      },
      {
        date: '03-06-2018',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 36,
    band: 'Conjurer',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb38278cc9e432fd4a6852ffa9',
    genre: [
      'british death metal',
      'post-doom metal',
      'post-metal',
      'uk doom metal',
      'uk post-metal'
    ],
    concerts: [
      {
        date: '20-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 37,
    band: 'Corpse Garden',
    picture: 'https://i.scdn.co/image/ab67616d0000b273bf912d8fad11527c808d90cf',
    genre: ['death metal'],
    concerts: [
      {
        date: '01-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 38,
    band: 'Countless Skies',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb8cea57cb9005d491478711a2',
    genre: ['melodic death metal', 'progressive death metal'],
    concerts: [
      {
        date: '26-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 39,
    band: 'Covet',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebc4c5c21a599dc62c41a73f65',
    genre: ['instrumental math rock', 'instrumental rock', 'math rock'],
    concerts: [
      {
        date: '19-08-2022',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 40,
    band: 'Cradle of Filth',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb2c50d0efbcaedb6b050fa5e6',
    genre: [
      'black metal',
      'british black metal',
      'death metal',
      'gothic black metal',
      'gothic metal',
      'metal',
      'nu metal',
      'symphonic black metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 41,
    band: 'Cult of Luna',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebcdbbbd263cc57ed20749608b',
    genre: [
      'atmospheric sludge',
      'dark jazz',
      'drone metal',
      'post-doom metal',
      'post-metal',
      'post-rock',
      'progressive sludge',
      'slayer',
      'sludge metal',
      'swedish doom metal',
      'swedish progressive metal'
    ],
    concerts: [
      {
        date: '18-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 42,
    band: 'Dark Tranquility',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb586e5c97bb593365e6e63a19',
    genre: [
      'death metal',
      'gothenburg metal',
      'melodic death metal',
      'metal',
      'swedish death metal',
      'swedish melodeath',
      'swedish metal'
    ],
    concerts: [
      {
        date: '06-12-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 43,
    band: 'Delain',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebfd2823bada78b272a732bd40',
    genre: [
      'dutch metal',
      'gothic metal',
      'gothic symphonic metal',
      'melodic metal',
      'power metal',
      'slayer',
      'symphonic metal',
      'symphonic power metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 44,
    band: 'Delta Sleep',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebef86feb3e2b9c57897ddc453',
    genre: [
      'brighton indie',
      'british math rock',
      'math rock',
      'progressive post-hardcore'
    ],
    concerts: [
      {
        date: '18-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 45,
    band: `Devil's Note`,
    picture: 'https://i.scdn.co/image/fe330fd4cd9f07ed456e67bb125158131e2e7a28',
    genre: ['melodic Death Metal', 'death metal', 'metal'],
    concerts: [
      {
        date: '05-09-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 46,
    band: 'Devin Townsend Project',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb2fe0fdea4581ab8a08174628',
    genre: [
      'avant-garde metal',
      'canadian metal',
      'djent',
      'progressive metal',
      'vancouver metal'
    ],
    concerts: [
      {
        date: '02-08-2014',
        location: 'Wacken'
      },
      {
        date: '27-11-2019',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 47,
    band: 'Dimmu Borgir',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb2e21b46a6744443a90297441',
    genre: [
      'black metal',
      'melodic death metal',
      'metal',
      'norwegian black metal',
      'norwegian metal',
      'symphonic black metal',
      'symphonic metal'
    ],
    concerts: [
      {
        date: '03-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 48,
    band: 'Disillusion',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb8a6e6321966286cc9662d7b0',
    genre: [
      'deep progressive rock',
      'jazz metal',
      'melodic death metal',
      'progressive death metal',
      'progressive metal'
    ],
    concerts: [
      {
        date: '09-09-2022',
        location: 'Berlin'
      },
      {
        date: '29-10-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 50,
    band: 'Dream Theater',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb881f3d1db94c120edca60a65',
    genre: ['progressive metal', 'neo classical metal'],
    concerts: [
      {
        date: '09-12-2005',
        location: 'Rio de Janeiro'
      },
      {
        date: '02-10-2014',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 51,
    band: 'Dropkick Murphys',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb2b3032f701dee12a10157f83',
    genre: [
      'boston punk',
      'boston rock',
      'celtic punk',
      'celtic rock',
      'punk',
      'skate punk'
    ],
    concerts: [
      {
        date: '24-11-2014',
        location: 'São Paulo'
      },
      {
        date: '28-10-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 52,
    band: 'Edguy',
    picture: 'https://i.scdn.co/image/ab6772690000c46cec078670d746fddbe7674e78',
    genre: [
      'german metal',
      'german power metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'power metal',
      'progressive metal',
      'symphonic metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 53,
    band: 'Edu Falaschi (Temple of Shadows in Concert)',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb980072654829e2673eb0ddc1',
    genre: [
      'brazilian metal',
      'brazilian power metal',
      'brazilian progressive metal',
      'power metal'
    ],
    concerts: [
      {
        date: '04-05-2019',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 54,
    band: 'Eluveitie',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebe8581fc1b573119b7eb0b69b',
    genre: [
      'celtic metal',
      'folk metal',
      'hurdy-gurdy',
      'melodic death metal',
      'power metal',
      'swiss metal'
    ],
    concerts: [
      {
        date: '14-04-2015',
        location: 'Curitiba'
      },
      {
        date: '03-08-2012',
        location: 'Wacken'
      },
      {
        date: '06-12-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 55,
    band: 'Elvenking',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb54c9e4c57915351d0d362930',
    genre: [
      'folk metal',
      'italian folk metal',
      'italian metal',
      'italian power metal',
      'melodic metal',
      'neo classical metal',
      'power metal',
      'symphonic power metal',
      'tolkien metal'
    ],
    concerts: [
      {
        date: '06-08-2016',
        location: 'Wacken'
      },
      {
        date: '19-11-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 56,
    band: 'Emma Ruth Rundle',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb5e5633c6ccb17f1b4d08e391',
    genre: [
      'gaian doom',
      'modern dream pop',
      'post-doom metal',
      'post-rock',
      'spectra'
    ],
    concerts: [
      {
        date: '20-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 57,
    band: 'Emperor',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb43f059f576a7f1bea9b6785b',
    genre: [
      'black metal',
      'metal',
      'norwegian black metal',
      'norwegian metal',
      'symphonic black metal',
      'symphonic metal',
      'technical black metal'
    ],
    concerts: [
      {
        date: '02-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 58,
    band: 'Ensiferum',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb2b1f6b18fd55a49ff5b0cb39',
    genre: [
      'finnish melodeath',
      'finnish metal',
      'folk metal',
      'melodic death metal',
      'metal',
      'nordic folk metal',
      'power metal',
      'viking metal'
    ],
    concerts: [
      {
        date: '19-11-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 59,
    band: 'Enslaved',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebca34c9ba25a9851946cabbc2',
    genre: [
      'black metal',
      'death metal',
      'doom metal',
      'melodic death metal',
      'metal',
      'norwegian black metal',
      'norwegian metal',
      'pagan black metal',
      'progressive black metal',
      'viking black metal',
      'viking metal'
    ],
    concerts: [
      {
        date: '16-09-2017',
        location: 'São Paulo'
      },
      {
        date: '31-03-2019',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 60,
    band: 'Epica',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb69f00b85d0a50b0e13cb1b15',
    genre: [
      'dutch metal',
      'gothic metal',
      'gothic symphonic metal',
      'melodic metal',
      'neo classical metal',
      'opera metal',
      'power metal',
      'symphonic metal'
    ],
    concerts: [
      {
        date: '15-10-2016',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 61,
    band: 'Equilibrium',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebebfb3ea5724aebd4f3a93cac',
    genre: [
      'folk metal',
      'german metal',
      'german pagan metal',
      'melodic death metal',
      'power metal',
      'viking metal'
    ],
    concerts: [
      {
        date: '05-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 62,
    band: 'Exciter',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb580c5e9fc59524732e67b869',
    genre: ['canadian metal', 'metal', 'nwothm', 'speed metal', 'thrash metal'],
    concerts: [
      {
        date: '06-09-2013',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 63,
    band: 'Fates Warning',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb857b39cf580ac1faf6749772',
    genre: [
      'metal',
      'neo classical metal',
      'progressive metal',
      'us power metal'
    ],
    concerts: [
      {
        date: '06-09-2014',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 64,
    band: 'Faun',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebeefac1c6848ec9c857bb3171',
    genre: ['hurdy-gurdy', 'medieval folk', 'medieval rock'],
    concerts: [
      {
        date: '03-06-2018',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 65,
    band: 'Finntroll',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb914b7288bf930841c642177c',
    genre: [
      'finnish metal',
      'folk metal',
      'melodic death metal',
      'metal',
      'nordic folk metal',
      'power metal',
      'viking metal'
    ],
    concerts: [
      {
        date: '15-10-2016',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 66,
    band: 'Flogging Molly',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb0024ccb466aa62503fa9f3e2',
    genre: ['celtic punk', 'celtic rock', 'comic', 'punk', 'skate punk'],
    concerts: [
      {
        date: '05-10-2018',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 67,
    band: 'Gamma Ray',
    picture: 'https://i.scdn.co/image/ab6772690000c46c1110b1a024312710e7c796c4',
    genre: [
      'german metal',
      'german power metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'power metal',
      'speed metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 68,
    band: 'Ghost',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb64ab0252ac49ac5020ffccae',
    genre: ['metal'],
    concerts: [
      {
        date: '24-09-2013',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 69,
    band: 'God is an Astronaut',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb85c4a13f730e23ba5e726b40',
    genre: ['cosmic post-rock', 'instrumental post-rock', 'post-rock'],
    concerts: [
      {
        date: '06-09-2014',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 70,
    band: 'Grave Digger',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb6832ba93b796bb6ca862da48',
    genre: [
      'german metal',
      'german power metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'neo-trad metal',
      'power metal',
      'speed metal'
    ],
    concerts: [
      {
        date: '21-11-2009',
        location: 'São Paulo'
      },
      {
        date: '26-03-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 71,
    band: 'Graveyard',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebffffefd4ca3481fdcc8d7c63',
    genre: [
      'modern blues rock',
      'psychedelic doom',
      'retro metal',
      'space rock',
      'stoner metal',
      'stoner rock',
      'swedish stoner rock'
    ],
    concerts: [
      {
        date: '03-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 72,
    band: 'Gutalax',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebf418853eb9edebb34db1d7e4',
    genre: ['goregrind', 'pornogrind'],
    concerts: [
      {
        date: '28-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 73,
    band: 'Haken',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebf7c081258a8e1d2bf3d049d6',
    genre: [
      'djent',
      'jazz metal',
      'neo classical metal',
      'progressive metal',
      'symphonic rock'
    ],
    concerts: [
      {
        date: '29-01-2019',
        location: 'São Paulo'
      },
      {
        date: '27-11-2019',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 74,
    band: 'Hammerfall',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb5cc9dba7c275fcb81f80f62e',
    genre: [
      'gothenburg metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'power metal',
      'swedish power metal',
      'symphonic metal'
    ],
    concerts: [
      {
        date: '03-08-2012',
        location: 'Wacken'
      },
      {
        date: '31-07-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 75,
    band: 'Hangar',
    picture: 'https://i.scdn.co/image/ab67616d0000b273609fa50849dca8b78b2681eb',
    genre: [
      'brazilian metal',
      'brazilian power metal',
      'brazilian progressive metal',
      'metal gaucho',
      'progressive power metal'
    ],
    concerts: [
      {
        date: '16-02-2011',
        location: 'Goiânia'
      }
    ]
  },
  {
    id: 76,
    band: 'Heaven and Hell',
    picture: 'https://i.scdn.co/image/efaf546ae3e4bcadcadff23508feb742dc469637',
    genre: ['heavy metal', 'metal'],
    concerts: [
      {
        date: '13-05-2009',
        location: 'Brasília'
      }
    ]
  },
  {
    id: 77,
    band: 'Helloween',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebcab673050b3f161eb7688c32',
    genre: [
      'power metal',
      'german metal',
      'german power metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'old school thrash',
      'rock',
      'speed metal'
    ],
    concerts: [
      {
        date: '29-10-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 78,
    band: 'Hippotraktor',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebb41251b65ec5a668851d1425',
    genre: ['progressive metal', 'post metal', 'djent', 'belgium metal'],
    concerts: [
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 79,
    band: 'Hypocrisy',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebcd3fbb6bed8710b2c84daa75',
    genre: [
      'black metal',
      'death metal',
      'melodic death metal',
      'metal',
      'swedish death metal',
      'swedish melodeath',
      'swedish metal'
    ],
    concerts: [
      {
        date: '24-04-2014',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 80,
    band: 'Iamthemorning',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb89b2848a95330913c4217c4b',
    genre: ['chamber pop', 'modern progressive rock'],
    concerts: [
      {
        date: '28-09-2019',
        location: 'Potsdam'
      }
    ]
  },
  {
    id: 81,
    band: 'Ihsahn',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebadb85daa22017a04b58bfd4b',
    genre: [
      'black metal',
      'jazz metal',
      'norwegian metal',
      'progressive metal'
    ],
    concerts: [
      {
        date: '05-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 82,
    band: 'In Flames',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb5c3bd919d1344a738af14136',
    genre: [
      'alternative metal',
      'gothenburg metal',
      'melodic death metal',
      'metal',
      'nu metal',
      'swedish death metal',
      'swedish melodeath',
      'swedish metal'
    ],
    concerts: [
      {
        date: '03-08-2012',
        location: 'Wacken'
      },
      {
        date: '22-10-2017',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 83,
    band: 'Insomnium',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb3c1d18f0fc7bd0b1fa5b607b',
    genre: [
      'finnish death metal',
      'finnish melodeath',
      'finnish metal',
      'melodic death metal',
      'metal'
    ],
    concerts: [
      {
        date: '08-12-2019',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 84,
    band: 'Intronaut',
    picture: 'https://i.scdn.co/image/4b0b1eb3bb9549d0222cc71faf551ab19ecdbcea',
    genre: ['djent', 'jazz metal', 'post-metal'],
    concerts: [
      {
        date: '18-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 85,
    band: 'Irfan',
    picture: 'https://i.scdn.co/image/ab67616d0000b2734fb9b5f2af924c6c2eac1cf9',
    genre: ['medieval folk', 'neoclassical darkwave', 'rune folk'],
    concerts: [
      {
        date: '10-10-2019',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 86,
    band: 'Iron Maiden',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebdc52c8e309e46aa8430a0fa0',
    genre: ['heavy metal', 'metal', 'nwobhm', 'rock'],
    concerts: [
      {
        date: '20-03-2009',
        location: 'Brasília'
      },
      {
        date: '24-09-2013',
        location: 'Curitiba'
      },
      {
        date: '04-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 87,
    band: 'Jinjer',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb0c094d5430cde352463b0175',
    genre: ['metalcore', 'groove metal', 'ukrainian metal'],
    concerts: [
      {
        date: '27-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 88,
    band: 'Jo Quail',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebb49da949964bb9e65c6294ef',
    genre: ['modern cello', 'post-rock'],
    concerts: [
      {
        date: '20-08-2022',
        location: 'ArcTanget'
      }
    ]
  },
  {
    id: 89,
    band: 'John Haughm',
    picture: 'https://i.scdn.co/image/ab67616d0000b273c2166d0dced6e6d235010683',
    genre: ['ambient', 'experimental', 'avant-garde'],
    concerts: [
      {
        date: '16-09-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 90,
    band: 'Judas Priest',
    picture: 'https://i.scdn.co/image/d6df710d0a8244dc02fae361d89b7d2ffb4dfba3',
    genre: ['heavy metal', 'metal', 'birmingham metal', 'classic rock', 'rock'],
    concerts: [
      {
        date: '15-09-2011',
        location: 'Brasília'
      },
      {
        date: '08-11-2018',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 91,
    band: 'Kalevala',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebbb9faccf96d741d2e5bc75c9',
    genre: [
      'russian folk metal',
      'russian folk rock',
      'slavic folk metal',
      'slavic metal'
    ],
    concerts: [
      {
        date: '19-11-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 92,
    band: 'Kamelot',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb5f878a0070d7800c18a508b7',
    genre: [
      'gothic symphonic metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'power metal',
      'progressive metal',
      'symphonic metal'
    ],
    concerts: [
      {
        date: '03-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 93,
    band: 'Katatonia',
    picture: 'https://i.scdn.co/image/ab6761610000e5eba65f5211ef06d534018b7a11',
    genre: [
      'doom metal',
      'gothic metal',
      'metal',
      'progressive metal',
      'swedish doom metal',
      'swedish metal',
      'swedish progressive metal'
    ],
    concerts: [
      {
        date: '04-09-2016',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 94,
    band: 'King Diamond',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb88335c2a97302c880d42a134',
    genre: [
      'danish metal',
      'death metal',
      'metal',
      'power metal',
      'rock',
      'thrash metal'
    ],
    concerts: [
      {
        date: '01-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 95,
    band: 'Klone',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb2670280d28e11d139f72c71c',
    genre: [
      'deep progressive rock',
      'french metal',
      'progressive groove metal',
      'progressive metal'
    ],
    concerts: [
      {
        date: '19-02-2020',
        location: 'Budapest'
      }
    ]
  },
  {
    id: 96,
    band: 'Korpiklaani',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb4007626284c331661dab6d2c',
    genre: [
      'finnish metal',
      'folk metal',
      'nordic folk metal',
      'power metal',
      'viking metal'
    ],
    concerts: [
      {
        date: '20-03-2010',
        location: 'Curitiba'
      },
      {
        date: '16-12-2015',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 97,
    band: 'Kreator',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebe0b534896c50cb2281b88fed',
    genre: [
      'death metal',
      'german metal',
      'german thrash metal',
      'melodic thrash',
      'metal',
      'old school thrash',
      'power metal',
      'speed metal',
      'thrash metal'
    ],
    concerts: [
      {
        date: '02-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 98,
    band: 'Krisiun',
    picture: 'https://i.scdn.co/image/ab6772690000c46c1739426895cb22abef293b08',
    genre: [
      'brazilian death metal',
      'brazilian metal',
      'brutal death metal',
      'death metal',
      'metal gaucho',
      'technical death metal'
    ],
    concerts: [
      {
        date: '16-07-2016',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 99,
    band: 'Kælan Mikla',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb77ff93e72ef5545f41b4bb74',
    genre: ['dark post-punk', 'icelandic post-punk', 'icelandic rock'],
    concerts: [
      {
        date: '13-02-2020',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 100,
    band: 'Labirinto',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebf13bfe10602ee72cc0ee9c62',
    genre: ['brazilian post-rock'],
    concerts: [
      {
        date: '06-09-2014',
        location: 'Wacken'
      },
      {
        date: '04-09-2016',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 101,
    band: 'Last Hyena',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb42b4d1a6380f87b1bd3b4bd3',
    genre: ['instrumental math rock'],
    concerts: [
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 102,
    band: 'Leprous',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb1039c96a8100bdeb579126af',
    genre: ['norwegian metal', 'prog metal', 'progressive metal'],
    concerts: [
      {
        date: '10-03-2019',
        location: 'São Paulo'
      },
      {
        date: '19-02-2020',
        location: 'Budapest'
      },
      {
        date: '20-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 103,
    band: 'Les Discrets',
    picture: 'https://i.scdn.co/image/8ac3bca600abdf1e42efdce55065a65789b2efd4',
    genre: [
      'blackgaze',
      'french black metal',
      'french metal',
      'french shoegaze',
      'post-metal'
    ],
    concerts: [
      {
        date: '16-09-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 104,
    band: 'Lucid Satanama Dynasty',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb8927a6db3ec4ea075008c916',
    genre: ['oriental atmospheric', 'percussion', 'psychedelic'],
    concerts: [
      {
        date: '10-10-2019',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 105,
    band: 'MONO',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb0518ddbbcf1fcaaf24b4ce76',
    genre: [
      'downtempo',
      'instrumental post-rock',
      'japanese post-rock',
      'post-rock'
    ],
    concerts: [
      {
        date: '06-09-2015',
        location: 'São Paulo'
      },
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 106,
    band: 'Machine Head',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebe499036b76b54eab1471297e',
    genre: [
      'alternative metal',
      'groove metal',
      'industrial metal',
      'melodic groove metal',
      'melodic metalcore',
      'metal',
      'nu metal',
      'progressive groove metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 107,
    band: 'Maraton',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb9b2803d644d5356697ffc8ad',
    genre: [
      'deep progressive rock',
      'norwegian alternative rock',
      'norwegian prog'
    ],
    concerts: [
      {
        date: '19-02-2020',
        location: 'Budapest'
      }
    ]
  },
  {
    id: 108,
    band: 'Marduk',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb81fbd8862f63e28c41ca98e8',
    genre: [
      'black metal',
      'dark black metal',
      'death metal',
      'metal',
      'swedish black metal',
      'swedish metal',
      'symphonic black metal'
    ],
    concerts: [
      {
        date: '03-08-2013',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 109,
    band: 'Masterplan',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb0253cbcebc97ff471e976c43',
    genre: [
      'german metal',
      'german power metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'power metal',
      'progressive metal',
      'symphonic metal'
    ],
    concerts: [
      {
        date: '31-07-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 110,
    band: 'Mastodon',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebf84fe9e6fbb2aa001d6cbbd9',
    genre: [
      'alternative metal',
      'atlanta metal',
      'metal',
      'nu metal',
      'progressive groove metal',
      'progressive sludge',
      'sludge metal',
      'stoner metal'
    ],
    concerts: [
      {
        date: '27-09-2015',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 111,
    band: 'Maybeshewill',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb2fc289411e5bc64272bfae31',
    genre: ['british post-rock', 'instrumental post-rock', 'post-rock'],
    concerts: [
      {
        date: '18-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 112,
    band: 'Megadeth',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb79058c0b634631533ed40b22',
    genre: [
      'alternative metal',
      'melodic thrash',
      'metal',
      'old school thrash',
      'rock',
      'speed metal',
      'thrash metal'
    ],
    concerts: [
      {
        date: '03-06-2008',
        location: 'Goiânia'
      },
      {
        date: '02-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 113,
    band: 'Meshuggah',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb2198c33d521ca13e0204b789',
    genre: [
      'alternative metal',
      'death metal',
      'djent',
      'nu metal',
      'progressive groove metal',
      'swedish metal',
      'technical groove metal',
      'technical thrash'
    ],
    concerts: [
      {
        date: '25-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 114,
    band: 'Metal Church',
    picture: 'https://i.scdn.co/image/ab6772690000c46c3ca4ece56e5fd4324ff7bd36',
    genre: [
      'metal',
      'old school thrash',
      'melodic thrash',
      'speed metal',
      'thrash metal',
      'us power metal'
    ],
    concerts: [
      {
        date: '06-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 115,
    band: 'Metsatöll',
    picture: 'https://i.scdn.co/image/ab67616d0000b273a30179352cafa4a9b56c5b42',
    genre: [
      'estonian metal',
      'estonian rock',
      'folk metal',
      'slavic metal',
      'viking metal'
    ],
    concerts: [
      {
        date: '03-06-2018',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 116,
    band: 'MindthreaT',
    picture: 'https://i.scdn.co/image/ab6761610000e5eba8cc157994768bcfe8bd38d0',
    genre: ['greek metal'],
    concerts: [
      {
        date: '01-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 117,
    band: 'Moonspell',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebb02f83addf3908492080e75c',
    genre: [
      'gothic black metal',
      'gothic metal',
      'gothic symphonic metal',
      'metal',
      'portuguese black metal',
      'portuguese metal',
      'portuguese rock'
    ],
    concerts: [
      {
        date: '25-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 118,
    band: 'Nailed to Obscurity',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb8617d1d59dd039ca82e2a10d',
    genre: ['finnish metal', 'melodic death metal'],
    concerts: [
      {
        date: '06-12-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 119,
    band: 'Nanowar of Steel',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb7685c5eda60d7a78d1396a1f',
    genre: ['comic metal', 'italian metal', 'melodic metal', 'power metal'],
    concerts: [
      {
        date: '26-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 120,
    band: 'Napalm Death',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb96715609a206e464a5a2e6a7',
    genre: [
      'alternative metal',
      'birmingham metal',
      'british death metal',
      'british grindcore',
      'brutal death metal',
      'death metal',
      'deathgrind',
      'grindcore',
      'metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 121,
    band: 'Ni Maîtres',
    picture: 'https://i.scdn.co/image/ab67616d0000b273b24b50969c33a1b52d48e8c1',
    genre: ['experimental', 'experimental noise duo', 'bass electronics'],
    concerts: [
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 122,
    band: 'Nile',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebc87c1edbfc3323c5878c53a0',
    genre: [
      'brutal death metal',
      'death metal',
      'metal',
      'oriental metal',
      'south carolina metal',
      'technical death metal'
    ],
    concerts: [
      {
        date: '17-05-2015',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 123,
    band: 'Noturnall',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb7a29f3d3c1d2f788afc24060',
    genre: ['brazilian metal', 'brazilian progressive metal'],
    concerts: [
      {
        date: '15-05-2015',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 124,
    band: 'Novembers Doom',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebae5413c77e03bb59667ba485',
    genre: ['doom metal', 'funeral doom', 'gothic metal'],
    concerts: [
      {
        date: '05-09-2015',
        location: 'São Paulo'
      },
      {
        date: '06-09-2015',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 125,
    band: 'Obscura',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb8ee565b1bc428b3ef82beb8d',
    genre: [
      'brutal death metal',
      'cosmic death metal',
      'death metal',
      'jazz metal',
      'progressive death metal',
      'progressive technical death metal',
      'sci-fi metal',
      'technical death metal'
    ],
    concerts: [
      {
        date: '09-09-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 126,
    band: 'Odradek',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebb459136f3fed492e3b1cc4aa',
    genre: ['instrumental rock', 'brazilian indie rock'],
    concerts: [
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 127,
    band: 'Omnia',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb1efacd8f9f0b7056adfd94f9',
    genre: ['hurdy-gurdy', 'medieval folk', 'rune folk'],
    concerts: [
      {
        date: '01-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 128,
    band: 'Opeth',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb3040441678d87d72616179d0',
    genre: [
      'metal',
      'progressive death metal',
      'progressive metal',
      'swedish metal',
      'swedish progressive metal',
      'alternative metal'
    ],
    concerts: [
      {
        date: '03-08-2012',
        location: 'Wacken'
      },
      {
        date: '19-07-2015',
        location: 'São Paulo'
      },
      {
        date: '09-04-2017',
        location: 'São Paulo'
      },
      {
        date: '20-08-2022',
        location: 'ArcTangent'
      },
      {
        date: '14-11-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 129,
    band: 'Oranssi Pazuzu',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb2b9825b8a4f8ba516299417c',
    genre: [
      'atmospheric black metal',
      'avant-garde metal',
      'blackgaze',
      'chaotic black metal',
      'cosmic black metal',
      'dark jazz',
      'drone metal',
      'finnish black metal',
      'finnish psychedelic rock',
      'post-black metal',
      'post-doom metal',
      'post-metal',
      'sci-fi metal',
      'voidgaze'
    ],
    concerts: [
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 130,
    band: 'Orden Ogan',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb4c18088ac85a125039631ac1',
    genre: [
      'folk metal',
      'german metal',
      'german power metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'power metal'
    ],
    concerts: [
      {
        date: '05-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 131,
    band: 'Orphaned Land',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb57fa807b972641f73df43af7',
    genre: [
      'christian power metal',
      'folk metal',
      'israeli metal',
      'oriental metal',
      'progressive metal'
    ],
    concerts: [
      {
        date: '05-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 132,
    band: 'Overkill',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb03cb77f96e45ca6fdb18debe',
    genre: [
      'death metal',
      'groove metal',
      'metal',
      'old school thrash',
      'speed metal',
      'thrash metal'
    ],
    concerts: [
      {
        date: '03-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 133,
    band: 'Pain of Salvation',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb4eb988e44960dceeff8d0e5b',
    genre: [
      'neo-progressive',
      'prog metal',
      'progressive metal',
      'swedish progressive metal',
      'symphonic rock'
    ],
    concerts: [
      {
        date: '03-06-2015',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 134,
    band: 'Pallbearer',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb6d24bf3b2f3cb0d1f75547ed',
    genre: [
      'arkansas metal',
      'doom metal',
      'drone metal',
      'epic doom',
      'post-doom metal',
      'psychedelic doom'
    ],
    concerts: [
      {
        date: '20-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 135,
    band: 'Paradise Lost',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebee02e036e8fc0d01f8b34da1',
    genre: [
      'death metal',
      'doom metal',
      'gothic metal',
      'metal',
      'uk doom metal'
    ],
    concerts: [
      {
        date: '11-04-2014',
        location: 'Curitiba'
      },
      {
        date: '06-09-2015',
        location: 'São Paulo'
      },
      {
        date: '15-10-2016',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 136,
    band: 'Parkway Drive',
    picture: 'https://i.scdn.co/image/ab6761610000e5eba1f1cbe43d7877147d7c1e49',
    genre: ['australian metalcore', 'melodic metalcore', 'metalcore'],
    concerts: [
      {
        date: '06-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 137,
    band: 'Pearl Jam',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb122d1145d880736383742ebc',
    genre: ['grunge', 'permanent wave', 'rock'],
    concerts: [
      {
        date: '09-11-2011',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 138,
    band: 'Persefone',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb10d95956823c5b2b06513389',
    genre: [
      'melodic death metal',
      'musica andorra',
      'progressive death metal',
      'progressive metal',
      'symphonic death metal'
    ],
    concerts: [
      {
        date: '09-09-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 139,
    band: 'Primal Fear',
    picture: 'https://i.scdn.co/image/ab6761610000e5eba41d33742572c9038ecd33a5',
    genre: [
      'german metal',
      'german power metal',
      'melodic metal',
      'metal',
      'neo classical metal',
      'neo-trad metal',
      'power metal',
      'speed metal'
    ],
    concerts: [
      {
        date: '23-04-2015',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 140,
    band: 'Reckoning Hour',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebe1cc17abe432d7ae8a1ff23d',
    genre: ['brazilian metalcore'],
    concerts: [
      {
        date: '03-06-2015',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 141,
    band: 'Red Fang',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb5affd715375cdca767655f16',
    genre: [
      'alternative metal',
      'portland metal',
      'psychedelic doom',
      'sludge metal',
      'stoner metal',
      'stoner rock'
    ],
    concerts: [
      {
        date: '07-09-2012',
        location: 'Brasília'
      }
    ]
  },
  {
    id: 142,
    band: 'Rival Sons',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb70ce062002464f966aa7f937',
    genre: [
      'alternative roots rock',
      'garage rock',
      'modern alternative rock',
      'modern blues rock',
      'modern hard rock',
      'modern rock',
      'rock'
    ],
    concerts: [
      {
        date: '30-11-2016',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 143,
    band: 'Rivers of Nihil',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb47232cbc9f3fee07dbc4c474',
    genre: ['technical death metal', 'death metal'],
    concerts: [
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 144,
    band: 'Riverside',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb4095e0f487f93541ab8ab7f5',
    genre: [
      'alternative metal',
      'art rock',
      'polish prog',
      'prog metal',
      'progressive metal',
      'progressive rock',
      'symphonic rock'
    ],
    concerts: [
      {
        date: '05-09-2015',
        location: 'São Paulo'
      },
      {
        date: '28-09-2019',
        location: 'Potsdam'
      }
    ]
  },
  {
    id: 145,
    band: 'Rotting Christ',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebde3080f1070c8a4dcd101682',
    genre: [
      'black metal',
      'gothic black metal',
      'gothic metal',
      'greek black metal',
      'greek metal',
      'melodic black metal',
      'metal',
      'symphonic black metal',
      'symphonic deathcore'
    ],
    concerts: [
      {
        date: '29-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 146,
    band: 'Sabaton',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb97d68537c39dc8bcebbd9e6c',
    genre: ['metal', 'power metal', 'swedish metal', 'swedish power metal'],
    concerts: [
      {
        date: '03-11-2016',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 147,
    band: 'Saor',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebe2e53fc76fd443f9d81b89a6',
    genre: [
      'atmospheric black metal',
      'autonomous black metal',
      'british black metal',
      'celtic metal',
      'folk black metal',
      'forest black metal',
      'scottish metal',
      'uk post-metal',
      'voidgaze'
    ],
    concerts: [
      {
        date: '27-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 148,
    band: 'Saxon',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb70f2373fff07f1b5c9ab1607',
    genre: ['metal', 'power metal', 'nwobhm', 'rock'],
    concerts: [
      {
        date: '02-08-2012',
        location: 'Wacken'
      },
      {
        date: '31-07-2014',
        location: 'Wacken'
      },
      {
        date: '04-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 149,
    band: 'Schandmaul',
    picture: 'https://i.scdn.co/image/ab6761610000e5eba7f6b3d526d88f5028569c49',
    genre: ['german metal', 'hurdy-gurdy', 'medieval rock'],
    concerts: [
      {
        date: '02-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 150,
    band: 'Scorpions',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb7440170c0628c2945da819c3',
    genre: [
      'german hard rock',
      'german metal',
      'german rock',
      'hard rock',
      'metal',
      'rock'
    ],
    concerts: [
      {
        date: '31-08-2008',
        location: 'Goiânia'
      },
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 151,
    band: 'SEIMS',
    picture: 'https://i.scdn.co/image/ab67616d0000b273d1e167feb3e03724a969c2b3',
    genre: ['math-rock', 'post-rock', 'jazz hardcore'],
    concerts: [
      {
        date: '20-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 152,
    band: 'Sepultura',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebbb178dabf142a802276a572d',
    genre: [
      'alternative metal',
      'brazilian groove metal',
      'brazilian metal',
      'brazilian thrash metal',
      'death metal',
      'deathrash',
      'groove metal',
      'latin metal',
      'metal',
      'metal mineiro',
      'nu metal',
      'old school thrash',
      'rock',
      'thrash metal'
    ],
    concerts: [
      {
        date: '08-09-2012',
        location: 'Brasília'
      },
      {
        date: '02-08-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 153,
    band: 'Shaman',
    picture: 'https://i.scdn.co/image/ab67616d0000b2730be199bbe7ae13e71afa2a5c',
    genre: [
      'brazilian metal',
      'brazilian power metal',
      'brazilian progressive metal',
      'progressive power metal'
    ],
    concerts: [
      {
        date: '22-09-2018',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 154,
    band: 'Six Feet Under',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb92cd01f2aaa363b37b4a5c0f',
    genre: [
      'brutal death metal',
      "death 'n' roll",
      'death metal',
      'florida death metal',
      'groove metal',
      'metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 155,
    band: 'Skiltron',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebbd7ad573e4533725254880bd',
    genre: [
      'celtic metal',
      'folk metal',
      'folk metal latinoamericano',
      'viking metal'
    ],
    concerts: [
      {
        date: '20-03-2010',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 156,
    band: 'Skindred',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb6b80f0b7f586425528d9eedd',
    genre: [
      'alternative metal',
      'industrial metal',
      'nu metal',
      'rap metal',
      'rap rock',
      'reggae fusion',
      'welsh metal',
      'welsh rock'
    ],
    concerts: [
      {
        date: '28-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 157,
    band: 'Slayer',
    picture: 'https://i.scdn.co/image/8c81130db7b5f933412c4906c30327817f1e1b43',
    genre: [
      'death metal',
      'metal',
      'old school thrash',
      'speed metal',
      'thrash metal'
    ],
    concerts: [
      {
        date: '24-09-2013',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 158,
    band: 'Slipknot',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebec01c52d6030a1574070e308',
    genre: ['alternative metal', 'nu metal', 'rap metal'],
    concerts: [
      {
        date: '27-09-2015',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 159,
    band: 'Stam1na',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebfb38b8cd76eb11cec90ba3b5',
    genre: [
      'finnish heavy metal',
      'finnish metal',
      'finnish progressive metal',
      'finnish punk',
      'progressive thrash',
      'suomi rock'
    ],
    concerts: [
      {
        date: '08-12-2019',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 160,
    band: 'Steel Panther',

    picture: 'https://i.scdn.co/image/ab6761610000e5eb4c7c6dfd10e75627af62024a',
    genre: [
      'comic',
      'comic metal',
      'glam metal',
      'hard rock',
      'metal',
      'sleaze rock'
    ],
    concerts: [
      {
        date: '31-07-2014',
        location: 'Wacken'
      },
      {
        date: '06-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 161,
    band: 'Suicidal Tendencies',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb34e9707779175a2453a1d786',
    genre: [
      'alternative metal',
      'california hardcore',
      'crossover thrash',
      'funk metal',
      'hardcore punk',
      'metal',
      'nu metal',
      'old school thrash',
      'punk',
      'rap rock',
      'rock',
      'thrash metal'
    ],
    concerts: [
      {
        date: '30-08-2013',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 162,
    band: 'Swallow the Sun',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb2eab87773e004cd073e5e460',
    genre: [
      'doom metal',
      'finnish death metal',
      'finnish doom metal',
      'finnish melodeath',
      'finnish metal',
      'gothic metal',
      'melodic death metal',
      'metal'
    ],
    concerts: [
      {
        date: '06-09-2014',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 163,
    band: 'Sylvaine',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebe5bf2daa8a99e4694f0e9b4c',
    genre: [
      'autonomous black metal',
      'gaian doom',
      'post-black metal',
      'voidgaze'
    ],
    concerts: [
      {
        date: '27-07-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 164,
    band: 'Symphony X',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb54935264e9cf5607a3e98686',
    genre: [
      'melodic metal',
      'metal',
      'neo classical metal',
      'power metal',
      'progressive metal',
      'progressive power metal'
    ],
    concerts: [
      {
        date: '25-10-2008',
        location: 'Brasília'
      },
      {
        date: '06-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 165,
    band: 'Sólstafir',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebb90a1aede7a026fbaed20013',
    genre: [
      'blackened screamo',
      'icelandic black metal',
      'icelandic metal',
      'icelandic pop',
      'pagan black metal',
      'post-metal',
      'viking black metal'
    ],
    concerts: [
      {
        date: '16-09-2017',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 166,
    band: 'TOOL',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb13f5472b709101616c87cba3',
    genre: [
      'alternative metal',
      'alternative rock',
      'art rock',
      'nu metal',
      'progressive metal',
      'progressive rock',
      'rock'
    ],
    concerts: [
      {
        date: '17-05-2022',
        location: 'Cologne'
      }
    ]
  },
  {
    id: 167,
    band: 'Terra Celta',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb1291e9b4054421abfd1cbb1c',
    genre: ['rock alternativo brasileiro', 'rock caipira'],
    concerts: [
      {
        date: '12-12-2008',
        location: 'Goiânia'
      },
      {
        date: '08-08-2009',
        location: 'Goiânia'
      },
      {
        date: '31-12-2011',
        location: 'Goiânia'
      },
      {
        date: '03-06-2018',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 168,
    band: 'Tesseract',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb4f853a1424ededeb1420f09a',
    genre: ['djent', 'progressive metal'],
    concerts: [
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 169,
    band: 'Testament',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebb42315840a0dd1ddda0e82ab',
    genre: [
      'alternative metal',
      'death metal',
      'groove metal',
      'metal',
      'old school thrash',
      'rock',
      'thrash metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      },
      {
        date: '05-08-2016',
        location: 'Wacken'
      },
      {
        date: '26-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 170,
    band: 'The Black Dahlia Murder',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb048a07a10c4594fdcc8153f7',
    genre: [
      'american melodeath',
      'deathcore',
      'melodic deathcore',
      'melodic metalcore',
      'metalcore'
    ],
    concerts: [
      {
        date: '03-08-2012',
        location: 'Wacken'
      },
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 171,
    band: 'The BossHoss',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb73fe8c087ca106d32fe4d6cb',
    genre: ['comic', 'german rock', 'country rock'],
    concerts: [
      {
        date: '03-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 172,
    band: 'The Great Old Ones',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb9e03ddab3a9c12694d85e382',
    genre: [
      'atmospheric black metal',
      'avant-garde metal',
      'blackgaze',
      'chaotic black metal',
      'french black metal',
      'french metal',
      'lovecraftian metal',
      'post-black metal',
      'voidgaze'
    ],
    concerts: [
      {
        date: '28-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 173,
    band: 'The Halo Effect',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb101138dec19b8a19ff0ebcda',
    genre: ['melodic death metal', 'swedish metal', 'melodeath'],
    concerts: [
      {
        date: '27-07-2022',
        location: 'Metaldays'
      }
    ]
  },
  {
    id: 174,
    band: 'The Ocean',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb91dac794f391c17f27f2044c',
    genre: [
      'alternative metal',
      'atmospheric post-metal',
      'atmospheric sludge',
      'djent',
      'post-metal',
      'progressive metal',
      'progressive sludge',
      'sludge metal'
    ],
    concerts: [
      {
        date: '15-10-2016',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 175,
    band: 'The Reign of Kindo',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb4c0c7787467fbdeee2826d46',
    genre: ['dreamo', 'piano rock', 'progressive post-hardcore', 'jazz rock'],
    concerts: [
      {
        date: '05-09-2015',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 176,
    band: 'Therion',
    picture: 'https://i.scdn.co/image/f0b805b4f0daaaf35334230bed54229e4c085942',
    genre: [
      'gothic metal',
      'gothic symphonic metal',
      'metal',
      'neo classical metal',
      'opera metal',
      'power metal',
      'swedish metal',
      'symphonic black metal',
      'symphonic death metal',
      'symphonic metal'
    ],
    concerts: [
      {
        date: '06-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 177,
    band: 'Thumpermonkey',
    picture: 'https://i.scdn.co/image/ab67616d0000b273fad20e076097d508988e371d',
    genre: ['progressive rock'],
    concerts: [
      {
        date: '20-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 178,
    band: 'Trivium',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebb3a5f891ffd71672d0e99e26',
    genre: [
      'alternative metal',
      'groove metal',
      'melodic metalcore',
      'melodic thrash',
      'metal',
      'metalcore',
      'nu metal'
    ],
    concerts: [
      {
        date: '07-09-2012',
        location: 'Brasília'
      }
    ]
  },
  {
    id: 179,
    band: "Tru'nembra",
    picture: 'https://i.scdn.co/image/ab6761610000e5eba542eee06e6eb9d77374c396',
    genre: ['doom metal', 'black metal', 'atmospheric metal'],
    concerts: [
      {
        date: '12-11-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 180,
    band: 'Tuatha de Danann',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb33e35abe5829d3c811a2416d',
    genre: [
      'brazilian metal',
      'celtic metal',
      'folk metal',
      'folk metal latinoamericano',
      'medieval rock',
      'metal mineiro',
      'viking metal'
    ],
    concerts: [
      {
        date: '13-10-2007',
        location: 'Goiânia'
      },
      {
        date: '15-12-2008',
        location: 'Goiânia'
      },
      {
        date: '15-10-2016',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 181,
    band: 'Turisas',
    picture: 'https://i.scdn.co/image/05445f28a61d2be79ffb5fb83298ab83f8d4b676',
    genre: [
      'folk metal',
      'melodic metal',
      'nordic folk metal',
      'power metal',
      'slavic folk metal',
      'viking metal'
    ],
    concerts: [
      {
        date: '16-03-2013',
        location: 'São Paulo'
      },
      {
        date: '02-10-2015',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 182,
    band: 'Turmion Kätilöt',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb962a0617748556fe98061cf7',
    genre: ['cyber metal', 'finnish metal', 'suomi rock'],
    concerts: [
      {
        date: '02-10-2021',
        location: 'Tampere'
      }
    ]
  },
  {
    id: 183,
    band: 'Týr',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebb88950a32a64db261d03b9fe',
    genre: [
      'faroese rock',
      'folk metal',
      'nordic folk metal',
      'power metal',
      'viking metal'
    ],
    concerts: [
      {
        date: '30-07-2011',
        location: 'São Paulo'
      },
      {
        date: '20-10-2018',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 184,
    band: 'U.D.O.',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb5f9d16a26f208dd7a61d13f7',
    genre: [
      'german heavy metal',
      'german metal',
      'hard rock',
      'metal',
      'power metal'
    ],
    concerts: [
      {
        date: '02-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 185,
    band: 'Unisonic',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb0be750ff9272422d98f971b0',
    genre: ['german hard rock', 'german power metal', 'power metal'],
    concerts: [
      {
        date: '05-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 186,
    band: 'Vader',
    picture: 'https://i.scdn.co/image/ab6772690000c46c9d4cd3b704d5fdea23b0ea76',
    genre: [
      'black metal',
      'brutal death metal',
      'death metal',
      'deathrash',
      'metal',
      'polish death metal',
      'polish metal',
      'polish thrash metal'
    ],
    concerts: [
      {
        date: '04-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 187,
    band: 'Vincent Cavanagh',
    picture: 'https://i.scdn.co/image/ab67616d0000b27304d6c089770c2399c86518dd',
    genre: ['gothic metal', 'progressive doom', 'progressive metal'],
    concerts: [
      {
        date: '04-09-2016',
        location: 'São Paulo'
      }
    ]
  },
  {
    id: 188,
    band: 'Viper',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebfec23058ecd1c4760428b864',
    genre: ['brazilian metal'],
    concerts: [
      {
        date: '08-09-2012',
        location: 'Brasília'
      }
    ]
  },
  {
    id: 189,
    band: 'Vogelfrey',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebc5c957763a0e90d1c16121bd',
    genre: ['folk metal', 'german metal', 'medieval rock'],
    concerts: [
      {
        date: '30-07-2014',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 190,
    band: 'Vogons',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb8f173c0d65c0b1400490b93a',
    genre: ['instrumental rock', 'post-rock', 'jazz rock'],
    concerts: [
      {
        date: '20-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 191,
    band: 'Volbeat',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb7d4bb8c4283f4aeb61f61e98',
    genre: ['alternative metal', 'danish metal', 'danish rock'],
    concerts: [
      {
        date: '02-08-2012',
        location: 'Wacken'
      },
      {
        date: '14-06-2022',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 192,
    band: 'Warrel Dane',
    picture: 'https://i.scdn.co/image/07f121b8bcd5582bec2e181534d5ff1e8fc95ed5',
    genre: ['progressive groove metal', 'progressive metal', 'seattle metal'],
    concerts: [
      {
        date: '13-04-2014',
        location: 'Curitiba'
      }
    ]
  },
  {
    id: 193,
    band: 'Watain',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebe3c73be8fc21207a1acd5f44',
    genre: [
      'black metal',
      'dark black metal',
      'metal',
      'swedish black metal',
      'swedish metal'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 194,
    band: 'Whitesnake',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb1cc545458190efc44f48035f',
    genre: [
      'album rock',
      'british blues',
      'classic rock',
      'glam metal',
      'hard rock',
      'metal',
      'rock'
    ],
    concerts: [
      {
        date: '15-09-2011',
        location: 'Brasília'
      },
      {
        date: '04-08-2016',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 195,
    band: 'Winterfylleth',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb9d434456ff45a3a1cb7e1b77',
    genre: [
      'black metal',
      'british black metal',
      'pagan black metal',
      'voidgaze'
    ],
    concerts: [
      {
        date: '04-08-2012',
        location: 'Wacken'
      }
    ]
  },
  {
    id: 196,
    band: 'Zeal & Ardor',
    picture: 'https://i.scdn.co/image/ab6761610000e5ebfd911c82faa64720eb283521',
    genre: ['avant-garde metal', 'swiss metal'],
    concerts: [
      {
        date: '19-08-2022',
        location: 'ArcTangent'
      }
    ]
  },
  {
    id: 197,
    band: 'Manowar',
    picture: 'https://i.scdn.co/image/ab6761610000e5eba4780fe15900fbd223cd4f48',
    genre: ['comic metal', 'metal', 'power metal', 'rock', 'us power metal'],
    concerts: [
      {
        date: '25-02-2023',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 198,
    band: 'Wilderun',
    picture: 'https://i.scdn.co/image/ab6761610000e5eba97286d3fa186c73fc89dca8',
    genre: ['boston metal', 'progressive metal', 'folk metal'],
    concerts: [
      {
        date: '01-03-2023',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 199,
    band: 'Soilwork',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb00d683871c6271df627797e0',
    genre: [
      'alternative metal',
      'melodic death metal',
      'melodic groove metal',
      'melodic metalcore',
      'metal',
      'swedish death metal',
      'swedish melodeath',
      'swedish metal'
    ],
    concerts: [
      {
        date: '01-03-2023',
        location: 'Berlin'
      }
    ]
  },
  {
    id: 200,
    band: 'Kataklysm',
    picture: 'https://i.scdn.co/image/ab6761610000e5eb46d6caedb7a8c7e4421cf608',
    genre: [
      'brutal death metal',
      'canadian metal',
      'death metal',
      'groove metal',
      'melodic death metal',
      'metal',
      'quebec death metal',
      'technical melodic death metal'
    ],
    concerts: [
      {
        date: '01-03-2023',
        location: 'Berlin'
      }
    ]
  }
];

export default bands;
