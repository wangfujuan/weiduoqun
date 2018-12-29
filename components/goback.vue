<template>
	<view class="goback" @click="goBack"><uni-icon type="huidaodingbu" size="16" color="#505050"></uni-icon>顶部</view>
</template>

<script>
	import uniIcon from './uni-icon.vue'
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				
			};
		},
		methods: {
			goBack: function(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			}
		}
	}
</script>

<style>
.goback{
	position: fixed;
	width: 96upx;
	height: 96upx;
	border-radius: 100%;
	background-color: rgba(255,255,255,.5);
	border: 2upx solid #eeeeee;
	right: 0;
	bottom: 130upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 24upx;
	color: #989898;
}
</style>
