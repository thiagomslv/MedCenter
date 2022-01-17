import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VMask from 'v-mask'

//Componentes das rotas.
import Selec_Cadastro from './view/Selec_Cadastro.vue'
import Home from './view/Home.vue'
import Cadastro_Cliente from './view/Cadastro_Cliente.vue'
import Cadastro_Clinica from './view/Cadastro_Clinica.vue'
import Cadastro_Medico from './view/Cadastro_Medico.vue'
import Painel_Cliente from './view/Painel_Cliente.vue'
import Painel_Clinica from './view/Painel_Clinica.vue'
import Configuracao_Cliente from './view/Configuracao_Cliente.vue'
import Buscar_Clinica from './view/Buscar_Clinica.vue'
import LoginPaciente from './view/LoginPaciente.vue'
import LoginClinica from './view/LoginClinica.vue'
import SelecionarLogin from './view/SelecionarLogin.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueMeta);
Vue.use(VueRouter);
Vue.use(VMask);

Vue.config.productionTip = false;

const router = new VueRouter({

  mode: "history",

  routes: 
  [{
    path: '/cadastro',
    name: 'Selec_Cadastro',
    component: Selec_Cadastro,
    children: [
      {
        path: 'cliente',
        name: 'Cadastro_Cliente',
        component: Cadastro_Cliente,
      },
      {
        path: 'clinica',
        name: 'Cadastro_Clinica',
        component: Cadastro_Clinica,
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  //Rotas de login.

  {
    path: '/login',
    name: 'Login',
    component: SelecionarLogin,
    children: [
      {
        path: 'paciente',
        name: 'LoginPaciente',
        component: LoginPaciente
      },
      {
        path: 'clinica',
        name: 'LoginClinica',
        component: LoginClinica
      }
    ]
  },

  {
    path: '/cadastro_medico',
    name: 'Cadastro_Medico',
    component: Cadastro_Medico,   
  },
  {
    path: '/painel_cliente',
    name: 'Painel_Cliente',
    component: Painel_Cliente,  
    children: [
      {
        path: 'configuracao_cliente',
        name: 'Configuracao_Cliente',
        component: Configuracao_Cliente,
      },
      {
        path: 'buscar_clinica',
        name: 'Buscar_Clinica',
        component: Buscar_Clinica,
      }
    ]
  },
  {
    path: '/painel_clinica',
    name: 'Painel_Clinica',
    component: Painel_Clinica,
  },
  ]
})


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
