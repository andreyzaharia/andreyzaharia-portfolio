<template>
  <div class="container">
      <Card>
        <template #content>
          <div class="row">
            <div class="col-md-4">
              
              <img src="/images/andrei.jpg" class="img-fluid rounded" style="max-width: 250px;" />
            </div>
            <div class="col-md-8">
              <p>
                Soy un apasionado desarrollador junior full stack con una sólida
                formación y experiencia en el mundo del desarrollo de software.
                Mi enfoque principal ha sido el desarrollo de aplicaciones
                móviles Android y en el Backend en Laravel y Java
              </p>

              <p>
                Mi experiencia incluye la creación de aplicaciones Android desde
                cero, lo que implica el diseño de la interfaz de usuario, la
                implementación de la lógica de negocio y la integración de
                servicios web y bases de datos. Esto me ha permitido adquirir
                habilidades sólidas en Java y el ecosistema de desarrollo de
                Android.
              </p>

              <p>
                Además de mi experiencia en el desarrollo móvil, también he
                trabajado en el desarrollo de backend utilizando tecnologías
                como Java y Laravel. Esto me ha proporcionado una comprensión
                profunda de la arquitectura de servidores, la gestión de bases
                de datos y la creación de API robustas y escalables.
              </p>
            </div>
          </div>

          <hr />

          <div class="d-flex justify-content-start">
            <h4>Tecnologías</h4>
          </div>

          <hr />

          <span class="subtitle">Backend</span>
          <div class="row">
            <div class="col-md-4">
              <ul>
                <li>Java</li>
                <li>Spring, SpringBoot framework</li>
                <li>MySQL & NoSQL</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul>
                <li>PHP</li>
                <li>Laravel framework</li>
              </ul>
            </div>
          </div>

          <span class="subtitle">Frontend</span>
          <div class="row">
            <div class="col-md-4">
              <ul>
                <li>Laravel framework</li>
                <li>Javascript</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul>
                <li>VUE 3 framework</li>
                <li>HTML & CSS</li>
              </ul>
            </div>
          </div>

          <span class="subtitle">Otras tecnologías</span>
          <div class="row">
            <div class="col-md-4">
              <ul>
                <li>Android studio</li>
                <li>Control de versiones con Github</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul>
                <li>JIRA</li>
                <li>FIGMA</li>
              </ul>
            </div>
          </div>
        </template>
      </Card>
      <ContactMeComponent />

  </div>

</template>

<script>
import Image from "primevue/image";
import Card from "primevue/card";
import ContactMeComponent from "./ContactMeComponent.vue";

export default {
  components: {
    Image,
    Card,
    ContactMeComponent,
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  font-size: large;
  font-weight: 500;
}
</style>