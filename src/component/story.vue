<template>
	<div class="story wrap" :class="classObject">
		<h1>{{classname[indexpage]}}</h1>
		<div class="content">{{storydata[indexpage].content}}</div>
		<div @click='indexpageadd()' v-if="indexpage != storyindex" class="next">下一页</div>
		<div v-else >
			<p class='readfinish'>故事到这个地方就讲完啦。请你把这几个人进行打分，标准是你对他们的好感度。</p>
			<router-link to='select' class="next">开始打分</router-link>
		</div>

	</div>
</template>
<script type="text/javascript">
	import storydata from '../assets/story.js'
	export default{
		data(){
			return {
				name:'circle',
				indexpage:0,
				storydata:storydata,
				classObject:{
					m:false,
					l:false,
					s:false,
					f:false,
					e:false
				},
				classname:['m','l','s','f','e']
			}
		},
		computed:{
			storyindex(){
				return this.storydata.length-1
			}
		},
		methods:{
			indexpageadd() {
				this.indexpage++;
				for (let i in this.classObject) {
					this.classObject[i] = false;
				}
				this.classObject[this.classname[this.indexpage]] = true
			},
		}
	}
</script>
<style type="text/css">
.story {
	color: #fff;
	line-height: 1.8em;
	font-size: 16px;
}
.story h1{
	text-align: center;
	line-height: 45px;
}
.story{
	background-image: url("./image/m.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: fixed;
	top: 0px;
	bottom: 0px;
	right: 0px;
	left: 0px;
}
.story.m{
	background: red
}
.story.f{
	background-image: url("./image/f.jpg");
}
.story.s{
	background-image: url("./image/s.jpg");
}
.story.l{
	background-image: url("./image/l.jpg");
}
.story.e{
	background-image: url("./image/e.jpg");
}
.story .content{
	min-height: 240px;
}
.story .next{
	text-align: center;
	padding-top: 25px;
	display: block;
	color: #fff;
	text-decoration: none;
	font-size: 22px;
}

</style>