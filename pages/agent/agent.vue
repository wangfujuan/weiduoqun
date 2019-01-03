<template>
	<view class="content">
		<view class="content-pad">
			<view class="white">
				<navigator hover-class="none" url="../selectGroup/selectGroup">
					<view class="rc-line b-line">						
						<view class="rc-line-lf">
							手机号
						</view>
						<input type="text" placeholder-style="color: #c7c7c7" placeholder="要开通的会员注册手机号" value="" />					
					</view>
				</navigator>
				<navigator hover-class="none" url="../agentList/agentList">
				<view class="rc-line b-line">
					<view class="rc-line-lf">
						开通类型
					</view>
					<view class="rc-select">
						请选择开通类型
					</view>
					<uni-icon color="#acacac" size="16" type="qianjin"></uni-icon>
				</view>
				</navigator>
				<view class="rc-line">
					<view class="rc-line-lf">
						代理价
					</view>
					<view class="rc-select">
						<view class="fontred">
							¥0.00
						</view>
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
			<view class="paybtn-wp">
				<button formType="submit" class="fixed-btn">提交</button>		
			</view>
			<navigator hover-class="none" class="morelist" url="../agentRecord/agentRecord">查看开通的会员记录</navigator>
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
			<!-- <view class="agent-tips">
				<view class="agent-tips-tl">
					重要提示
				</view>
				<view class="agent-tips-line">
					1.请无比确保您输入的会员手机号是正确的	
				</view>
				<view class="agent-tips-line">
					2.该手机号
				</view>
				<view class="agent-tips-line">
					3.开通则代表同意<text>会员充值协议</text>
				</view>
			</view> -->
		</view>
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
			
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: "/pages/help/help"
			})
		}
	}
</script>

<style>
	.content{
		background-color: #F4F6FA;
	}
	.rc-line{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0 20upx;
		height: 100upx;
	}
	.rc-line-lf{
		flex: 0 0 120upx;
		text-align: right;
	}
	.rc-line input,.rc-select{
		flex: 1;
		padding-left: 30upx;
		color: #c7c7c7;
	}
	.rc-select .fontred{
		color: #e86a38;
		font-size: 44upx;
	}
	.pay-box{
		display: flex;
		flex-direction: row;
		margin: 20upx -10upx 40upx;
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
	/* .paybtn-wp{
		padding: 0 30upx;
	} */
	.submitbtn{	
		width: 100%;
		background-image: linear-gradient(-45deg, #846224 0%, #c18f35 100%);
		color: #fff;
	}
	.morelist{
		text-align: center;
		text-decoration: underline;
		color: #666;
		margin: 40upx 0;
	}
	.agent-tips-tl{
		color: #A8A8A8;
		margin-bottom: 10upx;
	}
	.agent-tips-line{
		font-size: 26upx;
		color: #999;
	}
	.agent-tips-line text{
		color: #b28431;
		text-decoration: underline;
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
	
</style>
