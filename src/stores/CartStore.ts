import { defineStore } from 'pinia';
import type { Book } from '@/models/BookModel';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cart: [] as Book[],  // Almacenará los libros en el carrito
  }),
  getters: {
    cartCount: (state) => state.cart.length,  // Contador de libros en el carrito
  },
  actions: {
    addToCart(book: Book) {
      this.cart.push(book);  // Agregar libro al carrito
    },
    removeFromCart(bookId: string) {
      this.cart = this.cart.filter(book => book.id !== bookId);  // Eliminar libro del carrito
    }
  }
});