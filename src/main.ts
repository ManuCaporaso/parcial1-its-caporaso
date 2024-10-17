import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useBookStore } from './stores/BookStore'
import { books } from './mock/MockBooks'
import PrimeVue from "primevue/config";


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


const bookStore = useBookStore()
bookStore.addBooks(books)

app.use(PrimeVue, {
    unstyled: true
});

app.mount('#app')
