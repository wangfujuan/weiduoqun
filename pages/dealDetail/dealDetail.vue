<template>
	<view class="content">
		<view class="content-pad">
			<view class="white">
				<view class="wx-item">
					<view class="wx-item-md">
						<navigator class="avatar-wp" hover-class="none" url="../memberindex/memberindex">
							<view class="avatar-vip">
								<uni-icon type="zuanshi" size="9"></uni-icon>超级会员
							</view>
							<image class="avatar-100" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
						</navigator>
						<view class="wx-item-con">
							<view class="wx-item-tl">
								<text class="mdtxt">妮妮小宝贝</text>
							</view>
							<view class="wx-item-wx">
								微信好：jingjingapp <view class="copy">复制</view>
							</view>
						</view>	
					</view>
					<view class="wx-item-rt" @click="show" data-position="middle">
						<uni-icon type="tianjia" size="12" color="#44B549"></uni-icon>加群主
					</view>
				</view>
			</view>
			<view class="white">
				<view class="deal-tl">
					<view class="deal-tl-lf">
						<text class="fontred smfont">¥</text><text class="fontred bgfont">239</text>交易ID：<text class="fontred">432222</text>
					</view>
					<view class="detail-tips-rt">
						更新：12-14
					</view>
				</view>
				<view class="wxgc-title">
					<view class="wxgc-title-txt">
						北京吃喝玩乐群<text class="ding">顶</text><text class="truetag">客服担保</text>
					</view>
					<view class="block-tl-rt">
						<navigator url="../report/report" hover-class="none" class="block-tl-rt-item">							
							<uni-icon type="jubao" size="13"></uni-icon>
							<text class="mdtxt">举报</text>
						</navigator>
						<view class="block-tl-rt-item">
							<uni-icon type="fenxiang" size="13"></uni-icon>							
							<text class="mdtxt">分享</text>
						</view>
					</view>
				</view>
				<view class="wxgc-sub-title">
					<view class="wxgc-sub-item">
						关注 1209
					</view>
					<view class="wxgc-sub-sm">
						时尚交友
					</view>
					<view class="wxgc-sub-sm wxgc-sub-r">
						广东东莞
					</view>
				</view>
				<view class="pageturn">
					<uni-icon type="houtui1" size="30" color="#b2b2b2"></uni-icon>
					<image class="wxgc-code" src="../../static/me-code.png" mode="widthFix"></image>
					<uni-icon type="qianjin1" size="30" color="#b2b2b2"></uni-icon>
				</view>
				
				<view class="warning b-line">
					注意防骗，请勿轻信他人请勿轻易转账给对方
				</view>
				<view class="b-line">
					<view class="user-use center">
						使用教程 <text class="user-use-down"></text>
					</view>
					<view class="user-use-info">
						<view class="user-use-line">
							1、选择您要添加的好友或者微信群的二维码，点击保存二维码到相册
						</view>
						<view class="user-use-line">
							2、即可批量快速扫码加好友
						</view>
						<view class="user-use-line">
							3、详细了解<navigator class="user-use-blue" url="">《积分规则》</navigator>
						</view>
					</view>	
					<view class="user-use-info">
						<view class="user-use-tl">
							群介绍 <view class="user-use-tag">北京 北京</view>
						</view>
						<view class="">
							香港海港城最全母婴店推荐
						</view>
					</view>
				</view>				
			</view>
			<view class="white">
				<view class="block-tl">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color3">
							<uni-icon type="geren2" color="#fff" size="12"></uni-icon>
						</view>
						<text class="mdtxt">热门微信群推荐</text>
					</view>
				</view>
				<view class="wx-item b-line">
					<navigator class="wx-item-md" hover-class="none" url="../wxgroupcard/wxgroupcard">
						<view class="avatar-wp">
							<view class="avatar-vip">
								<uni-icon type="huiyuan" size="12"></uni-icon>会员
							</view>
							<image class="avatar-100" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
						</view>	
						<view class="wx-item-con">
							<view class="wx-item-tl">
								<text class="ding">顶</text><text class="mdtxt">妮妮小宝贝</text>
							</view>
							<view class="wx-item-wx">
								进群加群主，不加秒踢
							</view>
						</view>	
					</navigator>
				</view>
				<view class="wx-item b-line">
					<navigator class="wx-item-md" hover-class="none" url="../wxgroupcard/wxgroupcard">
						<view class="avatar-wp">
							<view class="avatar-vip">
								<uni-icon type="huiyuan" size="12"></uni-icon>会员
							</view>
							<image class="avatar-100" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
						</view>	
						<view class="wx-item-con">
							<view class="wx-item-tl">
								<text class="mdtxt">妮妮小宝贝</text>
							</view>
							<view class="wx-item-wx">
								进群加群主，不加秒踢
							</view>
						</view>	
					</navigator>
				</view>
				<view class="wx-item">
					<navigator class="wx-item-md" hover-class="none" url="../wxgroupcard/wxgroupcard">
						<view class="avatar-wp">
							<view class="avatar-vip">
								<uni-icon type="huiyuan" size="12"></uni-icon>会员
							</view>
							<image class="avatar-100" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
						</view>	
						<view class="wx-item-con">
							<view class="wx-item-tl">
								<text class="mdtxt">妮妮小宝贝</text>
							</view>
							<view class="wx-item-wx">
								进群加群主，不加秒踢
							</view>
						</view>	
					</navigator>
				</view>
			</view>
			<view class="white">
				<view class="block-tl">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color2">
							<uni-icon type="geren2" color="#fff" size="12"></uni-icon>
						</view>
						<text class="mdtxt">热门微信群分类</text>
					</view>
				</view>
				<view class="hot-category-ls">
					<view class="hot-category-item">
						<view class="hot-category-con b-line">
							红包群 <uni-icon type="qianjin" size="12" color="#bbb"></uni-icon>
						</view>
					</view>
					<view class="hot-category-item">
						<view class="hot-category-con b-line">
							微信福利群 <uni-icon type="qianjin" size="12" color="#bbb"></uni-icon>
						</view>
					</view>
					<view class="hot-category-item">
						<view class="hot-category-con b-line">
							创业群 <uni-icon type="qianjin" size="12" color="#bbb"></uni-icon>
						</view>
					</view>
					<view class="hot-category-item">
						<view class="hot-category-con b-line">
							兼职群 <uni-icon type="qianjin" size="12" color="#bbb"></uni-icon>
						</view>
					</view>
					<view class="hot-category-item">
						<view class="hot-category-con b-line">
							红包群 <uni-icon type="qianjin" size="12" color="#bbb"></uni-icon>
						</view>
					</view>
					<view class="hot-category-item">
						<view class="hot-category-con b-line">
							微信福利群 <uni-icon type="qianjin" size="12" color="#bbb"></uni-icon>
						</view>
					</view>
					<view class="hot-category-item">
						<view class="hot-category-con b-line">
							创业群 <uni-icon type="qianjin" size="12" color="#bbb"></uni-icon>
						</view>
					</view>
					<view class="hot-category-item">
						<view class="hot-category-con b-line">
							兼职群 <uni-icon type="qianjin" size="12" color="#bbb"></uni-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="wxgroup-fix">
			<view class="fixed-bt-item" @click="goHome">
				<uni-icon type="iconzhuyenor" size="20"></uni-icon>
				<text>主页</text>
			</view>
			<navigator class="fixed-bt-item" url="../service/service" hover-class="none">
				<uni-icon type="kefu" size="20"></uni-icon>
				<text>客服</text>
			</navigator>
			<view class="fixed-bt-item">
				<uni-icon type="shoucang1" size="20"></uni-icon>
				<text>收藏</text>
			</view>
			<view class="wxgroup-btn-wp">
				<view class="wxgroup-btn-lf center">
					添加微信群
				</view>
				<view class="wxgroup-btn-rt center">
					客服担保购买
				</view>
			</view>
		</view>
		<!-- popup 加群 start-->	
		<view class="mask" v-show="showMask" @click="hide"></view>
		<view class="popup popup-middle" v-show="showState.middle">
			<view class="kf-tl b-line">
				添加群
				<uni-icon type="shachu-xue" size="16" @click="hide"></uni-icon>
			</view>
			<view class="add-line">
				<uni-icon type="weixin" color="#44B549" size="22"></uni-icon>
				<view class="add-info">jinglingapp</view>
				<view class="add-copy">复制</view>
			</view>
			<view class="add-line">
				<uni-icon type="ai-phone" color="#e9ce59" size="22"></uni-icon>
				<view class="add-info">15010200333</view>
				<view class="add-copy">复制</view>
			</view>
			<image class="kf-con-code" src="../../static/code.jpg" mode="widthFix"></image>
			<view class="kf-con-info">
				扫一扫 或者 点击图片保存到手机相册
			</view>
			<view class="wx-btn-ls">
				<view class="kf-btn block-tl-color8 center">
					<uni-icon type="weixin" size="18"></uni-icon>发送到微信
				</view>
				<view class="kf-btn center wx-btn-default">
					<uni-icon type="tongxunlu" size="18"></uni-icon>导入通讯录
				</view>
			</view>
		</view>
		<!-- popup 加群 end-->
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				showMask: false,
				showState: {
					top: false,
					middle: false,
					bottom: false,
				},
				activePop: 'middle'
			};
		},
		components: {
			uniIcon
		},
		methods: {
			show: function(e) {
				var pos = e.currentTarget.dataset.position;
				switch (pos) {
					case 'top':
						this.activePop = 'top'
						break
					case 'bottom':
						this.activePop = 'bottom'
						break
					case 'bottom1':
						this.activePop = 'bottom1'
						break
					default:
						this.activePop = 'middle'
				}
				this.showMask = true
				this.showState[this.activePop] = true
			},
			hide: function() {
				this.showMask = false
				this.showState[this.activePop] = false
			},
			goHome: function(){
				uni.switchTab({
					url: '/pages/home/home'
				})
			}
		}
	}
