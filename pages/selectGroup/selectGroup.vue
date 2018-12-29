<template>
	<view class="content">
		<radio-group @change="radioChange">
			<view class="sg-item" v-for="item in items" :key="item.value">
				<label>
					<radio :value="item.value" checked="true" />				
				</label>
				<view class="sg-item-md">
					<image class="width-80" src="../../static/avatar/avatar_1.jpg" mode="widthFix"></image>
					<view class="sg-item-con">
						<view class="sg-item-tl">
							妮妮小宝贝
						</view>
						<view class="sg-item-wx">
							微信号：929293929938338388
						</view>
					</view>
				</view>
				<view class="sg-item-rt">
					编辑<uni-icon type="qianjin" size="12" color="#a2a2a2"></uni-icon>
				</view>
			</view>
		</radio-group>
		<view class="add-group center">
			<uni-icon type="tianjia" size="18" color="#8a8a8a"></uni-icon>
			创建新的群主名片
		</view>
		<view class="submitbtn-wp">
			<button class="block-tl-color8 submitbtn" formType="submit">确定</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				items: [{
					value: '1',
				},
				{
					value: '2',
					checked: 'true'
				},
				{
					value: '3',
				},
			]
			};
		},
		components: {
			uniIcon
		},
		methods: {
			radioChange: function (e) {
				console.log('radio发生change事件，携带value值为：', e.detail.value)
				var items = this.items;
				for (var i = 0, len = items.length; i < len; ++i) {
					items[i].checked = items[i].value == e.detail.value
				}

				this.items = items
			}
		}
	}
</script>

<style>
	.radio-item{
		width: 40upx;
		height: 40upx;
		border: 2upx solid #ddd;
		border-radius: 100%;
	}
	.content{
		background-color: #F4F6FA;
	}
	.sg-item{
		margin: 20upx 30upx;
		background-color: #fff;
		padding: 20upx 20upx 20upx 30upx;
		border-radius: 10upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-shadow: 0 2upx 6upx rgba(0,0,0,.1);
	}
	.sg-item-md{
		flex: 1;
		display: flex;
		flex-direction: row;
		padding-left: 20upx;
	}
	.sg-item-rt{
		font-size: 24upx;
		color: #a2a2a2;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.sg-item-rt .uni-icon{
		margin-left: 5upx;
	}
	.width-80{
		width: 80upx;
		height: 80upx;
		flex: 0 0 80upx;
	}
	.sg-item-con{
		flex: 1;
		padding-left: 20upx;
	}
	.sg-item-tl{
		font-weight: 500;
	}
	.sg-item-wx{
		font-size: 24upx;
		color: #A1A1A1;
	}
	.add-group{
		color: #8a8a8a;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		background-color: #fff;
		margin: 0 30upx;
		border: 2upx solid #e5e5e5;
		border-radius: 10upx;
	}
	.add-group .uni-icon{
		margin-right: 10upx;
	}
</style>
