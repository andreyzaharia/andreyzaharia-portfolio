<template>
  <div class="container">
    <Card> 
      <template #title>
        <h4>Mis proyectos</h4>
      </template>

      <template #content>
        <TabView :scrollable="true">
            <TabPanel header="Desarrollo de aplicaciones android">
              <AndroidProyectsComponent/>
            </TabPanel>
            <TabPanel header="Desarrollo de software">
              <SowftwareDevelopmentComponent/>
            </TabPanel>
        </TabView>
      </template>

    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import AndroidProyectsComponent from "./AndroidProyectsComponent.vue";
import SowftwareDevelopmentComponent from "./SowftwareDevelopmentComponent.vue";

export default {
  components: {
    Card,
    TabView,
    TabPanel,
    AndroidProyectsComponent,
    SowftwareDevelopmentComponent
  },

};
</script>

<style>
</style>