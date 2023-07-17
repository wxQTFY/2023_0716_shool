<template>
	<section class="msite">
		<!-- logo -->
		<div class="logo">
			<img class="logo_img" src="./images/xiaoan.png">
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
			  <van-cell-group class="col" inset>
				  <div class="province row">
				  	<span class="province_title">省份</span>
					<van-field  v-model="result" :right-icon="require('./images/icon.png')" readonly name="picker"   placeholder="选择省份" @click="showPicker = true"/>
				  </div>
				  <div class="city row">
				  	<span class="city_title">城市</span>
					<van-field v-model="result" :right-icon="require('./images/icon.png')" readonly name="picker"  placeholder="选择城市" @click="showPicker = true"/>
				  </div>
			      <div class="county row">
			      	<span class="county_title">区县</span>
					<van-field v-model="result" :right-icon="require('./images/icon.png')" readonly name="picker"  placeholder="选择区县" @click="showPicker = true"/>
			      </div>
				  <div class="area ">
				  	<span class="area_title row">您选择的区域为</span>
				  	<van-field v-model="result" left-icon="location" :right-icon="require('./images/icon.png')" readonly name="picker"   placeholder="请选择您所在区域" @click="showPicker = true"/>
				  </div>
			  </van-cell-group>
			  <div class="pay" >
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
		display: flex;
		flex-direction: column;
		-webkit-box-align: center;
		align-items: center;
	}
	.logo {
		width: 10rem;
		display: flex;
		justify-content: center;
		flex-direction: row;
	}
    .logo_img{
		display: block;
		width:-2.826667rem;
		height: 2.173333rem;
		margin-top: 0.933333rem;
		margin-bottom: 0.92rem;
	}

	/* 轮播图 */
	.msite_nav {
		width: 9.2rem;
	}

	.swiper {
		height: 3.946667rem;
		width: 9.2rem;
		border-radius: 0.106667rem;
		margin-bottom: 0.4rem;
	}
	.swiper-slide img {
		display: inline-block;
		height: 3.946667rem;
		width: 9.2rem;
	}
	.swiper-pagination,span.swiper-pagination-bullet-active {
		background: #02a774;
	}

	/* 区域选择 */
	.region_select.van-form {
		width: 9.2rem;
		margin-bottom: 1.533333rem;
	}
	.col{
		width: 9.2rem;
		margin-bottom: 1.533333rem;;
	}
	.row{
		display: flex;
		flex-direction: column;
		margin-bottom: 0.4rem;
		flex: 1;
	}
	.region_select span{
		    height: 0.52rem;
		    font-size: .373333rem;
		    font-family: PingFang SC-Medium,PingFang SC;
		    font-weight: 500;
		    color: #999;
		    line-height: .44rem;
		    margin-bottom: 0.266667rem;
	}
	.van-cell{
		height: 0.933333rem;
		background: #f6f8fa;
		align-items: center;
		padding: 0 0.4rem;
		border-radius: 0.106667rem;
		color: black;
		font-size: 0.32rem;
	}
	/* 覆写提示文字颜色 */
	:root:root {
	  --van-field-placeholder-text-color:#ccc;  
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
		width: 168px;
	}
	.county{
		float: right;
	}
	.van-field__left-icon{
		color: #3366CC;
	}
	.van-field__right-icon{
		color: #3366CC;
	}
	.van-icon__image{
		width: 0.186667rem;
		height: 0.186667rem;
	
	}
	.pay{
		width: 9.2rem;
		margin: 16px;
	}
	.pay_button{
		height: 1.066667rem;
		border: none;
		background: #ccc;
	}
	.pay span{
		height: 1.066667rem;
		line-height: 1.066667rem;
		font-size: .48rem;
		font-family: PingFang SC-Medium,PingFang SC;
		font-weight: 500;
		color: #fff;
		margin: 0;
	}
</style>