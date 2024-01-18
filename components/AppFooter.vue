<script setup>
const data = ref([
    { title: "About", items: ["How it works", "Featured", "Partnership", "Bussiness Relation"] },
    { title: "Community", items: ["Events", "Blog", "Podcast", "Invite a friend"] },
    { title: "Socials", items: ["Discord", "Instagram", "Twitter", "Facebook"] },
]);
</script>

<template>
    <div class="bg-white py-16 divide-y-2 px-10 lg:px-32">
        <div class="bg-white flex flex-wrap  gap-16 justify-between  ">
            <div class="flex flex-col gap-3">
                <div class="font-plus-jakarta-sans text-Primary-500 text-2xl font-bold leading-48 tracking-tight w-36">
                    DM
                </div>
                <div>
                    Our vision is to provide convenience <br /> and help increase your sales business.
                </div>
            </div>
            <FooterItem :data="data" />
        </div>
        <div class="flex items-center justify-between flex-wrap">
            <div class="mt-5">
                ©2022 DM. All rights reserved
            </div>
            <div class="flex items-center gap-12 flex-wrap mt-5">
                <div>
                    Privacy & Policy
                </div>
                <div>
                    Privacy & Policy
                </div>
            </div>
        </div>
    </div>
</template>
