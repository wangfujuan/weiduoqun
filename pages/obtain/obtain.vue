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
							<view class="obtain-box-btn" @click="show">
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
						<navigator hover-class="none" class="obtain-do-item" url="../income/income">
							<view class="obtain-do-con">
								<view class="obtain-do-con-tl">
									收益余额
								</view>
								<view class="obtain-do-con-info">
									<text>0.00</text>元
								</view>
							</view>
							<view class="obtain-do-icon center">
								<uni-icon color="#dddddd" type="qianjin"></uni-icon>
							</view>
						</navigator>
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
				</view>
				<view class="obtain-day b-line">
					<view class="obtain-day-tl">
						已坚持第 <text>0</text> 天
					</view>
					<view class="obtain-day-tips">
						坚持完成每日计划 送会员红包福利 老板收益稳步上涨
					</view>
				</view>
				<view class="share-ls">
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
											每次+5<uni-icon size="15" color="#ffa300" type="taojinbi"></uni-icon>
										</view>
									</view>
									<view class="share-item-md-sum-item center">
										<view class="share-item-md-sum-txt">
											老板+20<uni-icon size="15" color="#ffa300" type="taojinbi"></uni-icon>
										</view>
									</view>
								</view>
							</view>
							<view class="share-item-rt">
								<view class="share-item-rt-go" @click="shareCircle">
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
											每次+5<uni-icon size="15" color="#ffa300" type="taojinbi"></uni-icon>
										</view>
									</view>
									<view class="share-item-md-sum-item center">
										<view class="share-item-md-sum-txt">
											老板+20<uni-icon size="15" color="#ffa300" type="taojinbi"></uni-icon>
										</view>
									</view>
								</view>
							</view>
							<view class="share-item-rt">
								<view class="share-item-rt-go" @click="shareGroup">
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
											每次+5<uni-icon size="15" color="#ffa300" type="taojinbi"></uni-icon>
										</view>
									</view>
									<view class="share-item-md-sum-item center">
										<view class="share-item-md-sum-txt">
											老板+20<uni-icon size="15" color="#ffa300" type="taojinbi"></uni-icon>
										</view>
									</view>
								</view>
							</view>
							<view class="share-item-rt">
								<view class="share-item-rt-go" @click="sharePer">
									去完成
								</view>
								<view class="share-item-rt-day">
									今日：0/5
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- <view class="share-more center">
					更多奖励计划
					<uni-icon size="12" color="#44b549" type="qianjin"></uni-icon>
				</view> -->
			</view>
			<view class="share-will-more">
				更多奖励正在计划中，敬请关注～
			</view>
			<!-- 每日计划 end -->
			<!-- 收益模式 start -->
			<view class="white">
				<view class="block-tl b-line">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color3">
							<uni-icon type="shoucang-tianchong" color="#fff" size="12"></uni-icon>
						</view>
						<text class="mdtxt">收益模式</text>
					</view>
				</view>
				<view class="get-txt">
					只需分享 无需囤货 海量用户海量需求 开启躺赚模式
				</view>
				<view class="get-m-ls">
					<view class="get-m-item">
						<view class="tool-item-icon block-tl-color7">
							<uni-icon type="diqiuquanqiu" size="22" color="#fff"></uni-icon>
						</view>
						<view class="get-m-item-txt">
							分享好友注册
						</view>
						<view class="get-m-item-sub">
							您的奖励
						</view>
						<view class="get-m-item-bt">
							一级奖励1元，二级奖励0.5元
						</view>
					</view>
					<view class="get-m-item">
						<view class="tool-item-icon block-tl-color4">
							<uni-icon type="diqiuquanqiu" size="22" color="#fff"></uni-icon>
						</view>
						<view class="get-m-item-txt">
							好友充值消费
						</view>
						<view class="get-m-item-sub">
							您的奖励 <text>代理独享</text>
						</view>
						<view class="get-m-item-bt">
							一级返现40%，二级返现10%
						</view>
					</view>
				</view>
				<view class="get-sm-txt">
					*一旦邀请成功，一级和二级好友充值的所有消费，您都能获得返现
				</view>
			</view>
			<!-- 收益模式 end -->
			<!-- 收益预估 start -->
			<view class="white">
				<view class="block-tl b-line">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color3">
							<uni-icon type="likefill" size="13" color="#fff"></uni-icon>
						</view>
						<text class="mdtxt">收益预估</text>
					</view>
				</view>
				<view class="calc-wp">
					<view class="calc-tl">
						<uni-icon type="qiandai-tianchong" size="12" color="#e86a38"></uni-icon>
						<text>收益例子</text>
						（只邀请注册即可 假设每人每天邀请10人）
					</view>
					<view class="calc-line">
						1.每天邀请10名好友注册，注册奖励10人 × 1元 × 30元 = 300元
					</view>
					<view class="calc-line">
						2.10名好友中，假设有1名和您一样开通钻石代理，返现299元 × <text class="fontred">40%</text> × 30天 = 3600
					</view>
				</view>
				<view class="calc-wp">
					<view class="calc-tl">
						<uni-icon type="qiandai-tianchong" size="12" color="#e86a38"></uni-icon>
						<text>每月预估</text>
						（三级分销 无限裂变 持续躺赚）
					</view>
					<view class="calc-sum">
						300元+8400元+1500元+20940元 = <text class="fontred">31140元</text>
					</view>
					<view class="get-sm-txt">
						*以上收益以钻石代理一级返现40%，二级返现10%计算，仅供参考
					</view>
				</view>
			</view>
			<!-- 收益预估 end -->	
			<!-- 收益问题 start -->
			<view class="white">
				<view class="block-tl b-line">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color3">
							<uni-icon type="likefill" size="13" color="#fff"></uni-icon>
						</view>
						<text class="mdtxt">收益问题</text>
					</view>
				</view>
				<view class="calc-wp">
					<view class="calc-tl">
						<uni-icon type="qiandai-tianchong" size="12" color="#e86a38"></uni-icon>
						<text>邀请好友的说明</text>
					</view>
					<view class="calc-line">
						新用户
					</view>
					<view class="calc-line">
						所邀请
					</view>
				</view>
				<view class="calc-wp">
					<view class="calc-tl">
						<uni-icon type="qiandai-tianchong" size="12" color="#e86a38"></uni-icon>
						<text>什么是一级好友，什么是二级好友</text>
					</view>
					<view class="calc-line">
						您邀请
					</view>
				</view>
				<view class="calc-wp">
					<view class="calc-tl">
						<uni-icon type="qiandai-tianchong" size="12" color="#e86a38"></uni-icon>
						<text>不是钻石代理会有收益吗？</text>
					</view>
					<view class="calc-line">
						您邀请
					</view>
				</view>
				<view class="calc-wp">
					<view class="calc-tl">
						<uni-icon type="qiandai-tianchong" size="12" color="#e86a38"></uni-icon>
						<text>收益如何提现</text>
					</view>
					<view class="calc-line">
						您邀请
					</view>
				</view>
			</view>
			<!-- 收益问题 end -->	
			<navigator url="../service/service" hover-class="none">
				<view class="servicebtn">
					<uni-icon type="kefu" color="#44B549" size="14"></uni-icon>客服中心
				</view>
			</navigator>
		</view> 
		<view class="mask" v-show="showMask" @click="hide"></view>
		<!-- popup 分享 start-->	
		<view class="popup popup-middle" v-show="showMask">
			<view class="share-bt-wp">
				<view class="share-bt-item">
					<view class="share-bt-bg block-tl-color7">
						<uni-icon type="weixin"></uni-icon>
					</view>
					<text>微信好友</text>
				</view>
				<view class="share-bt-item">
					<view class="share-bt-bg block-tl-color7">
						<uni-icon type="pengyouquan"></uni-icon>
					</view>
					<text>朋友圈</text>
				</view>
				<view class="share-bt-item">
					<view class="share-bt-bg block-tl-color6">
						<uni-icon type="qq02"></uni-icon>
					</view>
					<text>QQ好友</text>
				</view>
				<view class="share-bt-item">
					<view class="share-bt-bg block-tl-color1">
						<uni-icon type="062qqkongjian"></uni-icon>
					</view>
					<text>QQ空间</text>
				</view>
				<view class="share-bt-item">
					<view class="share-bt-bg block-tl-color5">
						<uni-icon type="lianjie"></uni-icon>
					</view>
					<text>复制链接</text>
				</view>
			</view> 
			
			<view class="action-cancel" @click="hide">
				<uni-icon type="shachu-xue" size="18" color="#505050"></uni-icon>
			</view>
		</view>
		<!-- popup 分享 end -->
    </view>
