<script setup>
import { useCarsStore } from '../store/carsStore'
const { cars, isrecomand } = defineProps(['cars', 'isrecomand']);
const store = useCarsStore()
const loadMore = async () => {
  store.updatePage(++store.page)
  if (store.page <= 5) {
    await store.getCars();
  }
};
</script>
<template>
  <div v-if="isrecomand" class="w-full container px-5">
    Recomendation Car
  </div>
  <div v-else class="w-full container px-5 flex flex-row items-center justify-between">
    <div>
      Popular Car
    </div>
    <button type="button" class="rounded-lg text-sm  me-2 mb-2 text-Primary-500">
      View All
    </button>
  </div>
  <div class="flex flex-row overflow-x-auto 2xl:overflow-hidden gap-[12px] 2xl:gap-[32px] p-5 lg:py-15 container no-scrollbar">
    <div v-if="!isrecomand" v-for="item in cars">
      <CarCard :items="item" />
    </div>
  </div>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[32px] items-center p-5 lg:py-15 container ">
    <div v-if="isrecomand" v-for="item in cars.data">
      <CarCard :items="item" :isrecomand="isrecomand"/>
    </div>
  </div>
  <button v-if="isrecomand" type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    @click="loadMore">
    {{ store.page > 5 ? 'No more cars to load' : 'show more' }}
  </button>
</template>