</script>

<style>
	.content{
		background-color: #F4F6FA;
		padding-bottom: 120upx;
	}
	.block-tl-rt-item .uni-icon{
		margin-right: 4upx;
	}
	.wx-item{
		height: 130upx;
		background-color: #fff;
		padding: 20upx;
		border-radius: 16upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.wx-item-md{
		flex: 1;
		display: flex;
		flex-direction: row;
	}
	.wx-item-rt{
		font-size: 24upx;
		height: 46upx;
		line-height: 46upx;
		color: #44B549;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border: 2upx solid #44B549;
		border-radius: 6upx;
		padding: 0 10upx;
	}
	.wx-item-rt .uni-icon{
		margin-right: 5upx;
	}
	.avatar-wp{
		width: 120upx;
		height: 120upx;
		flex: 0 0 120upx;
		border-radius: 6upx;
		background-color: #f7d46b;
		padding: 4upx;
		position: relative;
		background-image: linear-gradient(to bottom, #d9c085 0%, #b39a65 100%);
	}
	.avatar-100{
		width: 120upx;
		height: 120upx;
		border-radius: 6upx;
	}
	.wx-item-con{
		flex: 1;
		padding-left: 20upx;
	}
	.wx-item-tl{
		font-weight: 500;
		font-size: 30upx;
	}
	.wx-item-wx{
		margin-top: 10upx;
		color: #888888;
	}
	.ding{
		width: 40upx;
		height: 40upx;
		line-height: 40upx;
	}
	.avatar-vip{
		position: absolute;
		bottom: 0;
		background-color: #b39a65;
		color: #fff;
		font-size: 18upx;
		border-radius: 4upx;
		width: 100upx;
		text-align: center;
		left: 50%;
		margin-left: -50upx;
	}
	.copy{
		font-size: 22upx;
		border: 2upx solid #888888;
		display: inline-block;
		padding: 0 15upx;
		height: 34upx;
		line-height: 34upx;
		border-radius: 34upx;
	}
	.wxgc-title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 16upx 20upx 26upx;	
		font-size: 32upx;
	}
	.wxgc-sub-title{
		display: flex;
		font-size: 22upx;
		color: #656565;
		padding: 0 20upx;
		line-height: 1;
	}
	.wxgc-sub-item{
		flex: 1;
	}
	.wxgc-sub-sm{
		flex: 1;
		/* padding-left: 40upx; */
		text-align: center;
	}
	.wxgc-code{
		margin: 0 auto;
		display: block;
		width: 100%;
	}
	.warning{
		color: #e74c2d;
		font-size: 24upx;
		text-align: center;
		line-height: 1;
		padding-bottom: 50upx;
	}
	.user-use{
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		color: #8A8A8A;
	}
	.user-use-down{
		width: 0;
		height: 0;
		border: 10upx solid #8a8a8a;
		border-color: #8a8a8a transparent transparent;
		margin-top: 10upx;
		margin-left: 10upx;
	}
	.user-use-info{
		padding: 0 20upx 40upx;
	}
	.user-use-line{
		color: #8A8A8A;
		font-size: 26upx;
	}
	.user-use-blue{
		display: inline-block;
		color: #5c7294;
	}
	.user-use-tl{
		display: flex;
		flex-direction: row;
		margin-bottom: 10upx;
	}
	.user-use-tag{
		border: 2upx solid #44B549;
		color: #44B549;
		font-size: 20upx;
		padding: 0 15upx;
		height: 34upx;
		line-height: 34upx;
		border-radius: 6upx;
		margin-left: 20upx;
	}
	.hot-category-ls{
		display: flex;
		padding: 0 20upx 20upx;
		color: #8a8a8a;
		flex-wrap: wrap;
	}
	.hot-category-item{
		flex: 0 0 50%;	
		margin-bottom: 10upx;
	}
	.hot-category-con{
		margin-right: 40upx;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 70upx;
		line-height: 70upx;
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
	.masktop{
		position: fixed;
		z-index: 998;
		top: 180upx;
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
		width: 620upx;
		height: 720upx;
		border-radius: 10upx;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}
	/* popup end */
	.kf-tl {
		padding: 0 20upx;
		height: 80upx;
		color: #666;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.kf-con-wx{
		display: block;
		width: 400upx;
		text-align: center;
		border: 4upx dashed #c2c2c2;
		margin: 50upx auto 20upx;
		height: 70upx;
		line-height: 70upx;
		border-radius: 16upx;
		color: #999;
	}
	.kf-con-info{
		text-align: center;
		font-size: 22upx;
		color: #A1A1A1;
	}
	.kf-con-code{
		width: 240upx;
		height: 240upx;
		margin: 30upx auto 20upx;
		display: block;
	}
	.wx-btn-ls{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 20upx;
	}
	.kf-btn{
		height: 76upx;
		line-height: 76upx;
		width: 250upx;
		margin: 30upx auto;
		border-radius: 76upx;
		color: #fff;
		text-align: center;
	}
	.wx-btn-default{
		border: 2upx solid #E5E5E5;
		color: #505050;
	}
	.kf-btn .uni-icon{
		margin-right: 10upx;
	}
	.add-line{
		display: flex;
		flex-direction: row;
		padding: 0 50upx;
		align-items: center;
		margin-top: 20upx;
	}
	.add-copy{
		border: 2upx solid #e5e5e5;
		height: 60upx;
		line-height: 60upx;
		width: 120upx;
		text-align: center;
		border-radius: 10upx;
		font-size: 26upx;
	}
	.add-info{
		flex: 1;
		padding-left: 20upx;
		color: #8a8a8a;
	}
	.wxgroup-fix{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 30upx;
		height: 120upx;
		margin: 0 20upx;
		background-color: rgba(255,255,255,.8);
		border: 2upx solid #f0f0f0;
		border-radius: 15upx;
		display: flex;
		padding: 0 20upx;
		align-items: center;
		justify-content: space-between;
		color: #8A8A8A;
	}
	.wxgroup-btn-wp{
		display: flex;
		flex: 0 0 420upx;
		flex-direction: row;
		height: 76upx;
		line-height: 76upx;
		color: #fff;
		font-size: 24upx;
		text-align: center;
	}
	.wxgroup-btn-wp .uni-icon{
		margin-right: 10upx;	
	}
	.wxgroup-btn-lf{
		background-color: #44c853;
		border-radius: 76upx 0 0 76upx;	
		flex: 1;
	}
	.wxgroup-btn-rt{
		background-color: #44B549;
		border-radius: 0 76upx 76upx 0;
		flex: 1;
	}
	.deal-ls{
		display: flex;
		flex-direction: row;
		flex: 1;
	}
	.deal-item{
		flex: 1;
		display: flex;
		flex-direction: column;
		font-size: 20upx;
		align-items: center;
		justify-content: center;
		flex: 0 0 70upx;
	}
	.deal-item text{
		margin-top: 6upx;
	}
	.pageturn{
		display: flex;
		align-items: center;
	}
	.deal-tl{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 22upx;
		padding: 20upx 20upx 0;
		color: #a1a1a1;
		align-items: center;
	}
	.deal-tl-lf{
		
	}
	.fontred{
		color: #e74c2d;
	}
	.smfont{
		font-size: 30;
	}
	.bgfont{
		font-size: 36upx;
		margin-right: 20upx;
	}
	.wxgc-sub-r{
		text-align: right;
	}
	.wxgc-title-txt{
		display: flex;
		align-items: center;
		flex-direction: row;
	}
	.truetag{
		color: #44B549;
		font-weight: normal;
		font-size: 24upx;
		height: 36upx;
		line-height: 36upx;
		padding: 0 8upx;
		display: inline-block;
		border: 2upx solid #44B549;
		border-radius: 6upx;
		transform: scale(0.75);
		transform-origin: 0 50%;
	}
	.fixed-bt-item{
		flex: 0 0 70upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #535353;
		font-size: 24upx;
	}
</style>
