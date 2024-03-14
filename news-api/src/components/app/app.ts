import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Handler } from '../types';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sources = document.querySelector('.sources') as Element;
        const handleClick: Handler = (e: Event) => this.controller.getNews(e, (data) => this.view.drawNews(data));

        sources.addEventListener('click', handleClick);

        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
