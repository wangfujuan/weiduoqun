<template>
	<view class="content">
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item color1">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item color2">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item color3">C</view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'swiper',
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}
	.color1 {
		background-color: #007AFF;
	}
	.color2 {
		background-color: #8F8F94;
	},
	.color3 {
		background-color: antiquewhite;
	}
</style>

