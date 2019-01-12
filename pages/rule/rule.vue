<template>
	<view class="content">
		<view class="rule-tl">签到奖励有哪些？</view>
		<view class="rule-line">每天签到可以免费获得微币，坚持每天签到，奖励会越来越高，千万别中断哦~</view>
		<view class="rule-tl">签到奖励明细？</view>
		<view class="rule-line">普通会员每天签到随机奖励<text>0.2~1</text>微币，钻石代理每天签到随机奖励<text>0.5-2微币</text></view>
		<view class="rule-line">连续签到第3天 一次性奖励<text>3</text>微币</view>
		<view class="rule-line">连续签到第7天 一次性奖励<text>5</text>微币</view>
		<view class="rule-line">连续签到第15天 一次性奖励<text>10</text>微币</view>
		<view class="rule-line">连续签到第30天 一次性奖励<text>20</text>微币</view>
		<view class="rule-line">连续签到第45天 一次性奖励<text>30</text>微币</view>
		<view class="rule-line">连续签到第60天 奖励钻石代理30天</view>
		<view class="rule-tl">签到中断后怎么计算？</view>
		<view class="rule-line">如果连续签到在其中某一天中断了签到，那么签到会从零开始哦，所以每天千万别忘记来点击下签到，简单又有惊喜呀</view>
		<view class="rule-tl">每天免费赚微币？</view>
		<view class="rule-line">每天签到后，可通过赚微币小任务就能轻松获得更多的微币哦，每天完成精准人脉、精选客源、分享奖励、名片 </view>
		<view class="rule-line">互粉等就能获得很多微币，可以免费兑换使用更多的高级功能哦</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.content{
		padding: 0 30upx 30upx;
		line-height: 1.8;
		border-top: 2upx solid #E5E5E5;
	}
	.rule-tl{
		font-weight: 500;
		margin: 30upx 0 10upx;	
	}
	.rule-line{
		color: #505050;
	}
	.rule-line text{
		color: #eb6644;
	}
</style>
