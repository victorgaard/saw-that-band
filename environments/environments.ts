const DEVELOPMENT = 'http://localhost:3000';
const PRODUCTION = 'https://server.sawthat.band';

const APP_DEVELOPMENT = 'http://localhost:3001';
const APP_PRODUCTION = 'https://app.sawthat.band';

export const API_URL =
  process.env.NODE_ENV === 'development' ? DEVELOPMENT : PRODUCTION;

export const APP_URL =
  process.env.NODE_ENV === 'development' ? APP_DEVELOPMENT : APP_PRODUCTION;
