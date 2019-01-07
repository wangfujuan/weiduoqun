<template>
	<view class="content">
		<form @submit="formSubmit">
			<view class="content-pad">
				<view class="white">
					<view class="report-tl">
						请选择举报的原因
					</view>
					<view class="report-con">
						<view class="radio-group">
							<view class="radio" v-for="item in items" :key="item" @click="selectValue(item.name)">
								<text :class="[item.checked? 'active':'']">{{item.value}}</text>
								<uni-icon v-if="item.checked" type="right-1" size="20" color="#e74323"></uni-icon>
							</view>
						</view>		
						<textarea class="textarea" value="" maxlength="200" placeholder-style="color: #c8c8c8;font-size: 28upx;line-height:1.4" placeholder="请填入200字以内的描述,我们将优先处理较详细的举报反馈!" />	
					</view>
					<view class="rc-upload">
						<view class="up-avatar">
							<uni-icon type="tianjia" color="#b9b9b9"></uni-icon>
						</view>
						<view class="rc-upload-info">
							上传图片 <text>(最多5张)</text>
						</view>
					</view>
				</view>
				<view class="submitbtn-wp">
					<button class="block-tl-color8 submitbtn" formType="submit">提交举报</button>				
				</view>
				
			</view>
		</form>
	</view>
</template>

<script>
	import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		data() {
			return {
				items: [{
						name: '1',
						value: '欺诈',
						checked: false
					},
					{
						name: '2',
						value: '色情',
						checked: true
					},
					{
						name: '3',
						value: '政治谣言',
						checked: false
					},
					{
						name: '4',
						value: '内容侵权',
						checked: false
					}
				]
			};
		},
		components: {
			uniIcon
		},
		methods: {
			selectValue: function(name) {
				console.log(name);
				this.items.forEach(item => {
					if(item.name == name){
						item.checked = true
					}else{
						item.checked = false
					}
				})
			}
		}
	}
</script>

<style>
	.content{
		background-color: #F4F6FA;
	}
	.report-tl{
		color: #8a8a8a;
		padding: 30upx;
	}
	.report-con{
		padding: 0 30upx;
	}
	.radio{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10upx;
		border: 2upx solid #f0f0f0;
		height: 86upx;
		line-height: 86upx;
		border-radius: 10upx;
		padding: 0 20upx 0 30upx;
		align-items: center;
	}
	.active{
		color: #e74323;
	}
	.textarea{
		border: 2upx solid #f0f0f0;
		border-radius: 10upx;
		margin-bottom: 10upx;
		padding: 20upx 20upx 0 30upx;
		height: 240upx;
	}
	.rc-upload{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 30upx;
	}
	.up-avatar{
		width: 100upx;
		height: 100upx;
		border: 2upx solid #f0f0f0;
		text-align: center;
		line-height: 100upx;
		border-radius: 30upx;
	}
	.rc-upload-info{
		flex: 1;
		padding-left: 20upx;
	}
	.rc-upload-info text{
		color: #aeaeae;
	}
</style>
