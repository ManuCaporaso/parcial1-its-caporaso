export interface Book {
    id: number;
    title: string;
    author: string;
    series: string;
    numberInSeries:  number;
    price:  number;
    coverImg: string;
    featured:  boolean;
    featuredImg: string;
    description: string;
    rating: number;
    publisher: string
}