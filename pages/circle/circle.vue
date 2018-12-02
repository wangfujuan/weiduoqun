<template>
    <view class="content">
        <view class="postop b-line"></view>
		<view class="content-pad">
			<!-- 话题 start -->
			<view class="white">
				<view class="block-tl b-line">
					<view class="block-tl-lf">
						<view class="block-tl-icon block-tl-color2">
							<uni-icon type="huati"></uni-icon>
						</view>
						<text class="mdtxt">话题</text>
					</view>
					<view class="block-tl-rt">
						<view class="block-tl-rt-more">
							<text class="mdtxt">前往话题广场</text>
							<view class="block-more more-color1">
								<uni-icon type="qianjin"></uni-icon>
							</view>
						</view>
					</view>
				</view>
				<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" next-margin="40px">
					<swiper-item>
						<view class="topic-item">
							<image class="topic-item-avatar" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
							<view class="topic-item-info">
								<view class="topic-item-tl">
									#微商故事#
								</view>
								<view class="topic-item-des">
									骗子公司，TT系统。骗我辛苦钱
								</view>
								<view class="topic-item-num">
									<text>2赞</text>
									<text>10评论</text>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="topic-item">
							<image class="topic-item-avatar" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
							<view class="topic-item-info">
								<view class="topic-item-tl">
									#微商故事#
								</view>
								<view class="topic-item-des">
									骗子公司，TT系统。骗我辛苦钱
								</view>
								<view class="topic-item-num">
									<text>2赞</text>
									<text>10评论</text>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="topic-item">
							<image class="topic-item-avatar" src="../../static/avatar/avatar_3.jpg" mode="widthFix"></image>
							<view class="topic-item-info">
								<view class="topic-item-tl">
									#微商故事#
								</view>
								<view class="topic-item-des">
									骗子公司，TT系统。骗我辛苦钱
								</view>
								<view class="topic-item-num">
									<text>2赞</text>
									<text>10评论</text>
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 话题 end -->
			<view class="white">
				<view class="art-item">
					<view class="art-item-tl">
						<image class="avatar" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
						<view class="art-user">
							<view class="art-user-name">
								慧慧
							</view>
							<view class="art-usr-time">
								30秒前
							</view>
						</view>
						<view class="block-tl-rt">
							<view class="block-tl-rt-item">
								<uni-icon type="jubao"></uni-icon>
								<text class="mdtxt">举报</text>
							</view>
						</view>
					</view>
					<view class="art-item-info">
						似乎在😊 很多人眼中，胸针是古板或陈旧的~~，很难和时髦挂上勾❤️。但胸针是个很好搭配的饰品，在个很好搭配的饰上都能有它的存在，可以说它是万能的点缀。
					</view>
					<view class="art-item-pic">
						<view class="art-item-img-wp">
							<image class="art-item-img" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
						</view>
						<view class="art-item-img-wp">
							<image class="art-item-img" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
						</view>
						<view class="art-item-img-wp">
							<image class="art-item-img" src="../../static/avatar/avatar_3.jpg" mode="widthFix"></image>
						</view>
					</view>
					<view class="user-doings">
						<view class="user-doings-item">
							<uni-icon type="fenxiang"></uni-icon>
							<text class="mdtxt">分享</text>
						</view>
						<view class="m-line"></view>
						<view class="user-doings-item">
							<uni-icon type="huida"></uni-icon>
							<text class="mdtxt">评论</text>
						</view>
						<view class="m-line"></view>
						<view class="user-doings-item">
							<uni-icon type="zan"></uni-icon>
							<text class="mdtxt">点赞</text>
						</view>
					</view>
				</view>
			</view>
			<view class="white">
				<view class="art-item">
					<view class="art-item-tl">
						<image class="avatar" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
						<view class="art-user">
							<view class="art-user-name">
								松松
							</view>
							<view class="art-usr-time">
								30秒前
							</view>
						</view>
						<view class="block-tl-rt">
							<view class="block-tl-rt-item">
								<uni-icon type="jubao"></uni-icon>
								<text class="mdtxt">举报</text>
							</view>
						</view>
					</view>
					<view class="art-item-info">
						似乎在😊 很多人眼中，胸针是古板或陈旧的~~，很难和时髦挂上勾❤️。但胸针是个很好搭配的饰品，在个很好搭配的饰上都能有它的存在，可以说它是万能的点缀。
					</view>
					<view class="art-item-pic">
						<view class="art-item-img-wp">
							<image class="art-item-img" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
						</view>
						<view class="art-item-img-wp">
							<image class="art-item-img" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
						</view>
						<view class="art-item-img-wp">
							<image class="art-item-img" src="../../static/avatar/avatar_3.jpg" mode="widthFix"></image>
						</view>
					</view>
					<view class="user-doings">
						<view class="user-doings-item">
							<uni-icon type="fenxiang"></uni-icon>
							<text class="mdtxt">分享</text>
						</view>
						<view class="m-line"></view>
						<view class="user-doings-item">
							<uni-icon type="huida"></uni-icon>
							<text class="mdtxt">评论</text>
						</view>
						<view class="m-line"></view>
						<view class="user-doings-item">
							<uni-icon type="zan"></uni-icon>
							<text class="mdtxt">点赞</text>
						</view>
					</view>
				</view>
			</view>
		</view>   
    </view>
