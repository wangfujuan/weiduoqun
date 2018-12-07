<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row b-line">
                <text class="title">手机号码</text>
                <input placeholder-class="gray" type="text" v-model="account" placeholder="请输入手机号码">
            </view>
            <view class="input-row b-line">
                <text class="title">验证码</text>
                <input placeholder-class="gray" type="text" password="true" v-model="password" placeholder="请输入验证码">
				<button class="getcode">获取验证码</button>
            </view>
			<view class="input-row b-line">
				<text class="title">密码</text>
				<input placeholder-class="gray" type="text" password="true" v-model="password" placeholder="请输入密码">
			</view>
        </view>
        <view class="btn-row">
            <button class="regbtn" @tap="register">注册</button>
        </view>
		<view class="action-row">
			<navigator url="../reg/reg">手机号登录</navigator>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view>
    </view>
</template>

<script>
    import service from '../../service.js';

    export default {
        data() {
            return {
                account: '',
                password: '',
            }
        },
        methods: {
            register() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }

                const data = {
                    account: this.account,
                    password: this.password,
                }
                service.addUser(data);
                uni.showToast({
                    title: '注册成功'
                });
                uni.navigateBack({
                    delta: 1
                });
            }
        }
    }
</script>

<style>
	.content {
		background-color: #F4F6FA;
	}
	
	.input-group {
		background: #fff;
		margin: 40upx 0 30upx;
	}
	
	.input-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 90upx;
		line-height: 90upx;
	}
	
	.title {
		width: 150upx;
		flex: 0 0 150upx;
		text-align: right;
	}
	
	.input-row input {
		padding-left: 30upx;
	}
	
	.gray {
		color: #585858;
	}
	
	.btn-row {
		padding: 0 30upx 80upx;
	}
	
	.regbtn {
		background: #44B549;
		font-size: 30upx;
		color: #fff;
		height: 96upx;
		line-height: 96upx;
	}
	
	button::after {
		border-width: 0;
	}
	
	.getcode {
		flex: 0 0 160upx;
		width: 160upx;
		height: 60upx;
		line-height: 60upx;
		font-size: 24upx;
		background-color: #44B549;
		color: #fff;
		padding: 0
	}
	
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 60upx;
		font-size: 26upx;
	}
</style>
