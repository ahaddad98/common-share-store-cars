<script setup>
const { ads } = defineProps(['ads'])
const bg = ref(ads.backgoundSrc)
const color = ref(ads.color)
</script>
<template>
    <div :class="[bg, color]" class="h-[260px] lg:min-h-[360px] rounded-2xl bg-contain bg-no-repeat bg-center text-white p-6">
        <h2 class="mb-2 max-w-72 font-plus-jakarta-sans text-[20px] lg:text-[32px] font-semibold leading-5 lg:leading-10 tracking-tight">
            {{ ads.title }}
        </h2>
        <p class=" max-w-72 font-plus-jakarta-sans text-[14px] lg:text-[16px] font-semibold leading-4 lg:leading-6 tracking-tight mb-2">
            {{ ads.parag }}
        </p>
        <button type="button"
            class="text-white text-[14px] lg:text-[16px]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-[20px] py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Rental Car
        </button>
    </div>
</template>