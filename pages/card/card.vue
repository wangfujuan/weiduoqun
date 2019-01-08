<template>
    <view class="content">
		<view class="swiper-tab">  
		  <view class="prev"><uni-icon type="fanhui" color="#fff" size="18"></uni-icon></view>
		  <view :class="['swiper-tab-list', currentTab==0 ? 'active' : '']" data-current="0" @click="swichNav">微信群名片</view>  
		  <view :class="['swiper-tab-list', currentTab==1 ? 'active' : '']" data-current="1" @click="swichNav">微信个人名片</view>  
		  <view class="addicon" @click="addClick"><uni-icon type="tianjia" color="#fff" size="18"></uni-icon></view>
		</view>
		<swiper :current="currentTab" class="swiper-box" duration="300" @change="bindChange">
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<navigator hover-class="none" url="../openagent/openagent">
					<view class="obtain-boss">
						<uni-icon size="20" color="#e86a38" type="huiyuan1"></uni-icon>
						<view class="obtain-boss-info">
							钻石代理名片高亮 每天自动刷新
						</view>
						<view class="obtain-boss-open">
							开通
						</view>
					</view>
					</navigator>
					<view class="card-item">
						<view class="card-item-icon">
							<uni-icon type="jiufuqianbaoicon05" size="16"></uni-icon>
						</view>
						<view class="card-item-tl">
							妮妮小宝贝
						</view>
						<view class="card-item-info">
							我是一个可爱的妈咪，刚刚微商求带...
						</view>
						<view class="card-item-sub">
							<text>曝光：68</text>
							<text>被添加：3</text>
							<text>更新：刚刚</text>
						</view>
						<view class="card-item-edit">
							<view class="card-item-edit-lf">
								<view class="card-item-sm">
									编辑
								</view>
								<view class="card-item-sm">
									下架
								</view>
							</view>
							<view class="card-item-edit-rt">
								<view class="card-item-sm light">
									置顶
								</view>
								<view class="card-item-sm"  @click="show" data-position="bottom">
									自动加人
								</view>
								<view class="card-item-sm">
									高亮
								</view>
								<view class="card-item-sm disabled">
									刷新
								</view>
							</view>
						</view>
					</view>     
					<view class="card-item used">
						<view class="card-item-icon">
							<uni-icon type="jiufuqianbaoicon05" size="16"></uni-icon>
						</view>
						<view class="card-item-tl">
							妮妮小宝贝
						</view>
						<view class="card-item-info">
							我是一个可爱的妈咪，刚刚微商求带...
						</view>
						<view class="card-item-sub">
							<text>曝光：68</text>
							<text>被添加：3</text>
							<text>更新：刚刚</text>
						</view>
						<view class="card-item-edit">
							<view class="card-item-edit-lf">
								<view class="card-item-sm">
									编辑
								</view>
								<view class="card-item-sm">
									下架
								</view>
							</view>
							<view class="card-item-edit-rt">
								<view class="card-item-sm light">
									置顶
								</view>
								<view class="card-item-sm">
									自动加人
								</view>
								<view class="card-item-sm">
									高亮
								</view>
								<view class="card-item-sm disabled">
									刷新
								</view>
							</view>
						</view>
					</view>    
					<view class="card-tips">
						<view class="card-tips-item">
							<text>* 钻石代理能发布20个名片</text>
							<text>名片红色高亮</text>
							<text>每天自动刷新2次</text>
						</view>
						<view class="card-tips-item">
							<text>* 超级会员能发布10个名片</text>
							<text>名片橙色高亮</text>
							<text>每天自动刷新1次</text>
						</view>
						<view class="card-tips-item">
							<text>* 普通会员能发布3个名片</text>
							<text>无高亮</text>
							<text>无自动刷新</text>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="card-item">
						<view class="card-item-icon">
							<uni-icon type="jiufuqianbaoicon05" size="16"></uni-icon>
						</view>
						<view class="card-item-tl">
							妮妮小宝贝
						</view>
						<view class="card-item-info">
							我是一个可爱的妈咪，刚刚微商求带...
						</view>
						<view class="card-item-sub">
							<text>曝光：68</text>
							<text>被添加：3</text>
							<text>更新：刚刚</text>
						</view>
						<view class="card-item-edit">
							<view class="card-item-edit-lf">
								<view class="card-item-sm">
									编辑
								</view>
								<view class="card-item-sm">
									下架
								</view>
							</view>
							<view class="card-item-edit-rt">
								<view class="card-item-sm light">
									置顶
								</view>
								<view class="card-item-sm" @click="show" data-position="bottom1">
									被动爆粉
								</view>
								<view class="card-item-sm">
									高亮
								</view>
								<view class="card-item-sm disabled">
									刷新
								</view>
							</view>
						</view>
					</view>                      
				</scroll-view>
			</swiper-item>
		</swiper>	
		<view class="card-fixed">
			<!-- <view class="card-fixed-item" @click="toAddCard">
				<view class="card-fixed-con linearyellow">{{btninfo}}</view>
			</view> -->
			<navigator class="card-fixed-item" hover-class="none" :url="addCard">
				<view class="card-fixed-con linearyellow">{{btninfo}}</view>
			</navigator>
			<navigator hover-class="none" class="card-fixed-item" url="../member/member">
				<view class="card-fixed-con">开通钻石代理</view>
			</navigator>
		</view>
		<view class="mask" v-show="showMask" @click="hide"></view>
		<!-- popup 置顶 start-->	
		<view class="popup popup-bottom" v-show="showState.bottom">
			<form @submit="formSubmit" @reset="formReset">
				<view class="user-do">
					<view class="">
						置顶推荐
					</view>
					<view class="user-do-true" @click="hide">
						<uni-icon type="shachu-xue" color="#8a8a8a" size="16"></uni-icon>
					</view>
				</view>
				<view class="card-mask-con">
					<view class="card-mask-tl">
						您的账号剩余微币：280个
					</view>
					<view class="card-mask-sub b-line">
						置顶推荐一天需要微币<text class="fontred">20个</text>
					</view>
					<view class="card-sl-tl">
						选择开通天数
					</view>
					<view class="card-sl-ls">
						<view class="card-sl-item"><view class="card-sl-item-con">3天</view></view>
						<view class="card-sl-item"><view class="card-sl-item-con card-sl-active">5天</view></view>
						<view class="card-sl-item"><view class="card-sl-item-con">10天</view></view>
						<view class="card-sl-item"><view class="card-sl-item-con">20天</view></view>
						<view class="card-sl-item"><view class="card-sl-item-con">30天</view></view>
						<view class="card-sl-item"><input class="card-sl-item-con" type="text" value="" placeholder="输入天数" /></view>
					</view>
					<view class="card-sl-sum">
						扣除微币：<text class="fontred fontweight">100个</text>
					</view>
					<button class="cardbtn" formType="submit">提交(支付100个微币)</button>				
				</view>
			</form>
		</view>
		<!-- popup 置顶 end-->
		<!-- popup 被动爆粉 start-->	
		<view class="popup popup-bottom" v-show="showState.bottom1">
			<form @submit="formSubmit" @reset="formReset">
				<view class="user-do">
					<view class="">
						被动爆粉详情
					</view>
					<view class="user-do-true" @click="hide">
						<uni-icon type="shachu-xue" color="#8a8a8a" size="16"></uni-icon>
					</view>
				</view>
				<view class="wx-item-md">
					<image class="avatar-100" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
					<view class="wx-item-con">
						<view class="wx-item-tl">
							<text class="mdtxt">妮妮小宝贝</text>
						</view>
						<view class="wx-item-wx">
							进群加群主，不加秒踢进群加群主
						</view>
					</view>	
				</view>
				<view class="user-self-title">
					开通钻石代理后，您可以获得他消费的<text class="fontred">40%</text>提成 
					<navigator hover-class="none" class="obtain-boss-open" url="../openagent/openagent">开通</navigator>
				</view>
				<view class="openlist">
					<view class="open-item b-line">
						<view class="open-item-lf">开通项目:</view>
						<view class="open-item-rt">微信个人名片被动爆粉 30天</view>
					</view>
					<view class="open-item b-line">
						<view class="open-item-lf">开通时间:</view>
						<view class="open-item-rt">2018-12-20 09:20:12</view>
					</view>
					<view class="open-item b-line">
						<view class="open-item-lf">截止时间:</view>
						<view class="open-item-rt">2018-12-20 09:20:12</view>
					</view>
					<view class="open-item b-line">
						<view class="open-item-lf">剩余时间:</view>
						<view class="open-item-rt"><text class="fontred">3天22小时44分</text></view>
					</view>
					<view class="open-item b-line">
						<view class="open-item-lf">被动爆粉状态:</view>
						<view class="open-item-rt"><text class="fontred larfont">被动爆粉中</text> <text class="user-status">暂停</text></view>
					</view>
				</view>
				
				<view class="card-mask-con">
					
					<button class="cardbtn" formType="submit">换号被动爆粉</button>				
				</view>
			</form>
		</view>
		<!-- popup 被动爆粉 end-->
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
				showMask: false,
				showState: {
					top: false,
					middle: false,
					bottom: false,
					bottom1: false
				},
				btninfo: '',
				addCard: ''
            }
        },
		onLoad(options) {
			this.currentTab = parseInt(options.currentTab);
			console.log(this.currentTab);
			if(this.currentTab == 0){
				this.btninfo = '添加微信群名片';
				this.addCard = '/pages/releaseGroup/releaseGroup';
			}else{
				this.btninfo = '添加个人微信名片';
				this.addCard = '/pages/releaseCard/releaseCard';
			}
		},
        methods: {
            bindChange: function (e) {	
				this.currentTab = e.detail.current;
			},
			swichNav: function(e){
				this.currentTab = e.currentTarget.dataset.current;
				if(e.currentTarget.dataset.current == 0){
					this.btninfo = '添加微信群名片';
					this.addCard = '/pages/releaseGroup/releaseGroup';
				}else{
					this.btninfo = '添加个人微信名片';
					this.addCard = '/pages/releaseCard/releaseCard';
				}
			},
// 			toAddCard: function(){
// 				uni.navigateTo({
// 					url: '/pages/releaseGroup/releaseGroup'
// 				})
// 			},
			show: function(e) {
				var pos = e.currentTarget.dataset.position;
				switch (pos) {
					case 'top':
						this.activePop = 'top'
						break
					case 'bottom':
						this.activePop = 'bottom'
						break
					case 'bottom1':
						this.activePop = 'bottom1'
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
			addClick: function(){
				if(this.currentTab == 0){
					uni.navigateTo({
						url: '/pages/releaseGroup/releaseGroup'
					})
				}else{
					uni.navigateTo({
						url: '/pages/releaseCard/releaseCard'
					})
				}
				
			},
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
	.card-fixed{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 20upx 10upx;
		display: flex;
		background-color: #fff;
	}
	.card-fixed-item{
		flex: 1;
		text-align: center;
	}
	.card-fixed-con{
		margin: 0 10upx;
		height: 76upx;
		line-height: 76upx;
		background-image: linear-gradient(-45deg, #44b549 0%, #5dd962 100%);
		border-radius: 6upx;
		color: #fff;
	}
	.linearyellow{
		background-image: linear-gradient(-45deg, #f09737 0%, #f4bf3e 100%);
	}
	.obtain-boss {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 30upx;
		border: 2upx solid #d8ae3d;
		height: 24upx;
		line-height: 24upx;
		padding: 30upx 20upx;
		color: #e86a38;
		border-radius: 10upx;
	}
	
	.obtain-boss-info {
		padding-left: 10upx;
	}
	
	.obtain-boss-open {
		position: absolute;
		right: 20upx;
		width: 110upx;
		height: 48upx;
		line-height: 48upx;
		background-image: linear-gradient(-45deg, #d9c085 0%, #b39a65 100%);;
		border-radius: 48upx;
		top: 18upx;
		color: #fff;
		text-align: center;
		font-size: 24upx;
	}
    .swiper-tab{
		font-size: 0;
		width: 60%;
		height: 84upx;
		line-height: 84upx;
		background-color: #44B549;
		padding-top: var(--status-bar-height);
		padding-left: 20%;
		padding-right: 20%;
		position: relative;
	}
	.swiper-tab-list{
		position: relative;
		display: inline-block;
		vertical-align: top;
		font-size: 28upx;
		width: 50%;
		text-align: center;
		color: #fff;
	}
	.swiper-tab-list.active::after{
		content: '';
		position: absolute;
		width: 60upx;
		bottom: 2upx;
		left: 50%;
		margin-left: -30upx;
		height: 4upx;
		background-color: #fff;	
		box-shadow: 0 2upx 10upx rgba(0,0,0,.3);
		border-radius: 4upx;
	}
	.prev{
		position: fixed;
		left: 30upx;
		top: var(--status-bar-height);
	}
	.addicon{
		position: fixed;
		right: 30upx;
		top: var(--status-bar-height);
		padding-top: 12upx;
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
		margin: 30upx;
		background-color: #fff;
		padding: 20upx 14upx 20upx 24upx;
		box-shadow: 2upx 2upx 4upx rgba(0, 0, 0, .08);
		border-radius: 10upx;
		line-height: 1;
		position: relative;
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
		margin: 10upx 0 22upx;
		font-size: 30upx;
	}
	.card-item-info{
		color: #a1a1a1;
		font-size: 26upx;
		margin: 16upx 0;
	}
	.card-item-sub{
		color: #a1a1a1;
		font-size: 24upx;
		margin: 16upx 0;
	}
	.card-item-sub text:not(:last-child)::after{
		content: '|';
		padding: 0 20upx;
		color: #ddd;
	}
	.card-item-edit{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 40upx;
	}
	.card-item-edit-lf{
		display: flex;
	}
	.card-item-edit-rt{
		display: flex;
	}
	.card-item-sm{
		border: 2upx solid #ddd;
		font-size: 26upx;
		padding: 6upx 10upx;
		margin-right: 10upx;
		color: #505050;
		border-radius: 4upx;
	}
	.card-item-sm.light{
		color: #e86a38;
		border-color: #e86a38;
	}
	.card-item-sm.disabled{
		color: #ccc;
	}
	.used .card-item-tl,
	.used .card-item-sub,
	.used .card-item-info,
	.used .card-item-sm,
	.used .card-item-sm.light,
	.used .card-item-icon .uni-icon{
		color: #ccc;
		border-color: #eee;
	}
	.card-tips{
		padding: 0 30upx;
		color: #bbb;
		font-size: 24upx;
	}
	.card-tips text{
		margin-right: 20upx;
	}
	/* popup start */
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
		width: 550upx;
		height: 375upx;
		border-radius: 10upx;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}

	.popup-top {
		top: 0;
		width: 100%;
		text-align: center;
	}

	.popup-bottom {
		bottom: 0;
		width: 100%;
		/* text-align: center; */
	}
	.user-do{
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		position: relative;
		background-color: #fff;
		color: #44B549;
		border-bottom: 2upx solid #e5e5e5;
	}
	.user-do-true{
		position: absolute;
		right: 30upx;
		top: 0;
	}
	.card-mask-con{
		padding: 0 30upx;
		font-size: 24upx;
		line-height: 1;
	}
	.card-mask-tl{
		font-weight: 500;
		margin: 25upx 0 10upx;
	}
	.card-mask-sub{
		font-size: 22upx;
		color: #a1a1a1;
		padding-bottom: 20upx;
	}
	.card-sl-tl{
		color: #a1a1a1;
		padding: 30upx 0 20upx;
	}
	.card-sl-ls{
		display: flex;
		flex-wrap: wrap;
		margin-left: -10upx;
		margin-right: -10upx;
	}
	.card-sl-item{
		flex: 0 0 33.3333%;
		text-align: center;
		margin-bottom: 20upx;
	}
	.card-sl-item-con{
		margin: 0 10upx;
		border: 2upx solid #eee;
		height: 60upx;
		line-height: 60upx;
		border-radius: 6upx;
		font-size: 28upx;
	}
	.card-sl-active{
		background-color: #44B549;
		color: #fff;
		border-color: #44B549;
	}
	.card-sl-sum{
		color: #a1a1a1;
		padding: 10upx 0 50upx;
	}
	.fontred{
		color: #e86a38;
	}
	.fontweight{
		font-weight: 500;
	}
	.cardbtn{
		background-color: #44B549;
		color: #fff;
		height: 76upx;
		line-height: 76upx;
		border-radius: 6upx;
		margin-bottom: 20upx;
		font-size: 28upx;
	}
	.cardbtn::after{
		border: none;
	}
	.user-self-title{
		margin-top: 20upx;
		padding: 24upx 0;
		text-align: center;
		color: #999999;
		font-size: 22upx;
		background-color: #f8f8f8;
		line-height: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		/* position: relative; */
	}
	.user-self-title .obtain-boss-open{
		position: static;
		margin-left: 10upx;
	}
	.openlist{
		background-color: #fff;
		margin-bottom: 20upx;
	}
	.open-item{
		padding: 24upx 0;
		color: #b2b2b2;
		display: flex;
		font-size: 24upx;
	}
	.open-item-lf{
		flex: 0 0 200upx;
		text-align: right;
	}
	.open-item-rt{
		flex: 1;
		padding-left: 20upx;
		color: #333;
	}
	.user-status{
		color: #b28431;
		border: 2upx solid #b28431;
		border-radius: 6upx;
		padding: 4upx 16upx;
		margin: 0 10upx;
	}
	.wx-item-md{
		flex: 1;
		display: flex;
		flex-direction: row;
		padding-left: 10upx;
		justify-content: center;
		padding: 20upx 0 0;
	}
	.avatar-100{
		width: 100upx;
		height: 100upx;
		flex: 0 0 100upx;
		border-radius: 6upx;
	}
	.wx-item-con{
		padding-left: 20upx;
	}
	.wx-item-tl{
		font-weight: 500;
		font-size: 30upx;
	}
	.wx-item-wx{
		margin-top: 10upx;
		color: #b2b2b2;
		font-size: 24upx;
	}
</style>

