<template>
    <view class="content">
        <view class="me-top">
			<view class="me-login">
				<image class="avatar" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
				<view class="me-login-status">
					<!-- <button class="me-login-tl" v-if="!hasLogin" @tap="bindLogin">登录/注册</button> -->
					<!-- <button class="me-login-tl" v-if="hasLogin" @tap="bindLogout">退出登录</button> -->
					<view class="me-login-tl" v-if="!hasLogin" @tap="bindLogin">
						登录/注册
					</view>
					<view class="me-login-des">
						登录后可使用更多功能
						<navigator class="edituser" url="../meedit/meedit">修改资料 <view class="uni-icon uni-icon-qianjin"></view></navigator>
					</view>
				</view>
			</view>	
        </view>
		<view class="content-pad">
			<view class="white">
				<view class="user-get">
					<navigator class="user-get-item" url="../weibi/weibi" hover-class="none">
						<view class="user-get-item-sum">
							<text>20</text> 个
						</view>
						<view class="user-get-item-info">
							我的微币
						</view>				
					</navigator>
					<view class="user-get-item" @click="toObtain">
						<view class="user-get-item-sum">
							<text>18.00</text> 元
						</view>
						<view class="user-get-item-info">
							收益余额
						</view>
					</view>
					<navigator hover-class="none" url="../weibiRecharge/weibiRecharge" class="user-get-charge">
						<view class="uni-icon uni-icon-wodeqianbao1"></view>
						<view class="user-get-item-info">
							马上充值
						</view>
					</navigator>
				</view>
			</view>
			<view class="white">
				<navigator class="member-ls" url="../weibiRecharge/weibiRecharge" hover-class="none">
					<view class="member-item" >
						<view class="member-item-lf">
							<view class="member-item-lf-tl">
								<uni-icon type="zuanshi" size="13" color="#eb6644"></uni-icon>
								<view class="mdtxt">
									钻石会员
								</view>
								<view class="noopen">
									未开通
								</view>
							</view>
							<view class="member-item-lf-time">
								终身代理限时3折
							</view>
						</view>
					</view>
					<view class="line"></view>
					<view class="member-info">
						<view class="member-info-lf">
							<view>
								开通钻石代理 享海量权限
							</view>
							<view class="member-info-txt">
								分享累计最高赚提成50%
							</view>
						</view>
						<view class="member-info-rt">
							<view class="member-info-gd">
								钻石代理
							</view>
							<uni-icon type="qianjin" color="#a8a8a8" size="12"></uni-icon>
						</view>
					</view>
					<!-- <view class="member-item">
						<view class="member-item-lf">
							<view class="member-item-lf-tl">
								<view class="uni-icon uni-icon-huiyuan1"></view>
								<view class="noopen-tl">
									钻石代理
								</view>
								<view class="noopen">
									未开通
								</view>
							</view>
							<view class="member-item-lf-time share">
								分享就能赚钱
							</view>
						</view>
						<view class="member-item-rt">
							开 通
						</view>
					</view> -->
				</navigator>
			</view>
			<!-- 我的名片 start -->
			<view class="white">
				<view class="user-tl">
					我的名片
				</view>
				<view class="user-ls">
					<navigator hover-class="none" url="../card/card?currentTab=0" class="user-item">
						<view class="uni-icon color1 uni-icon-weixinqun"></view>
						<view class="user-item-info">微信群</view>
					</navigator>
					<navigator hover-class="none" url="../card/card?currentTab=0" class="user-item">
						<view class="uni-icon color2 uni-icon-qqqun"></view>
						<view class="user-item-info">QQ群</view>
					</navigator>
					<navigator class="user-item" hover-class="none" url="../card/card?currentTab=1">
						<view class="uni-icon color3 uni-icon-gerenweixin"></view>
						<view class="user-item-info">个人微信</view>
					</navigator>
					<navigator class="user-item" hover-class="none" url="../card/card?currentTab=1">
						<view class="uni-icon color4 uni-icon-qqqun"></view>
						<view class="user-item-info">个人QQ</view>				
					</navigator>
				</view>
			</view>
			<!-- 我的名片 end -->
			<!-- 我的发布 start -->
			<view class="white">
				<view class="user-tl">
					我的发布
				</view>
				<view class="user-ls">
					<navigator class="user-item" hover-class="none" url="../change/change?currentTab=0">
						<view class="uni-icon color5 uni-icon-qunjiaoyi"></view>
						<view class="user-item-info">群交易</view>
					</navigator>
					<navigator class="user-item" hover-class="none" url="../megoods/megoods">
						<view class="uni-icon color6 uni-icon-weishanghuoyuan"></view>
						<view class="user-item-info">微商货源</view>
					</navigator>
					<navigator class="user-item" hover-class="none" url="../meCircle/meCircle">
						<view class="uni-icon color7 uni-icon-weishangquan"></view>
						<view class="user-item-info">微商圈</view>
					</navigator>
					<navigator class="user-item" hover-class="none" url="../menews/menews">			
						<view class="uni-icon color8 uni-icon-shouyitixian"></view>
						<view class="user-item-info">微头条</view>
					</navigator>
				</view>
			</view>
			<!-- 我的发布 end -->
			<!-- 收益中心 start -->
			<view class="white">
				<view class="user-tl">
					收益中心
				</view>
				<view class="user-ls">
					<view class="user-item" @click="show">
						<view class="uni-icon color5 uni-icon-dailishouyi"></view>
						<view class="user-item-info">分享奖现金</view>
					</view>
					<view class="user-item" @click="show">
						<view class="uni-icon color6 uni-icon-erweimafenxiang"></view>
						<view class="user-item-info">二维码分享</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color7 uni-icon-tuiguang"></view>
						<view class="user-item-info">复制推广链接</view>
					</view>
					<navigator hover-class="none" url="../income/income" class="user-item">
						<view class="uni-icon color8 uni-icon-dailishouyi"></view>
						<view class="user-item-info">收益明细</view>
					</navigator>
				</view>
			</view>
			<!-- 收益中心 end -->
			<!-- 会员服务 start -->
			<view class="white">
				<view class="user-tl">
					会员服务
				</view>
				<view class="user-ls">
					<navigator class="user-item" hover-class="none" url="../weibiList/weibiList">
						<view class="uni-icon color5 uni-icon-shouyitixian"></view>
						<view class="user-item-info">微币明细</view>
					</navigator>
					<navigator class="user-item" hover-class="none" url="../chargeOrder/chargeOrder">
						<view class="uni-icon color6 uni-icon-tuiguang"></view>
						<view class="user-item-info">充值订单</view>
					</navigator>
					<navigator class="user-item" hover-class="none" url="../member/member">
						<view class="uni-icon color7 uni-icon-wodehuiyuan"></view>
						<view class="user-item-info">会员套餐</view>
					</navigator>
					<navigator class="user-item" hover-class="none" url="../agent/agent">
						<view class="uni-icon color7 uni-icon-tuiguang"></view>
						<view class="user-item-info">代理通道</view>
					</navigator>
				</view>
			</view>
			<!-- 会员服务 end -->
			<!-- 其他服务 start -->
			<view class="white">
				<view class="user-tl">
					其他服务
				</view>
				<view class="user-ls">
					<navigator class="user-item" hover-class="none" url="../feedback/feedback">
						<uni-icon type="fankui-tianchong" size="30" color="#5bc48d"></uni-icon>
						<view class="user-item-info">意见反馈</view>
					</navigator>
					<navigator class="user-item" hover-class="none" url="../help/help">
						<uni-icon type="bangzhu" color="#e07464" size="30"></uni-icon>
						<view class="user-item-info">新手帮助</view>			
					</navigator>
					<navigator class="user-item" hover-class="none" url="../service/service">
						<uni-icon type="kefu" color="#d45a7a" size="30"></uni-icon>
						<view class="user-item-info">联系我们</view>
					</navigator>
					<view class="user-item">
						<view class="uni-icon color7 uni-icon-qunjiaoyi"></view>
						<view class="user-item-info">好评送微币</view>
					</view>
				</view>
			</view>
			<!-- 其他服务 end -->
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
	 
    import { mapState, mapMutations } from 'vuex'
    
		export default {
				data: {
					showMask: false,
				},
				components: {
					uniIcon
				},
				computed: {
						...mapState(['hasLogin', 'forcedLogin'])
				},
				methods: {
						...mapMutations(['logout']),
						bindLogin() {
								uni.navigateTo({
										url: '../login/login',
								});
						},
						bindLogout() {
								this.logout();
								/**
								 * 如果需要强制登录跳转回登录页面
								 */
								if (this.forcedLogin) {
										uni.reLaunch({
												url: '../login/login',
										});
								}
						},
						show: function(e) {
							this.showMask = true
						},
						hide: function() {
							this.showMask = false
// 							this.showState[this.activePop] = false
						},
						toObtain: function(){
							uni.switchTab({
								url: '/pages/obtain/obtain'
							})
						}
				},
				onNavigationBarButtonTap() {
					uni.navigateTo({
						url: '/pages/setting/setting'
					})
				}
		}

