<template>
	<view class="content">
		<view class="content-pad">
			<view class="white">
				<view class="comment-con">
					<view class="comment-item">
						<view class="comment-user">
							<image class="avatar-60" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
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
		<goBack v-show="gabackshow"></goBack>
	</view>
</template>

<script>
	export default {
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
	.content{
		background-color: #F4F6FA;
	}
	.comment-con{
		padding: 0 30upx 26upx;
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
</style>