</template>

<script>
    import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				showMask: false,
			}
		},
		components: {
			uniIcon
		},
		methods: {
			// 分享到群
			shareGroup: function(){
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 1,
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
				
				
			},
			// 分享到朋友圈
			shareCircle: function(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSenceTimeline",
				    type: 1,
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			// 分享到人
			sharePer: function(){
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 1,
					summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
				
			},
			show: function(e) {
				this.showMask = true
			},
			hide: function() {
				this.showMask = false
			},
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/weibi/weibi'
			})
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
	.share-ls{
		padding-bottom: 10upx;
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
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.share-item-md-sum-txt .uni-icon{
		margin-left: 10upx;
	}
	
	.share-will-more{
		text-align: center;
		color: #b2b2b2;
		font-size: 22upx;
		margin-bottom: 20upx;
	}
	.get-txt{
		color: #b28431;
		font-size: 24upx;
		text-align: center;
		padding: 20upx 0;
	}
	.get-m-ls{
		display: flex;
		flex-direction: row;
		padding: 0 10upx 20upx;
	}
	.get-m-item{
		flex: 1;
		border: 2upx solid #b29258;
		border-radius: 10upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 10upx;
		padding: 30upx 0 80upx;
		position: relative;
	}
	.get-m-item-txt{
		line-height: 1;
		margin: 20upx 0 10upx;
	}
	.get-m-item-sub{
		line-height: 1;
		font-size: 24upx;
		color: #B2B2B2;
	}
	.get-m-item-sub text{
		border: 2upx solid #b29258;
		background-color: #f5ecd8;
		color: #b28431;
		font-size: 20upx;
		border-radius: 6upx;
		padding: 0 6upx;
	}
	.get-m-item-bt{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #faf5ea;
		font-size: 22upx;
		text-align: center;
		border-top: 2upx solid #b29258;
		color: #b28431;
		height: 50upx;
		line-height: 50upx;
		border-radius: 0 0 10upx 10upx;
	}
	.get-sm-txt{
		font-size: 20upx;
		text-align: center;
		color: #B2B2B2;
		padding-bottom: 30upx;
	}
	.calc-wp{
		padding: 20upx;
	}
	.calc-tl{
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #b28431;
		font-size: 24upx;
		line-height: 1.6;
	}
	.calc-tl text{
		font-weight: 500;
		color: #333;
		padding-left: 6upx;
	}
	.calc-line{
		font-size: 24upx;
		color: #B2B2B2;
		line-height: 1.6;	
	}
	.fontred{
		color: #e86a38;
	}
	.calc-sum{
		color: #b28431;
		text-align: center;
		font-size: 24upx;
		margin: 10upx 0;
	}
	.servicebtn{
		height: 100upx;
		line-height: 100upx;
		background-color: #fff;
		color: #44B549;
		border-radius: 16upx;
		border: 2upx solid #44B549;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.servicebtn .uni-icon{
		margin-right: 10upx;
	}
	/* popup start */
	.mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}
	
	.popup {
		position: absolute;
		z-index: 999;
		background-color: #ffffff;
		-webkit-box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
	}
	
	.popup-middle {
		width: 100%;
		height: 350upx;
		/* border-radius: 16upx; */
		left: 50%;
		margin-left: -50%;
		bottom: 0;
		
	}
	.share-bt-wp{
		display: flex;
		flex-direction: row;
		padding: 40upx 20upx 40upx;
		position: relative;
	}
	.share-bt-item{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 24upx;
		line-height: 1;
	}
	.share-bt-bg{
		width: 100upx;
		height: 100upx;
		background-color: #000000;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		margin-bottom: 20upx;
	}
	.action-cancel{
		position: absolute;
		bottom: 40upx;
		left: 0;
		right: 0;
		text-align: center;
	}
</style>
