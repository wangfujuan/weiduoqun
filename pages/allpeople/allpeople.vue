<template>
	<view class="content">
		<view class="allpeople-top">
			<view class="allpeople-top-tl">
				<text>大数据</text>
				<text>云计算</text>
				<text>好出单</text>
			</view>
			<view class="allpeople-top-info">
				今日新增数据：302291条
			</view>
		</view>
		<view class="obtain-boss">
			<uni-icon size="20" color="#a46c17" type="Spy"></uni-icon>
			<view class="obtain-boss-info">
				老板赚钱特权 每笔收益最高奖励50%
			</view>
			<view class="obtain-boss-open">
				开通
			</view>
		</view>
		<view class="marginlr">
			<view class="white">
				<view class="rc-line b-line">
					<view class="rc-line-lf">
						<view class="block-tl-icon block-tl-color8">
							<uni-icon type="diqiuquanqiu" color="#fff" size="13"></uni-icon>
						</view>
						限定地区
					</view>
					<view class="rc-select">
						筛选散客地区
					</view>
					<uni-icon color="#acacac" size="16" type="qianjin"></uni-icon>
				</view>
				<view class="rc-line b-line">
					<view class="rc-line-lf">
						<view class="block-tl-icon block-tl-color8">
							<uni-icon type="diqiuquanqiu" color="#fff" size="13"></uni-icon>
						</view>
						散客性别
					</view>
					<view class="rc-select">
						筛选散客性别
					</view>
					<uni-icon color="#acacac" size="16" type="qianjin"></uni-icon>
				</view>
				<view class="rc-line b-line">
					<view class="rc-line-lf">
						<view class="block-tl-icon block-tl-color8">
							<uni-icon type="diqiuquanqiu" color="#fff" size="13"></uni-icon>
						</view>
						匹配行业
					</view>
					<view class="rc-select">
						选择散客行业
					</view>
					<uni-icon color="#acacac" size="16" type="qianjin"></uni-icon>
				</view>
				<navigator hover-class="none" url="../openagent/openagent">
				<view class="rc-line">
					<view class="rc-line-lf">
						<view class="block-tl-icon block-tl-color8">
							<uni-icon type="diqiuquanqiu" color="#fff" size="13"></uni-icon>
						</view>
						高级过滤
					</view>
					<view class="rc-select">
						过滤同行微商死粉
					</view>
					<uni-icon color="#acacac" size="16" type="qianjin"></uni-icon>
				</view>
				</navigator>
			</view>
		</view>
		<view class="open-tips">
			<view class="open-tips-tl">
				重要提示
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
		<view class="fixed-btn-wp">
			<navigator class="fixed-btn" url="">确认</navigator>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		components: {
			uniIcon,
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.content{
		background-color: #F4F6FA;
	}
	.allpeople-top{
		background-color: #44B549;
		color: #fff;
		text-align: center;
		padding: 30upx 0;
	}
	.allpeople-top-tl{
		font-size: 44upx;
		text-align: center;
		padding: 20upx 0;
		line-height: 1;
	}
	.allpeople-top-tl text{
		padding: 0 20upx;
	}
	.marginlr{
		margin: 0 20upx;
	}
	.fixed-btn-wp{
		background-color: #fff;
		padding: 20upx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		bottom: 0;
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
	.rc-line{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0 20upx;
		height: 100upx;
	}
	.rc-line-lf{
		flex: 0 0 180upx;
		display: flex;
		align-items: center;
		/* text-align: right; */
	}
	.rc-line input,.rc-select{
		flex: 1;
		padding-left: 30upx;
		color: #c7c7c7;
	}
</style>
