<template>
	<view class="content">
		<view class="edit-ls">
			<navigator url="../meedit/meedit" class="edit-item b-line" hover-class="none">
				<view class="edit-item-lf">
					<view class="edit-item-tl">
						修改个人资料
					</view>
					<view class="edit-item-txt">
						完善个人资料加粉效果更精准
					</view>
				</view>
				<view class="edit-item-rt">
					<uni-icon type="qianjin" color="#ddd" size="16"></uni-icon>	
				</view>
			</navigator>
		</view>
		<view class="line20"></view>
		<view class="edit-ls">
			<view class="edit-item b-line">
				<view class="edit-item-lf">
					<view class="edit-item-tl">
						停止被加粉
					</view>
					<view class="edit-item-txt">
						可停止一个或多个号被加粉
					</view>
				</view>
				<view class="edit-item-rt">
					<uni-icon type="qianjin" color="#ddd" size="16"></uni-icon>
				</view>
			</view>
			<view class="edit-item b-line">
				<view class="edit-item-lf">
					<view class="edit-item-tl">
						绑定微信 <text class="greenfont smallfont">(未绑定)</text>
					</view>
					<view class="edit-item-txt">
						绑定微信加粉更方便
					</view>
				</view>
				<view class="edit-item-rt">
					<text class="greenfont">点击绑定</text>
				</view>
			</view>
			<view class="edit-item b-line">
				<view class="edit-item-lf">
					<view class="edit-item-tl">
						关闭短信通知
					</view>
					<view class="edit-item-txt">
						有收益时短信提醒，每天最多2次，累计最多5次
					</view>
				</view>
				<view class="edit-item-rt">
					<switch color="#44B549" @change="switchChange" />
				</view>
			</view>
			<view class="edit-item b-line">
				<view class="edit-item-lf">
					<view class="edit-item-tl">
						当前版本
					</view>
					<view class="edit-item-txt">
						目前已经是最新版本
					</view>
				</view>
				<view class="edit-item-rt">
					1.0.0
				</view>
			</view>
			<view class="edit-item b-line">
				<view class="edit-item-lf">
					<view class="edit-item-tl">
						注销账号
					</view>
					<view class="edit-item-txt">
						可注销已注册的手机号
					</view>
				</view>
			</view>
		</view>
		<view class="line20"></view>
		<view class="exit">
			退出当前账号
		</view>		
		<view class="smallfont fixeduser">
			<navigator url="" hover-class="none">《微多群用户服务协议》</navigator>
			<navigator url="" hover-class="none">《微多群隐私政策》</navigator>
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
		methods: {
			switchChange: function (e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
		}
	}
</script>

<style>
	.content{
		background-color: #f4f6fa;
	}
	.edit-ls{
		background-color: #fff;
		border-top: 2upx solid #eee;
	}
	.edit-item{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20upx;
		align-items: center;
	}
	.edit-item-lf{
		flex: 1;
		line-height: 1;
	}
	.edit-item-tl{
		padding-top: 20upx;
	}
	.edit-item-txt{
		font-size: 24upx;
		color: #a1a1a1;
		margin-top: 25upx;
	}
	.avatar-80{
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
	}
	.edit-item-status{
		color: #44B549;
	}
	.line20{
		height: 20upx;
	}
	.exit{
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		color: #44B549;
		background-color: #fff;
		font-size: 30upx;
	}
	.fixeduser{
		position: fixed;
		bottom: 0;
		display: flex;
		padding: 30upx 0;
		left: 0;
		right: 0;
		justify-content: center;
		color: #749dc9;
	}
</style>
