<template>
    <view class="content">
		<view class="swiper-tab">  
		  <view :class="['swiper-tab-list', currentTab==0 ? 'active' : '']" data-current="0" @click="swichNav">所有</view> 
		  <view class="swiper-line"></view>
		  <view :class="['swiper-tab-list', currentTab==1 ? 'active' : '']" data-current="1" @click="swichNav">收入</view>  
		  <view class="swiper-line"></view>
		  <view :class="['swiper-tab-list', currentTab==2 ? 'active' : '']" data-current="2" @click="swichNav">支出</view>  
		</view>
		<swiper :current="currentTab" class="swiper-box" duration="300" @change="bindChange">
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="income-con">
						<view class="income-con-top">
							<view class="income-con-item">
								<view class="income-con-tl">
									可提现余额 <navigator class="income-link" url="../weibiRecharge/weibiRecharge">充值</navigator>
								</view>
								<view class="income-con-info">
									<text class="fontred">0.01</text>元
								</view>
							</view>
						</view>
						<navigator hover-class="none" url="../openagent/openagent">
							<view class="income-pay">
								<uni-icon type="mianfei" color="#e86a38" size="20"></uni-icon>
								<text>钻石代理自用省钱 分享赚钱</text>
								<view class="obtain-boss-open">开通</view>
							</view>
						</navigator>
					</view>
					<view class="card-item">
						<view class="card-item-tl">
							微商货源置顶3天
							<view class="card-item-sum">
								<text>-60个微币</text>
							</view>
						</view>
						<view class="card-item-sub">
							10-20 20:20
							<view class="card-item-detail" @click="show" data-position="bottom">查看</view>
						</view>
					</view>      
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="card-item">
						<view class="card-item-tl">
							微商货源置顶3天
							<view class="card-item-sum">
								<text>-60个微币</text>
							</view>
						</view>
						<view class="card-item-sub">
							10-20 20:20
							<view class="card-item-detail" @click="show" data-position="bottom">查看</view>
						</view>
					</view>    
				</scroll-view>
			</swiper-item>
		</swiper>	
		<view class="card-fixed">
			<navigator hover-class="none" class="card-fixed-item" url="../weibiRecharge/weibiRecharge">
				<view class="card-fixed-con">充值微币</view>
			</navigator>
		</view>
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
            }
        },
        methods: {
            bindChange: function (e) {	
				this.currentTab = e.detail.current;
			},
			swichNav: function(e){
				this.currentTab = e.currentTarget.dataset.current;
			},		
        },
		onNavigationBarButtonTap: function(){
			uni.navigateTo({
				url: '/pages/service/service'
			})
		}
    }
</script>

<style>
	page{
		height: 100%;
		overflow: hidden;
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
		margin: 20upx 30upx;
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
	
	.income-con{
		height: 250upx;
		background-color: #fff;
		border-radius: 10upx;
		box-shadow: 2upx 2upx 4upx rgba(0, 0, 0, .08);
		color: #999999;
		margin: 20rpx 30upx;
	}
	.income-con-top{
		display: flex;
		flex-direction: row;
		position: relative;
		padding: 26upx 0;
		font-size: 24upx;
		height: 95upx;
	}
	.income-con-item{
		flex: 1;
		text-align: center;
		align-items: center;
	}
	.income-con-info{
		line-height: 1;
		margin-top: 5upx;
	}
	.income-con-info text{
		/* color: #e74c2d; */
		font-weight: 500;
		font-size: 54upx;
	}
	.fontred{
		color: #e86a38;
	}
	.income-pay{
		height: 72upx;
		line-height: 72upx;
		text-align: center;
		background-color: #fcf2f4;
		border-radius: 72upx;
		margin: 0 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.income-pay text{
		font-size: 24upx;
		margin-left: 20upx;
		color: #b28431;
	}
	.income-con-tl{
		display: flex;
		justify-content: center;
	}
	.income-link{
		color: #e86a38;
		text-decoration: underline;
		margin-left: 10upx;
	}
	.obtain-boss-open {
		width: 110upx;
		height: 48upx;
		line-height: 48upx;
		background-image: linear-gradient(-45deg, #d9c085 0%, #b39a65 100%);;
		border-radius: 48upx;
		top: 18upx;
		color: #fff;
		text-align: center;
		font-size: 24upx;
		margin-left: 20upx;
	}
</style>



