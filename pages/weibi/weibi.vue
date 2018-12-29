<template>
	<view class="content">
		<view class="wb-top">
			<view class="wb-top-sign">
				<view class="wb-top-sign-lf">
					签到提醒(开)
				</view>
				<view class="wb-top-sign-rt">
					奖励规则
				</view>
			</view>
			<view class="wb-top-tl">
				0
			</view>
			<view class="wb-sign">
				签到+5
			</view>
			<view class="wb-sign-info">
				已连续签到1天，第30天送黄金会员哦～
			</view>
			<view class="grace-steps">
				<view class="step">
					<view class="step-circle">3</view>
					<view class="step-content">
						+10
					</view>
				</view>
				<view class="step-line"></view>
				<view class="step current">
					<view class="step-circle">7</view>
					<view class="step-content">
						+50
					</view>
				</view>
				<view class="step-line"></view>
				<view class="step">
					<view class="step-circle">15</view>
					<view class="step-content">
						+100
					</view>
				</view>
				<view class="step-line"></view>
				<view class="step">
					<view class="step-circle">30</view>
					<view class="step-content">
						周会员
					</view>
				</view>
				<view class="step-line"></view>
				<view class="step">
					<view class="step-circle">45</view>
					<view class="step-content">
						+100
					</view>
				</view>
			</view>
		</view>
		<view class="wb-get">
			<view class="wb-get-item center">
				<uni-icon size="20" color="#ffa300" type="choujiang"></uni-icon>
				<text>每日抽奖</text>
			</view>
			<view class="wb-get-line"></view>
			<view class="wb-get-item center">
				<uni-icon size="24" color="#ffa300" type="youhuiquan01"></uni-icon>
				<text>会员领福利</text>
			</view>
		</view>
		<view class="line20"></view>
		<image class="wbbanner" src="../../static/wbbanner.jpg" mode="widthFix"></image>
		<view class="line20"></view>
		<view class="wb-earn">
			<view class="wb-earn-tl b-line">
				快速赚微币
			</view>
			<view class="share-ls b-line">
				<view class="share-item">
					<view class="share-item-lf block-tl-color2 center">
						<uni-icon size="22" color="#fff" type="dingwei"></uni-icon>
					</view>
					<view class="share-item-con b-line">
						<view class="share-item-md">
							<view class="share-item-md-tl">
								精准人脉 <view class="share-item-md-sum-item center"><text class="share-item-md-sum-txt">每次+10</text> <uni-icon size="13" color="#e9526e" type="hua"></uni-icon></view>
							</view>
							<view class="share-item-md-des">
								导入通讯录并完成加粉，每天奖励一次
							</view>
						</view>
						<view class="share-item-rt">
							<view class="share-item-rt-go">
								赚微币
							</view>
						</view>
					</view>
				</view>
				<view class="share-item">
					<view class="share-item-lf block-tl-color3 center">
						<uni-icon size="22" color="#fff" type="licaijingxuan"></uni-icon>
					</view>
					<view class="share-item-con b-line">
						<view class="share-item-md">
							<view class="share-item-md-tl">
								精选客源 <view class="share-item-md-sum-item center"><text class="share-item-md-sum-txt">每次+10</text> <uni-icon size="13" color="#e9526e" type="hua"></uni-icon></view>
							</view>
							<view class="share-item-md-des">
								导入通讯录并完成加粉，每天奖励一次
							</view>
						</view>
						<view class="share-item-rt">
							<view class="share-item-rt-go">
								赚微币
							</view>
						</view>
					</view>
				</view>
				<view class="share-item">
					<view class="share-item-lf block-tl-color7 center">
						<uni-icon size="22" color="#fff" type="fenxiang"></uni-icon>
					</view>
					<view class="share-item-con b-line">
						<view class="share-item-md">
							<view class="share-item-md-tl">
								每日分享 <view class="share-item-md-sum-item center"><text class="share-item-md-sum-txt">每次+10</text> <uni-icon size="13" color="#e9526e" type="hua"></uni-icon></view>
							</view>
							<view class="share-item-md-des">
								分享邀请图片到微信群，每天+5
							</view>
						</view>
						<view class="share-item-rt">
							<view class="share-item-rt-go">
								赚微币
							</view>
						</view>
					</view>
				</view>
				<view class="share-item">
					<view class="share-item-lf block-tl-color6 center">
						<uni-icon size="22" color="#fff" type="huxiangganxingqu"></uni-icon>
					</view>
					<view class="share-item-con b-line">
						<view class="share-item-md">
							<view class="share-item-md-tl">
								名片互粉 <view class="share-item-md-sum-item center"><text class="share-item-md-sum-txt">每次+10</text> <uni-icon size="13" color="#e9526e" type="hua"></uni-icon></view>
							</view>
							<view class="share-item-md-des">
								保存10张名片二维码，并扫码加好友
							</view>
						</view>
						<view class="share-item-rt">
							<view class="share-item-rt-go">
								赚微币
							</view>
						</view>
					</view>
				</view>
				<view class="share-item">
					<view class="share-item-lf block-tl-color5 center">
						<uni-icon size="22" color="#fff" type="qunjiaoyi"></uni-icon>
					</view>
					<view class="share-item-con b-line">
						<view class="share-item-md">
							<view class="share-item-md-tl">
								免费抽奖 <view class="share-item-md-sum-item center"><text class="share-item-md-sum-txt">每次+5</text> <uni-icon size="13" color="#e9526e" type="hua"></uni-icon></view>
							</view>
							<view class="share-item-md-des">
								今日免费抽奖，每天完成抽奖3次
							</view>
						</view>
						<view class="share-item-rt">
							<view class="share-item-rt-go">
								赚微币
							</view>
						</view>
					</view>
				</view>
				<view class="share-item">
					<view class="share-item-lf block-tl-color4 center">
						<uni-icon size="22" color="#fff" type="gerenxinxi"></uni-icon>
					</view>
					<view class="share-item-con b-line">
						<view class="share-item-md">
							<view class="share-item-md-tl">
								完善资料 <view class="share-item-md-sum-item center"><text class="share-item-md-sum-txt">首次+20</text> <uni-icon size="13" color="#e9526e" type="hua"></uni-icon></view>
							</view>
							<view class="share-item-md-des">
								在个人中心完善个人资料，限做一次
							</view>
						</view>
						<view class="share-item-rt">
							<view class="share-item-rt-go">
								赚微币
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="share-more center">
				免费获取更多小红花
				<uni-icon size="12" color="#44b549" type="qianjin"></uni-icon>
			</view>
		</view>
		<view class="submitbtn-wp">
			<navigator hover-class="none" url="../weibiRecharge/weibiRecharge">
				<view class="block-tl-color8 submitbtn">充值微币</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	export default {
		data() {
			return {
				
			};
		},
		components: {
			uniIcon
		},
	}
