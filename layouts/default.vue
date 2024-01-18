<script setup>
import { useCarsStore } from '~/store/carsStore';

const store = useCarsStore()

    await useAsyncData('cars', () => store.getCars())


const cars = computed(() => {
    return { data: store.data, error: store.error, pending: store.pending, refresh: store.refresh }
})
</script>
<template>
    <AppHeader />
    <main class="w-full flex flex-col items-center justify-center">
        <slot />
        <RecomendationCar :cars="cars" :isrecomand="true"/>
    </main>
    <AppFooter />
</template>
