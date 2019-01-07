<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
		<view class="wbre-box">
			<view class="wbre-item">
				<view class="wbre-item-con">
					<view class="wbre-item-subtl">
						50微币
					</view>
					<view class="wbre-item-info">
						无赠送
					</view>
					<view class="wbre-item-tl">
						¥ <text>50元</text>
					</view>
				</view>		
			</view>
			<view class="wbre-item">
				<view class="wbre-item-con">
					<view class="wbre-item-subtl">
						50微币
					</view>
					<view class="wbre-item-info">
						送10微币
					</view>
					<view class="wbre-item-tl">
						¥ <text>100元</text>
					</view>
				</view>		
			</view>
			<view class="wbre-item">
				<view class="wbre-item-con">
					<view class="wbre-item-subtl">
						200微币
					</view>
					<view class="wbre-item-info">
						送40微币
					</view>
					<view class="wbre-item-tl">
						¥ <text>200元</text>
					</view>
				</view>		
			</view>
			<view class="wbre-item">
				<view class="wbre-item-con">
					<view class="wbre-item-subtl">
						300微币
					</view>
					<view class="wbre-item-info center">
						<uni-icon type="huiyuan" color="#dbba7d" size="12"></uni-icon>送超级会员1年
					</view>
					<view class="wbre-item-tl">
						¥ <text>300元</text>
					</view>
				</view>		
			</view>
			<view class="wbre-item wbre-active">
				<view class="wbre-item-con">
					<view class="wbre-item-subtl">
						600微币
					</view>
					<view class="wbre-item-info center">
						<uni-icon type="huiyuan1" color="#dbba7d" size="12"></uni-icon>送钻石代理一年
					</view>
					<view class="wbre-item-tl">
						¥ <text>600元</text>
					</view>
					<view class="trend">
						推荐
					</view>
				</view>		
			</view>
			<view class="wbre-item">
				<view class="wbre-item-con">
					<view class="wbre-item-subtl">
						任意微币数量
					</view>
					<view class="wbre-item-info">
						<input type="text" value="10" />
					</view>
					<view class="wbre-item-tl">
						¥ <text>10元</text>
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
		</view>
		<!-- <view class="wbre-tips">
			<view class="">
				点击支付表示你同意<text class="greenfont">《微多群用户服务协议》</text>
			</view>
			<view class="greenfont">
				遇到问题？点此反馈
			</view>
		</view> -->
		<view class="wb-earn-tl">
			微币的用途
		</view>
		<view class="wbre-use">
			<view class="wbre-use-item">
				<view class="tool-item-icon">
					<uni-icon type="remen" color="#c18f35" size="22"></uni-icon>
				</view>
				<view class="wbre-use-item-tl">
					坐等爆粉
				</view>
				<view class="wbre-use-item-info">
					每天被加百人
				</view>
			</view>
			<view class="wbre-use-item">
				<view class="tool-item-icon">
					<uni-icon type="remen" color="#c18f35" size="22"></uni-icon>
				</view>
				<view class="wbre-use-item-tl">
					多号爆粉
				</view>
				<view class="wbre-use-item-info">
					最多绑定3个号
				</view>
			</view>
			<view class="wbre-use-item">
				<view class="tool-item-icon">
					<uni-icon type="remen" color="#c18f35" size="22"></uni-icon>
				</view>
				<view class="wbre-use-item-tl">
					名片置顶
				</view>
				<view class="wbre-use-item-info">
					曝光量+10倍
				</view>
			</view>
			<view class="wbre-use-item">
				<view class="tool-item-icon">
					<uni-icon type="remen" color="#c18f35" size="22"></uni-icon>
				</view>
				<view class="wbre-use-item-tl">
					产品推广
				</view>
				<view class="wbre-use-item-info">
					帮您招商代理
				</view>
			</view>
			<view class="wbre-use-item">
				<view class="tool-item-icon">
					<uni-icon type="remen" color="#c18f35" size="22"></uni-icon>
				</view>
				<view class="wbre-use-item-tl">
					名片引流
				</view>
				<view class="wbre-use-item-info">
					代理名片数量无限制
				</view>
			</view>
			<view class="wbre-use-item">
				<view class="tool-item-icon">
					<uni-icon type="remen" color="#c18f35" size="22"></uni-icon>
				</view>
				<view class="wbre-use-item-tl">
					全网散客
				</view>
				<view class="wbre-use-item-info">
					无微商无死粉
				</view>
			</view>
			<view class="wbre-use-item">
				<view class="tool-item-icon">
					<uni-icon type="remen" color="#c18f35" size="22"></uni-icon>
				</view>
				<view class="wbre-use-item-tl">
					抽奖活动
				</view>
				<view class="wbre-use-item-info">
					小投入大回报
				</view>
			</view>
			<view class="wbre-use-item">
				<view class="tool-item-icon">
					<uni-icon type="remen" color="#c18f35" size="22"></uni-icon>
				</view>
				<view class="wbre-use-item-tl">
					人物悬赏
				</view>
				<view class="wbre-use-item-info">
					即将退出
				</view>
			</view>
			<view class="wbre-use-item">
				<view class="tool-item-icon">
					<uni-icon type="remen" color="#c18f35" size="22"></uni-icon>
				</view>
				<view class="wbre-use-item-tl">
					更多服务
				</view>
				<view class="wbre-use-item-info">
					更能不断退出
				</view>
			</view>
		</view>	
		<view class="wbre-rule">
			<view class="wbre-rule-item">微币充值说明</view>
			<view class="wbre-rule-item">1.微币和人民币比例1:1</view>
			<view class="wbre-rule-item">2.多次购买微币数量和赠送的会员服务时间会累加</view>
			<view class="wbre-rule-item">3.微币为虚拟物品，不能提现</view>
			<view class="wbre-rule-item">4.充值微币后不可以退款</view>
			<view class="wbre-rule-item">5.每次充值微币不小于10元</view>
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
			<button formType="submit" class="fixed-btn">确认开通</button>
		</view>
		</form>	
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	export default {
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
		},
		components: {
			uniIcon
		},
		methods: {
			radioChange: function (e) {
				console.log('radio发生change事件，携带value值为：' + e.detail.value)
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
	button::after{
		border: none
	}
	.content{
		background-color: #090702;
		color: #c18f35;
		padding-bottom: 300upx;
	}
	.wbre-box{
		display: flex;
		flex-direction: row;
		flex-flow: wrap;
		padding: 20upx;
	}
	.wbre-item{
		flex: 0 0 33.3333%;
		margin-bottom: 20upx;
	}
	.wbre-item-con{
		margin: 0 10upx;
		border-radius: 10upx;
		border: 2upx solid #654b1c;
		background-image: linear-gradient(-45deg, #37290f 0%, #463413 100%);
		text-align: center;
		padding: 20upx 0;
		position: relative;
	}
	.trend{
		position: absolute;
		right: -10upx;
		top: -10upx;
		background-color: #c64b37;
		font-size: 22upx;
		color: #f5ddda;
		height: 40upx;
		border-radius: 40upx 40upx 40upx 0;
		padding: 0 10upx;
		box-shadow: 4upx 4upx 16upx rgba(198, 75, 55, .5);
	}
	.wbre-item-subtl{
		font-size: 26upx;
		margin-bottom: 6upx;
	}
	.wbre-item-info{
		font-size: 22upx;
		color: #936d29;
		height: 36upx;
		line-height: 36upx;
	}
	.wbre-item-info input{
		margin: 0 30upx;
		background-color: rgba(0,0,0,.1);
		height: 36upx !important;
		border-radius: 4upx;
		font-size: 28upx;
	}
	.wbre-item.wbre-active .wbre-item-con{
		background-image: linear-gradient(-45deg, #846224 0%, #c18f35 100%);
		border-color: #b28431;
		box-shadow: 4upx 4upx 16upx rgba(178, 132, 49, .5);
	}
	.wbre-item.wbre-active .wbre-item-subtl,
	.wbre-item.wbre-active .wbre-item-tl{
		color: #e8d2ac;
	}
	.wbre-item.wbre-active .wbre-item-info{
		color: #dbba7d;
	}
	.pay-box{
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 20upx 0 40upx;
	}
	.pay-item{
		flex: 1;
		text-align: center;
		color: #090702;
	}
	.pay-item-con{
		margin: 0 10upx;
		background-color: #f9f3e9;
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
	.paybtn-wp{
		padding: 0 30upx;
	}
	.submitbtn{	
		width: 100%;
		background-image: linear-gradient(-45deg, #846224 0%, #c18f35 100%);
		color: #e8d2ac;
	}
	.wb-earn-tl{
		text-align: center;
		margin: 100upx 0 30upx;
		position: relative;
	}
	.wb-earn-tl::before{
		position: absolute;
		z-index: 1;
		content: '';
		width: 400upx;
		height: 2upx;
		left: 50%;
		bottom: -20upx;
		margin-left: -200upx;
		background-color: #654b1c;
		background-image: linear-gradient(to right, #090702 0%, #654b1c 50%, #090702 100%);
	}
	.wb-earn-tl::after{
		content: '';
		position: absolute;
		z-index: 2;
		width: 10upx;
		height: 10upx;
		border-left: 2upx solid #654b1c;
		border-bottom: 2upx solid #654b1c;
		transform: rotate(-45deg);
		bottom: -26upx;
		left: 50%;
		background-color: #090702;
		margin-left: -6upx;
	}
	.tool-item-icon{
		background-image: linear-gradient(-45deg, #37290f 0%, #564018 100%);
		border: 2upx solid #654b1c;
		
	}
	.wbre-item-tl{
		margin-top: 20upx;
		font-size: 24upx;
		line-height: 1;
	}
	.wbre-item-tl text{
		font-size: 36upx;
	}
	
	.wbre-item-lf{
		display: flex;
		flex-direction: row;
		font-size: 32upx;
		flex: 1;
		align-items: center;
	}
	.wbre-tips{
		text-align: center;
		color: #aaa;
		line-height: 1.8;
		margin: 10upx 0 20upx;
	}
	.wbre-use{
		display: flex;
		flex-direction: row;
		flex-flow: wrap;
		padding-bottom: 35upx;
	}
	.wbre-use-item{
		flex: 0 0 33.3333%;
		text-align: center;
		width: 33.3333%;
		padding-top: 35upx;
		line-height: 1;
	}
	.tool-item-icon {
		position: relative;
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
	}
	.wbre-use-item-tl{
		margin-top: 20upx;
		margin-bottom: 12upx;
	}
	.wbre-use-item-info{
		font-size: 22upx;
		color: #936d29;
	}
	.wbre-rule{
		padding: 0 30upx;
		font-size: 24upx;
		margin: 100upx 0 40upx;
		line-height: 1.8;
		color: #745620;
	}
	.opensum{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(255,255,255,.99);
		padding: 20upx 20upx;
		font-size: 26upx;
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
</style>
