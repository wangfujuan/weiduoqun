<template>
	<view class="content">
		<view class="shadow"></view>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" 
				:duration="duration" 
				circular="true" 
				next-margin="20rpx" 
				previous-margin="20rpx">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/banner/banner.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/banner/banner2.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/banner/banner3.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="content-pad">
			<view class="white">
				<view class="uni-grid-9 b-line">
					<navigator class="uni-grid-9-item" hover-class="none" url="../wxgroup/wxgroup?currentTab=0">
						<view class="iconwp oneicon">
							<uni-icon type="duoren2"></uni-icon>
						</view>
						<text class="uni-grid-9-text">微信群</text>	
					</navigator>
					<navigator class="uni-grid-9-item" hover-class="none" url="../wxgroup/wxgroup?currentTab=0">
						<view class="iconwp fouricon">
							<uni-icon type="qq02"></uni-icon>
						</view>
						<text class="uni-grid-9-text">QQ群</text>	
					</navigator>
					<navigator class="uni-grid-9-item" hover-class="none" url="../wxgroup/wxgroup?currentTab=1">
						<view class="iconwp twoicon">
							<uni-icon type="geren2"></uni-icon>
						</view>
						<text class="uni-grid-9-text">个人微信</text>	
					</navigator>
					<view class="uni-grid-9-item" @click="toContact">
						<view class="iconwp threeicon">
							<uni-icon type="xin2"></uni-icon>
						</view>
						<text class="uni-grid-9-text">人脉多</text>	
					</view>
					<navigator class="uni-grid-9-item" hover-class="none" url="../deal/deal?currentTab=0">
						<view class="iconwp fiveicon">
							<uni-icon type="upstagefill"></uni-icon>
						</view>
						<text class="uni-grid-9-text">群交易</text>	
					</navigator>
					<view class="uni-grid-9-item" @click="toCircle">
						<view class="iconwp sixicon">
							<uni-icon type="fankui-tianchong"></uni-icon>
						</view>
						<text class="uni-grid-9-text">微商圈</text>	
					</view>
					<navigator class="uni-grid-9-item" hover-class="none" url="../sourcegoods/sourcegoods">
						<view class="iconwp sevenicon">
							<uni-icon type="chanpin2"></uni-icon>
						</view>
						<text class="uni-grid-9-text">微商货源</text>	
					</navigator>
					<view class="uni-grid-9-item" @click="toObtain">
						<view class="iconwp eighticon">
							<uni-icon type="qiandai-tianchong"></uni-icon>
						</view>
						<text class="uni-grid-9-text">收益中心</text>	
					</view>
					<!-- <navigator :url="item.url" class="uni-grid-9-item" hover-class="none" v-for="(item,index) in grids" :key="index">
						<view :class="item.syicon">
							<uni-icon :type="item.icon"></uni-icon>
						</view>
						<text class="uni-grid-9-text">{{item.name}}</text>
					</navigator> -->
				</view>
				<navigator hover-class="none" url="../tips/tips">
				<view class="tips">
					<uni-icon type="jinggao" color="#eb6644" size="20"></uni-icon>
					<view class="tips-text">
						<text>注意：防骗提醒，让你远离骗子！</text>				
					</view>			
					<uni-icon type="qianjin" size="12" color="#e5e5e5"></uni-icon>
				</view>
				</navigator>
			</view>
			<!-- 推荐名片 start -->
			<view class="white">
				<view class="block-tl">
					<navigator hover-class="none" class="block-tl-lf" url="../wxgroup/wxgroup?currentTab=1">
						<view class="block-tl-icon block-tl-color1">
							<uni-icon type="geren2"></uni-icon>
						</view>
						<text class="mdtxt">推荐名片</text>				
					</navigator>
					<view class="block-tl-rt">
						<view class="block-tl-rt-item">
							<uni-icon type="laiyuan"></uni-icon>							
							<text class="mdtxt">导入</text>
						</view>
						<view class="block-tl-rt-item">							
							<uni-icon type="qinglihuancun"></uni-icon>
							<text class="mdtxt">清理</text>
						</view>
					</view>
				</view>
				<scroll-view class="card-ls" scroll-x scroll-left="0">	
					<navigator hover-class="none" class="card-item" v-for="card in cardList" :key="card.id" url="../wxgroupcard/wxgroupcard">
						<view class="card-avatar">
							<image :src="card.img" mode="widthFix"></image>
						</view>
						<view class="card-name">
							<text class="ding">顶</text>
							<text class="mdtxt">{{card.name}}</text>
						</view>
					</navigator>	
				</scroll-view>	
			</view>
			<!-- 推荐名片 end -->
			<!-- 热门群 start -->
			<view class="white">
				<view class="block-tl">
					<navigator class="block-tl-lf" hover-class="none" url="../wxgroup/wxgroup?currentTab=0">
						<view class="block-tl-icon block-tl-color2">
							<uni-icon type="duoren2"></uni-icon>
						</view>
						<text class="mdtxt">热门群</text>
					</navigator>
					<view class="block-tl-rt">
						<view class="block-tl-rt-item">
							<uni-icon type="laiyuan"></uni-icon>
							<text class="mdtxt">导入</text>
						</view>
						<view class="block-tl-rt-item">
							<uni-icon type="qinglihuancun"></uni-icon>
							<text class="mdtxt">清理</text>
						</view>
					</view>
				</view>
				<scroll-view class="card-ls hot-ls" scroll-x scroll-left="0">	
					<view class="hot-item" v-for="hot in hotList" :key="hot.id">
						<navigator hover-class="none" class="card-avatar" url="../wxgroupcard/wxgroupcard">
							<image :src="hot.img" mode="widthFix"></image>
						</navigator>
						<view class="hot-name">
							<text class="ding">顶</text>
							<text class="mdtxt">{{hot.name}}</text>
						</view>
						<view class="hot-add" @click="addCard">
							<uni-icon type="tianjia"></uni-icon>
							<text class="mdtxt">加群</text>
						</view>
					</view>	
				</scroll-view>	
			</view>
			<!-- 热门群 end -->
			<!-- 微商货源 start -->
			<view class="white">
				<navigator url="../sourcegoods/sourcegoods" hover-class="none">
					<view class="block-tl">
						<view class="block-tl-lf">
							<view class="block-tl-icon block-tl-color3">
								<uni-icon type="chanpin2"></uni-icon>
							</view>
							<text class="mdtxt">微商货源</text>
						</view>
						<view class="block-tl-rt">
							<view class="block-tl-rt-more">
								<text class="mdtxt">更多</text>
								<view class="block-more more-color1">
									<uni-icon type="qianjin"></uni-icon>
								</view>
							</view>
						</view>
					</view>
				</navigator>
				<view class="product-ls">	
					<view class="product-item b-line">
						<navigator hover-class="none" url="../goodsdetail/goodsdetail">
							<view class="product-tl">
								目前世界上最神奇的面膜
							</view>
							<view class="img-wp">
								<image class="product-item-img" src="../../static/goods.jpg" mode="widthFix"></image>
								<image class="product-item-img" src="../../static/goods.jpg" mode="widthFix"></image>
								<image class="product-item-img" src="../../static/goods.jpg" mode="widthFix"></image>
							</view>
						</navigator>
						<view class="product-info">
							米色小霞 <text>99人阅读</text>
						</view>
					</view>	
					<view class="product-item b-line">
						<navigator hover-class="none" url="../goodsdetail/goodsdetail">
							<view class="product-tl">
								目前世界上最神奇的面膜
							</view>
							<view class="img-wp">
								<image class="product-item-img" src="../../static/goods.jpg" mode="widthFix"></image>
								<image class="product-item-img" src="../../static/goods.jpg" mode="widthFix"></image>
								<image class="product-item-img" src="../../static/goods.jpg" mode="widthFix"></image>
							</view>
						</navigator>
						<view class="product-info">
							米色小霞 <text>99人阅读</text>
						</view>
					</view>	
					<view class="product-item">
						<navigator hover-class="none" url="../goodsdetail/goodsdetail">
							<view class="product-tl">
								目前世界上最神奇的面膜
							</view>
							<view class="img-wp">
								<image class="product-item-img" src="../../static/goods.jpg" mode="widthFix"></image>
								<image class="product-item-img" src="../../static/goods.jpg" mode="widthFix"></image>
								<image class="product-item-img" src="../../static/goods.jpg" mode="widthFix"></image>
							</view>
						</navigator>
						<view class="product-info">
							米色小霞 <text>99人阅读</text>
						</view>
					</view>	
				</view>
			</view>
			<!-- 微商货源 end -->
			<!-- 微头条 start -->
			<view class="white">
				<view class="block-tl">
					<navigator class="block-tl-lf" hover-class="none" url="../weinews/weinews">
						<view class="block-tl-icon block-tl-color4">
							<uni-icon type="chanpin2"></uni-icon>
						</view>
						<text class="mdtxt">微头条</text>	
					</navigator>
					<view class="block-tl-rt">
						<view class="block-tl-rt-item">
							<uni-icon type="shoucang1"></uni-icon>
							<text class="mdtxt">收藏</text>
						</view>
						<navigator class="block-tl-rt-more" hover-class="none" url="../weinews/weinews">
							<text class="mdtxt">更多</text>
							<view class="block-more more-color2">
								<uni-icon type="qianjin"></uni-icon>
							</view>
						</navigator>
					</view>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell b-line" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
						<view class="uni-media-list">
							<image class="uni-media-list-logo" :src="value.cover"></image>
							<view class="uni-media-list-body">
								<view class="uni-media-list-text-top">{{value.title}}</view>
								<view class="uni-media-list-text-bottom">
									<text>{{value.author_name}}</text>
									<text>{{value.published_at}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 微头条 end -->
		</view>
	</view>
</template>
<script>
	import uniIcon from '../../components/uni-icon.vue'
	var dateUtils = require('../../common/util.js').dateUtils
	
	export default {
		data() {
			return {
				listData: [],
				reload: false,
				indicatorDots: false,
				autoplay: false,
				interval: 5000,
				duration: 500,
				grids: [
					{
						name: "微信群",
						icon: "duoren2",
						syicon: "iconwp oneicon",
						url: '../wxgroup/wxgroup'
					},
					{
						name: "QQ群",
						icon: "geren2",
						syicon: "iconwp twoicon"
					},
					{
						name: "个人微信",
						icon: "xin2",
						syicon: "iconwp threeicon"
					},
					{
						name: "人脉多",
						icon: "qq02",
						syicon: "iconwp fouricon",
						url: '../contact/contact'
					},
					{
						name: "群交易",
						icon: "qq02",
						syicon: "iconwp fiveicon"
					},
					{
						name: "微商圈",
						icon: "upstagefill",
						syicon: "iconwp sixicon"
					},
					{
						name: "微商货源",
						icon: "chanpin2",
						syicon: "iconwp sevenicon"
					},
					{
						name: "收益中心",
						icon: "icon_fuzhugongju-mian",
						syicon: "iconwp eighticon"
					}
				],
				cardList: [
					{
						id: 1,
						img: "../../static/avatar/avatar_1.jpg",
						name: "月儿"
					},
					{
						id: 2,
						img: "../../static/avatar/avatar_2.jpg",
						name: "萤火虫"
					},
					{
						id: 3,
						img: "../../static/avatar/avatar_3.jpg",
						name: "萤火虫"
					},
					{
						id: 4,
						img: "../../static/avatar/avatar_4.jpg",
						name: "萤火虫"
					},
					{
						id: 5,
						img: "../../static/avatar/avatar_5.jpg",
						name: "萤火虫"
					},
					{
						id: 6,
						img: "../../static/avatar/avatar_6.jpg",
						name: "萤火虫"
					}
				],
				hotList: [
					{
						id: 1,
						img: "../../static/avatar/avatar_1.jpg",
						name: "月儿"
					},
					{
						id: 2,
						img: "../../static/avatar/avatar_2.jpg",
						name: "萤火虫"
					},
					{
						id: 3,
						img: "../../static/avatar/avatar_3.jpg",
						name: "萤火虫"
					},
					{
						id: 4,
						img: "../../static/avatar/avatar_1.jpg",
						name: "萤火虫"
					},
					{
						id: 5,
						img: "../../static/avatar/avatar_2.jpg",
						name: "萤火虫"
					},
					{
						id: 6,
						img: "../../static/avatar/avatar_3.jpg",
						name: "萤火虫"
					}
				],
			}
		},
		onLoad() {
			this.getList();
		},
		onPullDownRefresh() {
			this.reload = true;
			this.last_id = "";
			this.getBanner();
			this.getList();
		},
		onReachBottom() {
			this.getList();
		},
		components: {
			uniIcon
		},
		methods: {
			getList() {
				var data = {
					column: "id,post_id,title,author_name,cover,published_at" //需要的字段名
				};
				if (this.last_id) { //说明已有数据，目前处于上拉加载
					data.minId = this.last_id;
					data.time = new Date().getTime() + "";
					data.pageSize = 10;
				}
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news',
					data: data,
					success: (data) => {
						if (data.statusCode == 200) {
							let list = this.setTime(data.data);
							this.listData = this.reload ? list : this.listData.concat(list);
							this.last_id = list[list.length - 1].id;
							this.reload = false;
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				})
			},
			setTime: function (items) {
				var newItems = [];
				items.forEach((e) => {
					newItems.push({
						author_name: e.author_name,
						cover: e.cover,
						id: e.id,
						post_id: e.post_id,
						published_at: dateUtils.format(e.published_at),
						title: e.title
					});
				});
				return newItems;
			},
			toContact: function(){
				uni.switchTab({
					url: '/pages/contact/contact'
				})
			},
			toCircle: function(){
				uni.switchTab({
					url: '/pages/circle/circle'
				})
			},
			toObtain: function(){
				uni.switchTab({
					url: '/pages/obtain/obtain'
				})
			},
			addCard: function(){
				uni.showActionSheet({
					itemList: ['保存二维码到相册', '导入通讯录', '发送到微信扫码'],
					success: function (res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			goDetail(e) {
			    uni.navigateTo({
			        url: '/pages/weinewsDetail/weinewsDetail?data=' + e.title
			    })
			},
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/weibi/weibi'
			})
		}
	}
</script>

<style>
	
	.content {
		background-color: #f4f6fa;
	}
	
	uni-swiper[data-v-3c055dd4]{
		height: 246upx;
	}
	
	swiper{
		height: 232upx;
	}
	
	.swiper-item {
		display: block;
		height: 232upx;
		text-align: center;	
		padding: 0 7upx;
	}
	
	uni-image,swiper-item image {
		width: 100%;
	}
	
	.block-tl-icon .uni-icon {
		color: #fff;
		font-size: 24upx;
	}

	.block-tl-rt-item .uni-icon {
		color: #aaa;
		font-size: 26upx;
		vertical-align: middle;
		margin-right: 4upx;
	}
	/* 九宫格 */
	.uni-grid-9 {
		box-sizing: border-box;
		padding-top: 35upx;
	}

	.uni-grid-9-item {
		width: 25%;
		display: inline-block;
		text-align: center;
		margin-bottom: 35upx;
	}

	.uni-grid-9-image {
		width: 80upx;
		height: 80upx;
	}

	.uni-grid-9-text {
		display: block;
		line-height: 1;
		font-size: 24upx;
		margin-top: 16upx;
		color: #626262;
	}

	.uni-grid-9-item-hover {
		background: rgba(0, 0, 0, 0.1);
	}
	
	.iconwp {
		width: 90upx;
		height: 90upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #007AFF;
		border-radius: 100%;
		margin: 0 auto;
		text-align: center;
		/* line-height: 90upx; */
	}
	
	.iconwp .uni-icon {
		font-size: 44upx;
		color: #fff;
	}
	
	.oneicon {
		background-image: linear-gradient(-45deg, #ff9a9e 0%, #ffbdbd 100%);
		box-shadow: 4upx 0 16upx rgba(255, 189, 189, .3);
	}
	
	.twoicon {
		background-image: linear-gradient(-45deg, #30D2BE 0%, #80f3e5 100%);
		box-shadow: 4upx 0 16upx rgba(128, 243, 229, .3);
	}
	
	.threeicon {
		background-image: linear-gradient(-45deg, #e7b65f 0%, #f1d199 100%);
		box-shadow: 4upx 0 16upx rgba(241, 109, 153, .3);
	}
	
	.fouricon {
		background-image: linear-gradient(-45deg, #21c7ef 0%, #70e3ff 100%);
		box-shadow: 4upx 0 16upx rgba(112, 227, 255, .3);
	}
	
	.fiveicon {
		background-image: linear-gradient(-45deg, #60dc8f 0%, #8af5b2 100%);
		box-shadow: 4upx 0 16upx rgba(138, 245, 178, .3);
	}
	
	.sixicon {
		background-image: linear-gradient(-45deg, #f1948f 0%, #ffb8b4 100%);
		box-shadow: 4upx 0 16upx rgba(255, 184, 180, .3);
	}
	
	.sevenicon {	
		background-image: linear-gradient(-45deg, #f787b3 0%, #f3a7c5 100%);
		box-shadow: 4upx 0 16upx rgba(243, 167, 197, .3);
	}
	
	.eighticon {
		background-image: linear-gradient(-45deg, #8f75ed 0%, #a792f5 100%);
		box-shadow: 4upx 0 16upx rgba(167, 146, 245, .3);
	}
	
	.tips{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 20upx 0 20upx;
		height: 78upx;
		line-height: 78upx;
	}
	.tips-text{
		flex: 1;
		font-size: 28upx;
		padding-left: 14upx;
		
	}
	.uni-icon{
		font-size: 18px;
		color: #eaeaea;
	}
	.scroll {
		width: 100%;
		overflow: hidden;
	}
	.card-ls{
		/* width: 100%; */
		white-space: nowrap;
		padding: 10upx 0 44upx 22upx;
		overflow: hidden;
	}
	
	.hot-ls {
		padding-bottom: 26upx;
		padding-top: 0;
	}
	
	.card-item {
		display: inline-block;
		width: 140upx;
		margin-right: 20upx;
	}
	
	.card-avatar {
		width: 120upx;
		height: 120upx;
		border: 4upx solid #ececec;
		padding: 4upx;
		border-radius: 100%;
		margin: 0 auto;
	}
	
	.card-name {
		font-size: 26upx;
		text-align: center;
		line-height: 1;
		margin-top: 16upx;
	}
	
	.card-ls image {
		width: 100%;
		border-radius: 100%;
	} 
	
	.hot-item {
		border: 1px solid #f3f3f3;
		width: 152upx;
		height: 220upx;
		border-radius: 10upx;
		display: inline-block;
		margin-right: 20upx;
		text-align: center;
		padding: 20upx
	}
	
	.hot-item .card-avatar {
		width: 90upx;
		height: 90upx;
	}
	
	.hot-name {
		font-size: 26upx;
		line-height: 1;
		margin: 20upx 0;
	}
	
	.hot-add {
		font-size: 26rpx;
		background-image: linear-gradient(-45deg, #44b549 0%, #5dd962 100%);
		width: 112upx;
		height: 40upx;
		text-align: center;
		margin: 0 auto;
		color: #fff;
		border-radius: 40upx;
	}
	
	.product-tl {
		font-size: 30upx;
		/* font-weight: 500; */
		line-height: 1;
	}
	
	.product-ls {
		margin-top: -10upx;
	}
	
	.product-item {
		padding: 30upx 25upx 0;
	}
	.img-wp{
		display: flex;
		margin: 25upx 0;
	}
	.product-item-img {
		flex: 1;
		margin: 0 2upx;
	}
	
	.product-info {
		color: #969696;
		font-size: 24upx;
		line-height: 1;
		padding: 5upx 0 28upx;
	}
	
	.uni-list {
		padding: 0 20upx;
		margin-top: -20upx;
	}
	
	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 25upx 0;
	}
	
	.uni-media-list-logo {
		width: 200upx;
		height: 130upx;
		margin-right: 20upx;
		border-radius: 10upx;
	}

	.uni-media-list {
		/* padding: 22upx 30upx; */
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: row;
	}
	
	.uni-navigate-right.uni-media-list {
		padding-right: 74upx;
	}
	
	.uni-pull-right {
		flex-direction: row-reverse;
	}
	
	.uni-pull-right>.uni-media-list-logo {
		margin-right: 0upx;
		margin-left: 20upx;
	}
	
	.uni-media-list-logo image {
		height: 100%;
		width: 100%;
	}
	
	.uni-media-list-body {
		height: 84upx;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		overflow: hidden;
	}
	
	.uni-media-list-text-top {
		width: 100%;
		line-height: 36upx;
		font-size: 30upx;
		height: 74upx;
		font-size: 28upx;
		overflow: hidden;
	}
	
	.uni-media-list-text-bottom {
		width: 100%;
		line-height: 30upx;
		font-size: 22upx;
		color: #8f8f94;
		display: flex;
		flex-direction: row;
	}
	
	.uni-media-list-text-bottom text {
		margin-right: 10upx;
	}
	
	.uni-media-list-body {
		height: auto;
		justify-content: space-around;
	}
	
	
	
	.hot-add .uni-icon {
		color: #fff;
		font-size: 22upx;
		vertical-align: middle;
		margin-right: 4upx;
	}
	
	.uni-icon-qianjin {
		font-size: 22upx;
	}
	
	
</style>

