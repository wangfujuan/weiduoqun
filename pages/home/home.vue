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
					<image src="../../static/banner.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/banner.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/banner.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="content-pad">
			<view class="white">
				<view class="uni-grid-9 b-line">
					<view class="uni-grid-9-item" hover-class="uni-grid-9-item-hover" v-for="(item,index) in grids" :key="index">
						<view :class="item.syicon">
							<uni-icon :type="item.icon"></uni-icon>
						</view>
						<text class="uni-grid-9-text">{{item.name}}</text>
					</view>
				</view>
				<view class="tips">
					<view class="tips-text">
						注意：防骗提醒，让你远离骗子！
					</view>
					<uni-icon type="arrowright"></uni-icon>				
				</view>
			</view>
			<!-- 推荐名片 start -->
			<view class="white">
				<view class="block-tl">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color1">
							<uni-icon type="geren2"></uni-icon>
						</view>
						<text class="mdtxt">推荐名片</text>
					</view>
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
					<view class="card-item" v-for="card in cardList" :key="card.id">
						<view class="card-avatar">
							<image :src="card.img" mode="widthFix"></image>
						</view>
						<view class="card-name">
							<text class="ding">顶</text>
							<text class="mdtxt">{{card.name}}</text>
						</view>
					</view>	
				</scroll-view>	
			</view>
			<!-- 推荐名片 end -->
			<!-- 热门群 start -->
			<view class="white">
				<view class="block-tl">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color2">
							<uni-icon type="duoren2"></uni-icon>
						</view>
						<text class="mdtxt">热门群</text>
					</view>
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
						<view class="card-avatar">
							<image :src="hot.img" mode="widthFix"></image>
						</view>
						<view class="hot-name">
							<text class="ding">顶</text>
							<text class="mdtxt">{{hot.name}}</text>
						</view>
						<view class="hot-add">
							<uni-icon type="tianjia"></uni-icon>
							<text class="mdtxt">加群</text>
						</view>
					</view>	
				</scroll-view>	
			</view>
			<!-- 热门群 end -->
			<!-- 产品秀 start -->
			<view class="white">
				<view class="block-tl">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color3">
							<uni-icon type="chanpin2"></uni-icon>
						</view>
						<text class="mdtxt">产品秀</text>
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
				<view class="product-ls">
					<view class="product-item b-line">
						<view class="product-tl">
							目前世界上最神奇的面膜
						</view>
						<image class="product-item-img" src="../../static/product.png" mode="widthFix"></image>
						<view class="product-info">
							米色小霞 <text>99人阅读</text>
						</view>
					</view>	
					<view class="product-item b-line">
						<view class="product-tl">
							目前世界上最神奇的面膜
						</view>
						<image class="product-item-img" src="../../static/product.png" mode="widthFix"></image>
						<view class="product-info">
							米色小霞 <text>99人阅读</text>
						</view>
					</view>	
					<view class="product-item">
						<view class="product-tl">
							目前世界上最神奇的面膜
						</view>
						<image class="product-item-img" src="../../static/product.png" mode="widthFix"></image>
						<view class="product-info">
							米色小霞 <text>99人阅读</text>
						</view>
					</view>	
				</view>
			</view>
			<!-- 产品秀 end -->
			<!-- 头条干货 start -->
			<view class="white">
				<view class="block-tl">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color4">
							<uni-icon type="chanpin2"></uni-icon>
						</view>
						<text class="mdtxt">头条干货</text>
					</view>
					<view class="block-tl-rt">
						<view class="block-tl-rt-item">
							<uni-icon type="shoucang1"></uni-icon>
							<text class="mdtxt">收藏</text>
						</view>
						<view class="block-tl-rt-more">
							<text class="mdtxt">更多</text>
							<view class="block-more more-color2">
								<uni-icon type="qianjin"></uni-icon>
							</view>
						</view>
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
			<!-- 头条干货 end -->
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
				interval: 2000,
				duration: 500,
				grids: [
					{
						name: "微信群",
						icon: "duoren2",
						syicon: "iconwp oneicon"
					},
					{
						name: "个人微信",
						icon: "geren2",
						syicon: "iconwp twoicon"
					},
					{
						name: "加粉神器",
						icon: "xin2",
						syicon: "iconwp threeicon"
					},
					{
						name: "QQ名片",
						icon: "qq02",
						syicon: "iconwp fouricon"
					},
					{
						name: "微信访问",
						icon: "qq02",
						syicon: "iconwp fiveicon"
					},
					{
						name: "好品牌",
						icon: "upstagefill",
						syicon: "iconwp sixicon"
					},
					{
						name: "产品秀",
						icon: "chanpin2",
						syicon: "iconwp sevenicon"
					},
					{
						name: "工具箱",
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
			}
		}
	}
</script>

<style>
	@import "../../common/iconfont.css";
	
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
		border-radius: 14upx;
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
		padding: 0 20rpx 0 40rpx;
		height: 78upx;
		line-height: 78upx;
	}
	
	.tips-text{
		flex: 1;
		font-size: 28upx;
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
		font-weight: 500;
		line-height: 1;
	}
	
	.product-ls {
		margin-top: -30upx;
	}
	
	.product-item {
		padding: 30upx 25upx 0;
	}
	
	.product-item-img {
		width: 100%;
		margin: 25upx 0;
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
	
	.ding {
		width: 30upx;
		height: 30upx;
		line-height: 30upx;
		text-align: center;
		color: #fff;
		border-radius: 6upx;
		background-color: #44b549;
		display: inline-block;
		vertical-align: middle;
		font-size: 24upx;
		transform: scale(0.8);
		margin-right: 8upx;
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