</script>

<style>
	.content{
		padding-bottom: 150upx;
	}
	.line20{
		height: 20upx;
		background-color: #F4F6FA;
	}
	.wbbanner{
		width: 100%;
		height: 180upx;
	}
	.wb-top{
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #fff;
		line-height: 1;
		padding-bottom: 60upx;
		background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
	}
	.wb-top-sign{
		padding: 20upx 0 10upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 22upx;
	}
	.wb-top-sign-lf{
		padding-left: 20upx;
	}
	.wb-top-sign-rt{
		margin-right: 20upx;
		background-color: rgba(0,0,0,.2);
		padding: 8upx 10upx;
		border-radius: 8upx;
		
	}
	.wb-top-tl{
		font-size: 60upx;
		padding-bottom: 35upx;
	}
	.wb-sign{
		width: 240upx;
		height: 60upx;
		line-height: 60upx;
		background-color: #e9526e;
		border-radius: 60upx;
		text-align: center;
	}
	.wb-sign-info{
		font-size: 22upx;
		margin-top: 16upx;
	}
	.grace-steps{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 20upx;
	}
	.step{
		position: relative;
		width: 55upx;
		height: 55upx;
		border-radius: 100%;	
		text-align: center;
		line-height: 55upx;
		border: 2upx solid #fff;
		font-size: 24upx;
	}
	.step-content{
		position: absolute;
		font-size: 20upx;
		bottom: -50upx;
		left: -20upx;
		right: -20upx;
		text-align: center;
	}
	
	.step-line{
		height: 2upx;
		background-color: rgba(255,255,255,.3);
		width: 66upx;
		margin: 0 12upx 0 6upx;
		position: relative;
	}
	.step-line::after{
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border: 6upx solid rgba(255,255,255,.3);
		border-color: transparent transparent transparent rgba(255,255,255,.3);
		right: -12upx;
		top: -4upx;	
	}
	.wb-get{
		display: flex;
		flex-direction: row;
		height: 100upx;
		justify-content: center;
		align-items: center;
	}
	.wb-get-item{
		flex: 1;
		text-align: center;
		color: #505050;
	}
	.wb-get-item text{
		margin-left: 10upx;
	}
	.wb-get-line{
		width: 1px;
		height: 200%;
		background-color: #e5e5e5;
		-webkit-transform-origin: 0 0;
		-ms-transform-origin: 0 0;
		transform-origin: 0 50%;
		-webkit-transform: scaleY(0.5);
		-ms-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	.wb-earn{
		padding: 0 30upx;
	}
	.wb-earn-tl{
		line-height: 1;
		padding: 48upx 0 20upx;
		text-align: center;
		font-weight: 500;
		font-size: 30upx;
	}
	.share-item {
		padding-top: 30upx;
		display: flex;
		flex-direction: row;
		line-height: 1;
	}
	
	.share-item-lf {
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		/* background-color: #e5f8ed; */
	}
	
	.share-item-con {
		flex: 1;
		padding-left: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 20upx;
	}
	
	.share-item-md-des {
		font-size: 24upx;
		color: #b1b1b1;
		margin: 20upx 0;
	}
	
	.share-item-md-sum {
		display: flex;
		flex-direction: row;
		font-size: 26upx;
	}
	
	.share-item-md-tl{
		display: flex;
		flex-direction: row;
	}
	
	.share-item-md-sum-item {
		margin-right: 20upx;
		color: #ffa300;
		margin-left: 20upx;
		font-size: 22upx;
	}
	
	.share-item-rt-go {
		font-size: 24upx;
		height: 48upx;
		line-height: 48upx;
		width: 120upx;
		text-align: center;
		background: #e9526e;
		color: #fff;
		border-radius: 10upx;
		margin-bottom: 16upx;
	}
	
	.share-item-rt-day {
		font-size: 24upx;
		color: #a1a1a1;
	}
	
	.share-more {
		padding: 35upx 0;
		text-align: center;
		font-size: 24upx;
		color: #44b549;
	}
	
	.share-item-md-sum-txt {
		margin-right: 10upx;
	}
</style>
