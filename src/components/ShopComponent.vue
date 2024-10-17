<script setup lang="ts">
import { useBookStore } from '@/stores/BookStore';
import type { Book } from '@/models/BookModel'

// libreria
import Rating from 'primevue/rating';

const bookStore = useBookStore();
const books: Book[] = bookStore.getAllBooks();

</script>

<template>
    <div class="wrapper">
        <h1 class="w-full my-4 p-4 text-4xl">Tienda</h1>
        <div
            class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-2">
            <div v-for="book in books" :key="book.id" class="item-wrapper">
                <div class="img-cover">
                    <img :src="book.coverImg" v-bind:alt="book.title">
                </div>
                <div class="book-title">{{ book.title }}</div>
                <div class="book-series">{{ book.series }}</div>
                <div class="book-author">{{ book.author }}</div>
                <Rating class="star" v-model="book.rating" :stars="5" />
                <div class="publisher">{{ book.publisher }}</div>
                <div class="price">$ {{ book.price }}.00</div>
                <div class="overlay">
                    <!-- al hacer click en comprar el libro debera agregarse al carro -->
                    <button class="btn-buy">Comprar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    margin: auto;
    width: 100vw;
    max-width: 100vw;
    padding: 24px 48px;
    position: relative;
    background: #e5e5e5;
}


.item-wrapper {
    position: relative;
    background: #fff;
    padding: 16px 4px;
    margin: 16px 4px;
    width: 260px;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    font-weight: 200
}

.item-wrapper:hover .overlay {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 16px;
    width: 260px;
    height: 100%;
    background: #43b643d8;
    z-index: 200;
    transition: 0.75s;
    animation: scale-up-ver-bottom .4s cubic-bezier(.39, .575, .565, 1.000) both;
}

@keyframes scale-up-ver-bottom {
    0% {
        transform: scaleY(.1);
        transform-origin: 0 100%
    }

    100% {
        transform: scaleY(1);
        transform-origin: 0 100%
    }
}

.item-wrapper:hover .overlay button {
    height: 48px;
    width: 100%;
    padding: 8px 16px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 5px;
    font-size: 1.2em;
    font-weight: 600
}

.item-wrapper:hover .overlay button:hover {
    background: #fff;
    color: #43b643;
}



.book-title {
    width: 100%;
    height: 2.5em;
    line-height: 1em;
    font-weight: 400;
    font-size: 1.1em;
    text-align: center;
    text-wrap: wrap;
    margin-top: 8px;
}

.star {
    display: flex;
    width: fit-content;
    flex-direction: row;
    justify-content: space-between;
    margin: 4px 0;
}

.price {
    font-size: 1.5em;
    font-weight: 600;
}
</style>