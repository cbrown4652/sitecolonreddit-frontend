export interface SearchResult {
    title: string;
    link: string;
    snippet: string;
    pagemap: {
        metatags: {
            'og:title': string;
        }[];
    };
}