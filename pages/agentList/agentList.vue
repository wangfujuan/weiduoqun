<template>
	<view class="content">
		<view class="line20"></view>
		<view class="agent-ls">
			<view class="agent-item">
				<view class="agent-item-lf">
					钻石代理 <text class="fontred">3个月</text>
				</view>
				<view class="agent-item-rt">
					<text class="fontred">¥179.00</text> <text class="lastgary">298.00</text><text class="gray">6折</text>
				</view>
			</view>
			<view class="agent-item active-item">
				<view class="agent-item-lf">
					钻石代理 <text class="fontred">3个月</text>
				</view>
				<view class="agent-item-rt">
					<text class="fontred">¥179.00</text> <text class="lastgary">298.00</text><text class="gray">6折</text>
				</view>
				<view class="active-icon"></view>
			</view>
			<view class="agent-item">
				<view class="agent-item-lf">
					钻石代理 <text class="fontred">3个月</text>
				</view>
				<view class="agent-item-rt">
					<text class="fontred">¥179.00</text> <text class="lastgary">298.00</text><text class="gray">6折</text>
				</view>
			</view>
			<view class="agent-item">
				<view class="agent-item-lf">
					钻石代理 <text class="fontred">3个月</text>
				</view>
				<view class="agent-item-rt">
					<text class="fontred">¥179.00</text> <text class="lastgary">298.00</text><text class="gray">6折</text>
				</view>
			</view>
		</view>
		<view class="fixed-btn-wp">
			<navigator class="fixed-btn" url="">确认</navigator>
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
	.line20{
		background-color: #F4F6FA;
		height: 20upx;
	}
	.agent-ls{
		padding: 0 20upx;
	}
	.agent-item{
		height: 100upx;
		border: 2upx solid #E5E5E5;
		border-radius: 6upx;
		margin: 20upx 0;
		align-items: center;
		padding: 0 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.agent-item-rt{
		height: 30upx;
		line-height: 30upx;
		border-left: 2upx solid #e5e5e5;
		padding-left: 20upx;
	}
	.fontred{
		color: #e86a38;
	}
	.lastgary{
		color: #b2b2b2;
		text-decoration: line-through;
		padding: 0 10upx;
	}
	.gray{
		color: #b2b2b2;	
	}
	.active-item{
		border-color: #b28431;
		position: relative;
	}
	.active-item .agent-item-lf{
		color: #b28431;
		font-weight: 500;
	}
	.active-item .agent-item-rt .fontred{
		font-weight: 500;
	}
	.active-item::after{
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		right: 0;
		bottom: 0;
		border: 16upx solid;
		border-color: transparent #b28431 #b28431 transparent;
	}
	.active-icon{
		position: absolute;
		right: 4upx;
		bottom: 4upx;
		z-index: 9;
		transform: rotate(225deg);
	}
	.active-icon::after,
	.active-icon::before{
		content: "";
		background-color: #fff;
		display: block;
	}
	.active-icon::before{
		width: 8upx;
		height: 2upx;
	}
	.active-icon::after{
		height: 12upx;
		width: 2upx;
	}
	.fixed-btn-wp{
		background-color: #fff;
		padding: 20upx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.fixed-btn{
		background-color: #b28431;
		height: 76upx;
		line-height: 76upx;
		border-radius: 10upx;
		text-align: center;
		color: #fff;
		font-size: 30upx;
		font-weight: 500;
	}
</style>
