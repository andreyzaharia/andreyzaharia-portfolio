<template>
  <div class="row p-2">
    <div class="col-md-4">
      <div class="d-flex flex-row align-items-center">
        <div class="p-2">
          <Avatar image="andreyzaharia-portfolio/images/andrei.jpg" size="large" shape="circle" />
        </div>
        <div class="p-2">
          <span class="span">Andrei Silviu Zaharia</span>
        </div>
      </div>
    </div>

    <!-- aqui los menus -->
    <div class="col-md-8">
      <div class="d-flex flex-row align-items-center justify-content-end h-100">
        <router-link to="/">
          <span class="span p-2">Sobre mi</span>
        </router-link>
        <router-link to="/proyects">
          <span class="span p-2">Mis proyectos</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "primevue/avatar";

export default {
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
.span {
  color: $dark;
  font-size: 18px;
}

.p-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 1rem;
}
</style>