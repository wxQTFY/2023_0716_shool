<template>
	<!-- 校安网首页 -->
	<section class="school">
		<!-- 头部 -->
		<div class="school-header">
			<div class="header">
				<div class="header-left">
					<img src="./images/SLOGO.png">
					<div class="school-title">
					   <span>校安网  |  助力安全</span>
					</div>
				</div>
				<div class="header-right">
					<span class="header-province">宁波市</span>
					<van-icon name="arrow-down" />
				</div>
			</div>
		</div>
		<!-- 轮播图 -->
		<nav class="school_nav clearFix">
			<div class="swiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<a href="javascript:">
							<img src="./images/lb1.png">
						</a>
					</div>
					<div class="swiper-slide">
						<a href="javascript:">
							<img src="./images/lb2.png">
						</a>
					</div>
					<div class="swiper-slide">
						<a href="javascript:">
							<img src="./images/lb3.png">
						</a>
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</nav>
		<!-- 城市选择 -->
		<div class="region_select ">
			<div class="area ">
				<van-field class="area-head" v-model="value "  left-icon="location"  readonly name="picker"   placeholder="" @click="showPicker = true"/>
			</div>
			<van-form  class="area-selsct" @submit="onSubmit">
					<van-cell-group class="area-top" inset>
						<div class="province">
							<van-field  v-model="result1" is-link readonly name="picker"   placeholder="选择省份" @click="showPicker = true"/>
						</div>
						<div class="city ">
							<van-field v-model="result2" is-link readonly name="picker"  placeholder="选择城市" @click="showPicker = true"/>
						 </div>
					<div class="county ">
						<van-field v-model="result3" is-link readonly name="picker"  placeholder="选择区县" @click="showPicker = true"/>
				    </div>
			        </van-cell-group>
				  <div class="pay" style="margin: 16px;">
					<van-button class="pay_button"  round block type="primary" native-type="submit">
					  <span>办理缴费</span>
					</van-button>
				  </div>
			</van-form>
		</div>
	</section>
</template>

<script>
	// import { Image as VanImage } from 'vant'\
	import Swiper from 'swiper'
	import 'swiper/css'
	import { Form, Field, CellGroup,Icon } from 'vant'
	import 'vant/lib/index.css'
	
	export default {
		mounted() {
			new Swiper('.swiper', {
				//分页器
				pagination: {
					el: '.swiper-pagination',
				},
				loop: true, // 循环模式选项
			})
		},
		setup() {
		    const value = "浙江省宁波市天心区...";
			const result1 = "浙江省";
			const result2 = "宁波市";
			const result3 = "天心区";
		    return { value,result1, result2,result3};
		  },
		components: {

		}
	}
</script>

<style rel="stylesheet" type="text/css">
	@import "../../common/css/mixins.css";
	.school {
		width: 100%;
	}
	.school-header{
		background: linear-gradient(to bottom, #0099CC,#FFFFFF);
		width: 100%;
		height: 180px;
	}
	.header {
		position: fixed;
		z-index: 100;
		left: 0;
		top: 30px;
		width: 100%;
		height: 60px;
	}
	.header-left{
		position: absolute;
		left: 15px;
		top: 50%;
	}
	.header-left img{
		float: left;
		width: 40px;
		height: 40px;
	}
	.school-title{
		float: right;
		margin-left: 10px;
		line-height: 40px;
		font-size:20px;
		color: #fff;
		font-weight: bold;
		display: block;

	}
	.header-right{
		position: absolute;
		right: 15px;
		top: 50%;
		color: #fff;
        line-height: 40px;
	}
	.header-province{
		margin-right: 10px;
		font-family: "宋体";
	}
	.school_nav {
		margin: -60px auto;
		height: 100%;
		width: 93%;
		background: #fff;
		background-color: inherit;
	}
	
	.swiper {
		width: 100%;
		height: 100%;
	}
	
	.swiper-wrapper {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
	}
	
	.swiper-slide img {
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	
	.swiper-pagination,span.swiper-pagination-bullet-active {
		background: #02a774;
	}
	/* 地区选择 */
	.region_select {
		width: 100%;
		padding-top: 65px;
	}
	.area{
		width: 190px;
		margin-left: 15px;
		--van-cell-background:#E6E6E6;
		--van-cell-line-height:12px;
		--van-field-input-text-color:#897a7a;
	}
	.area-head{
		 border-radius: 10px;
	}
	.van-field__left-icon{
		color: #3366CC;
	}
	.area-selsct{
		width: 100%;
	}
	.area-top{
		margin-top: 10px;
		--van-cell-group-inset-radius:7px;
		box-shadow: 0 0 10px #C4C4C4;
	}
    .province, .city{
		border-bottom:1px solid #CCCCCC;
		--van-field-input-text-color:#1A1A1A;
	}
	 .province, .city,.county{
		 margin: 0 10px;
	 }
	 .pay_button{
	 	border: none;
	 	margin-top: 50px;
		color: #fff;
		font-size: 20px;
		font-family: "宋体";
	 }
     
</style>