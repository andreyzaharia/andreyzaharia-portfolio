<template>
  <div class="card md:flex md:justify-content-center">
    <Galleria
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      containerStyle="max-width: 390px"
      :circular="true"
      :autoPlay="true"
      :transitionInterval="2000"

    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="width: 40%; display: block"
        />
      </template>
    </Galleria>
  </div>
</template>

<script>
import Galleria from "primevue/galleria";

export default {
  components: {
    Galleria,
  },
  data() {
    return {
      responsiveOptions: [
        {
          breakpoint: "991px",
          numVisible: 4,
        },
        {
          breakpoint: "767px",
          numVisible: 3,
        },
        {
          breakpoint: "575px",
          numVisible: 1,
        },
      ],
      images: [
        {
          itemImageSrc: "/images/aniweeb/aniweeb_1.webp",
          alt: "",
          thumbnailImageSrc:"/images/aniweeb/aniweeb_1.webp"
        },
        {
          itemImageSrc: "/images/aniweeb/aniweeb_2.webp",
          alt: "",
          thumbnailImageSrc:"/images/aniweeb/aniweeb_2.webp"
        },
        {
          itemImageSrc: "/images/aniweeb/aniweeb_3.webp",
          alt: "",
          thumbnailImageSrc:"/images/aniweeb/aniweeb_3.webp"
        },
        {
          itemImageSrc: "/images/aniweeb/aniweeb_4.webp",
          alt: "",
          thumbnailImageSrc:"/images/aniweeb/aniweeb_4.webp"
        },
        {
          itemImageSrc: "/images/aniweeb/aniweeb_5.webp",
          alt: "",
          thumbnailImageSrc:"/images/aniweeb/aniweeb_5.webp"
        },
        {
          itemImageSrc: "/images/aniweeb/aniweeb_6.webp",
          alt: "",
          thumbnailImageSrc:"/images/aniweeb/aniweeb_6.webp"
        },
        {
          itemImageSrc: "/images/aniweeb/aniweeb_7.webp",
          alt: "",
          thumbnailImageSrc:"/images/aniweeb/aniweeb_7.webp"
        },
      ],
    };
  },
};
</script>

<style>
</style>