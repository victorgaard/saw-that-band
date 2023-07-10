const development = 'http://localhost:3000';
const production = 'https://server.sawthat.band';

export const API_URL =
  process.env.NODE_ENV === 'development' ? development : production;
