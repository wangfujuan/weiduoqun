<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
			<view class="edit-ls">
				<view class="edit-item b-line" @click="chooseImage">
					<view class="edit-item-lf">
						<view class="edit-item-tl">
							上传头像
						</view>
						<view class="edit-item-txt">
							良好的形象会更容易被加粉
						</view>
					</view>
					<view class="edit-item-rt">
						<image class="avatar-80" :src="avatar" mode="widthFix"></image>
						
					</view>
				</view>
				<view class="edit-item b-line" @click="show" data-position="middle">
					<view class="edit-item-lf">
						<view class="edit-item-tl">
							设置昵称
						</view>
						<view class="edit-item-txt">
							建议使用微信昵称哦
						</view>
					</view>
					<view class="edit-item-rt">
						<view class="edit-item-status center">
							{{avatarName}}
							<uni-icon type="qianjin" size="16" color="#A1A1A1"></uni-icon>
						</view>
					</view>
				</view>
				<picker :value="index" :range="genders" @change="genderChange" color="#000">
					<view class="edit-item b-line">
						<view class="edit-item-lf">
							<view class="edit-item-tl">
								选择性别
							</view>
							<view class="edit-item-txt">
								茫茫人海安能辨你是男女
							</view>
						</view>
						<view class="edit-item-rt">
							<view class="edit-item-status center">
								{{genders[index]}}
								<uni-icon type="qianjin" size="16" color="#A1A1A1"></uni-icon>
							</view>
						</view>
					</view>
				</picker>
				<view class="edit-item b-line" @click="show" data-position="bottom">
					<view class="edit-item-lf">
						<view class="edit-item-tl">
							选择属性
						</view>
						<view class="edit-item-txt">
							正确的属性让你人脉更精准，最多选择3个哦
						</view>
					</view>
					<view class="edit-item-rt">
						<view class="edit-item-status center">
							{{attrValue}}
							<uni-icon type="qianjin" size="16" color="#A1A1A1"></uni-icon>
						</view>
					</view>
				</view>
				<view class="edit-item b-line" @click="show" data-position="bottom1">
					<view class="edit-item-lf">
						<view class="edit-item-tl">
							选择行业
						</view>
						<view class="edit-item-txt">
							正确的行业让你的粉丝更优质
						</view>
					</view>
					<view class="edit-item-rt">
						<view class="edit-item-status center">
							{{slTradeName}}
							<uni-icon type="qianjin" size="16" color="#A1A1A1"></uni-icon>
						</view>
					</view>
				</view>
				<view class="edit-item b-line" @click="showMulLinkageTwoPicker">
					<view class="edit-item-lf">
						<view class="edit-item-tl">
							选择省份
						</view>
						<view class="edit-item-txt">
							正确的省市让你粉丝离你更近
						</view>
					</view>
					<view class="edit-item-rt">
						<view class="edit-item-status center">
							{{pickerText}}
							<uni-icon type="qianjin" size="16" color="#A1A1A1"></uni-icon>
						</view>
					</view>
				</view>
			</view>
			<view class="submitbtn-wp">
				<button class="block-tl-color8 submitbtn" formType="submit">提交保存</button>
			</view>
		</form>
		<view class="mask" v-show="showMask" @click="hide"></view>
		<!-- popup 设置昵称 start -->
		<view class="popup popup-middle" v-show="showState.middle">
			<view class="setavatar-wp">
				<view class="setavatar-tl">
					设置昵称
				</view>
				<view class="setavatar-subtl">
					昵称最多不超过16个字
				</view>
				<input class="setavatar-input" type="text" focus @input="bindKeyInput" />		
				<view class="setavatar-btn">
					<view class="setavatar-con">
						<view class="setavatar-cancel" @click="onTradeCancel">
							取消
						</view>
					</view>
					<view class="setavatar-con">
						<view class="setavatar-true" @click="onSetavatarTrue">
							确定
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<!-- popup 设置昵称 end -->
		<!-- popup 选择行业 start-->	
		<view class="popup popup-bottom" v-show="showState.bottom1">
			<view class="user-do">
				<view class="user-do-cancel" @click="onTradeCancel">
					取消
				</view>
				<view class="">
					选择行业
				</view>
				<view class="user-do-true" @click="onTradeTrue">
					确定
				</view>
			</view>
			<view class="user-sl-ls">
				<view class="user-sl-item" v-for="(item, index) in trades" :key="index">
					<view class="user-sl-item-con" @click="getTradeName(index, item.name)">
						<text :class="activeIndex == index ? 'active':''">{{item.name}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- popup 选择行业 end-->	
		<!-- popup 选择属性 start-->	
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
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		@onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		
	</view>
</template>

<script>
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	import cityData from '../../common/city.data.js';
	import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				avatar: '../../static/avatar/avatar_1.jpg',
				avatarName: '暂未设置',
				attrValue: '暂未设置',
				slTradeName: '暂未设置',
				pickerText: '暂未设置',
				index: 1,
				genders: ['男', '女'],
				
				pickerValueDefault: [0, 0],
				pickerValueArray:[],
				mulLinkageTwoPicker: cityData,
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
				
				// 行业
				trades: [
					{
						id: 1,
						name: '学生'
					},
					{
						id: 2,
						name: '金融业'
					},
					{
						id: 3,
						name: '电商'
					},
					{
						id: 4,
						name: '医疗'
					},
					{
						id: 5,
						name: 'IT互联网'
					},
					{
						id: 6,
						name: '房地产'
					}
				],
				activeIndex: 9999,
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
			mpvuePicker,
			uniIcon
		},
		methods: {
			genderChange: function(e){
				this.index = e.target.value
			},
			// 二级联动选择
			showMulLinkageTwoPicker() {
				this.pickerValueArray = this.mulLinkageTwoPicker
				this.mode = 'multiLinkageSelector'
				this.deepLength = 2
				this.pickerValueDefault = [0, 0]
				this.$refs.mpvuePicker.show()
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				let text = e.label;
				let index = text.indexOf('-')+1;
				text = text.substring(index);
				this.pickerText = text;
			},
			onTradeCancel(e) {
				this.hide()
			},
			onTradeTrue() {
				this.hide()
				this.slTradeName = this.tradeName
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
			getTradeName(index, name) {
				this.tradeName = name;
				this.activeIndex = index;	
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
			hide() {
				this.showMask = false
				this.showState[this.activePop] = false
			},
			checkboxChange: function (e) {
				var values = e.detail.value;
				this.values = values;	
			},
			bindKeyInput: function(e){
				this.inputValue = e.target.value
			},
			// 设置昵称
			onSetavatarTrue: function(){
				this.hide();
				this.avatarName = this.inputValue
			},
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
			}
		},
		onBackPress() {
// 			if (this.$refs.mpvuePicker.showPicker) {
// 				this.$refs.mpvuePicker.pickerCancel();
// 				return true;
// 			}
// 			if (this.$refs.mpvueCityPicker.showPicker) {
// 				this.$refs.mpvueCityPicker.pickerCancel();
// 				return true;
// 			}
		},
		onUnload() {
// 			if (this.$refs.mpvuePicker.showPicker) {
// 				this.$refs.mpvuePicker.pickerCancel()
// 			}
// 			if (this.$refs.mpvueCityPicker.showPicker) {
// 				this.$refs.mpvueCityPicker.pickerCancel()
// 			}
		}
	}
