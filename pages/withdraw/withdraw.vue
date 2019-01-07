<template>
	<view class="content">
		<view class="content-pad">
			<view class="white">
				<view class="draw-tl">
					<view class="center">
						<uni-icon type="zhifubaozhifu" color="#459ae5" size="20"></uni-icon>
						支付宝
					</view>
					<text>提现规则</text>
				</view>
				<view class="draw-con">
					<input class="input-line" placeholder-style="color: #bebebe; font-size: 30upx" type="text" value="支付宝号" />
					<input class="input-line" placeholder-style="color: #bebebe; font-size: 30upx" type="text" value="支付宝姓名(非昵称)" />
					<view class="draw-con-tips">*支付宝账号与姓名(非昵称)必须一致，否则会转账失败</view>
				</view>
			</view>
			<view class="white">
				<view class="draw-tl">
					<view class="center">
						<uni-icon type="dailishouyi" color="#e74c2d" size="20"></uni-icon>
						提现金额(元)
					</view>
					<text>手续费：0元</text>
				</view>
				<view class="draw-con">
					<view class="input-line">
						<input placeholder-style="color: #bebebe; font-size: 30upx" type="text" value="输入本次提现金额" />
						<text>余额0.10元</text>
					</view>					
				</view>
			</view>
			<view class="white">
				<view class="draw-tl">
					<view class="center">
						<uni-icon type="ai-phone" color="#44b549" size="20"></uni-icon>
						注册手机号 <text>128****2311</text>
					</view>
					<text>不能接受验证码？</text>
				</view>
				<view class="draw-con">
					<view class="input-line">
						<input placeholder-style="color: #bebebe; font-size: 30upx" type="text" value="请输入4位手机验证码" />
						<text>获取验证码</text>
					</view>					
				</view>
			</view>
		</view>
		<view class="submitbtn-wp">
			<view class="draw-bt">
				每天可提现5次，每天最高10000元
			</view>
			<button class="block-tl-color8 submitbtn" formType="submit">申请提现</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				
			};
		},
		onNavigationBarButtonTap: function(){
			uni.navigateTo({
				url: '/pages/help/help'
			})
		}
	}
</script>

<style>
	.content{
		background-color: #F4F6FA;
	}
	.draw-tl{
		padding: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 26upx;
	}
	.draw-tl .uni-icon{
		margin-right: 10upx;
	}
	.draw-tl text{
		color: #bebebe;
	}
	.draw-con{
		padding: 0 30upx 10upx;
	}
	.input-line{
		border: 2upx solid #f0f0f0;
		border-radius: 10upx;
		height: 88upx;
		line-height: 88upx;	
		padding: 0 20upx;
		margin-bottom: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.input-line text{
		color: #449DFF;
		font-size: 24upx;
	}
	.draw-con-tips{
		color: #bebebe;
		font-size: 24upx;
		margin-bottom: 20upx;
	}
	.draw-bt{
		text-align: center;
		font-size: 24upx;
		margin-bottom: 10upx;
		color: #666;
	}
	
</style>
