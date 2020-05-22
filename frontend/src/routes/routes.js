import Vue from "vue";
import VueRouter from 'vue-router'
import SearchBillPage from '../pages/searchBill.vue'
import sumTypePage from '../pages/sumType.vue'
import sumCatePage from '../pages/sumCate.vue'

Vue.use(VueRouter);

const routes = [
    { 
        path: '/searchBill', 
        component: SearchBillPage 
    },
    { 
        path: '/sumType', 
        component: sumTypePage 
    },
    { 
        path: '/sumCate', 
        component: sumCatePage 
    },
    {
        path: '/', 
        redirect: '/searchBill'
    }
]

const router = new VueRouter({routes})

export default router