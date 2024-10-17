import { defineStore } from "pinia";
import type { Book } from '@/models/BookModel'
import type { BookState } from "@/models/BookState";

export const useBookStore = defineStore({
    id: 'auth',
    state: () : BookState => ({
        loading: false,
        data: [],
    }),
    actions: {
        addBook(book: Book):  void {
            this.data.push(book);
        },
        removeBook(book: Book): void {
            this.data = this.data.filter((item) => item.id !== book.id);
        },
        addBooks(books: Book[]): void {
            this.data.push(...books);
        },
        getAllBooks(): Book[] {
            return this.data
        },
        getFeatured(): Book[] {
            const featuredBooks = this.data.filter((book) => book.featured);
            return featuredBooks
        }
    }
})
