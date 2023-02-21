export type Data = {
  id: number;
  band: string;
  date: string;
  city: string;
  picture: string;
  genre: string[];
};

const bands: Data[] = [
  {
    id: 0,
    band: '1349',
    date: '05-08-2016',
    city: 'Wacken',
    picture: '',
    genre: []
  },
  {
    id: 1,
    band: 'Adrenaline Mob',
    date: '15-05-2015',
    city: 'Curitiba',
    picture: '',
    genre: []
  },
  {
    id: 2,
    band: 'Alcest',
    date: '06-07-2014',
    city: 'São Paulo',
    picture: '',
    genre: []
  },
  {
    id: 3,
    band: 'Alestorm',
    date: '01-12-2017',
    city: 'Curitiba',
    picture: '',
    genre: []
  },
  {
    id: 4,
    band: 'Alice in Chains',
    date: '08-11-2018',
    city: 'Curitiba',
    picture: '',
    genre: []
  },
  {
    id: 5,
    band: 'Almah',
    date: '07-09-2012',
    city: 'Brasília',
    picture: '',
    genre: []
  },
  {
    id: 6,
    band: 'Amenra',
    date: '26-07-2022',
    city: 'Metal Days',
    picture: '',
    genre: []
  }
];

export default bands;
