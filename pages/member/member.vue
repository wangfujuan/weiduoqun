<template>
	<view class="content">
		<view class="member-top">
			<image class="avatar-120" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
			<view class="member-name">
				Hi, 150****2019
			</view>
			<view class="member-id">
				UID: 1029292929
			</view>
			<view class="member-btn" @click="openClick">
				开通超级会员
			</view>
		</view>
		<view class="member-cl b-line">
			<view class="member-cl-item center" :class="isActive == 0 ? 'member-active':''" @click="levelOne">
				普通会员
			</view>
			<view class="line"></view>
			<view class="member-cl-item center" :class="isActive == 1 ? 'member-active':''" @click="levelTwo">
				<uni-icon color="#b28431" size="18" type="huiyuan"></uni-icon>超级会员 <text class="coupons">折扣</text>
			</view>
			<view class="line"></view>
			<view class="member-cl-item center" :class="isActive == 2 ? 'member-active':''" @click="levelThree">
				<uni-icon type="huiyuan1" color="#b28431" size="18"></uni-icon>钻石代理
			</view>
		</view>
		<!-- 普通会员列表 start -->
		<view class="member-box" :class="isActive == 0 ? 'displaybox':''">
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color1">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color2">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color6">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color4">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color4">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color4">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
		</view>
		<!-- 普通会员列表 end -->
		<!-- 超级会员列表 start -->
		<view class="member-box" :class="isActive == 1 ? 'displaybox':''">
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color1">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color1">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color1">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color1">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color1">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						会员价格
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-price center">
						<view class="fontred">
							¥<text class="fontsize">199.00</text> 
						</view>
						<text class="fontunder">¥299.00</text>
						<text>1年</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 超级会员列表 end -->
		<!-- 钻石代理列表 start -->
		<view class="member-box" :class="isActive == 2 ? 'displaybox':''">
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color1">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						尊贵身份标识
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-info">
						不能自动刷新
					</view>
					<view class="member-box-info">
						名片数量，每个分类下可发布<text class="fontred">3</text>个
					</view>
				</view>
			</view>
			<view class="member-box-item b-line">
				<view class="member-box-item-lf">
					<view class="tool-item-icon block-tl-color1">
						<uni-icon size="22" color="#fff" type="diqiuquanqiu"></uni-icon>
					</view>
					<view class="member-box-item-tl">
						会员价格
					</view>
				</view>
				<view class="member-box-item-rt">
					<view class="member-box-price center">
						<view class="fontred">
							¥<text class="fontsize">299.00</text> 
						</view>
						<text class="fontunder">¥499.00</text>
						<text>1年</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 钻石代理列表 end -->
		<view v-if="isActive > 0">
			<radio-group class="pay-box" @change="radioChange">
				<view class="pay-item" v-for="item in payList" :key="item">
					<label class="pay-item-con">
						<uni-icon :size="item.size" :color="item.color" :type="item.icon"></uni-icon>{{item.value}}<radio class="pay-radio" :value="item.name" :checked="item.checked" />
					</label>
				</view>
			</radio-group>		
		</view>
		<view class="fixed-btn-wp">
			<navigator class="fixed-btn" url="">开通超级会员</navigator>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				isActive: 1,
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
			levelOne: function(){
				this.isActive = 0
			},
			levelTwo: function(){
				this.isActive = 1
			},
			levelThree: function(){
				this.isActive = 2
			},
			openClick: function(){
				uni.pageScrollTo({
					scrollTop: 2000
				})
				if(this.isActive == 0){
					this.isActive = 1;				
				}	
			}
		}
	}
</script>

<style>
	.content{
		padding-bottom: 116upx;
	}
	.fontred{
		color: #e9526e;
		font-weight: 500;
	}
	.member-top{
		/* background-image: linear-gradient(to bottom, #d5c294 0%, #c4a86a 80%, #c4a86a 100%); */
		background-image: linear-gradient(to bottom, #fdfcfb 0%, #e2d1c3 80%, #e2d1c3 100%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		line-height: 1;
		color: #654b1c;
		padding: 60upx 0;
	}
	.avatar-120{
		width: 120upx;
		height: 120upx;
		border-radius: 100%;
	}
	.member-name{
		font-weight: 500;
		margin: 30upx 0 15upx;
	}
	.member-id{
		font-size: 24upx;
	}
	.member-btn{
		width: 200upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
		background-color: #b28431;
		color: #fff;
		border-radius: 10upx;
		margin-top: 25upx;
	}
	.member-cl{
		display: flex;
		flex-direction: row;
		height: 100upx;
	}
	.member-cl-item{
		flex: 1;
		color: #8a8a8a;
	}
	.member-cl-item .uni-icon{
		margin-right: 6upx;
	}
	.line{
		width: 1px;
		height: 100%;
		transform: scaleX(0.5);
		background-color: #e5e5e5;
	}
	.member-active{
		position: relative;
		color: #aa771c;
		font-size: 30upx;
		font-weight: 500;
	}
	.member-active::before{
		position: absolute;
		content: '';
		top: -24upx;
		left: 50%;
		width: 0;
		height: 0;
		border: 12upx solid #fff;
		border-color: transparent transparent #fff transparent;
	}
	.member-active::after{
		position: absolute;
		content: '';
		height: 4upx;
		background-color: #b28431;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9;
	}
	.member-tl{
		border-left: 4upx solid #b28431;
		height: 32upx;
		line-height: 32upx;
		margin: 40upx 20upx;
		padding: 0 14upx;
	}
	.member-box{
		padding: 20upx 20upx 0;
		display: none;
	}
	.displaybox{
		display: block;
	}
	.member-box-item{
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #8a8a8a;
		font-size: 24upx;
	}
	.member-box-item-lf{
		width: 200upx;
		height: 160upx;
		flex: 0 0 200upx;
		background-color: #fcfbf8;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.member-box-item-rt{
		padding-left: 20upx;
	}
	.member-box-price{
		display: flex;
		flex-direction: row;
	}
	.fontsize{
		font-size: 34upx;
		margin-right: 10upx;
	}
	.fontunder{
		text-decoration: line-through;
		color: #aaa;
		margin-right: 10upx;
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
	.coupons{
		width: 66upx;
		height: 30upx;
		text-align: center;
		line-height: 30upx;
		background-color: #e9526e;
		color: #fff;
		font-size: 24upx;
		transform: scale(0.7);
		/* transform-origin: 100% 50%; */
	}
	.pay-box{
		display: flex;
		flex-direction: row;
		margin: 20upx 10upx 40upx;
	}
	.pay-item{
		flex: 1;
		text-align: center;
		color: #090702;
	}
	.pay-item-con{
		margin: 0 10upx;
		border: 2upx solid #e5e5e5;
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
</style>
