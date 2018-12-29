<template>
	<view class="content">
		<view class="sv-icon-ls b-line">
			<view class="sv-icon b-line">
				<view class="sv-icon-con" @click="show" data-position="middle">
					<uni-icon type="weixin" color="#44B549" size="28"></uni-icon>
					<view class="sv-icon-info">
						微信客服
					</view>
				</view>
			</view>
			<view class="sv-icon b-line">
				<view class="sv-icon-con">
					<uni-icon type="qq02" size="28" color="#69aadf"></uni-icon>
					<view class="sv-icon-info">
						QQ客服
					</view>
				</view>
			</view>
			<view class="sv-icon">
				<navigator hover-class="none" class="sv-icon-con" url="../help/help">
					<uni-icon type="bangzhu" size="26" color="#e07464"></uni-icon>
					<view class="sv-icon-info">
						帮助中心
					</view>			
				</navigator>
			</view>
			<view class="sv-icon">
				<view class="sv-icon-con">
					<uni-icon type="fankui-tianchong" size="26" color="#5bc48d"></uni-icon>
					<view class="sv-icon-info">
						意见反馈
					</view>
				</view>
			</view>
		</view>
		<view class="sv-tips">客服工作时间：工作日9:00-20:00</view>
		<view class="question-tl b-line">
			常见问题
		</view>
		<view class="question-ls">
			<view class="question-item b-line">
				<view class="question-info">
					开通超级会员有什么特权？
				</view>
				<uni-icon type="qianjin" size="20" color="#808080"></uni-icon>	
			</view>
			<view class="question-item b-line">
				<view class="question-info">
					为什么二维码无法扫描？
				</view>
				<uni-icon type="qianjin" size="20" color="#808080"></uni-icon>	
			</view>
			<view class="question-item b-line">
				<view class="question-info">
					我想发文章，怎么投稿？
				</view>
				<uni-icon type="qianjin" size="20" color="#808080"></uni-icon>	
			</view>
			<view class="question-item b-line">
				<view class="question-info">
					开通超级会员有什么特权？
				</view>
				<uni-icon type="qianjin" size="20" color="#808080"></uni-icon>	
			</view>
			<view class="question-item b-line">
				<view class="question-info">
					为什么二维码无法扫描？
				</view>
				<uni-icon type="qianjin" size="20" color="#808080"></uni-icon>	
			</view>
			<view class="question-item b-line">
				<view class="question-info">
					我想发文章，怎么投稿？
				</view>
				<uni-icon type="qianjin" size="20" color="#808080"></uni-icon>	
			</view>
		</view>
		<view class="mask" v-show="showMask" @click="hide"></view>
		<!-- popup 微信客服 start-->	
		<view class="popup popup-middle" v-show="showState.middle">
			<view class="kf-tl b-line">
				联系微信客服
				<uni-icon type="shachu-xue" size="16" @click="hide"></uni-icon>
			</view>
			<text selectable="true" class="kf-con-wx">jinglingapp</text>	
			<view class="kf-con-info">
				点击虚线框内复制客服微信号
			</view>
			<image class="kf-con-code" src="../../static/code.jpg" mode="widthFix"></image>
			<view class="kf-con-info">
				扫一扫 或者 点击图片保存到手机相册
			</view>
			<view class="kf-btn block-tl-color8">
				微信号直接导入到通讯录
			</view>
		</view>
		<!-- popup 微信客服 end-->
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	export default {
		data() {
			return {
				showMask: false,
				showState: {
					top: false,
					middle: false,
					bottom: false,
					bottom1: false
				},
			};
		},
		components: {
			uniIcon
		},
		methods: {
			show: function(e) {
				var pos = e.currentTarget.dataset.position;
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
			hide: function() {
				this.showMask = false
				this.showState[this.activePop] = false
			},
		}
	}
</script>

<style>
	.sv-icon-ls{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		border-top: 1px solid #f0f0f0;
		margin-left: -2upx;
	}
	.sv-icon{
		flex: 0 0 50%;	
	}
	.sv-icon-con{
		border-left: 2upx solid #f0f0f0;
		text-align: center;
		height: 200upx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		line-height: 1;
		font-size: 26upx;
		color: #4c4c4c;
	}
	.sv-icon-info{
		margin-top: 40upx;
	}
	.question-tl{
		color: #e86a38;
		height: 90upx;
		line-height: 90upx;
		padding: 0 20upx;
	}
	.sv-tips{
		height: 70upx;
		background-color: #F4F6FA;
		line-height: 70upx;
		text-align: center;
		font-size: 22upx;
		color: #A1A1A1;
		
	}
	.question-ls{
		padding: 0 20upx;
	}
	.question-item{
		display: flex;
		flex-direction: row;
		padding: 25upx 0;
		line-height: 1.4;
		align-items: center;
	}
	.question-info{
		flex: 1;
		color: #4c4c4c;
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
		width: 620upx;
		height: 760upx;
		border-radius: 10upx;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}
	/* popup end */
	.kf-tl {
		padding: 20upx;
		color: #666;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.kf-con-wx{
		display: block;
		width: 400upx;
		text-align: center;
		border: 4upx dashed #c2c2c2;
		margin: 50upx auto 20upx;
		height: 70upx;
		line-height: 70upx;
		border-radius: 16upx;
		color: #999;
	}
	.kf-con-info{
		text-align: center;
		font-size: 22upx;
		color: #A1A1A1;
	}
	.kf-con-code{
		width: 240upx;
		height: 240upx;
		margin: 30upx auto 20upx;
		display: block;
	}
	.kf-btn{
		height: 76upx;
		line-height: 76upx;
		width: 500upx;
		margin: 30upx auto;
		border-radius: 76upx;
		color: #fff;
		text-align: center;
	}
</style>
