<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import router from './main.js'
	export default{
		name:'app',
		data(){
			return {
				name:'circle',
			}
		}
	}
</script>

<style>
	*{
		margin: 0px;
		padding: 0px;
		font-family: '微软雅黑'
	}
	li{
		list-style-type: none;
	}
	html,body{
		height: 100%
	}
	.app{
		height: 100%
	}
	.wrap{
		padding: 2.5rem 1.5rem;
		height: 100%;
		box-sizing:border-box;
	}
</style>