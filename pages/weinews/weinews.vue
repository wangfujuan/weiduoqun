<template>
    <view class="index">
        <scroll-view id="tab-bar" class="swiper-tab" scroll-x :scroll-left="scrollLeft">
            <view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
                :id="tab.id" :data-current="index" @tap="tapTab">{{tab.name}}</view>
        </scroll-view>
        <swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
            <swiper-item v-for="(tab,index1) in newsitems" :key="tab.id">
                <scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)"> 
					<view class="uni-list">
						<view class="uni-list-cell b-line" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
							<view class="uni-media-list">
								<image class="uni-media-list-logo" :src="value.cover"></image>
								<view class="uni-media-list-body">
									<view class="uni-media-list-text-top">{{value.title}}</view>
									<view class="uni-media-list-text-bottom">
										<text>{{value.author_name}}</text>
										<text>{{value.published_at}}</text>
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
    </view>
</template>
<script>
    import uniIcon from '../../components/uni-icon.vue'
	var dateUtils = require('../../common/util.js').dateUtils
	
    export default {
        components: {
            uniIcon
        },
        data() {
            return {
				listData: [],
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
                    name: '推广引流',
                    id: 'tuijian'
                }, {
                    name: '销售成交',
                    id: 'tiyu'
                }, {
                    name: '新手入门',
                    id: 'redian'
                }, {
                    name: '朋友圈',
                    id: 'caijing'
                }, {
                    name: '文案写作',
                    id: 'yule'
                }, {
                    name: '营销技巧',
                    id: 'junshi'
                }]
            }
        },
        onLoad: function() {
            this.newsitems = this.randomfn();
			this.getList();
        },
		onPullDownRefresh() {
			this.reload = true;
			this.last_id = "";
			this.getBanner();
			this.getList();
		},
		onReachBottom() {
			this.getList();
		},
        methods: {
            goDetail(e) {
                uni.navigateTo({
                    url: '/pages/weinewsDetail/weinewsDetail?data=' + e.title
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
            },
			getList() {
				var data = {
					column: "id,post_id,title,author_name,cover,published_at" //需要的字段名
				};
				if (this.last_id) { //说明已有数据，目前处于上拉加载
					data.minId = this.last_id;
					data.time = new Date().getTime() + "";
					data.pageSize = 10;
				}
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news',
					data: data,
					success: (data) => {
						if (data.statusCode == 200) {
							let list = this.setTime(data.data);
							this.listData = this.reload ? list : this.listData.concat(list);
							this.last_id = list[list.length - 1].id;
							this.reload = false;
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				})
			},
			setTime: function (items) {
				var newItems = [];
				items.forEach((e) => {
					newItems.push({
						author_name: e.author_name,
						cover: e.cover,
						id: e.id,
						post_id: e.post_id,
						published_at: dateUtils.format(e.published_at),
						title: e.title
					});
				});
				return newItems;
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
		background-color: #F4F6FA;
    }

    .list {
        width: 730upx;
        height: 100%;
		margin: 0 auto;
		background-color: #fff;
		border-radius: 16upx;
		margin-top: 10upx;
    }

    .swiper-tab {
        width: 100%;
        white-space: nowrap;
        line-height: 90upx;
        height: 90upx;
		background-color: #fff;
		border-top: 2upx solid #f0f0f0;
		/* margin-bottom: 10upx; */
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
		box-shadow: 0 1px 5px rgba(68,181,73,.3);
	}
    .swiper-box {
        flex: 1;
        width: 100%;
        height: calc(100% - 90upx);
		/* background-color: #F4F6FA; */
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
	
	.uni-list {
		padding: 0 20upx;
		/* margin-top: -20upx; */
	}
	
	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 25upx 0;
	}
	
	.uni-media-list-logo {
		width: 200upx;
		height: 130upx;
		margin-right: 20upx;
		border-radius: 10upx;
	}

	.uni-media-list {
		/* padding: 22upx 30upx; */
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: row;
	}
	
	.uni-navigate-right.uni-media-list {
		padding-right: 74upx;
	}
	
	.uni-pull-right {
		flex-direction: row-reverse;
	}
	
	.uni-pull-right>.uni-media-list-logo {
		margin-right: 0upx;
		margin-left: 20upx;
	}
	
	.uni-media-list-logo image {
		height: 100%;
		width: 100%;
	}
	
	.uni-media-list-body {
		height: 84upx;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		overflow: hidden;
	}
	
	.uni-media-list-text-top {
		width: 100%;
		line-height: 36upx;
		font-size: 30upx;
		height: 74upx;
		font-size: 28upx;
		overflow: hidden;
	}
	
	.uni-media-list-text-bottom {
		width: 100%;
		line-height: 30upx;
		font-size: 22upx;
		color: #8f8f94;
		display: flex;
		flex-direction: row;
	}
	
	.uni-media-list-text-bottom text {
		margin-right: 10upx;
	}
	
	.uni-media-list-body {
		height: auto;
		justify-content: space-around;
	}
	
	
	
	.hot-add .uni-icon {
		color: #fff;
		font-size: 22upx;
		vertical-align: middle;
		margin-right: 4upx;
	}
	
	.uni-icon-qianjin {
		font-size: 22upx;
	}
</style>
