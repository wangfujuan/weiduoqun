<template>
	<view class="content">
		<view class="mi-top">
			<view class="mi-bg" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjrz-71ByWB7WRMvrvYPWIfaW_00G5YeXAZLK0j1RyPPD9ETP');"></view>
			<view class="avatar-wp-top">
				<view class="avatar-vip-top">
					<uni-icon type="zuanshi" size="12"></uni-icon>
				</view>
				<image class="avatar-100-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjrz-71ByWB7WRMvrvYPWIfaW_00G5YeXAZLK0j1RyPPD9ETP" mode="widthFix"></image>
			</view>	
			<view class="mi-top-con">
				<view class="mi-top-phone">
					139****0909 <uni-icon type="nv" color="#f96547" size="14"></uni-icon>
				</view>
				<view class="mi-top-id">
					ID: 10293939
				</view>
				<view class="mi-top-wx">
					微信号：15010200383 <text>复制</text>
				</view>
			</view>
		</view>
		<view class="mi-tab">
			<view :class="['mi-tab-item', currentTab == 1?'mi-tab-active':'']" @click="changeTab(1)">
				名片
			</view>
			<view :class="['mi-tab-item', currentTab == 2?'mi-tab-active':'']" @click="changeTab(2)">
				群交易
			</view>
			<view :class="['mi-tab-item', currentTab == 3?'mi-tab-active':'']" @click="changeTab(3)">
				微商圈
			</view>
			<view :class="['mi-tab-item', currentTab == 4?'mi-tab-active':'']" @click="changeTab(4)">
				微商货源
			</view>
		</view>
		<!-- 名片 start -->
		<view class="mi-card-tabcon" v-show="currentTab == 1">
			<navigator class="wx-item" hover-class="none" url="../wxgroupcard/wxgroupcard">
				<view class="wx-item-md">
					<view class="avatar-wp">
						<view class="avatar-vip">
							微信个人
						</view>
						<image class="avatar-100" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
					</view>	
					<view class="wx-item-con">
						<view class="wx-item-tl">
							<text class="ding">顶</text><text class="mdtxt">妮妮小宝贝</text>
						</view>
						<view class="wx-item-wx">
							进群加群主，不加秒踢
						</view>
					</view>	
				</view>
				<uni-icon type="qianjin" size="16" color="#ddd"></uni-icon>	
			</navigator>
			<navigator class="wx-item" hover-class="none" url="../wxgroupcard/wxgroupcard">
				<view class="wx-item-md">
					<view class="avatar-wp">
						<view class="avatar-vip">
							微信群
						</view>
						<image class="avatar-100" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
					</view>	
					<view class="wx-item-con">
						<view class="wx-item-tl">
							<text class="mdtxt">妮妮小宝贝</text>
						</view>
						<view class="wx-item-wx">
							进群加群主，不加秒踢
						</view>
					</view>	
				</view>
				<uni-icon type="qianjin" size="16" color="#ddd"></uni-icon>	
			</navigator>
		</view>
		<!-- 名片 end -->
		<!-- 群交易 start -->
		<view class="mi-card-tabcon" v-show="currentTab == 2">
			<navigator class="wx-item" hover-class="none" url="../wxgroupcard/wxgroupcard">
				<view class="wx-item-md">
					<view class="avatar-wp">
						<view class="avatar-vip">
							微信个人
						</view>
						<image class="avatar-100" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
					</view>	
					<view class="wx-item-con">
						<view class="wx-item-tl">
							<text class="ding">顶</text><text class="mdtxt">妮妮小宝贝</text> <text class="truetag">客服担保</text>
						</view>
						<view class="wx-item-wx">
							<text>¥ </text><text style="font-size: 30upx;font-weight: 500;">129 </text>389人关注 广州
						</view>
						<view class="mi-card-name">
							最爱你的轩轩
						</view>
					</view>	
				</view>
				<uni-icon type="qianjin" size="16" color="#ddd"></uni-icon>	
			</navigator>
			<navigator class="wx-item" hover-class="none" url="../wxgroupcard/wxgroupcard">
				<view class="wx-item-md">
					<view class="avatar-wp">
						<view class="avatar-vip">
							微信群
						</view>
						<image class="avatar-100" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
					</view>	
					<view class="wx-item-con">
						<view class="wx-item-tl">
							<text class="mdtxt">妮妮小宝贝</text>
						</view>
						<view class="wx-item-wx">
							<text>¥ </text><text style="font-size: 30upx;font-weight: 500;">289 </text>389人关注 广州
						</view>
						<view class="mi-card-name">
							最爱你的轩轩
						</view>
					</view>	
				</view>
				<uni-icon type="qianjin" size="16" color="#ddd"></uni-icon>	
			</navigator>
		</view>
		<!-- 群交易 end -->
		<!-- 微商圈 start -->
		<view class="mi-card-tabcon" v-show="currentTab == 3">
			<navigator class="wx-item" hover-class="none" url="../wxgroupcard/wxgroupcard">
				<view class="wx-item-md">
					<image class="avatar-100" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>	
					<view class="wx-item-con vertical">
						<view class="wx-item-tl dbellipsis">
							妮妮小宝贝我们的货源有男装，女装，童装，男鞋，女包，小宝贝我们的货源有男装
						</view>	
						<view class="mi-card-name">
							<text>点赞：0</text><text>评论：0</text><text>时间：07-09</text>
						</view>
					</view>	
				</view>
			</navigator>
			<navigator class="wx-item" hover-class="none" url="../wxgroupcard/wxgroupcard">
				<view class="wx-item-md">										
					<image class="avatar-100" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
					<view class="wx-item-con vertical">
						<view class="wx-item-tl dbellipsis">
							妮妮小宝贝
						</view>
						<view class="mi-card-name">
							<text>点赞：0</text><text>评论：0</text><text>时间：07-09</text>
						</view>
					</view>	
				</view>	
			</navigator>
		</view>
		<!-- 微商圈 end -->
		<!-- 微商货源 start -->
		<view class="content-pad" v-show="currentTab == 4">
			<view class="white">
				<view class="content-pad">
					<view class="mi-goods-tl">
						SKV生态玻璃酸原液/三生态/六生态
					</view>
					<view class="mi-goods-info">
						SKV新款冰山雪绒花，超补水，没有效果包退款
					</view>
					<image class="mi-goods-img" src="../../static/product.png" mode="widthFix"></image>
					<view class="mi-goods-eye">
						阅读：199
					</view>
				</view>
			</view>
		</view>
		<!-- 微商货源 end -->
		<view class="nav-ls" v-show="isNav">
			<view class="nav-item b-line">
				<uni-icon type="tianjia" size="12" color="#333"></uni-icon>
				添加微信
			</view>
			<view class="nav-item b-line">
				<uni-icon type="jubao" size="12" color="#333"></uni-icon>
				投诉举报
			</view>
			<view class="nav-item">
				<uni-icon type="iconzhuyenor" size="12" color="#333"></uni-icon>
				回到首页
			</view>
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
				currentTab: 3,
				isNav: false
			};
		},
		methods: {
			changeTab: function(e){
				this.currentTab = e;
			}
		},
		onNavigationBarButtonTap() {
			this.isNav = !this.isNav
		}
	}
