<script setup>
import { useCarsStore } from '../store/carsStore'
const route = useRoute()
const store = useCarsStore()
const { data: carDetails, pending, error, refresh } = await useAsyncData('carDetails', () => $fetch(`https://dm-assignment-commonshare.koyeb.app/api/cars/${route.params.id}`))


const cars = computed(() => {
    return store.data
})
// await useAsyncData('cars', () => {
//     if (!cars.value.length) {
//         store.getCars()
//     }
// })
</script>
<template>
    <main class="w-full flex flex-col items-center justify-center">
        <div v-if="carDetails" class="w-full flex  flex-wrap container gap-[32px] p-5 lg:p-15 justify-between">
            <div class="w-full lg:w-5/12 rounded-lg flex flex-col gap-9">
                <img :src="carDetails.img" alt="" class="bg-rectangl">
                <div class="flex flex-row gap-4">
                    <div class="flex-1">
                        <img :src="carDetails.img" alt="" class="rounded-lg h-24">
                    </div>
                    <div v-for="item in carDetails.images" class="flex-1">
                        <img :src="item.url" alt="" class="rounded-lg h-24">
                    </div>
                </div>
            </div>
            <div class="w-full lg:flex-1  bg-white rounded-lg shadow-lg  p-4 lg:p-10 flex flex-col justify-around gap-3">
                <h1 class="font-plus-jakarta-sans text-[32px] font-semibold leading-10 tracking-tight">
                    {{ carDetails.name }}
                </h1>
                <div>
                    440+ Reviewer
                </div>
                <p class="font-plus-jakarta-sans text-[17px] font-normal leading-6 tracking-tight">
                    {{ carDetails.description }}
                </p>
                <div class="grid gris-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div class="flex">
                        <span class="text-gray me-6 lg:me-16">
                            Type Car
                        </span>
                        {{ carDetails.type }}
                    </div>
                    <div class="flex">
                        <span class="text-gray me-6 lg:me-16">
                            Capacity
                        </span>
                        {{ carDetails.people }}
                    </div>
                    <div class="flex">
                        <span class="text-gray me-6 lg:me-16">
                            Gasoline
                        </span>
                        {{ carDetails.gasolineLiter }}
                    </div>
                    <div class="flex">
                        <span class="text-gray me-6 lg:me-16">
                            Steering
                        </span>
                        {{ carDetails.kindOfTransition }}
                    </div>
                </div>
                <div class="w-full flex items-center justify-between mt-14">
                    <span>
                        {{ carDetails.pricePerDay }}
                    </span>
                    <!-- <NuxtLink > -->
                        <button type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Rent Now
                        </button>
                    <!-- </NuxtLink> -->
                </div>
            </div>
        </div>
        <div v-if="cars.pending">
            loading
        </div>
        <div v-if="cars.error">
            Error
        </div>
    </main>
</template>