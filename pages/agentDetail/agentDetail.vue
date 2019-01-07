<template>
	<view class="content">
		<view class="openlist">
			<view class="open-item b-line">
				<view class="open-item-lf">会员账号:</view>
				<view class="open-item-rt"><text class="fontyellow">291828282828</text></view>
			</view>
			<view class="open-item b-line">
				<view class="open-item-lf">开通类型:</view>
				<view class="open-item-rt">钻石代理 3个月 298元</view>
			</view>
			<view class="open-item b-line">
				<view class="open-item-lf">开通时间:</view>
				<view class="open-item-rt">2018-12-20 09:20:12</view>
			</view>
			<view class="open-item b-line">
				<view class="open-item-lf">会员状态:</view>
				<view class="open-item-rt">
					<view class="">
						钻石代理 <text class="fontred">3个月</text>
					</view>
					<view class="expiretime">
						截止时间 <text class="fontred">2018-20-10</text>
					</view>
				</view>
			</view>
			<view class="open-item b-line">
				<view class="open-item-lf">会员微币账户:</view>
				<view class="open-item-rt">320.00个</view>
			</view>
			<view class="open-item">
				<view class="open-item-lf">产品价格:</view>
				<view class="open-item-rt"><text class="fontred larfont">298.00元</text></view>
			</view>
		</view>
		<view class="open-tips">
			<view class="open-tips-tl">
				重要提示
			</view>
			<view class="open-tips-line">
				1. 该手机号如果没有注册过微多群，会自动注册后再开通或充值，默认账号密码都是该手机号
			</view>
			<view class="open-tips-line">
				2. 会自动注册后再开通或充值
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
	.openlist{
		padding: 0 20upx;
		background-color: #fff;
		margin: 20upx 0;
	}
	.open-item{
		padding: 24upx 0;
		color: #505050;
		display: flex;
		font-size: 26upx;
	}
	.open-item-lf{
		flex: 0 0 200upx;
		text-align: right;
	}
	.open-item-rt{
		flex: 1;
		padding-left: 20upx;
	}
	.fontred{
		color: #e86a38;
	}
	.fontyellow{
		color: #00b8a7;
	}
	.expiretime{
		color: #000000;
		font-weight: 500;
	}
	.larfont{
		font-size: 28upx;
		font-weight: 500;
	}
	.open-tips{
		background-color: #fff;
		padding: 40upx 60upx 30upx;
	}
	.open-tips-tl{
		padding-bottom: 20upx;
		text-align: center;
		color: #b2b2b2;
	}
	.open-tips-line{
		font-size: 26upx;	
		color: #999;
		margin-bottom: 14upx;
	}
</style>
