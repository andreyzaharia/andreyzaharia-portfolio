// Import styles
import "/src/assets/styles/app.scss";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// PrimeVue
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";



const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
    ripple: true,
    locale: {
        dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        monthNames: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],
        monthNamesShort: [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
        ],
        today: "Hoy",
        firstDayOfWeek: 1,
        accept: "Aceptar",
        reject: "Rechazar",
        clear: "Limpiar",
        weak: "Débil",
        medium: "Medio",
        strong: "Fuerte",
        pending: "Pendiente",
    },
});

app.mount('#app')