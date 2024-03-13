import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const API_KEY = process.env.API_KEY;
        const API_URL = process.env.API_URL;

        if (API_URL && API_KEY) {
            super(API_URL, new URLSearchParams({ apiKey: API_KEY }));
        }
    }
}

export default AppLoader;
