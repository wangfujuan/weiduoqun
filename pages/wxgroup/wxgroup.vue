<template>
	<view class="content">	
		<view class="swiper-tab">  
		  <view class="prev" @click="prevClick"><uni-icon type="fanhui" color="#fff" size="18"></uni-icon></view> 
		  <view :class="['swiper-tab-list', currentTab==0 ? 'active' : '']" data-current="0" @click="swichNav">微信群</view>  
		  <view :class="['swiper-tab-list', currentTab==1 ? 'active' : '']" data-current="1" @click="swichNav">微信个人</view>  
		  <view class="addicon" @click="helpClick"><uni-icon type="iconfontlipinduihuanbangzhu" color="#fff" size="18"></uni-icon></view>
		</view>
		<swiper :current="currentTab" class="swiper-box" duration="300" @change="bindChange">
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="filter">
						<view class="filter-item" @click="show" data-position="top">
							人气排行
						</view>
						<view class="filter-item">
							地区
						</view>
						<view class="filter-item" @tap="showRightDrawer">
							行业
						</view>
					</view>
					<view class="wxgroup-ls">
						<checkbox-group @change="checkboxChange">
							<view class="wx-item" v-for="item in items" :key="item.value" color="#44B549">
								<label>
									<checkbox class="checkbox" :value="item.value" :checked="item.check" />	
									<view class="me-checkbox">
										<uni-icon type="right-1" v-if="item.check" color="#44B549" size="22"></uni-icon>
										<uni-icon type="right-1" v-else color="#ccc" size="22"></uni-icon>
									</view>
								</label>
								<navigator class="wx-item-md" hover-class="none" url="../wxgroupcard/wxgroupcard">
									<view class="avatar-wp">
										<view class="avatar-vip">
											<uni-icon type="zuanshi" size="9"></uni-icon>超级会员
										</view>
										<image class="avatar-100" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
									</view>	
									<view class="wx-item-con">
										<view class="wx-item-tl">
											<text class="ding">顶</text><text class="mdtxt">妮妮小宝贝</text>
										</view>
										<view class="wx-item-wx">
											进群加群主，不加秒踢
										</view>
									</view>	
								</navigator>
								<view class="wx-item-rt" @click="show" data-position="middle">
									<uni-icon type="tianjia" size="12" color="#44B549"></uni-icon>加群
								</view>
							</view>
						</checkbox-group>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="list" scroll-y>
					<view class="filter">
						<view class="filter-item" @click="show" data-position="top">
							人气排行
						</view>
						<view class="filter-item">
							地区
						</view>
						<view class="filter-item">
							性别
						</view>
						<view class="filter-item" @tap="showRightDrawer">
							行业
						</view>
					</view>
					<view class="wxgroup-ls">
						<checkbox-group @change="checkboxChange">
							<view class="wx-item" v-for="item in items" :key="item.value" color="#44B549">
								<label>
									<checkbox class="checkbox" :value="item.value" :checked="item.check" />	
									<view class="me-checkbox">
										<uni-icon type="right-1" v-if="item.check" color="#44B549" size="22"></uni-icon>
										<uni-icon type="right-1" v-else color="#ccc" size="22"></uni-icon>
									</view>
								</label>
								<navigator class="wx-item-md" hover-class="none" url="../wxgroupcard/wxgroupcard">
									<view class="avatar-wp">
										<view class="avatar-vip">
											<uni-icon type="zuanshi" size="9"></uni-icon>超级会员
										</view>
										<image class="avatar-100" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
									</view>	
									<view class="wx-item-con">
										<view class="wx-item-tl">
											<text class="ding">顶</text><text class="mdtxt">妮妮小宝贝</text>
										</view>
										<view class="wx-item-wx">
											进群加群主，不加秒踢
										</view>
									</view>	
								</navigator>
								<view class="wx-item-rt" @click="show" data-position="middle">
									<uni-icon type="tianjia" size="12" color="#44B549"></uni-icon>加群
								</view>
							</view>
						</checkbox-group>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<view class="wxgroup-fix">
			<uni-icon type="right-1" color="#44B549" size="22"></uni-icon>
			已选8个{{wxcategory}}
			<view class="wxgroup-btn-wp">
				<view class="wxgroup-btn-lf" @click="show" data-position="bottom">
					批量保存二维码
				</view>
				<view class="wxgroup-btn-rt">
					<navigator url="../import/import">
						批量导入通讯录
					</navigator>
				</view>
			</view>
		</view>	
		<!-- <view class="mask" v-show="showMask" @click="hide"></view> -->
		<!-- popup 加群 start-->	
		<view class="popup popup-middle" v-show="showState.middle">
			<view class="kf-tl b-line">
				添加群
				<uni-icon type="shachu-xue" size="16" @click="hide"></uni-icon>
			</view>
			<view class="add-line">
				<uni-icon type="weixin" color="#44B549" size="22"></uni-icon>
				<view class="add-info">jinglingapp</view>
				<view class="add-copy">复制群主微信号</view>
			</view>
			<view class="add-line">
				<uni-icon type="ai-phone" color="#e9ce59" size="22"></uni-icon>
				<view class="add-info">15010200333</view>
				<view class="add-copy">复制群主手机号</view>
			</view>
			<image class="kf-con-code" src="../../static/code.jpg" mode="widthFix"></image>
			<view class="kf-con-info">
				扫一扫 或者 点击图片保存到手机相册
			</view>
			<view class="wx-btn-ls">
				<view class="kf-btn block-tl-color8 center">
					<uni-icon type="weixin" size="18"></uni-icon>发送到微信
				</view>
				<view class="kf-btn center wx-btn-default">
					<uni-icon type="tongxunlu" size="18"></uni-icon>导入通讯录
				</view>
			</view>
		</view>
		<!-- popup 加群 end-->
		<!-- popup 批量保存群二维 start-->	
		<view class="popup popup-bottom" v-show="showState.bottom">
			<view class="action-line">
				<uni-icon type="xiangce" color="#eb6644"></uni-icon>
				<view class="action-line-info">批量保存群二维码到相册</view>
				<uni-icon type="qianjin" size="18" color="#8a8a8a"></uni-icon>
			</view>
			<view class="action-line">
				<uni-icon type="weixin" color="#44B549"></uni-icon>
				<view class="action-line-info">
					批量发送群二维码到微信
				</view>
				<uni-icon type="qianjin" size="18" color="#8a8a8a"></uni-icon>
			</view>
			<view class="action-cancel" @click="hide">
				取消
			</view>
		</view>
		<!-- popup 批量保存群二维 end-->
		<uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer">
			<view class="drawer-content">
				<view class="drawer-title b-line">
					行业筛选
				</view>
				<view class="st-title">
					微信商家
				</view>
				<view class="user-sl-ls">
					<view class="user-sl-item" v-for="(item, index) in trades" :key="index">
						<view class="user-sl-item-con" @click="getTradeName(index, item.name)">
							<text :class="activeIndex == index ? 'active':''">{{item.name}}</text>
						</view>
					</view>
					<view class="submitbtn-wp">
						<view class="block-tl-color8 submitbtn" @tap="closeRightDrawer">确定</view>
					</view>
				</view>
			</view>
		</uni-drawer>
		<view :class="['mask', activePop=='top'? 'masktop':'' ]" v-show="showMask" @click="hide"></view>
		<view class="popup popup-top" v-show="showState.top">
			<view class="popup-item b-line popup-active">
				人气排行
				<uni-icon type="duihao" color="#44B549" size="16"></uni-icon>
			</view>
			<view class="popup-item">
				最新发布
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	import uniDrawer from '../../components/uni-drawer.vue';
	
	export default {
		data() {
			return {
				items: [{
					value: '1',
					check: true
				},
				{
					value: '2',
					check: false
				},
				{
					value: '3',
					check: true
				}],
				showMask: false,
				showState: {
					top: false,
					middle: false,
					bottom: false,
				},
				rightDrawerVisible: false,
				trades: [
					{
						id: 1,
						name: '学生'
					},
					{
						id: 2,
						name: '金融业'
					},
					{
						id: 3,
						name: '电商'
					},
					{
						id: 4,
						name: '医疗'
					},
					{
						id: 5,
						name: 'IT互联网'
					},
					{
						id: 6,
						name: '房地产'
					}
				],
				activeIndex: 9999,
				activePop: 'middle',
				currentTab: 0,
				wxcategory: ''
			};
			
		},
		components: {
			uniIcon,
			uniDrawer
		},
		onLoad(options) {
			this.currentTab = parseInt(options.currentTab);
			if(this.currentTab == 0){
				this.wxcategory = '群'
			}else{
				this.wxcategory = '人'
			}
		},
		methods: {
			bindChange: function (e) {	
				this.currentTab = e.detail.current;
			},
			swichNav: function(e){
				this.currentTab = e.currentTarget.dataset.current;
				if(e.currentTarget.dataset.current == 0){
					this.wxcategory = '群'
				}else{
					this.wxcategory = '人'
				}
			},
			checkboxChange: function (e) {
				console.log('checkbox发生change事件，携带value值为：' + e.detail.value);
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
			closeRightDrawer() {
				this.rightDrawerVisible = false;
			},
			showRightDrawer() {
				this.hide();
				this.rightDrawerVisible = true;
			},
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			},
			getTradeName(index, name) {
				this.tradeName = name;
				this.activeIndex = index;	
			},
			helpClick: function(){
				uni.navigateTo({
					url: '/pages/help/help'
				})					
			},
			prevClick: function(){
				uni.navigateBack({
					delta: 1
				})
			}
		},
	}
