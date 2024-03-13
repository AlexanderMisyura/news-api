import AppLoader from './appLoader';
import { Endpoints } from './enums';
import { Callback } from '../types';
import { ISourcesResponse, INewsResponse } from '../interfaces';

class AppController extends AppLoader {
    public getSources(callback: Callback<ISourcesResponse>): void {
        super.getResp(
            {
                endpoint: Endpoints.SOURCES,
                options: new URLSearchParams(),
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<INewsResponse>): void {
        const newsContainer = e.currentTarget;
        const target = e.target;
        if (newsContainer instanceof HTMLElement && target instanceof HTMLElement) {
            const sourceItem = target.closest('.source__item');
            if (sourceItem instanceof HTMLElement) {
                const sourceId = sourceItem.dataset.sourceId;
                if (sourceId && newsContainer.dataset.source !== sourceId) {
                    newsContainer.dataset.source = sourceId;
                    super.getResp(
                        { endpoint: Endpoints.EVERYTHING, options: new URLSearchParams({ sources: sourceId }) },
                        callback
                    );
                }
            }
        }
    }
}

export default AppController;
