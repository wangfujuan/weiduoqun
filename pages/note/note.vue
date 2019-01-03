<template>
    <view class="content">
		<view class="swiper-tab">  
		  <view :class="['swiper-tab-list', currentTab==0 ? 'active' : '']" data-current="0" @click="swichNav">所有消息</view> 
		  <view class="swiper-line"></view>
		  <view :class="['swiper-tab-list', currentTab==1 ? 'active' : '']" data-current="1" @click="swichNav">未读消息</view>  
		  <view class="swiper-line"></view>
		  <view :class="['swiper-tab-list', currentTab==2 ? 'active' : '']" data-current="2" @click="swichNav">已读消息</view>  
		</view>
		<swiper :current="currentTab" class="swiper-box" duration="300" @change="bindChange">
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<!-- <view class="card-item">
						<view class="card-item-tl">
							您邀请的好友开通会员啦！
							<view class="card-item-time">
								<text>9:01</text>
							</view>
						</view>
						<view class="card-item-sub">
							<view class="card-item-txt">
								您邀请的一级好友108****0098开通了钻石代理，如果您是钻石代理的话，能获得160.00元 <navigator hover-class="none" class="notedetail" url="">查看详情</navigator>
							</view>
							<view class="card-item-last">已读</view>
						</view>
					</view>   
					<view class="card-item haveread">
					   	<view class="card-item-tl">
					   		您邀请的好友开通会员啦！
					   		<view class="card-item-time">
					   			<text>9:01</text>
					   		</view>
					   	</view>
					   	<view class="card-item-sub">
					   		<view class="card-item-txt">
					   			您邀请的一级好友108****0098开通了钻石代理，如果您是钻石代理的话，能获得160.00元 <navigator hover-class="none" class="notedetail" url="">查看详情</navigator>
					   		</view>
					   		<view class="card-item-last"></view>
					   	</view>
					</view> --> 
					<checkbox-group @change="checkboxChange" color="#000">
						<view class="checkbox-wp" v-for="item in items" :key="item.value">
							<label class="checkbox" v-if="eidt">
								<checkbox :value="item.name" :checked="item.checked" />							
							</label>
							<view class="card-item">
								<view class="card-item-tl">
									您邀请的好友开通会员啦！
									<view class="card-item-time">
										<text>9:01</text>
									</view>
								</view>
								<view class="card-item-sub">
									<view class="card-item-txt">
										您邀请的一级好友108****0098开通了钻石代理，如果您是钻石代理的话，能获得160.00元 <navigator hover-class="none" class="notedetail" url="">查看详情</navigator>
									</view>
									<view class="card-item-last">已读</view>
								</view>
							</view> 
						</view>
					</checkbox-group>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					 <view class="checkbox-wp" v-for="item in items" :key="item.value">
					 	<label class="checkbox" v-if="eidt">
					 		<checkbox :value="item.name" :checked="item.checked" />							
					 	</label>
					 	<view class="card-item">
					 		<view class="card-item-tl">
					 			您邀请的好友开通会员啦！
					 			<view class="card-item-time">
					 				<text>9:01</text>
					 			</view>
					 		</view>
					 		<view class="card-item-sub">
					 			<view class="card-item-txt">
					 				您邀请的一级好友108****0098开通了钻石代理，如果您是钻石代理的话，能获得160.00元 <navigator hover-class="none" class="notedetail" url="">查看详情</navigator>
					 			</view>
					 			<view class="card-item-last">已读</view>
					 		</view>
					 	</view> 
					 </view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					 <view class="checkbox-wp" v-for="item in items" :key="item.value">
					 	<label class="checkbox" v-if="eidt">
					 		<checkbox :value="item.name" :checked="item.checked" />							
					 	</label>
					 	<view class="card-item">
					 		<view class="card-item-tl">
					 			您邀请的好友开通会员啦！
					 			<view class="card-item-time">
					 				<text>9:01</text>
					 			</view>
					 		</view>
					 		<view class="card-item-sub">
					 			<view class="card-item-txt">
					 				您邀请的一级好友108****0098开通了钻石代理，如果您是钻石代理的话，能获得160.00元 <navigator hover-class="none" class="notedetail" url="">查看详情</navigator>
					 			</view>
					 			<view class="card-item-last">已读</view>
					 		</view>
					 	</view> 
					 </view>
				</scroll-view>
			</swiper-item>
		</swiper>	
		<view class="noteft" v-if="eidt">
			<view class="allcheck">
				全部
			</view>
			<view class="noteft-btn">
				标记已读
			</view>
			<view class="noteft-btn fillbg">
				删除
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
				currentTab: 0,
				items: [
					{
						name: 'USA',
						value: '美国'
					},
					{
						name: 'CHN',
						value: '中国',
						checked: 'true'
					},
					{
						name: 'BRA',
						value: '巴西'
					}
				],
				eidt: false
            }
        },
        methods: {
            bindChange: function (e) {	
				this.currentTab = e.detail.current;
			},
			swichNav: function(e){
				this.currentTab = e.currentTarget.dataset.current;
			},	
			checkboxChange: function (e) {
				console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
			}
        },
		onNavigationBarButtonTap: function(){
			this.eidt = true
		}
    }
