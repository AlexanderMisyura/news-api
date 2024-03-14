import Loader from './loader';
import config from '../../appConfig';

const { API_URL, API_KEY } = config;

class AppLoader extends Loader {
    constructor() {
        super(API_URL, new URLSearchParams({ apiKey: API_KEY }));
    }
}

export default AppLoader;
