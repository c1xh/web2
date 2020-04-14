<template>
	<div class="swiper">
		
		<mt-swipe :auto="4000" continuous  style="height:200px">
			<mt-swipe-item v-for="item in items" :key="item.id">
				<img class="img" :src='item.url' alt="">
			</mt-swipe-item>	
		</mt-swipe>
	</div>
</template>
<script>
import "mint-ui/lib/style.css"
export default {
	data(){
		return{
			items:[{
				title:'1',
				url:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg'
			},
			{
				title:'2',
				url:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4018557288,1217151095&fm=26&gp=0.jpg'
			},
			{
				title:'3',
				url:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1208538952,1443328523&fm=26&gp=0.jpg'
			},
			]
		}
	}
}
</script>
<style>
	.img{
		display: block;
		width: 375px;
		height:200px;
	}
</style>