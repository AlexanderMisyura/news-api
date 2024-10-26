export interface ISourceData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface INewsData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface ISourcesResponse {
    status: string;
    sources: ISourceData[];
}

export interface INewsResponse {
    status: string;
    totalResults: number;
    articles: INewsData[];
}