</script>

<style>
	page{
		height: 100%;
		overflow: hidden;
	}
	.content{
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		background-color: #F4F6FA;
	}
    .swiper-tab{
		display: flex;
		width: 100%;
		height: 84upx;
		line-height: 84upx;
		background-color: #fff;
		border-top: 2upx solid #E5E5E5;
		border-bottom: 2upx solid #E5E5E5;
	}
	.swiper-line{
		width: 2upx;
		background-color: #E5E5E5;
		height: 100%;
	}
	.swiper-tab-list{
		position: relative;
		font-size: 28upx;
		flex: 1;
		text-align: center;
		color: #8a8a8a;
	}
	.swiper-tab-list.active{
		color: #b28431;
	}
	.swiper-tab-list.active::after{
		content: '';
		position: absolute;
		width: 90%;
		bottom: 0;
		left: 5%;
		height: 4upx;
		background-color: #b28431;	
		box-shadow: 0 2upx 10upx rgba(178,132,49,.3);
	}
	.swiper-box {
        flex: 1;
        width: 100%;
        height: calc(100% - 84upx);
    }
	.list {
		width: 100%;
		height: 100%;
	}
	.card-item{
		margin: 20upx 20upx;
		background-color: #fff;
		padding: 20upx 24upx 20upx 44upx;
		box-shadow: 2upx 2upx 4upx rgba(0, 0, 0, .08);
		border-radius: 10upx;
		line-height: 1;
		position: relative;
	}
	.card-item::before{
		content: "";
		width: 8upx;
		height: 8upx;
		background-color: #b28431;
		border-radius: 100%;
		position: absolute;
		left: 20upx;
		top: 40upx;
	}
	.haveread::before{
		background-color: #b2b2b2;
	}
	.card-item-icon{
		position: absolute;
		right: 24upx;
		top: 28upx;
		
	}
	.card-item-icon .uni-icon{
		color: #8a8a8a;
	}
	.card-item-tl{
		font-weight: 500;
		margin: 10upx 0 12upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.card-item-time{
		font-size: 24upx;
		font-weight: normal;
		color: #b2b2b2;
	}
	.card-item-sum text{
		font-size: 32upx;
	}
	.card-item-sub{
		color: #b2b2b2;
		font-size: 24upx;
		margin: 16upx 0 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		line-height: 1.5;
	}
	.card-item-txt{
		flex: 1;
	}
	.card-item-last{
		text-decoration: underline;
		flex: 0 0 80upx;
		text-align: right;
	}
	.notedetail{
		color: #b28431;
		text-decoration: underline;
		display: inline;
		font-size: 24upx;
	}
	.checkbox-wp{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.checkbox-wp .checkbox{
		margin-left: 20upx;
	}
	.noteft{
		position: fixed;
		bottom: 0;
		background-color: #fff;
		left: 0;
		right: 0;
		height: 100upx;
		display: flex;
		align-items: center;
		padding: 0 20upx;
	}
	.noteft-btn{
		color: #b28431;
		height: 70upx;
		line-height: 70upx;
		border: 2upx solid #b28431;
		width: 170upx;
		text-align: center;
		border-radius: 10upx;
		margin-left: 20upx;
	}
	.fillbg{
		background-color: #b28431;
		color: #fff;
	}
	.allcheck{
		flex: 1;
		color: #b28431;
	}
</style>




