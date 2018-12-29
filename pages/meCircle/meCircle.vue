<template>
    <view class="content">
			<navigator class="obtain-boss" url="../member/member" hover-class="none">
				<uni-icon size="20" color="#e86a38" type="huiyuan1"></uni-icon>
				<view class="obtain-boss-info">
					钻石代理名片高亮 每天自动刷新
				</view>
				<view class="obtain-boss-open">
					开通
				</view>		
			</navigator>
		<view class="card-item">
			<view class="card-item-icon">
				<uni-icon type="jiufuqianbaoicon05" size="14"></uni-icon>
			</view>
			<view class="card-item-con">
				<image src="../../static/goods.jpg" mode="widthFix"></image>
				<view class="card-item-rt">
					<view class="card-item-info dbellipsis">
						我是一个可爱的妈咪，刚刚微商求带我是一个可爱的妈咪，刚刚微商求带我是一个可爱的妈咪，刚刚微商求带
					</view>
					<view class="card-item-sub">
						<text>点赞：68</text>
						<text>评论：3</text>
						<text>时间：刚刚</text>
					</view>
				</view>
			</view>
		</view>        
		<view class="card-tips">
			<view class="card-tips-item">
				<text>* 钻石代理能发布20条微商圈</text>
				<text>文字红色高亮</text>
			</view>
			<view class="card-tips-item">
				<text>* 普通会员能发布1条微商圈</text>
				<text>无高亮</text>
			</view>
		</view>
		<view class="card-fixed">
			<navigator class="card-fixed-item" hover-class="none" url="../putCircle/putCircle">
				<view class="card-fixed-con linearyellow">发布微商圈</view>
			</navigator>
			<navigator class="card-fixed-item" hover-class="none" url="../member/member">
				<view class="card-fixed-con">开通钻石代理</view>
			</navigator>
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
							showMask: false,
							showState: {
								top: false,
								middle: false,
								bottom: false,
								bottom1: false
							},
            }
        },
        methods: {
            bindChange: function (e) {	
							this.currentTab = e.detail.current;
						},
						swichNav: function(e){
							this.currentTab = e.currentTarget.dataset.current;
						},
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
		width: 100%;
		height: 84upx;
		line-height: 84upx;
		background-color: #44B549;
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
		margin: 0 30upx 30upx;
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
		/* color: #a1a1a1; */
		font-size: 26upx;
		/* margin: 16upx 0; */
		line-height: 1.3;
		padding-right: 30upx;
	}
	.card-item-sub{
		color: #a1a1a1;
		font-size: 24upx;
		/* margin: 16upx 0; */
	}
	.card-item-sub text:not(:last-child)::after{
		content: '|';
		padding: 0 20upx;
		color: #ddd;
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
		background-color: #F4F6FA;
		color: #44B549;
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
	.card-item-con{
		display: flex;
	}
	.card-item-con image{
		width: 120upx;
		height: 120upx;
		flex: 0 0 120upx;
	}
	.card-item-rt{
		flex: 1;
		/* padding-left: 20upx; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 5upx 20upx;
	}
</style>


