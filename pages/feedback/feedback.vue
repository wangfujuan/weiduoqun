<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
			<view class="fd-box">
				<view class="fd-tl">
					意见反馈
				</view>
				<textarea placeholder-style="color:#9c9c9c" placeholder="重要意见有奖哦～" />
			</view>
			
			<label class="fd-line" for="telphone">
				手机号
				<input id="telphone" placeholder-style="color:#9c9c9c" type="text" value="" placeholder="填写手机号,便于我们联系到您" />
			</label>
			
			<label class="fd-line" for="wxnumber">
				微信号
				<input id="wxnumber" placeholder-style="color:#9c9c9c" type="text" value="" placeholder="填写微信号,便于我们联系到您" />
			</label>
			
			<view class="fd-box">
				<view class="fd-tl">
					添加图片
				</view>
				<view class="uploader-box">
					<view class="uploader-item" @click="chooseImage">
						<uni-icon type="tianjia" size="26" color="#b2b2b2"></uni-icon>
					</view>
				</view>
				
			</view>
			<button class="cardbtn" formType="submit">提交反馈</button>		
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
			// 选择头像
			chooseImage: function(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera', 'album'], //从相册选择
					success: function (res) {
						this.avatar = res.tempFilePaths;
						console.log(this.avatar);
						// console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			formSubmit: function (e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			},
			formReset: function () {
				console.log('form发生了reset事件')
			}
		}
	} 
</script>

<style>
	.content{
		padding: 30upx;
	}
	.fd-box{
		background-color: #f9f9f9;
		border: 2upx solid #e2e2e2;
		border-radius: 10upx;
		padding: 20upx;
		font-size: 32upx;
	}
	.fd-tl{	
		margin-bottom: 20upx;
	}
	textarea{
		height: 200upx;
	}
	.fd-line{
		background-color: #f9f9f9;
		border: 2upx solid #e2e2e2;
		border-radius: 10upx;
		margin: 40upx 0;
		display: flex;
		flex-direction: row;
		height: 96upx;
		line-height: 96upx;
		padding: 0 20upx;
		font-size: 32upx;
		align-items: center;
	}
	.fd-line input{
		flex: 1;
		padding-left: 30upx;
	}
	.cardbtn{
		background-color: #44B549;
		color: #fff;
		border-radius: 10upx;
		margin: 40upx 0;
		font-size: 32upx;
		height: 96upx;
		line-height: 96upx;
	}
	.cardbtn::after{
		border: none
	}
	.uploader-box{
		overflow: hidden;
		margin-top: -20upx;
	}
	.uploader-item{
		margin-top: 20upx;
		width:162upx;
		height:162upx;
		text-align: center;
		line-height: 158upx;
		border:2upx dashed #cecece;
		background-color:#f6f6f6;
		border-radius:6rpx;
		float: left;
	}
</style>
