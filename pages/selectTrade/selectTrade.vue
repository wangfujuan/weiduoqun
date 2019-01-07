<template>
	<view class="content">
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
				<view class="block-tl-color8 submitbtn">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 行业
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
			};
		},
		methods: {
			getTradeName(index, name) {
				this.tradeName = name;
				this.activeIndex = index;	
			},
		}
	}
</script>

<style>
	.content{
		background-color: #F4F6FA;
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
		flex: 0 0 25%;	
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
</style>
