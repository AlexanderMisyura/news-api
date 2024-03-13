import { Methods, Endpoints } from './enums';
import { ISourcesResponse, INewsResponse } from '../interfaces';
import { Callback } from '../types';

type ResponseData = ISourcesResponse | INewsResponse;

interface IRequestParams {
    endpoint: Endpoints;
    options: URLSearchParams;
}

interface ILoadParams<T extends ResponseData> extends IRequestParams {
    method: Methods;
    callback: Callback<T>;
}
class Loader {
    constructor(
        private baseLink: string,
        private options: URLSearchParams
    ) {}

    protected getResp<T extends ResponseData>(params: IRequestParams, callback?: Callback<T>): void {
        if (!callback) {
            callback = (): void => {
                console.error('No callback for GET response');
            };
        }
        this.load<T>({ ...params, method: Methods.GET, callback });
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(params: IRequestParams): URL {
        const url = new URL(params.endpoint, this.baseLink);
        this.options.forEach((searchValue, searchKey) => {
            url.searchParams.append(searchKey, searchValue);
        });
        params.options.forEach((searchValue, searchKey) => {
            url.searchParams.append(searchKey, searchValue);
        });
        return url;
    }

    private load<T extends ResponseData>(params: ILoadParams<T>): void {
        fetch(this.makeUrl({ options: params.options, endpoint: params.endpoint }), { method: params.method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => params.callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
