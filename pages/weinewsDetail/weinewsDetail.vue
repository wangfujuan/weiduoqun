<template>
	<view class="content">
		<view class="newsdetail">
			<view class="news-tl">
				三倍的宽地！我在评论区装引流的秘密哈哈哈哈
			</view>
			<view class="news-sub-tl">
				<text>2018-12-27 23:20:20</text>
				<text>微多群</text>
				<text>阅读数：400</text>
			</view>
			<image class="news-img" src="../../static/goods.jpg" mode="widthFix"></image>
			<view class="news-info">
				<view class="">
					平台流量越大，意味着机会越多，面对的竞争也多，但是想要玩出成果，弯道超车很重要。
				</view>
				<view class="">视频红利时代，很多人都看到了这条捷径，想要想着弯道超车，在这个行业淘金。而视频平台中，按照用户体量来算，抖音可以说是当之无愧的霸主，虽然成立的时间比较短，但是发展的速度非常快。迅速赶超一些老牌视频平台，把他们远远的抛在了后面。</view>
				<view class="">目前圈子里面的人也在不断的研究抖音的流量。打开朋友圈都是刷频式的晒成果，今天引流多少个，昨天引流多少个。让很多新手朋友非常羡慕，都想搞清楚他们用了什么独特的方法。更有甚者，开起了抖音引流培训，动辄就是几百上千的收费。在抖音上赚不赚钱我不知道，但是培训肯定是赚钱了</view>
			</view>
			<view class="detail-tips">
				<view class="detail-tips-lf">
					<view class="">文章内容不代表微多群平台观点</view>
					<view class="">如有侵权，请联系在先客服处理</view>
				</view>
				<navigator url="../report/report">
				<view class="block-tl-rt">
					<view class="block-tl-rt-item">							
						<uni-icon type="qinglihuancun" size="13"></uni-icon>
						<text class="mdtxt">内容投诉</text>
					</view>
				</view>
				</navigator>
			</view>
			<view class="comment-tl">
				热门评论
			</view>
			<view class="comment-con b-line">
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
			<navigator class="share-more center" hover-class="none" url="../moreComment/moreComment">
				查看更多评论<uni-icon type="qianjin" size="12"></uni-icon>
			</navigator>
		</view>
		<view class="wd-fixed-bt">
			<view class="wx-fixed-input">
				<uni-icon type="yijianfankui" size="16" color="#1a1a1a"></uni-icon>
				评一下
			</view>
			<view class="wd-fixed-item">
				<uni-icon type="huida" size="16" color="#1a1a1a"></uni-icon>
				<text>1</text>
			</view>
			<view class="wd-fixed-item">
				<uni-icon type="zan" size="16" color="#1a1a1a"></uni-icon>
				<text>3</text>
			</view>
			<view class="wd-fixed-item">
				<uni-icon type="shoucang1" size="16" color="#1a1a1a"></uni-icon>
				<text>收藏</text>
			</view>
			<view class="wd-fixed-item">
				<uni-icon type="fenxiang" size="16" color="#1a1a1a"></uni-icon>
				<text>分享</text>
			</view>
		</view>
		<goBack v-show="gabackshow"></goBack>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	import goBack from '../../components/goback.vue'
	
	export default {
		components: {
			uniIcon,
			goBack
		},
		data() {
			return {
				gabackshow: false
			};
		},
		onLoad: function() {
			
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
	.content{
		border-top: 2upx solid #e5e5e5;
		padding: 0 30upx;
	}
	.news-tl{
		font-size: 38upx;
		font-weight: 500;
		margin: 40upx 0;
	}
	.news-sub-tl{
		font-size: 22upx;
		color: #9f9f9f;
		line-height: 1;
		margin: 40upx 0; 
	}
	.news-sub-tl text{
		margin-right: 30upx;	
	}
	.newsdetail{
		padding-bottom: 100upx;
	}
	.newsdetail image{
		width: 100%;
	}
	.news-info view{
		margin: 40upx 0;
		text-indent: 2em;
		font-size: 30upx;
	}
	.block-tl-rt-item .uni-icon{
		margin-right: 4upx;
	}
	.detail-tips{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40upx;
	}
	.detail-tips-lf{
		color: #a1a1a1;
		font-size: 22upx;
		line-height: 1.2;
	}
	.comment-con{
		padding-bottom: 26upx;
	}
	.comment-item{
		padding: 26upx 0 0;
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
	.comment-tl{
		font-weight: 500;
		text-align: center;
		position: relative;
		padding-bottom: 10upx;
		margin: 60upx 0 30upx;
		
	}
	.comment-tl::after{
		content: "";
		position: absolute;
		bottom: 0;
		width: 40upx;
		height: 4upx;
		border-radius: 4upx;
		background-color: #44B549;
		left: 50%;
		margin-left: -20upx;
		box-shadow: 0 1px 5px rgba(68,181,73,.3);
	}
	.wd-fixed-bt{
		position: fixed;
		bottom: 0;
		height: 100upx;
		background-color: #fff;
		border-top: 2upx solid #e5e5e5;
		left: 0;
		right: 0;
		align-items: center;
		display: flex;
	}
	.wd-fixed-item{
		flex: 0 0 100upx;
		width: 100upx;
		display: flex;
		flex-direction: column;
		font-size: 20upx;
		color: #505050;
		align-items: center;
	}
	.wx-fixed-input{
		flex: 1;
		height: 56upx;
		background-color: #f6f6f6;
		margin-left: 20upx;
		border-radius: 56upx;
		padding: 0 20upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 24upx;
	}
	.wx-fixed-input .uni-icon{
		margin-right: 6upx;
	}
	.share-more{
		color: #999;
		font-size: 24upx;
		padding: 30upx 0;
	}
</style>
