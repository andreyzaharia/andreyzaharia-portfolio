<template>
  <Card class="my-4">
    <template #title>
      <div class="d-flex justify-content-center">
        <h4 class="h4">Contactame</h4>
      </div>
    </template>

    <template #content>
      <div class="container">
        <div class="row">
          <!-- FORM -->
          <div class="col-md-6 contenedor1 p-4">
            <div class="row">
              <div class="col-md">
                <label for="email" class="text-primary fw-bold">Email</label>
                <InputText
                  id="email"
                  type="text"
                  class="w-100"
                  v-model="email"
                />
              </div>

              <div class="col-md">
                <label for="subject" class="text-primary fw-bold">Asunto</label>
                <InputText
                  id="subject"
                  type="text"
                  class="w-100"
                  v-model="subject"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-md">
                <label for="message" class="text-primary fw-bold"
                  >Mensaje</label
                >
                <Textarea
                  id="message"
                  v-model="message"
                  rows="5"
                  cols="30"
                  class="w-100"
                />
              </div>
            </div>

            <div class="d-flex w-100">
              <Button
                type="button"
                label="Enviar"
                icon="pi pi-envelope "
                :loading="loading"
                @click="load"
              />
            </div>
          </div>
          <!-- TLF Y EMAIL -->

          <div class="col-md-6 contenedor2">
     
            <div class="row justify-content-center h-100 align-content-center">

              <div class="col">
                <div class="d-flex m-2 align-items-center">
                <i class="pi pi-linkedin mx-2" style="font-size: 1.5rem; color: white;"></i>
                <a href="https://www.linkedin.com/in/andrei-zaharia-0279b6249" class="text-white w-100 fs-6">www.linkedin.com/in/andrei-zaharia-0279b6249</a>
              </div>

              <div class="d-flex m-2 align-items-center">
                <i class="pi pi-envelope mx-2" style="font-size: 1.5rem; color: white;"></i>
                <span class="text-white fs-6">andreyzaharia41@gmail.com</span>
              </div>

              <div class="d-flex m-2 align-items-center">
                <i class="pi pi-phone mx-2" style="font-size: 1.5rem; color: white;"></i>
                <span class="text-white fs-6">+34 640 217 315</span>
              </div>
              </div>
              
            </div>
              
    
              

          </div>

        </div>
      </div>
    </template>
  </Card>
</template>
  
  <script>
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Textarea from "primevue/textarea";
import Button from "primevue/button";

export default {
  components: {
    InputText,
    Card,
    Textarea,
    Button,
  },

  data() {
    return {
      email: "",
      subject: "",
      message: "",
      loading: false,
    };
  },

  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
  
<style lang="scss" scoped>
.rounded {
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background: green;
  overflow: hidden;
}

.subtitle {
  font-size: large;
  font-weight: 500;
}

.contenedor1 {
  border: 2px;
  border-style: solid;
  border-color: $primary;
  border-radius: 10px 0px 0px 10px;

}
.contenedor2 {
  background-color: $primary;
  border-radius: 0px 10px 10px 0px;
}

.contact_info {
  height: 100%;
  display: grid;
}

.h4 {
  color: $primary;
}

@media only screen and (min-width: $mobile-min-width) and (max-width: $mobile-max-width) {
  .contenedor1 {
  border: 2px;
  border-style: solid;
  border-color: $primary;
  border-radius: 10px 10px 0px 0px;

}
.contenedor2 {
  background-color: $primary;
  border-radius: 0px 0px 10px 10px;
}
}
</style>