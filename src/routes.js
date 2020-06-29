import logo from './components/logo.vue'
import landing from './components/landing.vue'

export const routes = [
    {path: '', component: logo, name: 'logo'},
    {path: '/landing', component: landing, name: 'landing'},
]