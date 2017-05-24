<template>
	<div class="pshow" :class="classObject">
			<div class="desc">{{select_list[index].description}}</div>
			<h4 class="frades"><span>{{inputdata}}</span></h4>
			<p class="all">
				<input type="radio" name="b" value="0" v-model="inputdata" />
				<span>★</span>
				<input type="radio" name="b" value="1" v-model="inputdata" />
				<span>★</span>
				<input type="radio" name="b" value="2" v-model="inputdata" />
				<span>★</span>
				<input type="radio" name="b" value="3" v-model="inputdata" />
				<span>★</span>
				<input type="radio" name="b" value="4" v-model="inputdata" />
				<span>★</span>
				<input type="radio" name="b" value="5" v-model="inputdata" />
				<span>★</span>
			</p>
	</div>
</template>

<script>
export default {

	name:'pshow',

	data(){
		return {
			inputdata:'0',
			show:false,
			index:0,
			soccer:[],
			classObject:{
				m:false,
				f:false,
				s:false,
				l:false,
				e:false
			},
			classname:['m','f','s','l','e']
		}
	},
	props:["select_list"],
	methods:{
		next(){
			if(this.index < 4){
				this.index++;
			}
			else{
				alert('打分完成');
			}
			
		},
	},
	watch: {
		inputdata(value) {
			if(value != 0){
				// console.log(value+this.index);
				this.$emit('increment',value,this.index,)
				// this.inputdata = 0 ;

				
				if(this.index < 4){
					setTimeout(()=>{
						for (var key in this.classObject) {
							this.classObject[key] = false
						}
						this.index++;
						this.inputdata = 0 ;
						this.classObject[this.classname[this.index]]  = true;
					},500)
				}
				else{
					// alert('打分完成');
				}
				
			}
			else{
				return false
			}
		}
	}
}
</script>

<style>

.all>input{
	opacity:0;
	position:absolute;
	width:2em;
	height:2em;
	margin:0;
}
.all>input:nth-of-type(1),.all>span:nth-of-type(1){
	display:none;
}
.all>span{
	font-size:2em;color:gold;
	-webkit-transition:color.2s;
	transition:color.2s;
}
.all>input:checked~span{
	color:#fff;
}
.all>input:checked+span{
	color:gold;
}
.pshow{
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
.pshow.m{
	background: red
}
.pshow.f{
	background-image: url("./image/f.jpg");
}
.pshow.s{
	background-image: url("./image/s.jpg");
}
.pshow.l{
	background-image: url("./image/l.jpg");
}
.pshow.e{
	background-image: url("./image/e.jpg");
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
.pshow .desc{
	line-height: 160px;
    text-align: center;
    font-size: 22px;
    color: #fff
}
.pshow .frades{
	font-size: 36px;
	text-align: center;
	font-weight: bolder;
	color: #fff;
	line-height: 120px;
}
.pshow .all{
	text-align: center;
} 
</style>