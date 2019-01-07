<template>
    <view class="content">
		<view class="swiper-tab">  
		  <view :class="['swiper-tab-list', currentTab==0 ? 'active' : '']" data-current="0" @click="swichNav">一级好友(13)</view> 
		  <view class="swiper-line"></view>
		  <view :class="['swiper-tab-list', currentTab==1 ? 'active' : '']" data-current="1" @click="swichNav">二级好友(2)</view>  
		</view>
		<swiper :current="currentTab" class="swiper-box" duration="300" @change="bindChange">
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="obtain-boss">
						<uni-icon size="20" color="#e86a38" type="huiyuan1"></uni-icon>
						<view class="obtain-boss-info">
							钻石代理名片高亮 每天自动刷新
						</view>
						<view class="obtain-boss-open">
							开通
						</view>
					</view>
					<view class="card-item">
						<view class="card-item-tl">
							189****9766
							<view class="card-item-sum">
								总消费：<text>199.00元</text>
							</view>
						</view>
						<view class="card-item-sub">
							注册时间：10-20 20:20
							<view class="card-item-detail" @click="show" data-position="bottom">详情</view>
						</view>
					</view>      
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="obtain-boss">
						<uni-icon size="20" color="#e86a38" type="huiyuan1"></uni-icon>
						<view class="obtain-boss-info">
							钻石代理名片高亮 每天自动刷新
						</view>
						<view class="obtain-boss-open">
							开通
						</view>
					</view>
					<view class="card-item">
						<view class="card-item-tl">
							189****9766
							<view class="card-item-sum">
								总消费：<text>199.00元</text>
							</view>
						</view>
						<view class="card-item-sub">
							注册时间：10-20 20:20
							<navigator url="" class="card-item-detail">详情</navigator>
						</view>
					</view>  
					<view class="card-item">
						<view class="card-item-tl">
							189****9766
							<view class="card-item-sum">
								总消费：<text>199.00元</text>
							</view>
						</view>
						<view class="card-item-sub">
							注册时间：10-20 20:20
							<navigator url="" class="card-item-detail">详情</navigator>
						</view>
					</view>  
				</scroll-view>
			</swiper-item>
		</swiper>	
		<view class="card-fixed">
			<view class="card-fixed-item">
				<view class="card-fixed-con">邀请好友获得奖励</view>
			</view>
		</view>
		<view class="mask" v-show="showMask" @click="hide"></view>
		<!-- popup 详情 start-->	
		<view class="popup popup-bottom" v-show="showState.bottom">
			<view class="user-do b-line">
				<view class="">
					该好友所有消费及人物明细
				</view>
				<view class="user-do-true" @click="hide">
					<uni-icon type="shachu-xue" color="#8a8a8a" size="16"></uni-icon>
				</view>
			</view>
			<view class="">
				<view class="user-self">
					<view class="user-num">
						158******77 <text>一级好友</text>
					</view>
					<view class="user-money">
						<text>总消费：</text>319.00<text>元</text>
					</view>
				</view>
				<view class="user-invitation">
					<!-- <view class="user-invite-btn">
						邀请成功
					</view> -->
					<view class="user-invite-time">
						注册时间：10-20 20：20
					</view>
					<view class="user-invite-task">
						错过代理提成：200.20元
					</view>
				</view>
				<view class="user-self-title">
					开通钻石代理后，您可以获得他消费的<text class="fontred">40%</text>提成 <view class="obtain-boss-open">开通</view>
				</view>
				<view class="user-record-title">
					<text>时间</text>
					<text class="maxlength">项目</text>
					<text>金额</text>
					<text>代理提成</text>
				</view>
				<view class="user-record">	
					<view class="user-record-item b-line">
						<view>02月01日</view>
						<view class="maxlength">充值微币</view>
						<view class="fontred">50.00</view>
						<view class="fontgray">20.00<view>(已错过)</view></view>
					</view>
					<view class="user-record-item b-line">
						<view>01月02日</view>
						<view class="maxlength">开钻石代理(终身)</view>
						<view class="fontred">399.00</view>
						<view class="fontgray">160.00<view>(已错过)</view></view>
					</view>
					<view class="user-record-item b-line">
						
					</view>
					<view class="user-record-item b-line">
						
					</view>
				</view>
			</view>
		</view>
		<!-- popup 详情 end-->
    </view>
