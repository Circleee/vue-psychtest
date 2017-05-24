import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import _ from 'lodash'

import start from './component/start.vue'
import story from './component/story.vue'
import select from './component/select.vue'
import result from './component/result.vue'


Vue.use(VueRouter)
const routes = [
	{path:'/',component:start},
	{path:'/story',component:story},
	{path:'/select',component:select},
	{path:'/result',component:result},
]
const router = new VueRouter({
	routes
})
new Vue({
	el:'#app',
	render:a=>a(App),
	router
})