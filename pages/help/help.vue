<template>
	<view class="content">
		<view class="line20"></view>
		<view class="help-item">
			<uni-icon type="fankui-tianchong" size="18" color="#5091e6"></uni-icon>新手教程
		</view>
		<view class="line20"></view>
		<view class="help-item b-line">
			<uni-icon type="fankui-tianchong" size="18" color="#5091e6"></uni-icon>注册/登录/修改资料
		</view>
		<view class="help-item b-line">
			<uni-icon type="fankui-tianchong" size="18" color="#5091e6"></uni-icon>微币充值/积分相关
		</view>
		<view class="help-item">
			<uni-icon type="fankui-tianchong" size="18" color="#5091e6"></uni-icon>微币充值/积分相关
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
	} 
</script>

<style>
	.content{
		background-color: #F4F6FA;
	}
	.help-item{
		padding: 0 30upx;
		height: 96upx;
		line-height: 96upx;
		background-color: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.help-item .uni-icon{
		margin-right: 20upx;
	}
</style>
