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
				<navigator hover-class="none" url="../selectGroup/selectGroup">
					<view class="rc-line b-line">
						<view class="rc-line-lf">
							群主
						</view>
						<view class="rc-select">
							群二维码失效后 会显示群主二维码
						</view>
						<uni-icon color="#acacac" size="16" type="qianjin"></uni-icon>
					</view>
				</navigator>
				<view class="rc-line b-line" @click="showMulLinkageTwoPicker">
					<view class="rc-line-lf">
						地区
					</view>
					<view class="rc-select">
						请选择地区
					</view>
					<uni-icon color="#acacac" size="16" type="qianjin"></uni-icon>
				</view>
				<view class="rc-line" @tap="toSelectTrade">
					<view class="rc-line-lf">
						行业
					</view>
					<view class="rc-select">
						请选择个人行业
					</view>
					<uni-icon color="#acacac" size="16" type="qianjin"></uni-icon>
				</view>
			</view>
			<view class="white">
				<view class="rc-line b-line">
					<view class="rc-line-lf">
						群名
					</view>
					<input type="text" placeholder-style="color: #dfdfdf" placeholder="想个吸引人的标题" value="" />
				</view>
				<view class="rc-line">
					<view class="rc-line-lf">
						描述
					</view>
					<input type="text" placeholder-style="color: #dfdfdf" placeholder="认真填写描述,要一鸣惊人哦" value="" />
				</view>
				
			</view>
			<view class="white">
				<view class="rc-upload">
					<view class="up-avatar">
						<uni-icon type="tianjia" color="#b9b9b9"></uni-icon>
					</view>
					<view class="rc-upload-info">
						上传微信头像
					</view>
				</view>
			</view>
			<view class="white">
				<view class="rc-upload">
					<view class="up-avatar">
						<uni-icon type="tianjia" color="#b9b9b9"></uni-icon>
					</view>
					<view class="rc-upload-info">
						上传微信二维码 <text>(限1张)</text>
					</view>
					<view class="rc-upload-rt center">
						<uni-icon type="bangzhu" size="12"></uni-icon>
						如何获取
					</view>
				</view>
			</view>
			<view class="white">
				<view class="rc-upload">
					<switch checked color="#44B549" @change="switchChange" />
					<view class="rc-upload-info">
						开启防止机器人进群验证
					</view>
					<view class="rc-upload-rt center">
						<uni-icon type="bangzhu" size="12"></uni-icon>
						了解详情
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
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		@onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue';
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue';
	import cityData from '../../common/city.data.js';
	
	export default {
		data() {
			return {
				mulLinkageTwoPicker: cityData,
				pickerValueDefault: [0, 0],
				themeColor: '#44b549',
				mode: '',
				deepLength: 1,
				// pickerValueDefault: [0]
			};
		},
		components: {
			uniIcon,
			mpvuePicker,
			mpvueCityPicker
		},
		methods: {
			formSubmit: function (e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			},
			formReset: function () {
				console.log('form发生了reset事件')
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				this.pickerText = JSON.stringify(e)
			},
			// 二级联动选择
			showMulLinkageTwoPicker() {
				this.pickerValueArray = this.mulLinkageTwoPicker
				this.mode = 'multiLinkageSelector'
				this.deepLength = 2
				this.pickerValueDefault = [0, 0]
				this.$refs.mpvuePicker.show()
			},
			toSelectTrade: function() {
				uni.navigateTo({
					url: '../selectTrade/selectTrade'
				})
			},
			switchChange: function (e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
		},
		onNavigationBarButtonTap: function(){
			uni.navigateTo({
				url: '/pages/help/help'
			})
		},
	}
</script>

<style>
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
		color: #dfdfdf;
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
