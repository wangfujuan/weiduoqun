<template>
    <view class="content">
       <view class="shadow"></view>
       <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" 
       		:duration="duration" 
       		circular="true" 
       		next-margin="20rpx" 
       		previous-margin="20rpx">
       	<swiper-item>
       		<view class="swiper-item">
       			<image src="../../static/banner.jpg" mode="widthFix"></image>
       		</view>
       	</swiper-item>
       	<swiper-item>
       		<view class="swiper-item">
       			<image src="../../static/banner.jpg" mode="widthFix"></image>
       		</view>
       	</swiper-item>
       	<swiper-item>
       		<view class="swiper-item">
       			<image src="../../static/banner.jpg" mode="widthFix"></image>
       		</view>
       	</swiper-item>
       </swiper>
	   <view class="content-pad">
		   <!-- 热门工具 start -->
		   <view class="white">
				<view class="block-tl">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color2">
							<!-- <uni-icon type="chanpin2"></uni-icon> -->
						</view>
						<text class="mdtxt">热门工具</text>
					</view>
					<view class="block-tl-rt">
						<view class="block-tl-rt-item">
							<!-- <uni-icon type="shoucang1"></uni-icon> -->
							<text class="mdtxt">清理</text>
						</view>
					</view>
				</view>
				<view class="trend">
					<view class="trend-icon">
						
					</view>
					<view class="trend-info">
						<view class="trend-info-tl">
							优质名片
						</view>
						<view class="trend-info-des">
							挑选客户我不随便
						</view>
					</view>
					<view class="trend-user">
						<view class="trend-user-avatar">
							<image src="../../static/avatar/avatar_2.jpg" mode="aspectFill"></image>
						</view>
						<view class="trend-user-avatar">
							<image src="../../static/avatar/avatar_3.jpg" mode="aspectFill"></image>
						</view>
						<view class="trend-user-avatar">
							<image src="../../static/avatar/avatar_4.jpg" mode="aspectFill"></image>
						</view>
						<!-- <uni-icon type=""></uni-icon> -->
					</view>
				</view>
				<view class="tool-ls">
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon">
									
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										精准人脉
									</view>
									<view class="tool-item-des">
										人脉多赚钱多
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								千万人脉免费加
							</view>
						</view>
					</view>
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon">
									
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										精准人脉
									</view>
									<view class="tool-item-des">
										人脉多赚钱多
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								千万人脉免费加
							</view>
						</view>
					</view>
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon">
									
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										精准人脉
									</view>
									<view class="tool-item-des">
										人脉多赚钱多
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								千万人脉免费加
							</view>
						</view>
					</view>
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon">
									
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										精准人脉
									</view>
									<view class="tool-item-des">
										人脉多赚钱多
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								千万人脉免费加
							</view>
						</view>
					</view>
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon">
									
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										精准人脉
									</view>
									<view class="tool-item-des">
										人脉多赚钱多
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								千万人脉免费加
							</view>
						</view>
					</view>
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon">
									
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										精准人脉
									</view>
									<view class="tool-item-des">
										人脉多赚钱多
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								千万人脉免费加
							</view>
						</view>
					</view>
				</view>
		   </view>
		   <!-- 热门工具 end -->
	   </view>
    </view>
</template>

<script>
    import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
			}
		},
		components: {
			uniIcon
		},
	}
</script>

<style>
	@import "../../common/icon.css";
	view {
		box-sizing: border-box;
	}
	uni-swiper[data-v-3c055dd4]{
		height: 246upx;
	}
	
	swiper{
		height: 232upx;
	}
	
	.swiper-item {
		display: block;
		height: 232upx;
		text-align: center;	
		padding: 0 7upx;
	}
	
	uni-image,swiper-item image {
		width: 100%;
		border-radius: 14upx;
	}
	
	.trend {
		height: 170upx;
		background-image: linear-gradient(-45deg, #6e78e0 0%, #b07ef1 100%);
		margin: 0 22upx 20upx;
		border-radius: 10upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.trend-info {
		flex: 1
	}
	
	.trend-user {
		display: flex;
		flex-direction: row;
	}
	
	.trend-user-avatar {
		width: 70upx;
		height: 70upx;
		border-radius: 100%;
		border: 4upx solid #ececec;
		padding: 4upx;
	}
	
	.trend-user image {
		width: 70upx;
		height: 70upx;
		border-radius: 100%;
	}
	
	.tool-ls {
		font-size: 0;
		padding: 0 12rpx;
	}
	
	.tool-item {
		font-size: 28upx;
		display: inline-block;
		vertical-align: top;
		width: 50%;
		height: 236upx;
		padding: 0 8upx 22upx;
	}
	
	.tool-item-box {
		border: 1px solid #f3f3f3;
		height: 100%;
		padding: 30upx;
		border-radius: 10upx;
	}
	
	.tool-item-con {
		line-height: 1;
		display: flex;
		flex-direction: row;
		margin-bottom: 30upx;
	}
	
	.tool-item-icon {
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		background-color: #007AFF;
	}
	
	.tool-item-des {
		color: #a1a1a1;
		font-size: 22upx;
		margin-top: 20upx;
	}
	
	.tool-item-info {
		padding-left: 20upx;
	}
	
	.tool-item-btn {
		height: 56rpx;
		line-height: 52upx;
		border: 1px solid #44B549;
		border-radius: 56upx;
		text-align: center;
		color: #44B549;
		font-size: 22upx;
	}
</style>
