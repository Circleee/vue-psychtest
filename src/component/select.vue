<template>
	<div class="select_wrap">
		<div class="content select">
			<h4 @click = "pshow = !pshow">根据你的好感度，给人物做了以下评分</h4>
			<ul>
				<li v-for="(li,index) in select_list_n">
					<span class="name">{{li.name}}</span>
					<span class="desc">{{li.description}}</span>
					<span>{{li.soccer}}</span>
				</li>
			</ul>
			<div class="intr">
				<p>答案其实很简单，就是用你的潜意识告诉你最想要的是什么。(仅供娱乐，请勿当真)</p>
			</div>
			<div class="result">
				<p>M——金钱（Money）</p>
				<p>L——爱情（Love）</p>
				<p>S——性（Sex）</p>
				<p>F——家庭（Family）</p>
				<p>E——事业（Enterprise）</p>
			</div>
		</div>
		<transition name="bounce">
			<pshow v-if='pshow'  v-on:increment="soccer" :select_list='select_list'></pshow>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import pshow from './pshow.vue'
	export default {
		data(){
			return {
				select_list:[
					{name:"M",description:'故事的男主角M',soccer:1},
					{name:"F",description:'男主角的未婚妻F',soccer:1},
					{name:"S",description:'借船给M的S',soccer:1},
					{name:"L",description:'没有借船给M的L',soccer:1},
					{name:"E",description:'最终不会介意过去的E',soccer:1}
				],
				i:0,
				pshow:true
			}
		},
		methods:{
			soccer:function(value,index){
				this.select_list[index].soccer = value;
				index==4?this.pshow=false:this.pshow=true
			}
		},
		computed: {
		  select_list_n: function () {
		    return _.orderBy(this.select_list, 'soccer').reverse()
		  }
		},
		components:{
			'pshow':pshow
		}
	}
</script>

<style type="text/css">
	.select_wrap{
		height: 100%;
		background-image: url("../component/image/bg.jpg");
		background-position: center center; 
		background-repeat: no-repeat;
		background-size: cover;
	}
	.select_wrap .content{
		padding: 2.5rem 1.5rem;
		height: 100%;
		box-sizing:border-box;
		color: #fff;
	}
	.select_wrap .content.select h4{
		line-height: 3.6em;
		font-size: 16px;
		font-weight: normal;

	}
	.select_wrap .content.select .intr{
		padding-top: 15px;
	}
	.select_wrap .content.select  .result{
		padding-top: 45px;
		text-indent: 45px;
		line-height: 2.4em;
	}
	.select_wrap .content.select ul li{
		line-height: 1.6em
	}
	.select_wrap .content.select ul li span{
		display: inline-block;
	}
	.select_wrap .content.select ul li span.name{
		width: 45px
	}
	.select_wrap .content.select ul li span.desc{
		width: 60%;
	}
	.select_wrap .content.select .cancel{
		position: fixed;
		z-index: 2;
		font-size: 36px;
		left: 50%;
		top: 360px;
		margin-left:-62px; 
		color: #fff;
	}
</style>