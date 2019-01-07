<template>
    <view class="content">
		<view class="swiper-tab">  
		  <view :class="['swiper-tab-list', currentTab==0 ? 'active' : '']" data-current="0" @click="swichNav">所有</view> 
		  <view class="swiper-line"></view>
		  <view :class="['swiper-tab-list', currentTab==1 ? 'active' : '']" data-current="1" @click="swichNav">开钻石代理</view>  
		  <view class="swiper-line"></view>
		  <view :class="['swiper-tab-list', currentTab==2 ? 'active' : '']" data-current="2" @click="swichNav">充值微币</view>  
		</view>
		<swiper :current="currentTab" class="swiper-box" duration="300" @change="bindChange">
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="income-con">
						<view class="income-con-top">
							<view class="income-con-item">
								<view class="income-con-tl">
									总消费
								</view>
								<view class="income-con-info">
									<text class="fontred">0.01</text>元
								</view>
							</view>
							<view class="income-line"></view>
							<view class="income-con-item">
								<view class="income-con-tl">
									开通次数
								</view>
								<view class="income-con-info padbt">
									15次
								</view>
							</view>
							<view class="income-line"></view>
							<view class="income-con-item">
								<view class="income-con-tl">
									总节省
								</view>
								<view class="income-con-info">
									<text class="fontred">15.00</text>元
								</view>
							</view>
						</view>
					</view>
					<navigator hover-class="none" url="../agentDetail/agentDetail">
					<view class="card-item">
						<view class="card-item-lf">
							<view class="card-item-tl">
								1273281919
							</view>
							<view class="card-item-info">
								钻石代理终身(限时折扣) 
							</view>
							<view class="card-item-time">
								2019-02-10 20:20
							</view>
						</view>
						<view class="card-item-rt">
							<view class="fontred">
								<view class="nowprice">
									<text>18.00</text>元
								</view>
								<view class="lastprice">
									30.00元
								</view>
							</view>
							<uni-icon type="qianjin" size="12" color="#a8a8a8"></uni-icon>
						</view>
					</view>  
					</navigator>
					<view class="card-item">
					  	<view class="card-item-lf">
					  		<view class="card-item-tl">
					  			1273281919
					  		</view>
					  		<view class="card-item-info">
					  			钻石代理终身(限时折扣) 
					  		</view>
					  		<view class="card-item-time">
					  			2019-02-10 20:20
					  		</view>
					  	</view>
					  	<view class="card-item-rt">
					  		<view class="fontred">
					  			<view class="nowprice">
					  				<text>18.00</text>元
					  			</view>
					  			<view class="lastprice">
					  				30.00元
					  			</view>
					  		</view>
					  		<uni-icon type="qianjin" size="12" color="#a8a8a8"></uni-icon>
					  	</view>
					</view>    
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="card-item">
						<view class="card-item-lf">
							<view class="card-item-tl">
								1273281919
							</view>
							<view class="card-item-info">
								钻石代理终身(限时折扣) 
							</view>
							<view class="card-item-time">
								2019-02-10 20:20
							</view>
						</view>
						<view class="card-item-rt">
							<view class="fontred">
								<view class="nowprice">
									<text>18.00</text>元
								</view>
								<view class="lastprice">
									30.00元
								</view>
							</view>
							<uni-icon type="qianjin" size="12" color="#a8a8a8"></uni-icon>
						</view>
					</view>    
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="card-item">
						<view class="card-item-lf">
							<view class="card-item-tl">
								1273281919
							</view>
							<view class="card-item-info">
								钻石代理终身(限时折扣) 
							</view>
							<view class="card-item-time">
								2019-02-10 20:20
							</view>
						</view>
						<view class="card-item-rt">
							<view class="fontred">
								<view class="nowprice">
									<text>18.00</text>元
								</view>
								<view class="lastprice">
									30.00元
								</view>
							</view>
							<uni-icon type="qianjin" size="12" color="#a8a8a8"></uni-icon>
						</view>
					</view>    
				</scroll-view>
			</swiper-item>
		</swiper>	
		<view class="card-fixed">
			<navigator hover-class="none" class="card-fixed-item" url="../agent/agent">
				<view class="card-fixed-con">去代理通道充值</view>
			</navigator>
		</view>
    </view>
</template>
<script>
    import uniIcon from '../../components/uni-icon.vue'
	
    export default {
        data() {
            return {
				currentTab: 0,
            }
        },
		components: {
			uniIcon
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
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 20upx 30upx;
		background-color: #fff;
		padding: 26upx 14upx 20upx 26upx;
		box-shadow: 2upx 2upx 4upx rgba(0, 0, 0, .08);
		border-radius: 10upx;
		line-height: 1;
		position: relative;
		align-items: center;
	}
	.card-item-rt{
		line-height: 1;
		display: flex;
		align-items: center;
	}
	.card-item-rt .uni-icon{
		margin-left: 10upx;
	}
	.lastprice{
		text-decoration: line-through;
		font-size: 24upx;
		transform: scale(0.8);
		transform-origin: right center;
		text-align: right;
		margin-top: 10upx;
	}

	.card-item-tl{
		color: #b28431;
	}
	.card-item-info{
		font-size: 26upx;
		margin: 16upx 0;
		color: #666;
	}
	.card-item-time{
		font-size: 24upx;
		color: #b2b2b2;
	}
	.income-con{
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
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.income-con-info{
		line-height: 1;
	}
	.income-con-info text{
		font-weight: 500;
		font-size: 44upx;		
	}
	.fontred{
		color: #e86a38;
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
	.income-line{
		width: 2upx;
		height: 100%;
		background-color: #e5e5e5;
		transform: scaleY(0.5);
	}
	.padbt{
		padding-bottom: 5upx;
	}
</style>



