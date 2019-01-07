<template>
	<view class="content">
		<view class="content-pad">
			<view class="white fixed">
				<view class="wx-item">
					<navigator class="wx-item-md" hover-class="none" url="../memberindex/memberindex">
						<view class="avatar-wp">
							<view class="avatar-vip">
								<uni-icon type="huiyuan" size="10"></uni-icon>
							</view>
							<image class="avatar-100" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
						</view>	
						<view class="wx-item-con">
							<view class="wx-item-tl">
								<text class="mdtxt">妮妮小宝贝</text>
							</view>
							<view class="wx-item-wx">
								<uni-icon type="kejian" size="18"></uni-icon><text class="mdtxt">2029</text>
							</view>
						</view>	
					</navigator>
					<view class="wx-item-rt" @click="show" data-position="middle">
						<uni-icon type="tianjia" size="12" color="#44B549"></uni-icon>加微信
					</view>
				</view>
			</view>
			
			<view class="fixed-padtop">
				<view class="white">
					<view class="wxgc-title">
						智能儿童早教机
						<view class="block-tl-rt">
							<navigator url="../report/report" hover-class="none" class="block-tl-rt-item">							
								<uni-icon type="jubao" size="13"></uni-icon>
								<text class="mdtxt">举报</text>
							</navigator>
						</view>
					</view>
					<view class="padding10">
						<view class="wxgc-sub-title">
							可以连WiFi，只有你想不到的，没有它做不到的，你懂得，让孩子实现一个不一样的童年吧
						</view>
						<image class="goodsdetail-img" src="../../static/goods.jpg" mode="widthFix"></image>
					</view>
				</view>
				<view class="white">
					<view class="block-tl">
						<view class="block-tl-lf">
							<view class="block-tl-icon block-tl-color2">
								<uni-icon type="huida" size="13" color="#fff"></uni-icon>
							</view>
							<text class="mdtxt">评论</text>
						</view>
					</view>
					<view class="comment-con">
						<!-- <view class="no-comment">
							暂无评论
						</view> -->
						<view class="comment-item">
							<view class="comment-user">
								<image class="avatar-60" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
								<view class="comment-user-name">
									微商童装诚招代理一件代发
								</view>
							</view>
							<view class="comment-info">
								<view class="comment-info-txt">
									所有宝宝们可以叫我微信私聊
								</view>
								<view class="comment-info-time">
									2018-12-12 09:40:30
								</view>
							</view>
						</view>
						<view class="comment-item">
							<view class="comment-user">
								<image class="avatar-60" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
								<view class="comment-user-name">
									身心康
								</view>
							</view>
							<view class="comment-info">
								<view class="comment-info-txt">
									麦吉丽，卡瘦
								</view>
								<view class="comment-info-time">
									2018-12-12 09:40:30
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="fixed-bt">
			<view class="fixed-bt-item">
				<uni-icon type="fenxiang" size="20"></uni-icon>
				<text>分享</text>
			</view>
			<view class="fixed-bt-item">
				<uni-icon type="huida" size="22"></uni-icon>
				<text>评论 0</text>
			</view>
			<view class="fixed-bt-btn-wp">
				<view class="fixed-bt-btn block-tl-color8">
					我要发表评论
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
				
			};
		},
		components: {
			uniIcon
		},
	}
</script>

<style>
	.fixed{
		position: fixed;
		left: 20upx;
		right: 20upx;
		background-color: rgba(255,255,255,.95);
	}
	.fixed-padtop{
		padding-top: 190upx;
		padding-bottom: 130upx;
	}
	.content{
		background-color: #F4F6FA;
	}
	.wx-item{
		height: 130upx;
		/* background-color: #fff; */
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
	.avatar-wp{
		width: 104upx;
		height: 104upx;
		flex: 0 0 104upx;
		border-radius: 6upx;
		border: 4upx solid #f7d46b;
		padding: 4upx;
		position: relative;
		border-radius: 100%;
	}
	.avatar-100{
		width: 104upx;
		height: 104upx;
		border-radius: 100%;
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
		margin-top: 10upx;
		color: #888888;
	}
	.ding{
		width: 40upx;
		height: 40upx;
		line-height: 40upx;
	}
	.avatar-vip{
		position: absolute;
		bottom: 0;
		background-color: #f7d46b;
		color: #fff;
		font-size: 20upx;
		border-radius: 4upx;
		width: 30upx;
		height: 30upx;
		line-height: 30upx;
		border-radius: 100%;
		text-align: center;
		right: 0;
		border: 4upx solid #fff;
	}
	.wxgc-title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20upx 20upx;	
		font-size: 32upx;
	}
	.padding10{
		padding: 0 20upx 20upx;
	}
	.wxgc-sub-title{
		line-height: 1.4;
		color: #656565;
		padding-bottom: 20upx;
	}
	.goodsdetail-img{
		width: 100%;
	}
	.comment-con{
		padding-bottom: 26upx;
	}
	.comment-item{
		padding: 26upx 30upx 0;
	}
	.comment-user{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.avatar-60{
		width: 60upx;
		height: 60upx;
		flex: 0 0 60upx;
		border-radius: 50%;
	}
	.comment-user-name{
		font-weight: 500;
		padding-left: 20upx;
		font-size: 26upx;
	}
	.comment-info{
		padding-left: 80upx;
		padding-top: 10upx;
	}
	.comment-info-time{
		padding-top: 20upx;
		font-size: 26upx;
		color: #9d9d9d;
	}
	.no-comment{
		color: #989898;
		font-size: 30upx;
		text-align: center;
		height: 180upx;
		display: flex;
		justify-content: center;
		align-items:center ;
		padding-bottom: 30upx;
	}
	.fixed-bt{
		height: 120upx;
		background-color: rgba(255,255,255,.95);
		box-shadow: 2upx 0 2upx rgba(0,0,0,.1);
		bottom: 30upx;
		position: fixed;
		left: 20upx;
		right: 20upx;
		border-radius: 16upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.fixed-bt-item{
		flex: 0 0 140upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #535353;
		font-size: 24upx;
	}
	.fixed-bt-btn-wp{
		flex: 1;
		padding-right: 20upx;
		padding-left: 180upx;
	}
	.fixed-bt-btn{
		height: 76upx;
		border-radius: 76upx;
		text-align: center;
		line-height: 76upx;
		color: #fff;
		font-size: 26upx;
	}
	.block-tl-rt-item .uni-icon{
		margin-right: 4upx;
	}
</style>
