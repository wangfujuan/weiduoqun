<template>
	<view class="content">
		<view class="content-pad">
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
					</view>
					<navigator url="../circleDetail/circleDetail" hover-class="none">
						<view class="art-item-info">
							似乎在😊 很多人眼中，胸针是古板或陈旧的~~，很难和时髦挂上勾❤️。但胸针是个很好搭配的饰品，在个很好搭配的饰上都能有它的存在，可以说它是万能的点缀。
						</view>
					</navigator>
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
						<view class="user-doings-item center">
							<uni-icon type="fenxiang"></uni-icon>
							分享
						</view>
						<view class="m-line"></view>
						<view class="user-doings-item center">
							<uni-icon type="huida"></uni-icon>
							评论
						</view>
						<view class="m-line"></view>
						<view class="user-doings-item center">
							<uni-icon type="zan"></uni-icon>
							点赞
						</view>
					</view>
					<view class="users-con">
						<view class="users-zans b-line">
							<uni-icon type="zan-fill" size="16" color="#666666"></uni-icon>
							<view class="userzan-name">小爱同学</view>
							<view class="userzan-name">前年等一会</view>
						</view>
						<view class="user-comment-item">
							<text>小爱同学:</text>我们这，不投资不囤货，妹妹有兴趣可以私聊我哦
						</view>
						<view class="user-comment-item">
							<text>18929281:</text>哈哈
						</view>
					</view>
				</view>
			</view>
			<goBack v-show="gabackshow"></goBack>
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
				gabackshow: false
			};
		},
		onPageScroll: function(e){
			if(e.scrollTop > 400){
				this.gabackshow = true
			}else{
				this.gabackshow = false
			}
		}
	}
</script>

<style>
	.block-tl-rt-item .uni-icon{
		margin-right: 4upx;
	}
	.content {
		background-color: #f4f6fa;
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
		background-color: #e5e5e5;
		transform-origin: 0 0;
		transform: scaleY(0.5);
	}
	.users-con{
		background-color: #f6f6f6;
		border-radius: 10upx;
		margin-top: 30upx;
		padding-bottom: 20upx;
	}
	.users-zans{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 20upx;
		flex-wrap: wrap;
		margin-bottom: 20upx;
	}
	.users-zans .uni-icon{
		margin-right: 10upx;
		margin-top: -4upx;
	}
	.userzan-name:not(:last-child)::after{
		content: '，';	
	}
	.user-comment-item{
		padding: 0 20upx;
	}
	.user-comment-item text{
		color: #8f8f8f;
		margin-right: 10upx;
	}
</style>
