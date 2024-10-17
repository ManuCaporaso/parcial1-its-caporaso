<script setup lang="ts">
// importaciones locales
import { useBookStore } from '@/stores/BookStore';
import type { Book } from '@/models/BookModel'

// librerias
import { BookOpenIcon, ShoppingCartIcon, PlusCircleIcon } from '@heroicons/vue/24/outline';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const bookStore = useBookStore();
const featuredBooks: Book[] = bookStore.getFeatured();

// Parcial: Explica como funciona el feature component, como muestra los libros recomendados y como los obtiene?

// configuracion del carrusel
const cSettings = {
    breakpoints: {
        700: {
            itemsToShow: 1.5,
            snapAlign: 'center',
        },
        1024: {
            itemsToShow: 2.5,
            snapAlign: 'center',
        },
        1600: {
            itemsToShow: 3,
            snapAlign: 'center',
        },

    }
}

</script>

<template>
    <div class="carousel-container">
        <Carousel v-bind="cSettings" :breakpoints="cSettings.breakpoints" :wrap-around="true">
            <Slide v-for="book in featuredBooks" :key="book.id">

                <!-- Contenido de la tarjeta  -->

                <div :style="{ backgroundImage: 'url(' + book.featuredImg + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"
                    class="flex w-full max-h-max flex-col items-start justify-center rounded-lg">

                    <div class="content px-4 text-left z-10 text-slate-300">
                        <!-- icono -->
                        <div class="px-4 mt-4 mb-2">
                            <BookOpenIcon class="text-4xl font-extrabold text-white size-6 z-20" />
                        </div>
                        <!-- titulo -->
                        <h1 class="my-4 text-2xl font-bold">{{ book.title }}</h1>
                        <!-- autor -->
                        <h2 class="text-2xl font-semibold ">{{ book.author }}</h2>
                        <!-- saga -->
                        <h2 class="text-xl text-slate-400 font-medium">{{ book.series }} # {{ book.numberInSeries }}
                        </h2>
                        <!-- sinopsis -->
                        <p class="mt-2 font-light lg:w-100 text-slate-200">{{ book.description }}</p>
                        <!-- botones -->
                        <div class="buttons flex w-11/12 flex-row justify-between p-2 m-2 my-4">
                            <button
                                class="block rounded-lg bg-transparent py-1.5 px-4 font-medium text-slate-200 transition-colors hover:bg-slate-900 active:bg-slate-900 disabled:opacity-50">Mas
                                del Autor</button>

                            <button
                                class="flex flex-row rounded-lg border border-slate-200 bg-slate-500 py-1.5 justify-between px-4 font-medium text-white transition-colors hover:bg-slate-950 active:bg-slate-950 disabled:opacity-50">
                                <PlusCircleIcon class="text-2xl size-6 text-slate-200 m-auto" />
                                <span class="w-2"></span>
                                <p class="m-auto">Agregar al carro</p>
                                <span class="w-2"></span>
                                <ShoppingCartIcon class="text-2xl size-6 text-slate-200 m-auto" />
                            </button>

                        </div>
                    </div>

                </div>
            </Slide>
            <template #addons>
                <Navigation>
                    <template #prev>
                        <span class="arrow">
                            < </span>
                    </template>
                    <template #next>
                        <span class="arrow">></span>
                    </template>
                </Navigation>
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>


<style scoped>
.carousel-container {
    width: 100%;
    height: 100%;
    max-height: 100%;
}

.content {
    background: rgba(0, 0, 0, 0.40);
    width: 100%;
    height: 100%;
    border-radius: 8px
}


.content:hover {
    background: rgba(0, 0, 0, 0.75);
}

.carousel__item {
    min-height: 200px;
    height: 400px;
    width: 100%;
    background-color: var(--primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

}

.arrow {
    display: flex;
    height: 96px;
    width: 48px;
    background: #ffffff76;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@media (max-width: 1421px) {


    .overlay {
        height: calc(100% - 50px);
    }
}



.carousel__slide {
    padding: 10px;

}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.buttons {
    z-index: 2;
}
</style>