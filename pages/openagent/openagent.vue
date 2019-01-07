<template>
	<view class="content">
		<navigator hover-class="none" url="../member/member">
		<view class="openagent-top">
			<view class="openagent-top-subtl">
				30多项高级特权
			</view>
			<view class="openagent-top-tl">
				<uni-icon type="huiyuan1" size="30"></uni-icon>尊贵钻石代理
			</view>
			<view class="openagent-top-btn">
				每天几分钱 开启百万大生意
			</view>
		</view>
		</navigator>
		<view class="wbre-box">
			<view class="wbre-item">
				<view class="wbre-item-con">
					<view class="wbre-item-subtl">
						<uni-icon type="huiyuan1" size="18" color="#ffc107"></uni-icon>钻石代理3个月
					</view>
					<view class="wbre-item-tl">
						¥ <text>298.00</text>
					</view>
				</view>		
			</view>
			<view class="wbre-item">
				<view class="wbre-item-con">
					<view class="wbre-item-subtl">
						<uni-icon type="huiyuan1" size="18" color="#ffc107"></uni-icon>钻石代理6个月
					</view>
					<view class="wbre-item-tl">
						¥ <text>398.00</text>
					</view>
				</view>		
			</view>
			<view class="wbre-item">
				<view class="wbre-item-con">
					<view class="wbre-item-subtl">
						<uni-icon type="huiyuan1" size="18" color="#ffc107"></uni-icon>钻石代理1年
					</view>
					<view class="wbre-item-tl">
						¥ <text>698.00</text>
					</view>
				</view>		
			</view>
			<view class="wbre-item">
				<view class="wbre-item-con active-wb-item">
					<view class="wbre-item-subtl">
						<uni-icon type="huiyuan1" size="18" color="#ffc107"></uni-icon>钻石代理终身<text>限时折扣</text>
					</view>
					<view class="wbre-item-tl">
						¥ <text>398.00</text>
					</view>
					<view class="active-icon"></view>
				</view>		
			</view>
		</view>
		<radio-group class="pay-box" @change="radioChange">
			<view class="pay-item" v-for="item in payList" :key="item">
				<label class="pay-item-con">
					<uni-icon :size="item.size" :color="item.color" :type="item.icon"></uni-icon>{{item.value}}<radio class="pay-radio" :value="item.name" :checked="item.checked" />
				</label>
			</view>
		</radio-group>
		<view class="open-tips">
			<view class="open-tips-tl">
				温馨提示
			</view>
			<view class="open-tips-line">
				1.请无比确保您输入的会员手机号是正确的	
			</view>
			<view class="open-tips-line">
				2.该手机号
			</view>
			<view class="open-tips-line">
				3.开通则代表同意<text>会员充值协议</text>
			</view>
		</view>
		<view class="opensum">
			<view class="opensum-line opengray">
				<text>原价：</text>
				<text>¥999.00</text>
			</view>
			<view class="opensum-line opengray">
				<text>优惠立减：</text>
				<text>¥621.00</text>
			</view>
			<view class="opensum-line">
				<text>应付金额：</text>
				<text class="fontred">¥368.00</text>
			</view>
			<navigator class="fixed-btn" url="">确认开通</navigator>
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
				payList: [
					{
						name: 'zhifubaozhifu',
						value: '支付宝支付',
						icon: 'zhifubaozhifu',
						color: '#459ae5',
						size: '22',
						checked: true
					},
					{
						name: 'weixinzhifu',
						value: '微信支付',
						icon: 'weixinzhifu',
						color: '#44b549',
						size: '21'
					}
				]
			};
		}
	}
</script>

