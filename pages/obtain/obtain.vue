<template>
    <view class="content">
		<view class="shadow"></view>
		<view class="content-pad notoppad">
			<view class="white">
				<view class="obtain-top">
					<view class="obtain-box">
						<view class="obtain-box-tl">
							收益<text class="obtain-money">0.00</text>元
						</view>
						<view class="obtain-box-btnls">
							<view class="obtain-box-btn">
								邀请好友
							</view>
							<navigator class="obtain-box-btn" hover-class="none" url="../withdraw/withdraw">
								收益提现
							</navigator>
						</view>
						<view class="obtain-expect">
							<view class="obtain-expect-item">
								本月预估：4876.00
							</view>
							<view class="">
								|
							</view>
							<view class="obtain-expect-item">
								累计提现： 0.00
							</view>
						</view>
					</view>
					<view class="obtain-boss">
						<uni-icon size="20" color="#a46c17" type="Spy"></uni-icon>
						<view class="obtain-boss-info">
							老板赚钱特权 每笔收益最高奖励50%
						</view>
						<view class="obtain-boss-open">
							开通
						</view>
					</view>
					<navigator hover-class="none" url="../willObtain/willObtain">
					<view class="obtain-led block-tl-color3">
						<view class="obtain-led-lf">
							<view class="obtain-led-tl center">
								<uni-icon size="18" color="#fff" type="qiandai-tianchong"></uni-icon>
								<view class="obtain-led-tl-txt">
									待领收益(错过)
								</view>
							</view>
							<view class="obtain-led-num">
								<text>718.00</text>元
							</view>
						</view>
						<view class="obtain-led-rt">
							<view class="obtain-led-detail">
								查看详情
								<uni-icon size="12" color="#fff" type="qianjin"></uni-icon>
							</view>
							<view class="obtain-led-sum">
								累计10笔收益
							</view>
						</view>
					</view>
					</navigator>
					<view class="obtain-do">
						<view class="obtain-do-item">
							<view class="obtain-do-con">
								<view class="obtain-do-con-tl">
									钱包余额
								</view>
								<view class="obtain-do-con-info">
									<text>0.00</text>元
								</view>
							</view>
							<view class="obtain-do-icon center">
								<uni-icon color="#dddddd" type="qianjin"></uni-icon>
							</view>
						</view>
						<navigator hover-class="none" class="obtain-do-item" url="../inviteList/inviteList">	
							<view class="obtain-do-con">
								<view class="obtain-do-con-tl">
									邀请记录
								</view>
								<view class="obtain-do-con-info">
									<text>10</text>人
								</view>
							</view>
							<view class="obtain-do-icon center">
								<uni-icon color="#dddddd" type="qianjin"></uni-icon>
							</view>
						</navigator>
					</view>
				</view>
			</view>
			<!-- 每日计划 start -->
			<view class="white">
				<view class="block-tl b-line">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color8">
							<uni-icon size="16" color="#fff" type="jihua"></uni-icon>	
						</view>
						<text class="mdtxt">每日计划</text>
					</view>
					<view class="block-tl-rt">
						<view class="block-tl-rt-more">
							<text class="mdtxt">更多</text>
							<view class="block-more more-color5">
								<uni-icon size="12" color="#fff" type="qianjin"></uni-icon>
							</view>
						</view>
					</view>
				</view>
				<view class="obtain-day b-line">
					<view class="obtain-day-tl">
						已坚持第 <text>0</text> 天
					</view>
					<view class="obtain-day-tips">
						坚持完成每日计划 送会员红包福利 老板收益稳步上涨
					</view>
				</view>
				<view class="share-ls b-line">
					<view class="share-item">
						<view class="share-item-lf center">
							<uni-icon size="30" color="#44b549" type="pengyouquan"></uni-icon>
						</view>
						<view class="share-item-con b-line">
							<view class="share-item-md">
								<view class="share-item-md-tl">
									分享2次朋友圈
								</view>
								<view class="share-item-md-des">
									早晚各一次，至少保留10小时
								</view>
								<view class="share-item-md-sum">
									<view class="share-item-md-sum-item center">
										<view class="share-item-md-sum-txt">
											每次+5
										</view>
										<uni-icon color="#e9526e" size="14" type="hua"></uni-icon>
									</view>
									<view class="share-item-md-sum-item center">
										<view class="share-item-md-sum-txt">
											老板+20
										</view>
										<uni-icon color="#e9526e" size="14" type="hua"></uni-icon>
									</view>
								</view>
							</view>
							<view class="share-item-rt">
								<view class="share-item-rt-go">
									去完成
								</view>
								<view class="share-item-rt-day">
									今日：0/5
								</view>
							</view>
						</view>
					</view>
					<view class="share-item">
						<view class="share-item-lf center">
							<uni-icon size="28" color="#44b549" type="weixin"></uni-icon>
						</view>
						<view class="share-item-con b-line">
							<view class="share-item-md">
								<view class="share-item-md-tl">
									分享5个微信群
								</view>
								<view class="share-item-md-des">
									要求50人以上的微信群
								</view>
								<view class="share-item-md-sum">
									<view class="share-item-md-sum-item center">
										<view class="share-item-md-sum-txt">
											每次+5
										</view>
										<uni-icon color="#e9526e" size="14" type="hua"></uni-icon>
									</view>
									<view class="share-item-md-sum-item center">
										<view class="share-item-md-sum-txt">
											老板+20
										</view>
										<uni-icon color="#e9526e" size="14" type="hua"></uni-icon>
									</view>
								</view>
							</view>
							<view class="share-item-rt">
								<view class="share-item-rt-go">
									去完成
								</view>
								<view class="share-item-rt-day">
									今日：0/5
								</view>
							</view>
						</view>
					</view>
					<view class="share-item">
						<view class="share-item-lf center">
							<uni-icon size="28" color="#44b549" type="qun"></uni-icon>
						</view>
						<view class="share-item-con">
							<view class="share-item-md">
								<view class="share-item-md-tl">
									分享5个好友
								</view>
								<view class="share-item-md-des">
									微商/电商/淘宝/金融/营销人群为佳
								</view>
								<view class="share-item-md-sum">
									<view class="share-item-md-sum-item center">
										<view class="share-item-md-sum-txt">
											每次+5
										</view>
										<uni-icon color="#e9526e" size="14" type="hua"></uni-icon>
									</view>
									<view class="share-item-md-sum-item center">
										<view class="share-item-md-sum-txt">
											老板+20
										</view>
										<uni-icon color="#e9526e" size="14" type="hua"></uni-icon>
									</view>
								</view>
							</view>
							<view class="share-item-rt">
								<view class="share-item-rt-go">
									去完成
								</view>
								<view class="share-item-rt-day">
									今日：0/5
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="share-more center">
					更多奖励计划
					<uni-icon size="12" color="#44b549" type="qianjin"></uni-icon>
				</view>
			</view>
			<!-- 每日计划 end -->
			<!-- 收益模式 start -->
			<view class="white">
				<view class="block-tl b-line">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color3">
							<!-- <uni-icon type="chanpin2"></uni-icon> -->
						</view>
						<text class="mdtxt">收益模式</text>
					</view>
					<view class="block-tl-rt">
						<view class="block-tl-rt-more">
							<text class="mdtxt">更多</text>
							<view class="block-more more-color1">
								<!-- <uni-icon type="qianjin"></uni-icon> -->
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 收益模式 end -->
			<!-- 代理特权 start -->
			<view class="white">
				<view class="block-tl b-line">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color3">
							<!-- <uni-icon type="chanpin2"></uni-icon> -->
						</view>
						<text class="mdtxt">代理特权</text>
					</view>
					<view class="block-tl-rt">
						<view class="block-tl-rt-more">
							<text class="mdtxt">更多</text>
							<view class="block-more more-color1">
								<!-- <uni-icon type="qianjin"></uni-icon> -->
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 代理特权 end -->	
			<view>客服中心</view>
		</view> 
		
    </view>
