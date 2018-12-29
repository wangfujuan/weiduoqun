<template>
	<view class="content">
		<view class="me-top">
			<view class="me-login">
				<view class="income-con">
					<view class="income-con-top">
						<view class="income-con-item">
							<view class="income-con-tl">
								可提现余额
							</view>
							<view class="income-con-info">
								<text class="fontred">0.01</text>元
							</view>
						</view>
						<view class="me-line"></view>
						<view class="income-con-item">
							<view class="income-con-tl">
								累计提现
							</view>
							<view class="income-con-info">
								<text>0.00</text>元
							</view>
						</view>
					</view>
					<view class="income-pay">
						<uni-icon type="zhifubaozhifu" color="#459ae5" size="20"></uni-icon>
						<text>支付宝企业合作 提现自动秒到账</text>
					</view>
				</view>
			</view>	
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
		}
	}
</script>

<style>
	.content{
		background-color: #F4F6FA;
	}
	.me-top {
		position: relative;
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
		height: 110upx;
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
	.income-con{
		position: absolute;
		left: 30upx;
		right: 30upx;
		height: 250upx;
		background-color: #fff;
		bottom: -60upx;
		border-radius: 10upx;
		box-shadow: 0 5upx 16upx rgba(0,0,0,.1);
		color: #999999;
	}
	.income-con-top{
		display: flex;
		flex-direction: row;
		position: relative;
		padding: 26upx 0;
		font-size: 24upx;
		height: 95upx;
	}
	.income-con-item{
		flex: 1;
		text-align: center;
		align-items: center;
	}
	.income-con-tl{
		
	}
	.income-con-info{
		line-height: 1;
		margin-top: 5upx;
	}
	.income-con-info text{
		/* color: #e74c2d; */
		font-weight: 500;
		font-size: 54upx;
	}
	.me-line{
		width: 2upx;
		background-color: #e5e5e5;
		height: 65upx;
		margin: 10upx 0;
	}
	.fontred{
		color: #e74c2d;
	}
	.income-pay{
		height: 72upx;
		line-height: 72upx;
		text-align: center;
		background-color: #f3f6fd;
		border-radius: 72upx;
		margin: 0 30upx
	}
	.income-pay text{
		font-size: 24upx;
		border-left: 2upx solid #eeeeee;
		margin-left: 20upx;
		padding-left: 20upx;
	}
</style>
