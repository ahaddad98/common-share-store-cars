<script setup>
import { useCarsStore } from '~/store/carsStore';
const query = ref('');
const store = useCarsStore()
const handleSearch = async () => {
    store.updatePage(1);
    store.updateToSearch(query.value)
    const { data: carsPopular, pending, error, refresh } = await useAsyncData('cars', () => store.getCars())
}
const cars = computed(() => {
    return { data: store.data, error: store.error, pending: store.pending, refresh: store.refresh }
})
</script>

<template>
    <header class="w-100 flex flex-row flex-wrap items-center justify-between gap-10 p-10 bg-white">
        <nuxt-link to="/"
            class="text-center font-plus-jakarta-sans text-Primary-500 text-2xl font-bold leading-48 tracking-tight w-16 lg:w-36">
            DM
        </nuxt-link>
        <div
            class="flex-1 relative rounded-full border border-primary-border bg-primary-0 p-4 flex items-center gap-2 order-last lg:order-2 min-w-64">
            <svg class="h-5 left-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.2-5.2"></path>
                <circle cx="10" cy="10" r="8"></circle>
            </svg>
            <!-- <form action=""> -->
                <input type="text" class="w-full focus:outline-none" v-model="query" @change="handleSearch" placeholder="Search something here">
            <!-- </form> -->
        </div>
        <img src="/likes.svg" alt="" class="order-2 lg:order-last">
    </header>
</template>