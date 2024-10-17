<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { BookOpenIcon, HomeIcon, ShoppingBagIcon, XCircleIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue'

// librerias
import Sidebar from 'primevue/sidebar'

// Parcial: instanciar nuestro useCartStore en una variable const para utilizarla en el componente
// Parcial: obtener la cantidad de libros en carrito del cartStore y pasarlo en qty tag

// Barra Lateral
const sidebarVisible = ref(false)

// Abrir / Cerrar barra lateral
function openCloseSidebar() {
  if (sidebarVisible.value === true) {
    sidebarVisible.value = false
  }
  else {
    sidebarVisible.value = true
  }
}

// Pacial: Por que uso ref para la variable sidebarVisible? 
// Parcial: Como accedo al valor de ref para manipular los cambios en la barra lateral?


</script>

<template>
  <nav class="flex items-center justify-between flex-wrap py-6 px-10 ">
    <!-- logo -->
    <BookOpenIcon class="text-2xl size-6 text-slate-200" />

    <!-- name -->
    <div class="logo w-52 max-w-md flex text-2xl text-white font-semibold">
      <span class="text-slate-400">&lsaquo;Unknown</span>
      <span class="font-normal">Book</span>
      <span class="text-slate-400">Store&sol;&rsaquo;</span>
    </div>
    <!-- links -->
    <div class="links w-full md:w-auto md:ml-6 flex flex-row">
      <RouterLink to="/" class="text-white-600 hover:text-white-400">
        <HomeIcon class="w-6 h-6 mr-2 text-slate-200" />
      </RouterLink>
      <div class="bag-icon" @click="openCloseSidebar()">
        <!-- modificar con la cantidad de items en carro. Si el carro esta vacio. -->
        <div class="qty-tag">1</div>
        <ShoppingBagIcon class="w-6 mr-2 text-slate-200" />
      </div>
    </div>
  </nav>

  <Sidebar v-model:visible="sidebarVisible" position="right">
    <template #container>
      <div class="sidebar-content">
        <div class="sidebar-header">
          <h2 class="text-2xl">Carrito</h2>
          <XCircleIcon class="h-8 w-8" @click="openCloseSidebar" />
        </div>
        <!-- aca insertar CarroComponent -->
      </div>
    </template>
  </Sidebar>

  <RouterView />
</template>

<style scoped>
nav {
  background: var(--primary);
  position: fixed;
  min-width: 100vw;
  z-index: 1000;
}

.bag-icon {
  position: relative
}

.qty-tag {
  position: absolute;
  display: flex;
  height: 20px;
  width: 20px;
  padding: 5px 5px;
  align-items: center;
  justify-content: center;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  font-size: 12px;

}


.sidebar-content {
  width: 400px;
  max-height: 100vh;
  height: 100vh;
  background: #fff;
}

.sidebar-header {
  width: 100%;
  height: 80px;
  background: var(--primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 16px;
  border: 1px solid #fff
}


.logo {
  width: 200px;

}
</style>
