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
			 <view class="top-ls">
				 <view class="top-item">
					<view class="top-item-con block-tl-color1">
						<view class="top-item-tl">
							我的名片
						</view>
						<view class="top-item-des">
							漂亮置顶名片引流
						</view>
					</view>
				 </view>
				 <view class="top-item">
					<view class="top-item-con block-tl-color2">
						<view class="top-item-tl">
							多号爆粉
						</view>
						<view class="top-item-des">
							同时可爆粉3个号
						</view>
					</view>
				 </view>
				 <view class="top-item">
					<view class="top-item-con block-tl-color5">
						<view class="top-item-tl">
							会员专享
						</view>
						<view class="top-item-des">
							专享16项高级特权
						</view>
					</view>
				 </view>
			 </view>
			<view class="content-pad">
		   <!-- 热门工具 start -->
		   <view class="white">
				<view class="block-tl">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color2">
							<uni-icon size="12" color="#fff" type="ai-tool"></uni-icon>
						</view>
						<text class="mdtxt">热门工具</text>
					</view>
					<view class="block-tl-rt">
						<view class="block-tl-rt-item">
							<uni-icon size="13" color="#aaa" type="qinglihuancun"></uni-icon>
							<text class="mdtxt">清理</text>
						</view>
					</view>
				</view>
				<view class="trend block-tl-color3">
					<view class="trend-icon">
						<uni-icon type="gerenxinxi"></uni-icon>
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
						<uni-icon type="qianjin"></uni-icon>
					</view>
				</view>
				<view class="tool-ls">
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon block-tl-color1">
									<uni-icon type="dingwei"></uni-icon>
									<view class="tool-tip block-tl-color1">
										高通过
									</view>
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
								<view class="tool-item-icon block-tl-color2">
									<uni-icon type="remen"></uni-icon>
									<view class="tool-tip block-tl-color2">
										可多号
									</view>
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										坐等爆粉
									</view>
									<view class="tool-item-des">
										高效简单安全
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								每日涨粉200人
							</view>
						</view>
					</view>
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon block-tl-color3">
									<uni-icon type="diqiuquanqiu"></uni-icon>
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										全网散客
									</view>
									<view class="tool-item-des">
										无微商无私粉
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								每次可导入30个
							</view>
						</view>
					</view>
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon block-tl-color4">
									<uni-icon type="licaijingxuan"></uni-icon>
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										精选客源
									</view>
									<view class="tool-item-des">
										只能匹配人脉
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								每次可导入50个
							</view>
						</view>
					</view>
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon block-tl-color5">
									<uni-icon type="duoren2"></uni-icon>
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										微信Q群
									</view>
									<view class="tool-item-des">
										海量群秒更新
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								每天更新500+
							</view>
						</view>
					</view>
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon block-tl-color6">
									<uni-icon type="clean-up"></uni-icon>
								</view>
								<view class="tool-item-info">
									<view class="tool-item-tl">
										清理通讯录
									</view>
									<view class="tool-item-des">
										清理人脉残留
									</view>
								</view>
							</view>
							<view class="tool-item-btn">
								一键智能清理
							</view>
						</view>
					</view>
				</view>
		   </view>
		   <!-- 热门工具 end -->
			 <!-- 工具箱 start -->
			 <view class="white">
			 <view class="block-tl">
			 	<view class="block-tl-lf">
			 		<view class="block-tl-icon block-tl-color1">
			 			<uni-icon size="12" color="#fff" type="icon_fuzhugongju-mian"></uni-icon>
			 		</view>
			 		<text class="mdtxt">工具箱</text>
			 	</view>
			 	<view class="block-tl-rt">
			 		<view class="block-tl-rt-more">
			 			<text class="mdtxt">免费好用</text>
			 			<view class="block-more more-color2">
			 				<uni-icon size="12" type="qianjin"></uni-icon>
			 			</view>
			 		</view>
			 	</view>
			 </view>
			 <view class="trend block-tl-color2">
			 	<view class="trend-icon">
			 		<uni-icon type="iconfontzhizuobiaozhun0247"></uni-icon>
			 	</view>
			 	<view class="trend-info">
			 		<view class="trend-info-tl">
			 			九格切图
			 		</view>
			 		<view class="trend-info-des">
			 			让你的朋友圈更炫酷
			 		</view>
			 	</view>
			 	<view class="trend-user whiteborder">
					<view class="trend-user-avatar">
						<image src="../../static/img/pengyouquan.jpg" mode="aspectFill"></image>
					</view>
					<view class="trend-user-avatar">
						<image src="../../static/img/qqkongjian.jpg" mode="aspectFill"></image>
					</view>
			 		<view class="trend-user-avatar">
			 			<image src="../../static/img/sinaweibo.jpg" mode="aspectFill"></image>
			 		</view>
			 		<uni-icon type="qianjin"></uni-icon>
			 	</view>
			 </view>
			 <view class="tool-ls">
			 	<view class="tool-item">
			 		<view class="tool-item-box">
			 			<view class="tool-item-con">
			 				<view class="tool-item-icon block-tl-color2">
			 					<uni-icon type="zongxiangpingfen"></uni-icon>
			 				</view>
			 				<view class="tool-item-info">
			 					<view class="tool-item-tl">
			 						纵向拼图
			 					</view>
			 					<view class="tool-item-des">
			 						适合做长截图
			 					</view>
			 				</view>
			 			</view>
			 			<view class="tool-item-btn">
			 				最高支持10张图
			 			</view>
			 		</view>
			 	</view>
			 	<view class="tool-item">
			 		<view class="tool-item-box">
			 			<view class="tool-item-con">
			 				<view class="tool-item-icon block-tl-color3">
			 					<uni-icon type="hengxiangpingfen"></uni-icon>
			 				</view>
			 				<view class="tool-item-info">
			 					<view class="tool-item-tl">
			 						横向拼图
			 					</view>
			 					<view class="tool-item-des">
			 						适合拼接横图
			 					</view>
			 				</view>
			 			</view>
			 			<view class="tool-item-btn">
			 				最高支持10张图
			 			</view>
			 		</view>
			 	</view>
			 	<view class="tool-item">
			 		<view class="tool-item-box">
			 			<view class="tool-item-con">
			 				<view class="tool-item-icon block-tl-color4">
			 					<uni-icon type="fsux_tubiao_masaiketu"></uni-icon>
			 				</view>
			 				<view class="tool-item-info">
			 					<view class="tool-item-tl">
			 						马赛克
			 					</view>
			 					<view class="tool-item-des">
			 						自由打码涂抹
			 					</view>
			 				</view>
			 			</view>
			 			<view class="tool-item-btn">
			 				3种打码选择
			 			</view>
			 		</view>
			 	</view>
			 	<view class="tool-item">
			 		<view class="tool-item-box">
			 			<view class="tool-item-con">
			 				<view class="tool-item-icon block-tl-color2">
			 					<uni-icon type="zhongbiao"></uni-icon>
			 				</view>
			 				<view class="tool-item-info">
			 					<view class="tool-item-tl">
			 						圈重点
			 					</view>
			 					<view class="tool-item-des">
			 						快速标记涂鸦
			 					</view>
			 				</view>
			 			</view>
			 			<view class="tool-item-btn">
			 				3种画笔风格
			 			</view>
			 		</view>
			 	</view>
			 </view>
			 </view>
			 <!-- 工具箱 end -->
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
	.content {
		background-color: #f4f6fa;
	}
	
	view {
		box-sizing: border-box;
	}
	uni-swiper{
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
	
	.top-ls {
		font-size: 0;
		margin-top: 20upx;
		padding: 0 10upx;
	}
	
	.top-item {
		display: inline-block;
		vertical-align: top;
		width: 33.333333%;
		font-size: 28upx;
		height: 110upx;
		padding: 0 10upx;
		color: #fff;
		line-height: 1;
		/* margin: 0 10upx; */
	}

	.top-item-con {
		border-radius: 10upx;
		height: 100%;
		padding: 20upx;
	}
	
	.top-item-des {
		font-size: 24upx;
		margin-top: 14upx;
		transform-origin: 0 0;
		transform: scale(0.8);
		white-space: nowrap;
	}
	
	.trend {
		height: 170upx;
		margin: 0 22upx 20upx;
		border-radius: 10upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #fff;
		padding: 0 20upx 0 40upx;
	}
	
	.trend-icon {
		width: 60upx;
		flex: 0 0 60upx;
	}
	
	.trend-icon .uni-icon {
		font-size: 60upx;
	}
	
	.trend-info {
		flex: 1;
		line-height: 1;
		padding-left: 30upx;
	}
	
	.trend-user {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.trend-info-tl {
		font-size: 32upx;
		margin-bottom: 20upx;
	}
	
	.trend-info-des{
		font-size: 24upx;
	}
	
	.trend-user-avatar {
		width: 76upx;
		height: 76upx;
		border-radius: 100%;
		border: 4upx solid #ececec;
		/* padding: 4upx; */
		margin-left: -20upx;
	}
	
	.trend-user image {
		width: 68upx;
		height: 68upx;
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
		border: 2upx solid #f3f3f3;
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
	
	
	
	.tool-tip {
		position: absolute;
		width: 90upx;
		height: 40upx;
		line-height: 40upx;
		text-align: center;
		border-radius: 40upx;
		font-size: 24upx;
		color: #fff;
		right: -30upx;
		top: -24upx;
		border: 1px solid #fff;
		transform: scale(0.8);
	}
	
	.tool-item-icon .uni-icon {
		color: #fff;
		font-size: 44upx;
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
		border: 2upx solid #44B549;
		border-radius: 56upx;
		text-align: center;
		color: #44B549;
		font-size: 22upx;
	}
	
	.block-tl-rt-item .uni-icon {
    vertical-align: middle;
    margin-right: 2px;
	}
	
	.trend .uni-icon-qianjin {
		font-size: 30upx;
		margin-left: 12upx;
	}

	
	.block-more {
		display: inline-block;
		vertical-align: middle;
		width: 30upx;
		height: 30upx;
		text-align: center;
		line-height: 28upx;
		border-radius: 10upx;
		margin-left: 6upx;
		color: #fff;
	}
	
	.more-color2 {
		background-image: linear-gradient(-45deg, #e7b65f 0%, #f1d199 100%);
		box-shadow: 4upx 0 8upx rgba(241, 109, 153, .3);
	}
	
	.whiteborder .trend-user-avatar{
		border-color: #fff;
	}
</style>
