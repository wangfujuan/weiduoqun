<template>
	<view class="content">
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" previous-margin="16px" next-margin="16px" circular="true">
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
		<view class="content-pad">
			<view class="white">
				<view class="uni-grid-9 b-line">
					<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grids" :key="index">
						<image class="uni-grid-9-image" :src="item.img"></image>
						<text class="uni-grid-9-text">{{item.name}}</text>
					</view>
				</view>
				<view class="tips">
					<view class="tips-text">
						注意：防骗提醒，让你远离骗子！
					</view>
					<uni-icon type="arrowright"></uni-icon>				
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				title: 'swiper',
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				grids: [
					{
						img: "../../static/c1.png",
						name: "微信群"
					},
					{
						img: "../../static/c1.png",
						name: "个人微信"
					},
					{
						img: "../../static/c1.png",
						name: "加粉神器"
					},
					{
						img: "../../static/c1.png",
						name: "QQ名片"
					},
					{
						img: "../../static/c1.png",
						name: "微信访问"
					},
					{
						img: "../../static/c1.png",
						name: "好品牌"
					},
					{
						img: "../../static/c1.png",
						name: "产品秀"
					},
					{
						img: "../../static/c1.png",
						name: "工具箱"
					}
				]
			}
		},
		components: {
			uniIcon
		},
		methods: {
			
		}
	}
</script>

<style>
	@import "../../common/icon.css";
	
	uni-swiper{
		height: 224upx;
	}
	.swiper-item {
		display: block;
		height: 224upx;
		line-height: 224upx;
		text-align: center;
		margin-right: 14upx;
	}
	.color1 {
		background-color: #007AFF;
	}
	.color2 {
		background-color: #8F8F94;
	}
	.color3 {
		background-color: antiquewhite;
	}
	.content-pad {
		padding: 20upx;
	}
	.white {
		border-radius: 16upx;
		background-color: #FFFFFF;
	}
	/* 九宫格 */
	.uni-grid-9 {
		box-sizing: border-box;
		padding-top: 35upx;
	}

	.uni-grid-9-item {
		width: 25%;
		display: inline-block;
		text-align: center;
		margin-bottom: 35upx;
	}

	.uni-grid-9-image {
		width: 80upx;
		height: 80upx;
	}

	.uni-grid-9-text {
		display: block;
		line-height: 1;
		font-size: 24upx;
		margin-top: 5upx;
		color: #626262;
	}

	.uni-grid-9-item-hover {
		background: rgba(0, 0, 0, 0.1);
	}
	
	.tips{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx 0 40rpx;
		height: 78upx;
		line-height: 78upx;
	}
	
	.tips-text{
		flex: 1;
		font-size: 28upx;
	}
	.uni-icon{
		font-size: 18px;
		color: #eaeaea;
	}
</style>

