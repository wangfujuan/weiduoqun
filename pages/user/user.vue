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
				<navigator url="../setting/setting" hover-class="none" class="me-login-set center">
					<view class="uni-icon uni-icon-shezhi1"></view>
					设置	
				</navigator>
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
					<view class="user-get-item">
						<view class="user-get-item-sum">
							<text>18.00</text> 元
						</view>
						<view class="user-get-item-info">
							收益余额
						</view>
					</view>
					<view class="user-get-charge">
						<view class="uni-icon uni-icon-wodeqianbao1"></view>
						<view class="user-get-item-info">
							马上充值
						</view>
					</view>
				</view>
			</view>
			<view class="white">
				<view class="member-ls">
					<view class="member-item">
						<view class="member-item-lf">
							<view class="member-item-lf-tl">
								<view class="uni-icon uni-icon-huiyuan"></view>
								<view class="">
									超级会员
								</view>
								<view class="haveopen">
									已开通
								</view>
							</view>
							<view class="member-item-lf-time">
								2019.01.13到期
							</view>
						</view>
						<view class="member-item-rt">
							查看详细
						</view>
					</view>
					<view class="line"></view>
					<view class="member-item">
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
					</view>
				</view>
			</view>
			<!-- 我的名片 start -->
			<view class="white">
				<view class="user-tl">
					我的名片
				</view>
				<view class="user-ls">
					<view class="user-item">
						<view class="uni-icon color1 uni-icon-weixinqun"></view>
						<view class="user-item-info">微信群</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color2 uni-icon-qqqun"></view>
						<view class="user-item-info">QQ群</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color3 uni-icon-gerenweixin"></view>
						<view class="user-item-info">个人微信</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color4 uni-icon-qqqun"></view>
						<view class="user-item-info">公众号</view>
					</view>
				</view>
			</view>
			<!-- 我的名片 end -->
			<!-- 我的发布 start -->
			<view class="white">
				<view class="user-tl">
					我的发布
				</view>
				<view class="user-ls">
					<view class="user-item">
						<view class="uni-icon color5 uni-icon-qunjiaoyi"></view>
						<view class="user-item-info">群交易</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color6 uni-icon-weishanghuoyuan"></view>
						<view class="user-item-info">微商货源</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color7 uni-icon-weishangquan"></view>
						<view class="user-item-info">微商圈</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color8 uni-icon-shouyitixian"></view>
						<view class="user-item-info">干货文章</view>
					</view>
				</view>
			</view>
			<!-- 我的发布 end -->
			<!-- 收益中心 start -->
			<view class="white">
				<view class="user-tl">
					收益中心
				</view>
				<view class="user-ls">
					<view class="user-item">
						<view class="uni-icon color5 uni-icon-dailishouyi"></view>
						<view class="user-item-info">分享奖现金</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color6 uni-icon-erweimafenxiang"></view>
						<view class="user-item-info">二维码分享</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color7 uni-icon-tuiguang"></view>
						<view class="user-item-info">复制推广链接</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color8 uni-icon-dailishouyi"></view>
						<view class="user-item-info">代理收益</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color7 uni-icon-dailichongweibi"></view>
						<view class="user-item-info">代理充微币</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color8 uni-icon-shouyitixian"></view>
						<view class="user-item-info">收益提现</view>
					</view>
				</view>
			</view>
			<!-- 收益中心 end -->
			<!-- 会员服务 start -->
			<view class="white">
				<view class="user-tl">
					会员服务
				</view>
				<view class="user-ls">
					<view class="user-item">
						<view class="uni-icon color5 uni-icon-shouyitixian"></view>
						<view class="user-item-info">订单管理</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color6 uni-icon-tuiguang"></view>
						<view class="user-item-info">会员套餐</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color7 uni-icon-wodehuiyuan"></view>
						<view class="user-item-info">我的会员</view>
					</view>
				</view>
			</view>
			<!-- 会员服务 end -->
			<!-- 其他服务 start -->
			<view class="white">
				<view class="user-tl">
					其他服务
				</view>
				<view class="user-ls">
					<view class="user-item">
						<view class="uni-icon color5 uni-icon-qunjiaoyi"></view>
						<view class="user-item-info">账号管理</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color6 uni-icon-yijianfankui"></view>
						<view class="user-item-info">意见反馈</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color7 uni-icon-qunjiaoyi"></view>
						<view class="user-item-info">新手帮助</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color7 uni-icon-lianxiwomen"></view>
						<view class="user-item-info">联系我们</view>
					</view>
					<view class="user-item">
						<view class="uni-icon color7 uni-icon-qunjiaoyi"></view>
						<view class="user-item-info">好评送微币</view>
					</view>
				</view>
			</view>
			<!-- 其他服务 end -->
		</view>
    </view>
</template>

<script>
   
    import {
            mapState,
            mapMutations
        } from 'vuex'
    
        export default {
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
                }
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
	.uni-icon-huiyuan{
		color: #eb6644;
		font-size: 28upx;
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
		height: 200%;
		background-color: #e5e5e5;
		transform-origin: 0 0;
		transform: scaleY(0.5);
	}
	.member-item{
		flex: 1;
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
</style>
