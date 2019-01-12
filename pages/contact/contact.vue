<template>
    <view class="content">
       <!-- <view class="shadow"></view> -->
       <!-- <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" 
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
       </swiper> -->
			 <!-- <view class="top-ls">
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
			 </view> -->
		<view class="content-pad">
			<view class="white">
				<view class="block-tl b-line">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color6">
							<uni-icon size="12" color="#fff" type="gerenweixin"></uni-icon>
						</view>
						<text class="mdtxt">我的名片</text>
					</view>
				</view>
				<view class="uni-grid-9">
					<navigator class="uni-grid-9-item" hover-class="none" url="../card/card?currentTab=0">
						<view class="iconwp oneicon">
							<uni-icon type="duoren2"></uni-icon>
						</view>
						<text class="uni-grid-9-text">微信群名片</text>	
					</navigator>
					<navigator class="uni-grid-9-item" hover-class="none" url="../card/card?currentTab=0">
						<view class="iconwp fouricon">
							<uni-icon type="qq02"></uni-icon>
						</view>
						<text class="uni-grid-9-text">QQ群名片</text>	
					</navigator>
					<navigator class="uni-grid-9-item" hover-class="none" url="../card/card?currentTab=1">
						<view class="iconwp twoicon">
							<uni-icon type="geren2"></uni-icon>
						</view>
						<text class="uni-grid-9-text">微信个人名片</text>	
					</navigator>
					<navigator class="uni-grid-9-item" hover-class="none" url="../card/card?currentTab=1">
						<view class="iconwp threeicon">
							<uni-icon type="xin2"></uni-icon>
						</view>
						<text class="uni-grid-9-text">QQ个人名片</text>	
					</navigator>
				</view>
			</view>	
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
						<navigator hover-class="none" url="../wxPersonal/wxPersonal">
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
						</navigator>
					</view>
					<view class="tool-item">
						<navigator hover-class="none" url="../card/card?currentTab=1">
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
						</navigator>
					</view>
					<view class="tool-item">
						<navigator hover-class="none" url="../allpeople/allpeople">
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
						</navigator>
					</view>
					<view class="tool-item">
						<view class="tool-item-box">
							<view class="tool-item-con">
								<view class="tool-item-icon block-tl-color7">
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
						<navigator hover-class="none" url="../wxgroup/wxgroup">
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
						</navigator>
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
			 <!-- 自动加人 start -->
			 <view class="white">
			 <view class="block-tl">
			 	<view class="block-tl-lf">
			 		<view class="block-tl-icon block-tl-color1">
			 			<uni-icon size="12" color="#fff" type="icon_fuzhugongju-mian"></uni-icon>
			 		</view>
			 		<text class="mdtxt">自动加人</text>
			 	</view>
			 	<view class="block-tl-rt">
			 		<view class="block-tl-rt-more">
			 			<text class="mdtxt">工具使用教程</text>
			 			<view class="block-more more-color2">
			 				<uni-icon size="12" type="qianjin"></uni-icon>
			 			</view>
			 		</view>
			 	</view>
			 </view>
			 <!-- <view class="trend block-tl-color2">
			 	<view class="trend-icon">
			 		<uni-icon type="iconfontzhizuobiaozhun0247"></uni-icon>
			 	</view>
			 	<view class="trend-info">
			 		<view class="trend-info-tl">
			 			自动群内加人
			 		</view>
			 		<view class="trend-info-des">
			 			全自动智能加
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
			 </view> -->
			 <view class="tool-ls autocolor">
			 	<view class="tool-item">
			 		<view class="tool-item-box">
			 			<view class="tool-item-con">
			 				<view class="tool-item-icon block-tl-color4">
			 					<uni-icon type="zongxiangpingfen"></uni-icon>
			 				</view>
			 				<view class="tool-item-info">
			 					<view class="tool-item-tl">
			 						自动群内加人
			 					</view>
			 					<view class="tool-item-des">
			 						全自动智能加
			 					</view>
			 				</view>
			 			</view>
			 			<view class="tool-item-btn">
			 				最高每日+180人
			 			</view>
			 		</view>
			 	</view>
			 	<view class="tool-item">
			 		<view class="tool-item-box">
			 			<view class="tool-item-con">
			 				<view class="tool-item-icon block-tl-color4">
			 					<uni-icon type="hengxiangpingfen"></uni-icon>
			 				</view>
			 				<view class="tool-item-info">
			 					<view class="tool-item-tl">
			 						自动搜索加人
			 					</view>
			 					<view class="tool-item-des">
			 						自动搜索添加
			 					</view>
			 				</view>
			 			</view>
			 			<view class="tool-item-btn">
			 				每日自动加20人
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
			 						自动扫码加人
			 					</view>
			 					<view class="tool-item-des">
			 						自动批量扫码
			 					</view>
			 				</view>
			 			</view>
			 			<view class="tool-item-btn">
			 				每天可加20人
			 			</view>
			 		</view>
			 	</view>
			 	<view class="tool-item">
			 		<view class="tool-item-box">
			 			<view class="tool-item-con">
			 				<view class="tool-item-icon block-tl-color4">
			 					<uni-icon type="zhongbiao"></uni-icon>
			 				</view>
			 				<view class="tool-item-info">
			 					<view class="tool-item-tl">
			 						自动附近加人
			 					</view>
			 					<view class="tool-item-des">
			 						自动批量添加
			 					</view>
			 				</view>
			 			</view>
			 			<view class="tool-item-btn">
			 				每日可加30人
			 			</view>
			 		</view>
			 	</view>
				<view class="tool-item">
					<view class="tool-item-box">
						<view class="tool-item-con">
							<view class="tool-item-icon block-tl-color4">
								<uni-icon type="zhongbiao"></uni-icon>
							</view>
							<view class="tool-item-info">
								<view class="tool-item-tl">
									自动扫码加群
								</view>
								<view class="tool-item-des">
									批量扫码加群
								</view>
							</view>
						</view>
						<view class="tool-item-btn">
							每日可加30群
						</view>
					</view>
				</view>
				<view class="tool-item">
					<view class="tool-item-box">
						<view class="tool-item-con">
							<view class="tool-item-icon block-tl-color4">
								<uni-icon type="zhongbiao"></uni-icon>
							</view>
							<view class="tool-item-info">
								<view class="tool-item-tl">
									自动通过验证
								</view>
								<view class="tool-item-des">
									被加自动通过
								</view>
							</view>
						</view>
						<view class="tool-item-btn">
							每天不限次数
						</view>
					</view>
				</view>
			 </view>
			 </view>
			 <!-- 自动加人 end -->
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
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/weibi/weibi'
			})
		}
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
		white-space:nowrap;
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
	.tool-item-icon{
		flex: 0 0 80upx;
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
	
	/* 九宫格 */
	.uni-grid-9 {
		box-sizing: border-box;
		padding-top: 25upx;
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
		margin-top: 16upx;
		color: #626262;
	}
	
	.uni-grid-9-item-hover {
		background: rgba(0, 0, 0, 0.1);
	}
	
	.iconwp {
		width: 90upx;
		height: 90upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #007AFF;
		border-radius: 100%;
		margin: 0 auto;
		text-align: center;
		/* line-height: 90upx; */
	}
	
	.iconwp .uni-icon {
		font-size: 44upx;
		color: #fff;
	}
	.oneicon {
		background-image: linear-gradient(-45deg, #ff9a9e 0%, #ffbdbd 100%);
		box-shadow: 4upx 0 16upx rgba(255, 189, 189, .3);
	}
	
	.twoicon {
		background-image: linear-gradient(-45deg, #30D2BE 0%, #80f3e5 100%);
		box-shadow: 4upx 0 16upx rgba(128, 243, 229, .3);
	}
	
	.threeicon {
		background-image: linear-gradient(-45deg, #e7b65f 0%, #f1d199 100%);
		box-shadow: 4upx 0 16upx rgba(241, 109, 153, .3);
	}
	
	.fouricon {
		background-image: linear-gradient(-45deg, #21c7ef 0%, #70e3ff 100%);
		box-shadow: 4upx 0 16upx rgba(112, 227, 255, .3);
	}
	.autocolor .tool-item-btn{
		border-color: #e5e5e5;
		color: #b2b2b2;
	}
</style>
