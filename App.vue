<script>
    export default {
        onLaunch: function () {
            console.log('App Launch');
        },
        onShow: function () {
            console.log('App Show');
        },
        onHide: function () {
            console.log('App Hide');
        }
    }
</script>

<style>
    /*每个页面公共css */
	.picker-item{
		font-size: 32upx !important;
		line-height: 80upx !important;
	}
	.mpvue-picker__hd{
		padding: 18upx 30upx !important;
		font-size: 34upx !important;
		border-bottom: 2upx solid #e5e5e5 !important;
	}
    page {
        min-height: 100%;
        display: flex;
		font-size: 28upx;
		font-family: PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,Helvetica Neue,Arial,sans-serif;
    }
	
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		width: 100%;
	}
	
	.center {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	image {
		vertical-align: middle;
	}
	
	.mdtxt{
		display: inline-block;
		vertical-align: middle;
	}
	
	.postop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		top: 0;
	}
	
	.content-pad {
		padding: 20upx;
	}
	
	.white {
		border-radius: 16upx;
		background-color: #FFFFFF;
		margin-bottom: 20upx;
		overflow: hidden;
	}
	
	.block-tl {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 24upx 20upx
	}
	
	.block-tl-lf {
		font-size: 30upx;
		font-weight: 500;
	} 
	.block-tl-rt {
		font-size: 24upx;
		color: #a1a1a1;
		display: flex;
		flex-direction: row;
	}
	
	.block-tl-rt-item {
		border: 2upx solid #e2e2e2;
		border-radius: 40upx;
		height: 40upx;
		display: flex;
		align-items: center;
		padding: 0 20upx;
		margin-left: 20upx;
	}
	
	.block-tl-rt-more {
		height: 44upx;
		line-height: 42upx;
		margin-left: 40upx;
	}
	
	.block-tl-icon {
		width: 44upx;
		height: 44upx;
		text-align: center;
		line-height: 40upx;
		border-radius: 100%;
		display: inline-block;
		vertical-align: middle;
		margin-right: 14upx;
	}
	
	.block-tl-color1 {
		background-image: linear-gradient(-45deg, #e7b65f 0%, #f1d199 100%);
		box-shadow: 2upx 0 4upx rgba(241, 109, 153, .1);
	}
	
	.block-tl-color2 {
		background-image: linear-gradient(-45deg, #f787b3 0%, #f3a7c5 100%);
		box-shadow: 4upx 0 16upx rgba(243, 167, 197, .3);
	}
	
	.block-tl-color3 {
		background-image: linear-gradient(-45deg, #8f75ed 0%, #a792f5 100%);
		box-shadow: 4upx 0 16upx rgba(167, 146, 245, .3);
	}
	
	.block-tl-color4 {
		background-image: linear-gradient(-45deg, #e7b65f 0%, #f1d199 100%);
		box-shadow: 4upx 0 16upx rgba(241, 109, 153, .3);
	}
	
	.block-tl-color5 {
		background-image: linear-gradient(-45deg, #f1948f 0%, #ffb8b4 100%);
		box-shadow: 2px 0 8px rgba(255, 184, 180, .3);
	}
	
	.block-tl-color6 {
		background-image: linear-gradient(-45deg, #21c7ef 0%, #70e3ff 100%);
		box-shadow: 2px 0 8px rgba(112, 227, 255, .3);
	}
	
	.block-tl-color7 {
		background-image: linear-gradient(-45deg, #60dc8f 0%, #8af5b2 100%);
		box-shadow: 2px 0 8px rgba(138, 245, 178, .3);
	}
	
	.block-tl-color8 {
		background-image: linear-gradient(-45deg, #44b549 0%, #5dd962 100%);
		box-shadow: 2px 0 8px rgba(68, 181,73, .3);
	}
	
	.avatar {
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		flex: 0 0 80upx;
	}
	
	.shadow{
		box-shadow:0 10rpx 12rpx -12rpx rgba(0,0,0,0.15) inset;
		height: 16rpx;
		background-color: #f3f5f9;
	}
	
	.b-line{
		position: relative;
	}
	.b-line::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #e5e5e5;
	}
	.greenlinear {
		background-image: linear-gradient(-45deg, #44b549 0%, #5dd962 100%);
		color: #fff;
	}
	
	.block-more {
		display: inline-block;
		vertical-align: middle;
		width: 30upx;
		height: 30upx;
		text-align: center;
		line-height: 28upx;
		border-radius: 10upx;
		margin-left: 6upx;
	}
	.more-color1 {
		background-image: linear-gradient(-45deg, #8f75ed 0%, #a792f5 100%);
		box-shadow: 4upx 0 8upx rgba(167, 146, 245, .3);
	}	
	
	.more-color2 {
		background-image: linear-gradient(-45deg, #e7b65f 0%, #f1d199 100%);
		box-shadow: 4upx 0 8upx rgba(241, 109, 153, .3);
	}
	
	.more-color3 {
		background-image: linear-gradient(-45deg, #60dc8f 0%, #8af5b2 100%);
		box-shadow: 4upx 0 8upx rgba(138, 245, 178, .3);
	}
	
	.more-color4 {
		background-image: linear-gradient(-45deg, #f787b3 0%, #f3a7c5 100%);
		box-shadow: 4upx 0 8upx rgba(243, 167, 197, .3);
	}
	
	.more-color5 {
		background-image: linear-gradient(-45deg, #44b549 0%, #5dd962 100%);
		box-shadow: 4upx 0 8upx rgba(68, 181,73, .3);
	}
	.greenfont{
		color: #44B549;
	}
	.smallfont{
		font-size: 22upx;
	}
	.submitbtn-wp{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		/* background-color: #fff; */
		padding: 15upx 30upx 30upx;
	}
	.submitbtn{
		height: 90upx;
		line-height: 90upx;
		text-align: center;
		color: #fff;
		font-weight: 500;
		font-size: 34upx;
		border-radius: 90upx;
	}
	.submitbtn::after{
		display: none;	
	}
	.line20{
		height: 20upx;
		background-color: #F4F6FA;
	}
	.tool-item-icon {
		position: relative;
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.ding {
		width: 30upx;
		height: 30upx;
		line-height: 30upx;
		text-align: center;
		color: #fff;
		border-radius: 6upx;
		background-color: #44b549;
		display: inline-block;
		vertical-align: middle;
		font-size: 24upx;
		transform: scale(0.8);
		margin-right: 8upx;
	}
	.dbellipsis{
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