</template>

<script>
    import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 4000,
				duration: 1000,
			}
		},
		components: {
			uniIcon
		},
	}
	
</script>

<style>
	.content {
		background-color: #f4f6fa;
	}
	
	.block-more {
		display: inline-block;
		vertical-align: middle;
		width: 30upx;
		height: 30upx;
		text-align: right;
		line-height: 28upx;
		border-radius: 10upx;
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
	
	.uni-icon-qianjin {
		font-size: 22upx;
	}
	
	uni-swiper{
		height: 140upx;
		padding: 30upx 0;
	}
	
	swiper{
		height: 140upx;
		padding: 30upx 0;
	}
	
	swiper-item {
		height: 140upx;
	}
	
	.topic-item {
		padding: 0 20upx;
		display: flex;
		flex-direction: row;
	}
	 
	.topic-item-avatar { 
		width: 140upx;
		height: 140upx;
		border-radius: 10upx;
		flex: 0 0 140upx;
	}
	
	.topic-item-info {
		flex: 1;
		padding-left: 20upx;
		line-height: 1;
	}
	
	.topic-item-tl {
		font-weight: 500;
		font-size: 30upx;
		padding: 10upx 0;
	}
	
	.topic-item-des {
		color: #535353;
		padding: 15upx 0 22upx;
	}
	
	.topic-item-num {
		color: #929292;
		font-size: 24upx;
	}
	
	.topic-item-num text {
		margin-right: 20upx;
	}
	
	.art-item {
		padding: 30upx 20upx;
	}
	
	.art-item-tl {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
	}
	
	.art-user {
		flex: 1;
		padding-left: 20upx;
		line-height: 1;
	}
	
	.art-usr-time {
		font-size: 22upx;
		color: #848484;
		margin-top: 15upx;
	}
	
	.art-item-info {
		font-size: 30upx;
		line-height: 42upx;
		margin: 20upx 0 15upx;
	}
	
	.art-item-pic {
		font-size: 0;
		margin-left: -5upx;
		margin-right: -5upx;
	}
	
	.art-item-img-wp {
		display: inline-block;
		vertical-align: top;
		width: 33.3333%;
		padding: 5upx;
		box-sizing: border-box;
	}
	
	.art-item-img {
		width: 100%;
		border-radius: 10upx;
	}
	
	.user-doings {
		display: flex;
		flex-direction: row;
		height: 40upx;
		margin-top: 25upx;
		color: #545454;
	}
	
	.user-doings-item {
		flex: 1;
		text-align: center;
	}
	
	.user-doings-item .uni-icon {
		font-size: 38upx;
		vertical-align: middle;
		margin-right: 10upx;
	}
	
	.m-line {
		width: 1px;
		height: 80upx;
		background-color: #f5f5f5;
		transform-origin: 0 0;
		transform: scaleY(0.5);
	}
</style>