</script>

<style>
	page{
		height: 100%;
		overflow: hidden;
	}
	.submitbtn-wp{
		padding-left: 100upx;
		padding-right: 100upx;
	}
	.content{
		background-color: #F4F6FA;
	}
	.b-line{
		height: 2upx;
	}
	.filter{
		display: flex;
		height: 90upx;
		line-height: 90upx;
		background-color: #fff;
	}
	.filter-item{
		flex: 1;
		text-align: center;
		position: relative;
	}
	.filter-item::after{
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 10upx;
		right: 10upx;
		border: 6upx solid #aaaaaa;
		border-color: transparent #aaaaaa #aaaaaa transparent;
		border-radius: 3upx;
	}
	.wxgroup-ls{
		padding-top: 15upx;
	}
	.wx-item{
		height: 130upx;
		margin: 10upx 20upx;
		background-color: #fff;
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
		padding-left: 10upx;
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
		width: 120upx;
		height: 120upx;
		flex: 0 0 120upx;
		border-radius: 6upx;
		background-color: #b28431;
		background-image: linear-gradient(to bottom, #d9c085 0%, #b39a65 100%);
		padding: 4upx;
		position: relative;
	}
	.avatar-100{
		width: 120upx;
		height: 120upx;
		border-radius: 6upx;
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
		background-color: #b39a65;
		color: #fff;
		font-size: 20upx;
		border-radius: 4upx;
		width: 100upx;
		text-align: center;
		left: 50%;
		margin-left: -50upx;
		font-size: 18upx;
	}
	.wx-item label{
		position: relative;
	}
	.wx-item label checkbox{
		opacity: 0;
	}
	.me-checkbox{
		position: absolute;
		left: 0;
		top: 50%;
		width: 44upx;
		height: 44upx;
		margin-top: -22upx;
	}
	.wxgroup-fix{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 30upx;
		height: 120upx;
		margin: 0 20upx;
		background-color: rgba(255,255,255,.8);
		border: 2upx solid #f0f0f0;
		border-radius: 15upx;
		display: flex;
		padding: 0 20upx;
		align-items: center;
		justify-content: space-between;
		color: #8A8A8A;	
	}
	.wxgroup-btn-wp{
		display: flex;
		flex-direction: row;
		height: 76upx;
		line-height: 76upx;
		color: #fff;
		font-size: 24upx;
		text-align: center;
	}
	.wxgroup-btn-lf{
		background-color: #44c853;
		border-radius: 76upx 0 0 76upx;
		padding: 0 20upx;
	}
	.wxgroup-btn-rt{
		background-color: #44B549;
		border-radius: 0 76upx 76upx 0;
		padding: 0 20upx;
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
	.masktop{
		position: fixed;
		z-index: 998;
		top: 180upx;
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
		width: 620upx;
		height: 720upx;
		border-radius: 10upx;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}
	.popup-top {
		top: 90upx;
		width: 100%;
		/* height: 100upx; */
		text-align: left;
		box-shadow: none;
		border-top: 2upx solid #e5e5e5;
	}
	.popup-bottom {
		bottom: 0;
		width: 100%;
	}
	.action-line{
		font-size: 30upx;
		color: #8a8a8a;
		height: 100upx;
		line-height: 100upx;
		padding: 0 30upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #F4F6FA;
		margin-bottom: 4upx;
	}
	.action-cancel{
		text-align: center;
		line-height: 70upx;
	}
	.action-line-info{
		flex: 1;
		padding-left: 20upx;
	}
	/* popup end */
	.kf-tl {
		padding: 0 20upx;
		height: 80upx;
		color: #666;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.kf-con-wx{
		display: block;
		width: 400upx;
		text-align: center;
		border: 4upx dashed #c2c2c2;
		margin: 50upx auto 20upx;
		height: 70upx;
		line-height: 70upx;
		border-radius: 16upx;
		color: #999;
	}
	.kf-con-info{
		text-align: center;
		font-size: 22upx;
		color: #A1A1A1;
	}
	.kf-con-code{
		width: 240upx;
		height: 240upx;
		margin: 30upx auto 20upx;
		display: block;
	}
	.wx-btn-ls{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 20upx;
	}
	.kf-btn{
		height: 76upx;
		line-height: 76upx;
		width: 250upx;
		margin: 30upx auto;
		border-radius: 76upx;
		color: #fff;
		text-align: center;
	}
	.wx-btn-default{
		border: 2upx solid #E5E5E5;
		color: #505050;
	}
	.kf-btn .uni-icon{
		margin-right: 10upx;
	}
	.add-line{
		display: flex;
		flex-direction: row;
		padding: 0 50upx;
		align-items: center;
		margin-top: 20upx;
	}
	.add-copy{
		border: 2upx solid #e5e5e5;
		height: 60upx;
		line-height: 60upx;
		width: 220upx;
		text-align: center;
		border-radius: 10upx;
		font-size: 26upx;
	}
	.add-info{
		flex: 1;
		padding-left: 20upx;
		color: #8a8a8a;
	}
	.drawer-title{
		margin-top: 88upx;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		border-top: 2upx solid #e5e5e5;
	}
	.st-title{
		
		padding: 30upx 30upx 0;
	}
	.user-sl-ls{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 10upx 20upx;
	}
	.user-sl-item{
		flex: 0 0 50%;	
	}
	.user-sl-item-con{
		padding: 10upx;
	}
	.user-sl-item text{
		display: block;
		height: 56upx;
		line-height: 56upx;
		background-color: #fff;
		border: 2upx solid #ddd;
		border-radius: 6upx;
		font-size: 24upx;
		color: #505050;
		text-align: center;
	}
	.user-sl-item text.active {
		background-color: #44B549;
		color: #fff;
		border-color: #44B549;
	}
	.popup-item{
		height: 96upx;
		line-height: 96upx;
		padding: 0 30upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.popup-active{
		color: #44B549;
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
		font-size: 32upx;
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
		padding-top: 12upx;
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
</style>
