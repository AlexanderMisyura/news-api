export type Callback<T> = (data: T) => void;

export type Handler = (e: Event) => void;

export type AppConfig = {
    API_URL: string;
    API_KEY: string;
};
