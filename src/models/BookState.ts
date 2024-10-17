import type { Book } from "./BookModel";

export interface BookState {
    loading: boolean,
    data: Book[]
}