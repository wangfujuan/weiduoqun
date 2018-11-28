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
		background-color: #f4f6fa;
		width: 100%;
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
		border: 1px solid #e2e2e2;
		border-radius: 40upx;
		height: 40upx;
		/* line-height: 40upx; */
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

    .input-group {
        background-color: #ffffff;
        margin-top: 40px;
        position: relative;
    }

    .input-group::before {
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .input-group::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .input-row {
        display: flex;
        flex-direction: row;
        position: relative;
    }

    .input-row .title {
        width: 20%;
        height: 50px;
        min-height: 50px;
        padding: 15px 0;
        padding-left: 30px;
        line-height: 50px;
    }

    .input-row input {
        width: 80%;
        height: 50px;
        min-height: 50px;
        padding: 15px 0;
        padding-right: 30px;
        line-height: 50px;
    }

    .input-row.border::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 15px;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .btn-row {
        margin-top: 50px;
        padding: 20px;
    }

    button.primary {
        background-color: #0faeff;
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
		background-color: #ededed;
	}
</style>