</template>
<script>
    import uniIcon from '../../components/uni-icon.vue'
	
    export default {
        components: {
           uniIcon
        },
        data() {
            return {
				currentTab: 0,
				showMask: false,
				showState: {
					top: false,
					middle: false,
					bottom: false,
					bottom1: false
				},
            }
        },
        methods: {
            bindChange: function (e) {	
				this.currentTab = e.detail.current;
			},
			swichNav: function(e){
				this.currentTab = e.currentTarget.dataset.current;
			},
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
	page{
		height: 100%;
		overflow: hidden;
	}
	.fontgray{
		color: #a8a8a8;
	}
	.content{
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		background-color: #F4F6FA;
	}
	.card-fixed{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 20upx 10upx;
		display: flex;
		background-color: #fff;
	}
	.card-fixed-item{
		flex: 1;
		text-align: center;
	}
	.card-fixed-con{
		margin: 0 10upx;
		height: 76upx;
		line-height: 76upx;
		background-image: linear-gradient(-45deg, #44b549 0%, #5dd962 100%);
		border-radius: 6upx;
		color: #fff;
	}
	.linearyellow{
		background-image: linear-gradient(-45deg, #f09737 0%, #f4bf3e 100%);
	}
	.obtain-boss {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 30upx;
		border: 2upx solid #d8ae3d;
		height: 24upx;
		line-height: 24upx;
		padding: 30upx 20upx;
		color: #e86a38;
		border-radius: 10upx;
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
    .swiper-tab{
		display: flex;
		width: 100%;
		height: 84upx;
		line-height: 84upx;
		background-color: #fff;
		border-top: 2upx solid #E5E5E5;
		border-bottom: 2upx solid #E5E5E5;
	}
	.swiper-line{
		width: 2upx;
		background-color: #E5E5E5;
		height: 100%;
	}
	.swiper-tab-list{
		position: relative;
		font-size: 28upx;
		flex: 1;
		text-align: center;
		color: #8a8a8a;
	}
	.swiper-tab-list.active{
		color: #b28431;
	}
	.swiper-tab-list.active::after{
		content: '';
		position: absolute;
		width: 90%;
		bottom: 0;
		left: 5%;
		height: 4upx;
		background-color: #b28431;	
		box-shadow: 0 2upx 10upx rgba(178,132,49,.3);
	}
	.swiper-box {
        flex: 1;
        width: 100%;
        height: calc(100% - 84upx);
    }
	.list {
		width: 100%;
		height: 100%;
	}
	.card-item{
		margin: 30upx;
		background-color: #fff;
		padding: 20upx 24upx 20upx 24upx;
		box-shadow: 2upx 2upx 4upx rgba(0, 0, 0, .08);
		border-radius: 10upx;
		line-height: 1;
		position: relative;
	}
	.card-item-icon{
		position: absolute;
		right: 24upx;
		top: 28upx;
		
	}
	.card-item-icon .uni-icon{
		color: #8a8a8a;
	}
	.card-item-tl{
		font-weight: 500;
		margin: 10upx 0 22upx;
		font-size: 30upx;
		display: flex;
		justify-content: space-between;
	}
	.card-item-sum{
		font-size: 20upx;
		color: #e86a38;
	}
	.card-item-sum text{
		font-size: 32upx;
	}
	.card-item-info{
		color: #a1a1a1;
		font-size: 26upx;
		margin: 16upx 0;
	}
	.card-item-sub{
		color: #a1a1a1;
		font-size: 20upx;
		margin: 16upx 0 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.card-item-detail{
		color: #44B549;
		border: 2upx solid #44B549;
		border-radius: 4upx;
		width: 100upx;
		height: 40upx;
		line-height: 40upx;
		text-align: center;
		font-size: 24upx;
	}
	.card-item-sub text:not(:last-child)::after{
		content: '|';
		padding: 0 20upx;
		color: #ddd;
	}
	.card-item-edit{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 40upx;
	}
	.card-item-edit-lf{
		display: flex;
	}
	.card-item-edit-rt{
		display: flex;
	}
	.card-item-sm{
		border: 2upx solid #ddd;
		font-size: 26upx;
		padding: 6upx 10upx;
		margin-right: 10upx;
		color: #505050;
		border-radius: 4upx;
	}
	.card-item-sm.light{
		color: #e86a38;
		border-color: #e86a38;
	}
	.card-item-sm.disabled{
		color: #ccc;
	}
	.used .card-item-tl,
	.used .card-item-sub,
	.used .card-item-info,
	.used .card-item-sm,
	.used .card-item-sm.light,
	.used .card-item-icon .uni-icon{
		color: #ccc;
		border-color: #eee;
	}
	.card-tips{
		padding: 0 30upx;
		color: #bbb;
		font-size: 24upx;
	}
	.card-tips text{
		margin-right: 20upx;
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
	.popup-bottom {
		bottom: 0;
		width: 100%;
		/* text-align: center; */
	}
	.user-do{
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		position: relative;
		/* background-color: #F4F6FA; */
		/* color: #44B549; */
	}
	.user-do-true{
		position: absolute;
		right: 30upx;
		top: 0;
	}
	.card-mask-con{
		padding: 0 30upx;
		font-size: 24upx;
		line-height: 1;
	}
	.card-mask-tl{
		font-weight: 500;
		margin: 25upx 0 10upx;
	}
	.card-mask-sub{
		font-size: 22upx;
		color: #a1a1a1;
		padding-bottom: 20upx;
	}
	.card-sl-tl{
		color: #a1a1a1;
		padding: 30upx 0 20upx;
	}
	.card-sl-ls{
		display: flex;
		flex-wrap: wrap;
		margin-left: -10upx;
		margin-right: -10upx;
	}
	.card-sl-item{
		flex: 0 0 33.3333%;
		text-align: center;
		margin-bottom: 20upx;
	}
	.card-sl-item-con{
		margin: 0 10upx;
		border: 2upx solid #eee;
		height: 60upx;
		line-height: 60upx;
		border-radius: 6upx;
		font-size: 28upx;
	}
	.card-sl-active{
		background-color: #44B549;
		color: #fff;
		border-color: #44B549;
	}
	.card-sl-sum{
		color: #a1a1a1;
		padding: 10upx 0 50upx;
	}
	.fontred{
		color: #e86a38;
	}
	.fontweight{
		font-weight: 500;
	}
	.cardbtn{
		background-color: #44B549;
		color: #fff;
		height: 76upx;
		line-height: 76upx;
		border-radius: 6upx;
		margin-bottom: 20upx;
		font-size: 28upx;
	}
	.cardbtn::after{
		border: none;
	}
	.user-self{
		margin: 40upx 34upx 0 26upx;
		display: flex;
		justify-content: space-between;
		line-height: 1;
		font-size: 32upx;
	}
	.user-num{
		color: #666;	
	}
	.user-num text{
		font-size: 24upx;
		color: #a8a8a8;
	}
	.user-money{
		color: #e86a38;
	}
	.user-money text{
		font-size: 20upx;
	}
	.user-invitation{
		margin: 24upx 34upx 0 24upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #999999;
		font-size: 24upx;
	}
	.user-invite-time{
		flex: 1;
	}
	.user-self-title{
		margin-top: 20upx;
		padding: 24upx 0;
		text-align: center;
		color: #999999;
		font-size: 22upx;
		background-color: #f8f8f8;
		line-height: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		/* position: relative; */
	}
	.user-self-title .obtain-boss-open{
		position: static;
		margin-left: 10upx;
	}
	.user-record{
		padding: 0 20upx;
	}
	.user-record-title{
		font-size: 24upx;
		height: 70upx;
		line-height: 70upx;
		padding: 0 20upx;
		display: flex;
		border-bottom: 2upx solid #e5e5e5;
	}
	.user-record-item{
		display: flex;
		height: 80upx;
		line-height: 80upx;
		font-size: 24upx;
	}
	.user-record-item view{
		flex: 0 0 160upx;
		text-align: center;
	}
	.user-record-title text{
		text-align: center;
		color: #999999;
		flex: 0 0 160upx;
	}
	.user-record-title .maxlength{
		flex: 1;
	}
	.userself-record-title{
		font-size: 10upx;
		color: #414141;
		
	}
	.userself-record-title text{
		padding: 26upx 0;
		float: left;
		width: 25%;
		text-align: center;
	}
	.userself-record-title text:nth-child(3){
		color: #15af4c;
	}
	.user-record-item .maxlength{
		flex: 1;
		display: flex;
		justify-content: center;
	}
	.user-record-item .fontgray{
		display: flex;
	}
	.user-record-item .fontgray view{
		transform: scale(0.8);
		transform-origin: 0 center;
		margin-left: -28upx;
	}
</style>


