<template>
	<view class="content">
		<navigator hover-class="none" url="../member/member">
			<view class="obtain-boss">
				<uni-icon size="20" color="#a46c17" type="Spy"></uni-icon>
				<view class="obtain-boss-info">
					钻石代理 好友消费累计提成高达50%
				</view>
				<view class="obtain-boss-open">
					开通
				</view>
			</view>
		</navigator>
		<view class="will-tip">
			<view class="will-tip-info">
				2小时内开通钻石代理，能领取错过的提成
			</view>
			<view class="will-tip-info">
				超过2小时，将会过期不能领取
			</view>
		</view>
		<view class="will-item">
			<view class="will-item-tl">
				<view class="will-item-tl-lf">
					错过 <text>99.50</text>元 
				</view>
				<view class="will-item-tl-rt" @click="show" data-position="middle">
					可领取
				</view>
			</view>
			<view class="will-item-info">
				<view class="will-item-tl-lf">
					二级好友187****1837开通钻石代理399元
				</view>
				<view class="">
					10-29 20:20
				</view>
			</view>
		</view>
		<view class="will-item">
			<view class="will-item-tl">
				<view class="will-item-tl-lf">
					错过 <text>128.50</text>元 
				</view>
				<view class="will-item-tl-rt gameover">
					已过期
				</view>
			</view>
			<view class="will-item-info">
				<view class="will-item-tl-lf">
					二级好友187****1837开通钻石代理399元
				</view>
				<view class="">
					10-29 20:20
				</view>
			</view>
		</view>
		<view class="submitbtn-wp">
			<button class="block-tl-color8 submitbtn" formType="submit">邀请好友获得奖励</button>
		</view>
		<view class="mask" v-show="showMask" @click="hide"></view>
		<!-- popup 可领取 start-->	
		<view class="popup popup-middle" v-show="showState.middle">
			<view class="kf-tl b-line">
				<text>您还不是钻石代理</text>
				<uni-icon type="shachu-xue" size="16" @click="hide"></uni-icon>
			</view>
			<view class="will-pop">
				2019-10-29 19:00前开通能补领改笔提成
			</view>
			<navigator hover-class="none" url="../member/member">
			<view class="kf-btn block-tl-color8 center">
				立即开通领取
			</view>
			</navigator>
		</view>
		<!-- popup 可领取 end-->
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
				},
				activePop: 'middle'
			}
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
	.content{
		background-color: #F4F6FA;
	}
	.obtain-boss {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 20upx;
		border: 2upx solid #d8ae3d;
		height: 24upx;
		line-height: 24upx;
		padding: 30upx 20upx;
		color: #a46c17;
		border-radius: 10upx;
		background-color: #fff;
	}
	
	.obtain-boss-info {
		padding-left: 10upx;
	}
	
	.obtain-boss-open {
		position: absolute;
		right: 20upx;
		width: 110upx;
		height: 48upx;
		line-height: 48upx;
		background-image: linear-gradient(-45deg, #d9c085 0%, #b39a65 100%);;
		border-radius: 48upx;
		top: 18upx;
		color: #fff;
		text-align: center;
		font-size: 24upx;
	}
	.will-tip{
		color: #e74c2d;
		font-size: 22upx;
		text-align: center;
		line-height: 1.4;
	}
	.will-item{
		background-color: #fff;
		margin: 10upx 30upx 20upx;
		padding: 20upx;
		border-radius: 10upx;
		box-shadow: 0 4upx 10upx rgba(0,0,0,.05);
		color: #8a8a8a;
		font-size: 24upx;
	}
	.will-item-tl,.will-item-info{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.will-item-info{
		margin-top: 15upx;
	}
	.will-item-tl-lf text{
		font-size: 40upx;
		font-weight: 500;
		color: #666;
	}
	.will-item-tl-rt{
		background-color: #44B549;
		color: #fff;
		font-size: 26upx;
		height: 50upx;
		line-height: 50upx;
		padding: 0 20upx;
		border-radius: 6upx;
	}
	.gameover{
		background-color: #bbb;
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
	.masktop{
		position: fixed;
		z-index: 998;
		top: 180upx;
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
		height: 360upx;
		border-radius: 10upx;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}
	
	/* popup end */
	.kf-tl {
		padding: 0 20upx;
		height: 80upx;
		color: #666;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.kf-tl text{
		flex: 1;
		text-align: center;
	}
	.will-pop{
		text-align: center;
		color: #8A8A8A;
		padding: 50upx 0;
		font-size: 26upx;
	}
	.kf-btn{
		height: 76upx;
		line-height: 76upx;
		width: 250upx;
		margin: 30upx auto;
		border-radius: 76upx;
		color: #fff;
		text-align: center;
	}
	.popup-bottom {
		bottom: 0;
		width: 100%;
	}
	
</style>
