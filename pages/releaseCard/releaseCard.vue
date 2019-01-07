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
				<view class="rc-line b-line">
					<view class="rc-line-lf">
						昵称
					</view>
					<input type="text" placeholder-style="color: #c7c7c7" placeholder="请填写您的微信昵称" value="" />
				</view>
				<view class="rc-line">
					<view class="rc-line-lf">
						简介
					</view>
					<input type="text" placeholder-style="color: #c7c7c7" placeholder="认真填写描述,要一鸣惊人哦" value="" />
				</view>
			</view>
			<view class="white">
				<view class="rc-line b-line">
					<view class="rc-line-lf">
						微信号
					</view>
					<input type="text" placeholder-style="color: #c7c7c7" placeholder="请填写您的微信号" value="" />
				</view>
				<view class="rc-line">
					<view class="rc-line-lf">
						手机号
					</view>
					<input type="text" placeholder-style="color: #c7c7c7" placeholder="请填写您该微信绑定的手机号" value="" />
				</view>
			</view>
			<view class="white">
				<view class="rc-line b-line" @click="showMulLinkageTwoPicker">
					<view class="rc-line-lf">
						地区
					</view>
					<view class="rc-select">
						请选择地区
					</view>
					<uni-icon color="#acacac" size="16" type="qianjin"></uni-icon>
				</view>
				<view class="rc-line b-line" @click="show" data-position="bottom">
					<view class="rc-line-lf">
						标签
					</view>
					<view class="rc-select">
						请选择个人属性
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
				<view class="rc-upload">
					<view class="up-avatar" @tap="toChoosewx">
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
			<view class="user-agree">
				发布代表同意<navigator url="">《用户使用服务协议》</navigator>
			</view>
			<view class="submitbtn-wp">
				<button class="block-tl-color8 submitbtn" formType="submit">提交保存</button>
			</view>
		</view>
		</form>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		@onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<!-- popup 选择属性 start-->	
		<view class="mask" v-show="showMask" @click="hide"></view>
		<view class="popup popup-bottom" v-show="showState.bottom">
			<view class="user-do">
				<view class="user-do-cancel" @click="onTradeCancel">
					取消
				</view>
				<view class="">
					选择属性
				</view>
				<view class="user-do-true" @click="onAttrTrue">
					确定
				</view>
			</view>
			<view class="user-sl-ls">
				<checkbox-group @change="checkboxChange">
					<view class="uni-list">
						<label class="uni-list-cell" v-for="item in attrs" :key="item.value">
							<view>
								<checkbox color="#44B549" :value="item.name" :checked="item.checked" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</view>
				</checkbox-group>
			</view>
		</view>
		<!-- popup 选择属性 end-->
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
				showState: {
					top: false,
					middle: false,
					bottom: false,
					bottom1: false
				},
				showMask: false,
				activePop: 'middle',
				attrs: [
					{
						value: '0',
						name: '在校学生'
					},
					{
						value: '1',
						name: '宝妈宝爸',
						checked: 'true'
					},
					{
						value: '2',
						name: '上班族'
					},
					{
						value: '3',
						name: '职场白领'
					},
					{
						value: '4',
						name: '企业高管'
					},
					{
						value: '6',
						name: '自由职业'
					}
				],
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
			onAttrTrue() {
				this.hide();
				var attrValue = '';
				this.values.forEach(item => {
					console.log(item);
					attrValue = attrValue + ' ' + item
				})
				this.attrValue = attrValue;
			},
			show(e) {
				var pos = e.currentTarget.dataset.position;
				console.log(pos);
				switch (pos) {
					case 'top':
						this.activePop = 'top'
						break
					case 'bottom':
						this.activePop = 'bottom'
						break
					case 'bottom1':
						this.activePop = 'bottom1'
						break
					default:
						this.activePop = 'middle'
				}
				this.showMask = true
				this.showState[this.activePop] = true
			},
			onTradeCancel(e) {
				this.hide()
			},
			hide() {
				this.showMask = false
				this.showState[this.activePop] = false
			},
			checkboxChange: function (e) {
				var values = e.detail.value;
				this.values = values;	
			},
			toChoosewx: function(){
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
			}
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
	.user-do{
		display: flex;
		flex-direction: row;
		padding: 0 30upx;
		height: 88upx;
		line-height: 88upx;
	}
	.user-do view{
		flex: 1;
		font-size: 34upx;
		color: #505050;
	}
	view.user-do-cancel{
		color: #888;
		text-align: left;
	}
	view.user-do-true{
		color: #44B549;
		text-align: right;
	}
	.user-sl-ls{
		background-color: #f4f6fa;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 20upx;
		/* padding-bottom: 100upx; */
	}
	.user-sl-item{
		flex: 0 0 25%;	
	}
	.user-sl-item-con{
		padding: 10upx;
	}
	.user-sl-item text{
		display: block;
		height: 56upx;
		line-height: 56upx;
		background-color: #fff;
		border: 2upx solid #ddd;
		border-radius: 6upx;
		font-size: 24upx;
		color: #505050;
	}
	.user-sl-item text.active {
		background-color: #44B549;
		color: #fff;
		border-color: #44B549;
	}
	/* popup start */
	.mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}

	.popup {
		position: absolute;
		z-index: 999;
		background-color: #ffffff;
		-webkit-box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
	}

	.popup-middle {
		width: 550upx;
		height: 375upx;
		border-radius: 10upx;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}

	.popup-top {
		top: 0;
		width: 100%;
		text-align: center;
	}

	.popup-bottom {
		bottom: 0;
		width: 100%;
		/* height: 100upx; */
		text-align: center;
	}
	.uni-list{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 0 10upx;
	}
	.uni-list-cell{
		flex: 0 0 33.3333%;	
		text-align: left;
		display: flex;
		flex-direction: row;
		color: #44B549;
		font-size: 24upx;
		margin: 15upx 0;
	}
</style>