</script>

<style>
	.content{
		background-color: #F4F6FA;
	}
	.mi-card-tabcon{
		padding-top: 10upx;
	}
	.wx-item{
		height: 130upx;
		margin: 10upx 20upx;
		background-color: #fff;
		padding: 20upx;
		border-radius: 16upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.wx-item-md{
		flex: 1;
		display: flex;
		flex-direction: row;
	}
	.wx-item-rt{
		font-size: 24upx;
		height: 46upx;
		line-height: 46upx;
		color: #44B549;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border: 2upx solid #44B549;
		border-radius: 6upx;
		padding: 0 10upx;
	}
	.wx-item-rt .uni-icon{
		margin-right: 5upx;
	}
	.wx-item-con{
		flex: 1;
		padding-left: 20upx;
	}
	.wx-item-tl{
		font-weight: 500;
		font-size: 30upx;
	}
	.wx-item-wx{
		margin: 5upx 0 10upx;
		color: #888888;
		font-size: 24upx;
	}
	.wx-item-wx text{
		color: #e74c2d;
	}
	.ding{
		width: 40upx;
		height: 40upx;
		line-height: 40upx;
	}
	.mi-top{
		height: 350upx;
		position: relative;	
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 100upx;
	}
	.mi-bg{
		position: absolute;
		background-position: center center;
		background-size: cover;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		filter: blur(20upx);
	}
	.avatar-wp{
		width: 120upx;
		height: 120upx;
		flex: 0 0 120upx;
		border-radius: 6upx;
		background-color: #f7d46b;
		padding: 4upx;
		position: relative;
		background-image: linear-gradient(to bottom, #d9c085 0%, #b39a65 100%);
	}
	.avatar-100{
		width: 120upx;
		height: 120upx;
		border-radius: 6upx;
	}
	.avatar-vip{
		position: absolute;
		bottom: 0;
		background-color: #b39a65;
		color: #fff;
		font-size: 18upx;
		border-radius: 4upx;
		width: 110upx;
		text-align: center;
		left: 50%;
		margin-left: -55upx;
		transform: scale(0.8);
	}
	.mi-top-con{
		position: relative;
		line-height: 1;
		color: #fff;
		text-align: center;
	}
	.mi-top-phone{
		font-size: 30upx;
		font-weight: 500;
		margin: 20upx 0 15upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.mi-top-phone .uni-icon{
		margin-left: 10upx;
	}
	.mi-top-id{
		font-size: 24upx;
	}
	.mi-top-wx{
		font-size: 24upx;
		margin-top: 20upx;
	}
	.mi-top-wx text{
		display: inline-block;
		width: 80upx;
		height: 40upx;
		line-height: 40upx;
		transform: scale(0.7);
		border: 2upx solid #fff;
		border-radius: 30upx;
	}
	.mi-tab{
		display: flex;
		flex-direction: row;
		background-color: #fff;
		height: 88upx;
		line-height: 88upx;
		color: #838383;
	}
	.mi-tab-item{
		flex: 1;
		text-align: center;
	}
	.mi-tab-active{
		position: relative;
	}
	.mi-tab-active::after{
		position: absolute;
		content: '';
		width: 40upx;
		height: 4upx;
		background-color: #44B549;
		display: block;
		border-radius: 4upx;
		bottom: 10upx;
		margin-left: -20upx;
		left: 50%;
		box-shadow: 0 2upx 10upx rgba(68,181,73,.3);
	}
	.mi-goods-tl{
		font-size: 32upx;
		font-weight: 500;
	}
	.mi-goods-info{
		color: #6c6c6c;
		margin: 10upx 0 20upx;
	}
	.mi-goods-img{
		border-radius: 10upx;
		width: 100%;
	}
	.mi-goods-eye{
		font-size: 22upx;
		color: #919191;
		line-height: 1;
		margin-top: 30upx;
		margin-bottom: 5upx;
	}
	.avatar-wp-top{
		width: 122upx;
		height: 122upx;
		flex: 0 0 122upx;
		border: 4upx solid #b39a65;
		padding: 2upx;
		position: relative;
		border-radius: 100%;
		background-color: #fff;
	}
	.avatar-100-top{
		width: 122upx;
		height: 122upx;
		border-radius: 100%;
	}
	.avatar-vip-top{
		position: absolute;
		bottom: 0;
		width: 32upx;
		height: 32upx;
		line-height: 32px;
		border-radius: 100%;
		text-align: center;
		right: 0;
		border: 2upx solid #fff;
		background-color: #b39a65;
		color: #fff;
	}
	.avatar-vip-top .uni-icon{
		position: absolute;
		top: 6upx;
		transform: scale(0.8);
		left: 6upx;
	}
	.truetag{
		color: #44B549;
		font-weight: normal;
		font-size: 24upx;
		height: 36upx;
		line-height: 36upx;
		padding: 0 8upx;
		display: inline-block;
		border: 2upx solid #44B549;
		border-radius: 6upx;
		transform: scale(0.75);
	}
	.mi-card-name{
		font-size: 24upx;
		color: #888888;
		line-height: 1;
	}
	.mi-card-name text{
		margin-right: 30upx;
	}
	.vertical{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 5upx;
	}
	.nav-ls{
		position: fixed;
		top: 120upx;
		right: 20upx;
		background-color: #fff;
		width: 200upx;
		border-radius: 10upx;
	}
	.nav-ls::before{
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: -16upx;
		right: 20upx;
		border: 10upx solid #fff;
		border-color: transparent transparent #fff;
	}
	.nav-item{
		height: 80upx;
		line-height: 80upx;
		font-size: 24upx;
		text-align: center;
	}
</style>

