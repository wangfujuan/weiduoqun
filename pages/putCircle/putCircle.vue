<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
		<view class="content-pad">
			<view class="white">
				<view class="summary">
					<view class="summary-con">
						当前微币：<text>55</text>
						发布扣除：<text>1</text>
					</view>
					<view class="center">
						<uni-icon type="bangzhu" size="12" color="#8a8a8a"></uni-icon>
						微币使用规则
					</view>
				</view>
			</view>
			<view class="white">
				<textarea value="" placeholder="想说/拍点什么" placeholder-style="color: #d1d1d1; font-size: 30upx" />
				<view class="rc-upload">
					<view class="up-avatar">
						<uni-icon type="tianjia" color="#b9b9b9"></uni-icon>
					</view>
				</view>
			</view>
			<view class="user-agree">
				发布代表同意<navigator url="">《用户使用服务协议》</navigator>
			</view>
			<view class="submitbtn-wp">
				<button class="block-tl-color8 submitbtn" formType="submit">确认发布</button>
			</view>
		</view>
		</form>
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
			formSubmit: function (e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			},
			formReset: function () {
				console.log('form发生了reset事件')
			}
		},
		
	}
</script>

<style>
	textarea{
		padding: 20upx;
	}
	.content{
		background-color: #F4F6FA;
		padding-bottom: 150upx;
	}
	.summary{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 20upx;
		height: 86upx;
		color: #8a8a8a;
		font-size: 26upx;
		align-items: center;
	}
	.summary-con{
		flex: 1;	
	}
	.summary-con text{
		margin-right: 20upx;
		color: #505050;
		font-weight: 500;
	}
	.summary .uni-icon,.rc-upload-rt .uni-icon{
		margin-right: 10upx;
	}
	.rc-line{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0 20upx;
		height: 100upx;
	}
	.rc-line-lf{
		flex: 0 0 100upx;
		text-align: right;
	}
	.rc-line input,.rc-select{
		flex: 1;
		padding-left: 30upx;
		color: #c7c7c7;
	}
	.rc-upload{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 20upx;
	}
	.up-avatar{
		width: 100upx;
		height: 100upx;
		border: 2upx solid #f0f0f0;
		text-align: center;
		line-height: 100upx;
		border-radius: 30upx;
	}
	.rc-upload-info{
		flex: 1;
		padding-left: 20upx;
	}
	.rc-upload-info text,.rc-upload-rt{
		color: #8a8a8a;
	}
	.rc-upload-rt{
		font-size: 26upx;
	}
	.user-agree{
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-size: 22upx;
		color: #8a8a8a;
	}
	.user-agree navigator{
		color: #749dc9;
	}
	
</style>

