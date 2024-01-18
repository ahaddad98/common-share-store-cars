<script setup>
const { data } = defineProps(['data']);
</script>

<template>
    <div class="flex-1 w-100 lg:max-w-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div v-for="item in data" :key="item.title">
            <h3 class="text-secondary-500 font-plus-jakarta-sans font-semibold text-lg leading-8 tracking-tighter mb-4">
                {{ item.title }}
            </h3> 
            <ul>
                <li v-for="subItem in item.items" :key="subItem" class="text_gray font-plus-jakarta-sans font-medium text-base leading-6 tracking-tight mb-6 cursor-pointer">
                    {{ subItem }}
                </li>
            </ul>
        </div>
    </div>
</template>
