<script setup lang="ts">
import FeaturedComponent from '@/components/FeaturedComponent.vue'
import ShopComponent from '@/components/ShopComponent.vue'


</script>

<template>
  <div class="space"></div>
  <div class="featured bg-slate-400 text-slate-100">
    <h1 class="text-4xl px-4">Recomendaciones</h1>
    <FeaturedComponent />
  </div>
  <div class="shop">
    <ShopComponent />
  </div>
</template>

<style scoped>
.space {
  height: 80px;
}

.featured {
  width: 100%;
  height: 480px;
  padding: 16px;
}

.shop {
  display: flex;

}
</style>
