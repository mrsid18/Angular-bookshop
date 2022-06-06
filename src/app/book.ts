export interface Book {
    id: number;
    title: string;
    author: string;
    language: string;
    genre: string;
    price: number;
    description?: string;
    cover?: string;
}
