<script setup>

const ads = ref([
  {
    title: "The Best Platform for Car Rental",
    parag: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    link: "/ads1",
    backgoundSrc: "bg-ellipse",
    imgCarSrc: "/image-Car.svg",
    color: "bg-color_ads1"
  },
  {
    title: "The Best Platform for Car Rental",
    parag: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    link: "/ads1",
    backgoundSrc: "bg-rectangle",
    imgCarSrc: "/image-Car.svg",
    color: "bg-Primary-500"
  },
]);
const { data: carsPopular, pending, error, refresh } = await useAsyncData('carsPopular', () => $fetch(`https://dm-assignment-commonshare.koyeb.app/api/cars/popular`))

</script>

<template>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-[32px] container p-5 lg:p-15">
      <div v-for="item in ads">
        <AdsCard :ads="item" />
      </div>
    </div>
    <RecomendationCar v-if="carsPopular" :cars="carsPopular" :isrecomand="false"/>
    <!-- <div v-if="cars.pending">
      loading
    </div>
    <div v-if="cars.error">
      Error
    </div> -->
  <!-- </main> -->
</template>
