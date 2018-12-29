<template>
	<view class="content">
		<view class="content-pad">
			<view class="white">
				<view class="import-tl b-line">	
					<view class="import-tl-txt">
						导入群主手机号到通讯录
					</view>
					<view class="block-tl-rt">
						<view class="block-tl-rt-item">
							<uni-icon type="shuaxin" size="12"></uni-icon>							
							<text class="mdtxt">换一批</text>
						</view>
					</view>
				</view>
				<view class="import-user">
					<image v-for="avatar in avatars" :key="avatar.id" class="avatar-70" :src="avatar.url" mode=""></image>
				</view>
				<view class="import-btn" @click="show" data-position="middle">
					立即导入通讯录
				</view>
				<view class="tips-tl">
					重要提示：
				</view>
				<view class="tips-con">
					<view class="">1、导入通讯录之后，首先在手机桌面找到电话本或者联系人图标，我们精心准备了一个简单的十分钟介绍视频，方便你快速了解uni-app的主要特征</view>
					<view class="">2、导入通讯录之后，首先在手机桌面找到电话本或者联系人图标，我们精心准备了一个简单的十分钟介绍视频，方便你快速了解uni-app的主要特征</view>
					<view class="">3、导入通讯录之后，首先在手机桌面找到电话本或者联系人图标，我们精心准备了一个简单的十分钟介绍视频，方便你快速了解uni-app的主要特征</view>
					<view class="">4、导入通讯录之后，首先在手机桌面找到电话本或者联系人图标，我们精心准备了一个简单的十分钟介绍视频，方便你快速了解uni-app的主要特征</view>
				</view>
			</view>
			<view class="white">
				<view class="other-use">
					<view class="other-use-item center">
						<uni-icon type="weixin" color="#44b549"></uni-icon>
						返回微信查看
					</view>
					<view class="other-use-item center">
						<uni-icon type="jiufuqianbaoicon05" size="18" color="#eb644a"></uni-icon>
						清理通讯录
					</view>
				</view>
			</view>
			<view class="white">
				<view class="steps">
					<view class="steps-tl">
						<text>操作步骤</text>
					</view>
					<view class="steps-txt">
						导入通讯录之后，首先在手机桌面找到电话本或者联系人图标，我们精心准备了一个简单的十分钟介绍视。
					</view>
					<view class="steps-txt steps-bold">
						步骤一
					</view>
					<view class="steps-txt">
						导入通讯录之后，首先在手机桌面找到电话本或者联系人图标，我们精心准备了一个简单的十分钟介绍视。
					</view>
					<image src="../../static/product.png" mode="widthFix"></image>
					<view class="steps-txt steps-bold">
						步骤二
					</view>
					<view class="steps-txt">
						导入通讯录之后，首先在手机桌面找到电话本或者联系人图标，我们精心准备了一个简单的十分钟介绍视。
					</view>
					<image src="../../static/product.png" mode="widthFix"></image>
					<view class="steps-txt colorred">
						导入通讯录之后，首先在手机桌面找到电话本或者联系人图标
					</view>
					<view class="steps-tl">
						<text>失败常见问题</text>
					</view>
					<view class="steps-txt colorred">
						原因一：未能获取APP未能获取手机通讯录权限
					</view>
					<view class="steps-txt">
						导入通讯录之后，首先在手机桌面找到电话本或者联系人图标，我们精心准备了一个简单的十分钟介绍视。
					</view>
					<view class="steps-txt colorred">
						原因二：未能获取APP未能获取手机通讯录权限
					</view>
					<view class="steps-txt">
						导入通讯录之后，首先在手机桌面找到电话本或者联系人图标，我们精心准备了一个简单的十分钟介绍视。
					</view>
				</view>
			</view>
		</view>	
		<view class="mask" v-show="showMask" @click="hide"></view>
		<!-- popup 导入通讯录 start-->	
		<view class="popup popup-middle" v-show="showState.middle">
			<view class="kf-tl b-line">
				<view class="import-pop-tl">
					导入成功
				</view>
				<uni-icon type="shachu-xue" size="16" @click="hide"></uni-icon>
			</view>
			<view class="import-pop-con">
				请稍候打开微信添加群主
			</view>
			<view class="import-pop-line">
				群主微信导入成功！请打开微信 -> 通讯录 -> 新的好友，先添加群主
			</view>
			<view class="import-pop-line">
				请打招呼说
			</view>
			<view class="import-pop-line">
				有任何问题请查看下面的帮助信息！
			</view>
			<view class="import-pop-btn block-tl-color8" @click="hide">
				我知道啦
			</view>
		</view>
		<!-- popup 导入通讯录 end-->
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				avatars: [
					{
						id: 1,
						url: '../../static/avatar/avatar_1.jpg'
					},
					{
						id: 2,
						url: '../../static/avatar/avatar_2.jpg'
					},
					{
						id: 3,
						url: '../../static/avatar/avatar_3.jpg'
					},
					{
						id: 4,
						url: '../../static/avatar/avatar_1.jpg'
					},
					{
						id: 5,
						url: '../../static/avatar/avatar_2.jpg'
					},
					{
						id: 6,
						url: '../../static/avatar/avatar_3.jpg'
					},
					{
						id: 7,
						url: '../../static/avatar/avatar_1.jpg'
					},
					{
						id: 8,
						url: '../../static/avatar/avatar_2.jpg'
					},
					{
						id: 9,
						url: '../../static/avatar/avatar_3.jpg'
					},
					{
						id: 10,
						url: '../../static/avatar/avatar_1.jpg'
					},
					{
						id: 11,
						url: '../../static/avatar/avatar_2.jpg'
					},
					{
						id: 12,
						url: '../../static/avatar/avatar_3.jpg'
					},
				],
				showMask: false,
				showState: {
					top: false,
					middle: false,
					bottom: false,
				},
				activePop: 'middle'
			};
		},
		components: {
			uniIcon
		},
		methods: {
			show: function(e) {
				var pos = e.currentTarget.dataset.position;
				console.log(pos);
				switch (pos) {
					case 'top':
						this.activePop = 'top'
						break
					case 'bottom':
						this.activePop = 'bottom'
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
	.import-tl{
		padding: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		line-height: 1;
	}
	.import-tl-txt{
		border-left: 4upx solid #44B549;
		padding-left: 16upx;
		border-radius: 4upx;		
	}
	.block-tl-rt-item .uni-icon{
		margin-right: 4upx;
	}
	.import-user{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 40upx 18upx;
	}
	.avatar-70{
		flex: 0 0 72upx;
		width: 72upx;
		height: 72upx;
		border-radius: 100%;
		margin: 0 7upx 14upx 7upx;
	}
	.import-btn{
		height: 94upx;
		line-height: 94upx;
		text-align: center;
		background-color: #eb644a;
		color: #FFF;
		border-radius: 4upx;
		margin:0 20upx 40upx;
		font-size: 30upx;
	}
	.tips-tl{
		padding: 0 20upx;
		color: #eb644a;
		font-weight: 500;
		font-size: 26upx;
		margin-bottom: 20upx;
	}
	.tips-con{
		padding: 0 20upx;
		line-height: 1.4;
		color: #eb644a;
		height: 350upx;
		overflow: scroll;
		margin-bottom: 30upx;
		font-size: 26upx;
	}
	.tips-con view{
		margin-bottom: 20upx;
	}
	.other-use{
		display: flex;
		flex-direction: row;
		height: 120upx;
		line-height: 120upx;
	}
	.other-use-item{
		flex: 0 0 50%;
		text-align: center;
		font-size: 30upx;
	}
	.other-use-item .uni-icon{
		margin-right: 10upx;
	}
	.steps{
		padding: 30upx 20upx;
		font-size: 26upx;
	}
	.steps-tl{
		position: relative;
		text-align: center;
		margin-bottom: 20upx;
	}
	.steps-tl::after{
		position: absolute;
		top: 49%;
		left: 0;
		right: 0;
		content: '';
		height: 2upx;
		background-color: #e5e5e5;	
	}
	.steps-tl text{
		background-color: #fff;
		position: relative;
		z-index: 9;
		padding: 0 20upx;
		color: #8a8a8a;
	}
	.steps-txt{
		line-height: 1.4;
		color: #8a8a8a;
		margin: 20upx 0;
	}
	.steps-bold{
		font-weight: 500;
		color: #666;
	}
	.steps image{
		width: 100%;
	}
	.colorred{
		color: #eb644a;
	}
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

	.popup-middle {
		width: 620upx;
		height: 530upx;
		border-radius: 10upx;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}
	.kf-tl {
		padding: 0 20upx;
		height: 80upx;
		color: #666;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.import-pop-tl{
		flex: 1;
		text-align: center;
		font-size: 30upx;
		font-weight: 500;
	}
	.import-pop-con{
		text-align: center;
		color: #666;
		margin: 30upx 0 20upx;
	}
	.import-pop-line{
		padding: 0 30upx;
		color: #666;
		margin-bottom: 20upx;
	}
	.import-pop-btn{
		margin: 40upx 120upx 0;
		height: 76upx;
		line-height: 76upx;
		border-radius: 76upx;
		text-align: center;
		color: #fff;
	}
</style>
