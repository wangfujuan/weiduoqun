<template>
	<view class="content">
		<view class="wb-top block-tl-color3">
			<view class="wb-top-tl">
				0
			</view>
			<view class="wb-sign">
				签到+5
			</view>
			<view class="wb-sign-info">
				已连续签到1天，第30天送黄金会员哦～
			</view>
			<view class="grace-steps">
				<view class="step">
					<view class="step-circle">1</view>
					<view class="step-content">
						
					</view>
				</view>
				<view class="step current">
					<view class="step-circle">2</view>
					<view class="step-content">
						
					</view>
				</view>
				<view class="step">
					<view class="step-circle">3</view>
					<view class="step-content">
						
					</view>
				</view>
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
	.wb-top{
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #fff;
		line-height: 1;
	}
	.wb-top-tl{
		font-size: 50upx;
		padding: 35upx 0;
	}
	.wb-sign{
		width: 240upx;
		height: 60upx;
		line-height: 60upx;
		background-color: #e9526e;
		border-radius: 60upx;
		text-align: center;
		border: 2upx solid #fff;
	}
	.wb-sign-info{
		font-size: 22upx;
		margin-top: 12upx;
	}
	.grace-steps{padding:20rpx 0; display:flex; width:100%; flex-wrap:wrap;}
	.grace-steps view{display:flex; width:100%; flex-wrap:wrap; float:none;}
	.grace-steps .step{width:31.3%; margin:0 1%; flex-wrap:nowrap;}
	.grace-steps .step-circle{width:50upx; height:50upx; border-radius:50upx; background:#F1F1F3; justify-content:center; line-height:50upx; flex-shrink:0; margin-right:15upx; color:#666; font-size:28upx;}
	.grace-steps .step-content{width:100%; height:22upx; border-bottom:1px solid #F1F1F3;}
	.grace-steps .current .step-circle{background:#00B26A; color:#FFFFFF;}
	.grace-steps .current .step-content{border-color:#00B26A;}
	.grace-steps .current .step-title{color:#00B26A;}
</style>
