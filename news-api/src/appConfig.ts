import { AppConfig } from './components/types';

const API_URL: string | undefined = process.env.API_URL;
const API_KEY: string | undefined = process.env.API_KEY;

if (!API_URL || !API_KEY) {
    throw new Error('API_URL or API_KEY are not defined');
}

const config: AppConfig = {
    API_URL: API_URL,
    API_KEY: API_KEY,
};

export default config;
