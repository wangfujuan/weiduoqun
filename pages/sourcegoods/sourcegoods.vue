<template>
    <view class="index">
        <scroll-view id="tab-bar" class="swiper-tab" scroll-x :scroll-left="scrollLeft">
            <view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
                :id="tab.id" :data-current="index" @tap="tapTab">{{tab.name}}</view>
        </scroll-view>
        <swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
            <swiper-item v-for="(tab,index1) in newsitems" :key="tab.id">
                <scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)"> 
					<view class="goods-ls">
						<view class="goods-item">
							<navigator hover-class="none" url="../goodsdetail/goodsdetail">
								<view class="goods-item-con">
									<image class="goods-img" src="../../static/goods.jpg" mode="aspectFill"></image>
									<view class="goods-item-tl">
										九分裤格子条纹复古风女裤
									</view>
									<view class="goods-item-user">
										<image class="avatar-36" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
										<view class="goods-item-phone">
											150***1029
										</view>
										<view class="goods-item-sum">
											<uni-icon type="kejian" size="16"></uni-icon>
											100
										</view>
									</view>
								</view>
							</navigator>
						</view>
						<view class="goods-item">
							<view class="goods-item-con">
								<image class="goods-img" src="../../static/goods.jpg" mode="aspectFill"></image>
								<view class="goods-item-tl">
									九分裤格子条纹复古风女裤
								</view>
								<view class="goods-item-user">
									<image class="avatar-36" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
									<view class="goods-item-phone">
										150***1029
									</view>
									<view class="goods-item-sum">
										<uni-icon type="kejian" size="16"></uni-icon>
										100
									</view>
								</view>
							</view>
						</view>
						<view class="goods-item">
							<view class="goods-item-con">
								<image class="goods-img" src="../../static/goods.jpg" mode="aspectFill"></image>
								<view class="goods-item-tl">
									九分裤格子条纹复古风女裤
								</view>
								<view class="goods-item-user">
									<image class="avatar-36" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
									<view class="goods-item-phone">
										150***1029
									</view>
									<view class="goods-item-sum">
										<uni-icon type="kejian" size="16"></uni-icon>
										100
									</view>
								</view>
							</view>
						</view>
						<view class="goods-item">
							<view class="goods-item-con">
								<image class="goods-img" src="../../static/goods.jpg" mode="aspectFill"></image>
								<view class="goods-item-tl">
									九分裤格子条纹复古风女裤
								</view>
								<view class="goods-item-user">
									<image class="avatar-36" src="../../static/avatar/avatar_2.jpg" mode="widthFix"></image>
									<view class="goods-item-phone">
										150***1029
									</view>
									<view class="goods-item-sum">
										<uni-icon type="kejian" size="16"></uni-icon>
										100
									</view>
								</view>
							</view>
						</view>
					</view>
                    <!-- <view class="loadmore">
                        <text class="loadmore-text">{{tab.loadingText}}</text>
                    </view> -->
                </scroll-view>
            </swiper-item>
        </swiper>
		<view class="submitbtn-wp">
			<button class="block-tl-color8 submitbtn" formType="submit">
				发布我的货源
			</button>
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
                scrollLeft: 0,
                isClickChange: false,
                tabIndex: 0,
                newsitems: [
					{
						id: 1,
					},
					{
						id: 2,
					},
					{
						id: 3,
					},
					{
						id: 4,
					},
					{
						id: 5,
					},
					{
						id: 6,
					},
					{
						id: 7,
					},
					{
						id: 8,
					},
					{
						id: 9,
					}
				],
				
                tabBars: [{
                    name: '全部',
                    id: 'guanzhu'
                }, {
                    name: '护肤彩妆',
                    id: 'tuijian'
                }, {
                    name: '减肥瘦身',
                    id: 'tiyu'
                }, {
                    name: '鞋帽箱包',
                    id: 'redian'
                }, {
                    name: '食品保健',
                    id: 'caijing'
                }, {
                    name: '电子数码',
                    id: 'yule'
                }, {
                    name: '母婴亲子',
                    id: 'junshi'
                }, {
                    name: '男装女装',
                    id: 'lishi'
                }, {
                    name: '其他',
                    id: 'bendi'
                }]
            }
        },
        onLoad: function() {
            this.newsitems = this.randomfn()
        },
        methods: {
            goDetail(e) {
                uni.navigateTo({
                    url: '/pages/template/tabbar/detail/detail?data=' + e.title
                })
            },
            close(index1, index2) {
                uni.showModal({
                    content: '是否删除本条信息？',
                    success: (res) => {
                        if (res.confirm) {
                            this.newsitems[index1].data.splice(index2, 1);
                        }
                    }
                })
            },
            loadMore(e) {
            	setTimeout(() => {
            		this.addData(e);
            	}, 1000);
            },
            addData(e) {
            	console.log("加载更多...");
            	if (this.newsitems[e].data.length > 30) {
            		this.newsitems[e].loadingText = '没有更多了';
            		return;
            	}
            	for (let i = 1; i <= 10; i++) {
            		this.newsitems[e].data.push(this['data' + Math.floor(Math.random() * 5)]);
            	}
            },
            async changeTab(e) {
                let index = e.target.current;
                if (this.isClickChange) {
                    this.tabIndex = index;
                    this.isClickChange = false;
                    return;
                }
                let tabBar = await this.getElSize("tab-bar"),
                    tabBarScrollLeft = tabBar.scrollLeft;
                let width = 0;

                for (let i = 0; i < index; i++) {
                    let result = await this.getElSize(this.tabBars[i].id);
                    width += result.width;
                }
                let winWidth = uni.getSystemInfoSync().windowWidth,
                    nowElement = await this.getElSize(this.tabBars[index].id),
                    nowWidth = nowElement.width;
                if (width + nowWidth - tabBarScrollLeft > winWidth) {
                    this.scrollLeft = width + nowWidth - winWidth;
                }
                if (width < tabBarScrollLeft) {
                    this.scrollLeft = width;
                }
                this.isClickChange = false;
                this.tabIndex = index; //一旦访问data就会出问题
            },
            getElSize(id) { //得到元素的size
                return new Promise((res, rej) => {
                    uni.createSelectorQuery().select("#" + id).fields({
                        size: true,
                        scrollOffset: true
                    }, (data) => {
                        res(data);
                    }).exec();
                })
            },
            async tapTab(e) { //点击tab-bar
                if (this.tabIndex === e.target.dataset.current) {
                    return false;
                } else {
                    let tabBar = await this.getElSize("tab-bar"),
                        tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
                    this.scrollLeft = tabBarScrollLeft;
                    this.isClickChange = true;
                    this.tabIndex = e.target.dataset.current
                }
            },
            randomfn() {
                let ary = [];
                for (let i = 0, length = this.tabBars.length; i < length; i++) {
                    let aryItem = {
                        loadingText: "加载更多...",
                        data: []
                    };
                    for (let j = 1; j <= 10; j++) {
                        aryItem.data.push(this['data' + Math.floor(Math.random() * 5)]);
                    }
                    ary.push(aryItem);
                }
                return ary;
            }
        }
    }