</script>

<style>
	@import "../../common/iconfont.css";
	.content{
		overflow: hidden;
	}
	.uni-icon-huiyuan1{
		color: #a1a1a1;
		font-size: 32upx;
		margin-right: 6upx;
	}
	.uni-icon-zuanshi{
		margin-right: 6upx;
	}
	.uni-icon-shezhi1{
		font-size: 32upx;
		margin-right: 6upx;
		margin-bottom: 4upx;
	}
	.content {
		background-color: #f4f6fa;
		position: relative;
	}
	.content-pad {
		position: relative;
		z-index: 3;
		margin-top: -50upx;
	}
	.me-top {
		position: relative;
	}
	.edituser{
		background-color: rgba(255,255,255,.1);
		font-size: 24upx;
		margin-left: 20upx;
		height: 40upx;
		line-height: 40upx;
		border-radius: 40upx;
		padding: 0 10upx 0 20upx;
		transform: scale(0.8);
		transform-origin: 0 50%;
	}
	.edituser .uni-icon{
		font-size: 24upx;
		margin-left: -8upx;
	}
	.me-login {
		background-color: #44B549;
		color: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 30upx 85upx;
		position: relative;
		z-index: 2;
	}
	.me-top::after {
		content: "";
		position: absolute;
		bottom: -20upx;
		left: -40upx;
		right: -40upx;
		height: 100upx;
		background-color: #44B549;
		border-radius: 0 0 80upx 80upx;
	}
	.avatar {
		flex: 0 0 90upx;
		width: 90upx;
		height: 90upx;
		border: 3upx solid #fff;
		border-radius: 100%;
	}
	.me-login-status {
		flex: 1;
		padding-left: 30upx;
	}
	.me-login-tl {
		font-size: 30upx;
		font-weight: 500;
	}
	.me-login-des {
		display: flex;
		flex-direction: row;
		font-size: 24upx;
	}
	.user-get {
		display: flex;
		flex-direction: row;
		height: 130upx;
		line-height: 1;
		font-size: 22upx;
		color: #505050;
	}
	.user-get-item {
		text-align: center;
		height: 130upx;
		flex: 1;		
	}
	.user-get-charge {
		text-align: center;
		flex: 1;
		height: 110upx;
		border-left: 2upx solid #f3f3f3;
		padding-top: 20upx
	}
	
	.user-get-item-sum {
		padding: 30upx 0 20upx;
	}
	.user-get-item-sum text{
		font-size: 30upx;
		font-weight: 500;
		color: #eb6644;
	}
	.uni-icon-wodeqianbao1 {
		font-size: 56upx;
		margin-bottom: 5upx;
		color: #44B549;
	}
	.member-ls{
		/* padding: 20upx 0; */
		display: flex;
		flex-direction: row;
		height: 126upx;
	}
	.line{
		width: 1px;
		height: 100%;
		background-color: #e5e5e5;
		transform-origin: 0 50%;
		transform: scaleY(0.5);
	}
	.member-item{
		flex: 0 0 240upx;
		padding: 20upx 10upx 20upx 20upx;
		position: relative;
	}
	.member-item-rt{
		position: absolute;
		right: 4upx;
		top: 50%;
		margin-top: -14upx;
		width: 130upx;
		text-align: center;
		font-size: 24upx;
		background-color: #eb6644;
		height: 48upx;
		line-height: 48upx;
		color: #fff;
		border-radius: 48upx;
		transform: scale(0.8);
	}
	/* .member-item-lf{
		flex: 1;
	} */
	.member-item-lf-tl{
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 26upx;
		line-height: 1;
		margin-bottom: 10upx;
		align-items: center;
		/* padding-top: 10upx; */
	}
	.member-item-lf-time{
		font-size: 24upx;
		height: 40upx;
		width: 210upx;
		line-height: 40upx;
		transform: scale(0.8);
		transform-origin: 0 0;
		color: #A1A1A1;
		background-color: #f5f5f5;
		border-radius: 40upx;
		text-align: center;
	}
	.share{
		background-color: #edf6ff;
		color: #449dff;
	}
	.haveopen{
		font-size: 24upx;
		background: #fceeea;
		color: #eb6644;
		height: 40upx;
		line-height: 40upx;
		border-radius: 40upx;
		padding: 0 10upx;
		margin-left: 10upx;
		transform: scale(0.8);
		transform-origin: 0 50%;
	}
	.noopen{
		font-size: 24upx;
		border: 2upx solid #eee;
		/* background: #fceeea; */
		color: #a1a1a1;
		height: 40upx;
		line-height: 40upx;
		border-radius: 40upx;
		padding: 0 10upx;
		margin-left: 10upx;
		transform: scale(0.8);
		transform-origin: 0 50%;
	}
	.noopen-tl{
		color: #A1A1A1;
	}
	.user-tl {
		font-size: 24upx;
		color: #a1a1a1;
		padding: 20upx 30upx 0;
	}
	.user-ls {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding-bottom: 30upx;
	}
	.user-item {
		flex: 0 0 25%;
		text-align: center;
		font-size: 24upx;
		color: #505050;
		padding: 30upx 0 0;
	}
	.user-item .uni-icon {
		font-size: 60upx;;
	}
	.uni-icon-duoren2 {
		color: #44B549;
	}
	.user-item-info {
		margin-top: 6upx;
	}
	.color1 {
		color: #cca2e1;
	}
	.color2 {
		color: #ffb480;
	}
	.color3 {
		color: #a7d129;
	}
	.color4 {
		color: #f08181;
	}
	.color5 {
		color: #7dd8c7;
	}
	.color6 {
		color: #ea9085;
	}
	.color7 {
		color: #2aa9d2;
	}
	.color8 {
		color: #eda1c1;
	}
	.member-info{
		flex: 1;
		font-size: 22upx;
		color: #999;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 20upx;
		padding-right: 10upx;
		justify-content: space-between;
	}
	.member-info-txt{
		font-size: 20upx;
		margin-top: 10upx;
	}
	.member-info-rt{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.member-info-gd{
		width: 120upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
		background-color: #f5f5f5;
		/* background-image: linear-gradient(45deg, #463413 20%, #090702 60%, #463413 100%); */
		border-radius: 10upx;
		color: #A1A1A1;
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
		width: 700upx;
		height: 420upx;
		border-radius: 16upx;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
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
