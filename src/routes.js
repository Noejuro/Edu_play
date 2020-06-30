import logo from './components/logo.vue'
import landing from './components/landing.vue'
import error from './components/error.vue'
import sign_up from './components/sign_up.vue'
import test from './components/test.vue'

export const routes = [
    {path: '', component: logo, name: 'logo'},
    {path: '/landing', component: landing, name: 'landing'},
    {path: '/error', component: error, name: 'error'},
    {path: '/sign_up', component: sign_up, name: 'sign_up'},
    {path: '/test', component: test, name: 'test'},
    
]