</script>

<style>
	.content{
		background-color: #f4f6fa;
	}
	.edit-ls{
		background-color: #fff;
		border-top: 2upx solid #eee;
	}
	.edit-item{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20upx;
		align-items: center;
	}
	.edit-item-lf{
		flex: 1;
		line-height: 1;
	}
	.edit-item-tl{
		padding-top: 20upx;
	}
	.edit-item-txt{
		font-size: 24upx;
		color: #a1a1a1;
		margin-top: 25upx;
	}
	.avatar-80{
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
	}
	.edit-item-status{
		color: #44B549;
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

	/* .popup-bottom text {
		line-height: 100upx;
		font-size: 32upx;
	}

	.popup .list-view {
		height: 600upx;
	} */

	/* .list-view-item {
		position: relative;
		padding: 22upx 30upx;
		overflow: hidden;
		font-size: 28upx;
	}

	.list-view-item::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 2upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	} */

	.btn-row .btn {
		margin: 20upx;
	}

	/* .desc {
		padding: 10upx 20upx;
		font-size: 30upx;
		line-height: 30upx;
		margin-top: 150upx;
		text-align: center;
	} */
	/* popup end */
	
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
	.setavatar-wp{
		display: flex;
		flex-direction: column;
		padding: 50upx 0;
		line-height: 1;
	}
	.setavatar-tl{
		text-align: center;
		font-weight: 500;
	}
	.setavatar-subtl{
		color: #A1A1A1;
		font-size: 24upx;
		text-align: center;
		margin: 25upx 0 45upx;
	}
	.setavatar-input{
		background-color: #F4F6FA;
		border-radius: 6upx;
		height: 60upx;
		line-height: 60upx;
		padding: 0 20upx;
		margin: 0 30upx;
	}
	.setavatar-btn{
		display: flex;
		flex-direction: row;
		padding-left: 15upx;
		padding-right: 15upx;
		margin-top: 36upx;
	}
	
	.setavatar-con{
		flex: 1;
		height: 64upx;
		line-height: 64upx;
		text-align: center;
		padding: 0 15upx;
	}
	.setavatar-cancel{
		border: 2upx solid #a7a7a7;
		border-radius: 10upx;
		color: #999;	
	}
	.setavatar-true{
		border: 2upx solid #44B549;
		border-radius: 10upx;
		color: #44B549;
	}
	.submitbtn-wp{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		padding: 30upx 30upx;
	}
	.submitbtn{
		height: 90upx;
		line-height: 90upx;
		text-align: center;
		color: #fff;
		font-weight: 500;
		font-size: 34upx;
		border-radius: 90upx;
	}
	.submitbtn::after{
		display: none;	
	}
</style>
