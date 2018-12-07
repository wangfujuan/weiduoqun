<template>
    <view class="content">
		<view class="logo">
			LOGO
		</view>
        <view class="input-group">
            <view class="input-row b-line center">
                <input placeholder-class="gray" type="number" v-model="account" placeholder="请输入手机号码" @input="bindClearInput">
				<view class="uni-icon uni-icon-shanchu" v-if="showClearIcon" @click="clearIcon"></view>
            </view>
            <view class="input-row b-line center">
                <input placeholder-class="gray" type="text" :password="showPassword" v-model="password" placeholder="请输入密码">
				<view class="uni-icon uni-icon-kejian" v-if="showPassword" @click="changePassword"></view>
				<view class="uni-icon uni-icon-yincangbukejian" v-if="!showPassword" @click="changePassword"></view>
            </view>
        </view>
        <view class="btn-row">
            <button class="greenlinear loginbtn" @tap="bindLogin">登录</button>
        </view>
        <view class="action-row">
            <navigator url="../reg/reg" hover-class="none">注册账号</navigator>
            <navigator url="../pwd/pwd" hover-class="none">忘记密码</navigator>
        </view>
        <view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
            <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
                <image :src="provider.image" @tap="oauth(provider.value)"></image>
            </view>
			<view class="weixinlogin">
				微信登录
			</view>
			<view class="weixin-info">
				无法注册？<navigator url="" hover-class="none">查看帮助</navigator>
			</view>
			<view class="weixin-info">
				注册代表同意 <navigator url="" hover-class="none">《用户使用服务协议》</navigator>
			</view>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        data() {
            return {
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0,
				showClearIcon: false,
				showPassword: true
            }
        },
        computed: mapState(['forcedLogin']),
        methods: {
            ...mapMutations(['login']),
            initProvider() {
                const filters = ['weixin'];
                uni.getProvider({
                    service: 'oauth',
                    success: (res) => {
                        if (res.provider && res.provider.length) {
                            for (let i = 0; i < res.provider.length; i++) {
                                if (~filters.indexOf(res.provider[i])) {
                                    this.providerList.push({
                                        value: res.provider[i],
                                        image: '../../static/img/' + res.provider[i] + '.png'
                                    });
                                }
                            }
                            this.hasProvider = true;
                        }
                    },
                    fail: (err) => {
                        console.error('获取服务供应商失败：' + JSON.stringify(err));
                    }
                });
            },
            initPosition() {
                /**
                 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                 * 反向使用 top 进行定位，可以避免此问题。
                 */
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
            bindLogin() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length != 11) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入正确的手机号'
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
                /**
                 * 下面简单模拟下服务端的处理
                 * 检测用户账号密码是否在已注册的用户列表中
                 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
                 */
                const data = {
                    account: this.account,
                    password: this.password
                };
                const validUser = service.getUsers().some(function (user) {
                    return data.account === user.account && data.password === user.password;
                });
                if (validUser) {
                    this.toMain(this.account);
                } else {
                    uni.showToast({
                        icon: 'none',
                        title: '用户账号或密码不正确',
                    });
                }
            },
            oauth(value) {
                uni.login({
                    provider: value,
                    success: (res) => {
                        uni.getUserInfo({
                            provider: value,
                            success: (infoRes) => {
                                /**
                                 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                                 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                                 */
                                this.toMain(infoRes.userInfo.nickName);
                            }
                        });
                    },
                    fail: (err) => {
                        console.error('授权登录失败：' + JSON.stringify(err));
                    }
                });
            },
            toMain(userName) {
                this.login(userName);
                /**
                 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../main/main',
                    });
                } else {
                    uni.navigateBack();
                }

            },
			bindClearInput: function (e) {
				this.account = e.target.value;
				if (e.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function () {
				this.account = "";
				this.showClearIcon = false;
			},
			changePassword: function () {
				this.showPassword = !this.showPassword;
			}
        },
        onLoad() {
            this.initPosition();
            this.initProvider();
        }
    }
</script>

<style>
	@import "../../common/iconfont.css";
	.uni-icon-shanchu {
		color: #999;
		font-size: 32upx;
	}
	
	.uni-icon-kejian, .uni-icon-yincangbukejian  {
		color: #999;
		font-size: 38upx;
	}
	
	.gray {
		color: #585858;
	}
	
	.logo {
		text-align: center;
		margin: 100upx 0;
	}
	.input-group {
		position: relative;
		padding: 0 40upx;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.input-row input {
		flex: 1;
		height: 50upx;
		padding: 30upx 0;
	}

	.btn-row {
		margin-top: 80upx;
		padding: 0 40upx;	
		margin-bottom: 80upx;
	}
	
	uni-button:after {
		border-width: 0;
	}
	
	.loginbtn {
		height: 90upx;
		line-height: 90upx;
		text-align: center;
		border-radius: 90upx;
		font-size: 28upx;
	}
    .action-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
		padding: 0 60upx;
		font-size: 26upx;
    }
	
    .oauth-row {
        display: flex;
        flex-direction: column;
        justify-content: center;
		align-items: center;
		padding-top: 120upx;
    }

    .oauth-image {
        width: 100px;
        height: 100px;
        margin: 0 40px;  
    }

    .oauth-image image {
        width: 100px;
        height: 100px;
    }
	
	.weixinlogin {
		margin-bottom: 80upx;
		color: #505050;
	}
	
	.weixin-info {
		display: flex;
		flex-direction: row;
		margin-top: 30upx;
		color: #999;
	}
	
	.weixin-info navigator {
		color: #44B549;
	}
</style>
