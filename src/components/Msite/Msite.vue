<template>
	<section class="msite">
		<!-- logo -->
		<div class="logo">
			<img src="./images/xiaoan.png">
		</div>
		<!-- 轮播图 -->
		<nav class="msite_nav clearFix">
			<div class="swiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<a href="javascript:">
							<img src="./images/lb1.png">
						</a>
					</div>
					<div class="swiper-slide">
						<a href="javascript:">
							<img src="./images/lb1.png">
						</a>
					</div>
					<div class="swiper-slide">
						<a href="javascript:">
							<img src="./images/lb1.png">
						</a>
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</nav>
		<!-- 城市选择 -->
		<div class="region_select ">
			<van-form @submit="onSubmit">
			  <van-cell-group inset>
				  <div class="province">
				  	<span class="province_title">省份</span>
						<van-field  v-model="result" :right-icon="require('./images/icon.png')" readonly name="picker"   placeholder="选择省份" @click="showPicker = true"/>
				  </div>
				  <div class="city ">
				  	<span class="city_title">城市</span>
					<van-field v-model="result" :right-icon="require('./images/icon.png')" readonly name="picker"  placeholder="选择城市" @click="showPicker = true"/>
				  </div>
			      <div class="county ">
			      	<span class="county_title">区县</span>
					<van-field v-model="result" :right-icon="require('./images/icon.png')" readonly name="picker"  placeholder="选择区县" @click="showPicker = true"/>
			      </div>
				  <div class="area ">
				  	<span class="area_title ">您选择的区域为</span>
				  	<van-field v-model="result" left-icon="location" :right-icon="require('./images/icon.png')" readonly name="picker"   placeholder="" @click="showPicker = true"/>
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
		components: {

		}
	}
</script>

<style rel="stylesheet" type="text/css">
	@import "../../common/css/mixins.css";

	.msite {
		width: 100%;
	}

	.logo {
		position: fixed;
		z-index: 100;
		left: 0;
		top: 40px;
		width: 100%;
		height: 60px;
	}

	.logo img {
		display: block;
		margin: 0 auto;
		width: 60px;
		height: 60px
	}

	/* 轮播图 */
	.msite_nav {
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

	/* 区域选择 */
	.region_select {
		width: 100%;
		padding-top: 10px;
		float: left;
		background-color: #fff;
	}
	.region_select span{
		color:darkgrey;
		font-weight: bold;
	}
	.van-cell{
		margin-top: 10px;
		margin-bottom: 10px;
		background-color: #EEEEEE;
		border-radius: 5px;
		color: black;
	}
	/* 覆写提示文字颜色 */
	:root:root {
	  --van-field-placeholder-text-color:#3C3C3C;  
	  --van-button-default-color:red;
	}
	.province, .city, .area{
		float: left;
	}
	.province, .area{
		width: 100%;
		float: left;
	}
    .city, .county{
		width: 150px;
	}
	.county{
		float: right;
	}
	.pay_button{
		--van-button-primary-background:#CCCCCC;
		border: none;
		margin-top: 50px;
		color: #fff;
		font-size: 20px;
		font-family: "宋体";
	}
	.van-field__left-icon{
		color: #3366CC;
	}
	.van-field__right-icon{
		color: #3366CC;
	}
	.van-icon__image{
		width: 10px;
		height: 10px;
	}
	/* .province
		   width 100px
		   height 50px
		   background-color #02a774
		   .province_title
		      font-size 22px
		      color #fff
	       .province_select
		      width 150px
			  height 20px
			  background-color  #F5A100 	 */
</style>