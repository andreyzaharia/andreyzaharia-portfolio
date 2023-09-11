<template>
  <div id="layout">
    <div class="top-bar-section">
      
      <TopBarComponent/>
    </div>

    <div
      class="content-section px-2 px-md-4 pb-2 pb-md-4 pt-2 pt-md-4"
    >
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>

import TopBarComponent from './TopBarComponent.vue';


export default {
  components: {
    TopBarComponent
  }

};
</script>

<style lang="scss" scoped>
#layout {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: grid;
  grid-template-columns: 15.5% 1fr;
  grid-template-rows: fit-content(5rem) auto 3rem;
  grid-template-areas:
    "top-bar-section top-bar-section"
    "content-section content-section"
    "content-section content-section";
  background-color: rgb(245, 245, 245);
  overflow: hidden;

  .top-bar-section {
    grid-area: top-bar-section;
    z-index: 55;
    background-color: white;
    box-shadow: $smooth-box-shadow;
  }

  .content-section {
    grid-area: content-section;
    z-index: 50;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: $fondo;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.2s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(30%);
    opacity: 0;
  }

  @media only screen and (min-width: $mobile-min-width) and (max-width: $mobile-max-width) {
    grid-template-columns: 100%;
    grid-template-rows: fit-content(10rem) auto;
    grid-template-areas:
      "top-bar-section"
      "content-section";
  }
}
</style>