</script>

<style>
    page {
        display: flex;
		height: 100%;
    }

    .index {
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow: hidden;
        height: 100%;
    }

    .list {
        width: 750upx;
        height: 100%;
    }

    .swiper-tab {
        width: 100%;
        white-space: nowrap;
        line-height: 90upx;
        height: 90upx;
		background-color: #fff;
		border-top: 2upx solid #f0f0f0;
    }


    .swiper-tab-list {
        font-size: 30upx;
		padding: 0 25upx;
        display: inline-block;
        text-align: center;
        color: #858585;
		font-size: 26upx;
    }

    .active {
        color: #000;
		font-weight: bold;
		position: relative;
    }
	.active::after{
		content: '';
		width: 40upx;
		height: 4upx;
		background-color: #44B549;
		position: absolute;
		bottom: 10upx;
		left: 50%;
		margin-left: -20upx;
		border-radius: 4upx;
		box-shadow: 0 2upx 10upx rgba(0,0,0,.3);
	}
    .swiper-box {
        flex: 1;
        width: 100%;
        height: calc(100% - 90upx);
		background-color: #F4F6FA;
    }

    .loadmore {
        height: 70upx;
        width: 750upx;
        flex-direction: column;
        justify-content: center;
    }

    .loadmore-text {
        font-size: 30upx;
        text-align: center;
        color: #999999;
    }
	
	.goods-ls{
		font-size: 0;
		padding: 20upx 10upx;
	}
	.goods-item{
		vertical-align: top;
		display: inline-block;
		width: 50%;
	}
	.goods-item-con{
		font-size: 28upx;
		background-color: #fff;
		margin: 0 10upx 20upx;
		border-radius: 10upx;
		display: flex;
		flex-direction: column;
	}
	.goods-img{
		width: 100%;
		border-radius: 10upx 10upx 0 0;
		height: 400upx;
	}
	.goods-item-tl{
		padding: 20upx;
		font-weight: 500;
		line-height: 1.3;
		height: 72upx;
	}
	.goods-item-user{
		padding: 0 20upx 20upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #8a8a8a;
		font-size: 22upx;
	}
	.avatar-36{
		width: 36upx;
		height: 36upx;
		flex: 0 0 36upx;
		border-radius: 100%;
	}
	.goods-item-phone{
		flex: 1;
		padding-left: 10upx;
	}
	.goods-item-sum{
		display: flex;
		align-items: center;
	}
	
</style>