<style>
	.content{
		background-color: #F4F6FA;
		padding-bottom: 300upx;
	}
	.openagent-top{
		padding: 50upx 0;
		color: #fed388;
		background-image: linear-gradient(45deg, #463413 20%, #090702 60%, #463413 100%); 
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	.openagent-top-subtl{
		font-size: 24upx;
		position: relative;
		display: flex;
		align-items: center;
	}
	.openagent-top-subtl::after,
	.openagent-top-subtl::before{
		content: "";
		width: 40upx;
		height: 2upx;
		background-color: #fff;
		display: inline-block;
	}
	.openagent-top-subtl::before{
		margin-right: 20upx;
	}
	.openagent-top-subtl::after{
		margin-left: 20upx;
	}
	.openagent-top-tl{
		font-size: 48upx;
		padding: 10upx 0;
		display: flex;
		align-items: center;
		letter-spacing: 6upx;
	}
	.openagent-top-btn{
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		background-image: linear-gradient(to bottom, #fff2da 20%, #e3cea6 95%, #fff2da 100%);
		font-size: 24upx;
		border-radius: 60upx;
		padding: 0 80upx;
		color: #b28431;
		margin-top: 20upx;
	}
	.fixed-btn{
		background-color: #b28431;
		height: 76upx;
		line-height: 76upx;
		border-radius: 10upx;
		text-align: center;
		color: #fff;
		font-size: 30upx;
		font-weight: 500;
		margin-top: 10upx;
	}
	.pay-box{
		display: flex;
		flex-direction: row;
		margin: 0 10upx 40upx;
	}
	.pay-item{
		flex: 1;
		text-align: center;
		color: #090702;
	}
	.pay-item-con{
		margin: 0 10upx;
		background-color: #fff;
		height: 68upx;
		line-height: 68upx;
		border-radius: 10upx;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 20upx;
	}
	.pay-item-con .uni-icon{
		margin-right: 10upx;
	}
	.pay-radio{
		position: absolute;
		right: 8upx;
	}
	.open-tips{
		background-color: #fff;
		padding: 40upx 60upx 30upx;
	}
	.open-tips-tl{
		padding-bottom: 20upx;
		text-align: center;
		color: #b2b2b2;
	}
	.open-tips-line{
		font-size: 26upx;	
		color: #999;
		margin-bottom: 14upx;
	}
	.open-tips-line text{
		color: #b28431;
		text-decoration: underline;
	}
	.wbre-box{
		display: flex;
		flex-direction: row;
		flex-flow: wrap;
		padding: 20upx 10upx 0;
	}
	.wbre-item{
		flex: 0 0 50%;
		margin-bottom: 20upx;
	}
	.wbre-item-con{
		margin: 0 10upx;
		border-radius: 10upx;
		border: 2upx solid #e5e5e5;
		background: #fff;
		text-align: center;
		padding: 35upx 0;
		position: relative;
	}
	.wbre-item-tl{
		margin-top: 10upx;
		font-size: 24upx;
		line-height: 1;
		color: #b28431;
	}
	.wbre-item-tl text{
		font-size: 36upx;
		font-weight: 500;
	}
	.wbre-item-subtl{
		font-size: 26upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.wbre-item-subtl .uni-icon{
		margin-bottom: 4upx;
		margin-right: 10upx;
	}
	.wbre-item-subtl text{
		color: #e86a38;
		transform: scale(0.8);
		transform-origin: 20upx center;
	}
	.active-wb-item{
		border-color: #b28431;
	}
	.active-wb-item .wbre-item-tl{
		color: #e86a38;
	}
	.active-wb-item::after{
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		right: 0;
		bottom: 0;
		border: 16upx solid;
		border-color: transparent #b28431 #b28431 transparent;
	}
	.active-icon{
		position: absolute;
		right: 4upx;
		bottom: 4upx;
		z-index: 9;
		transform: rotate(225deg);
	}
	.active-icon::after,
	.active-icon::before{
		content: "";
		background-color: #fff;
		display: block;
	}
	.active-icon::before{
		width: 8upx;
		height: 2upx;
	}
	.active-icon::after{
		height: 12upx;
		width: 2upx;
	}
	.opensum{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		padding: 20upx 20upx;
		font-size: 26upx;
		border-top: 2upx solid #e5e5e5;
	}
	.opensum-line{
		/* height: 70upx;
		line-height: 70upx; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.opengray{
		color: #b2b2b2;
	}
	.fontred{
		color: #e86a38;
		font-size: 34upx;
		font-weight: 500;
	}
</style>
