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
							<img src="">
						</a>
					</div>
					<div class="swiper-slide">
						<a href="javascript:">
							<img src="">
						</a>
					</div>
					<div class="swiper-slide">
						<a href="javascript:">
							<img src="">
						</a>
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</nav>
		<!-- 城市选择 -->
	<!-- 	<div class="region_select ">
			<van-form @submit="onSubmit">
			  <van-cell-group inset>
				  <div class="province">
				  	<span class="province_title">省份</span>
						<van-field  v-model="result"  readonly name="picker"   placeholder="选择省份" @click="showPicker = true"/>
				  </div>
				  <div class="city ">
				  	<span class="city_title">城市</span>
					<van-field v-model="result"  readonly name="picker"  placeholder="选择城市" @click="showPicker = true"/>
				  </div>
			      <div class="county ">
			      	<span class="county_title">区县</span>
					<van-field v-model="result"  readonly name="picker"  placeholder="选择区县" @click="showPicker = true"/>
			      </div>
				  <div class="area ">
				  	<span class="area_title ">您选择的区域为</span>
				  	<van-field v-model="result" left-icon="location"  readonly name="picker"   placeholder="" @click="showPicker = true"/>
				  </div>
			  </van-cell-group>
			  <div class="pay" style="margin: 16px;">
			    <van-button class="pay_button"  round block type="primary" native-type="submit">
			      <span>办理缴费</span>
			    </van-button>
			  </div>
			</van-form>
		</div> -->
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
		padding-top: 110px;
		height: 100%;
		width: 100%;
		background: #fff
	}
	
	.swiper {
		width: 100%;
		height: 100%
	}
	
	.swiper-wrapper {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap
	}
	
	.swiper-slide img {
		display: inline-block;
		width: 100%;
		height: 100%
	}
	
	.swiper-pagination,span.swiper-pagination-bullet-active {
		background: #02a774;
	}
	
	
</style>