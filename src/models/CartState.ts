import type { Book } from "./BookModel";

export interface CartState {
    loading: boolean,
    data: Book[]
}