</template>

<script>
    import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				
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
	
	.notoppad {
		padding-top: 0;
	}
	
	.content {
		background-color: #f4f6fa;
	}
	
	.obtain-top {
		line-height: 1;
	}
	
	.obtain-box {
		/* height: 310upx; */
		background-image: linear-gradient(120deg, #b4b4b4 0%, #818181 100%);
		box-shadow: 4upx 0 16upx rgba(243, 167, 197, .3);
		border-radius: 16upx;
		color: #fff;
		text-align: center;
	}
	
	.obtain-box-tl {
		font-size: 24upx;
		padding-top: 50upx;
	}
	
	.obtain-box-tl text {
		font-size: 52upx;
	}
	
	.obtain-box-btnls {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 30upx 0;
	}
	
	.obtain-box-btn {
		width: 260upx;
		height: 64upx;
		background-image: linear-gradient(-45deg, #44b549 0%, #5dd962 100%);
		border-radius: 64upx;
		line-height: 64upx;
		text-align: center;
		margin: 0 10upx;	
	}
	
	.obtain-expect {
		display: flex;
		padding-bottom: 30upx;
		font-size: 24upx;
	}
	
	.obtain-expect-item {
		flex: 1;
	}
	
	.obtain-boss {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 20upx;
		border: 2upx solid #d8ae3d;
		height: 24upx;
		line-height: 24upx;
		padding: 30upx 20upx;
		color: #a46c17;
		border-radius: 10upx;
	}
	
	.obtain-boss-info {
		padding-left: 10upx;
	}
	
	.obtain-boss-open {
		position: absolute;
		right: 20upx;
		width: 110upx;
		height: 48upx;
		line-height: 48upx;
		background-image: linear-gradient(-45deg, #d9c085 0%, #b39a65 100%);;
		border-radius: 48upx;
		top: 18upx;
		color: #fff;
		text-align: center;
		font-size: 24upx;
	}
	
	.obtain-led {
		background-color: #007AFF;
		margin: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-radius: 10upx;
		padding: 30upx;
		color: #fff;
		font-size: 24upx;
		line-height: 1;
	}
	
	.obtain-led-tl {
		margin-bottom: 30upx;
		height: 32upx;
		/* line-height: 32upx; */
	}
	
	.obtain-led-tl-txt {
		margin-left: 5upx;
	}
	
	.obtain-led-num text {
		font-size: 30upx;
	}
	
	.obtain-led-detail {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 160upx;
		padding-left: 10upx;
		height: 48upx;
		line-height: 48upx;
		background-color: rgba(0, 0, 0, .1);
		border-radius: 48upx;
		margin-bottom: 20upx;
	}
	
	.obtain-do {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 10upx;
		margin: 20upx 0;
		line-height: 1;
	}
	
	.obtain-do-item {
		flex: 1;
		padding: 0 10upx;
		position: relative;
	}
	
	.obtain-do-icon {
		position: absolute;
		right: 20upx;
		top: 50%;
		margin-top: -38upx;
		width: 76upx;
		height: 76upx;
		border-radius: 100%;
		background-color: #f7f7f7;
	}
	
	.obtain-do-con {
		border: 2upx solid #F3F3F3;
		border-radius: 10upx;
		padding: 30upx;
		font-size: 24upx;
	}
	
	.obtain-do-con-tl {
		color: #a1a1a1;
		margin-bottom: 30upx;
	}
	
	.obtain-do-con-info {
		color: #A46C17;
	}
	
	.obtain-do-con-info text{
		font-size: 32upx;
	}
	
	.obtain-day {
		padding-bottom: 20upx;
	}
	
	.obtain-day-tl {
		text-align: center;
		font-weight: 500;
		padding: 20upx;
	}
	
	.obtain-day-tl text {
		color: #ffa300;
	}
	
	.obtain-day-tips {
		background-color: #fff8ea;
		color: #ffa300;
		height: 66upx;
		line-height: 66upx;
		font-size: 24upx;
		margin: 0 50upx;
		border-radius: 10upx;
		text-align: center;
	}
	
	.share-item {
		padding: 30upx 20upx 0;
		display: flex;
		flex-direction: row;
		line-height: 1;
	}
	
	.share-item-lf {
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		background-color: #e5f8ed;
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
	
	.share-item-md-sum-item {
		margin-right: 20upx;
		color: #ffa300;
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
