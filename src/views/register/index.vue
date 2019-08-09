<template>
  <div class="warp">
    <div class="main">
      <div class="header">
        <div class="left">
          <router-link to="/mine">
            <i class="iconfont">&#xe6a2;</i>
          </router-link>
        </div>
        <div class="centers">
          <h1>注册</h1>
        </div>
      </div>
      <div class="rmain">
        <div class="register-form">
          <div class="form-group">
            <input type="text" class="form-control yz" ref="yanzhen" placeholder="验证码" />
            <div class="form-group-yz">
              <img @click="refreshpic" :src="imgSrc" class="form-group-yz-img" />
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control register-form-inp"
              placeholder="请输入手机号"
              ref="user"
             
            />
             <!-- @keydown="btnYes" -->
          </div>

          <div class="form-group">
            <input type="password" class="form-control" placeholder="密码" ref="pwd" />
          </div>
          <button type="button" class="btn btn-danger btn-lg btn-block" @click="register">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      //图片验证码
      imgSrc:
        "http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f&nowtime=1312423435",
      //用来发判断发送验证码
      isrefreshpic: false,
      //定时器初始值
      auth_time: 0,
      //disabled的初始值
      btnBoolen: true,
      btnClassName: "btn"
      // btnValue: "获取短信验证码"
    };
  },
  methods: {
    //图片验证码
    refreshpic: function() {
      var sj = Math.ceil(Math.random() * 100000);
      this.imgSrc =
        "http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f&nowtime=1312423435" +
        sj;
      debugger;
    },
    //zhuceyanzheng
    register: function() {
      var phone = this.$refs.user.value; //手机号
      var pwd = this.$refs.pwd.value; //密码
      var refreshImages = this.$refs.yanzhen.value; //验证码
      if (refreshImages === "") {
        alert("验证码不能为空");
        return;
      } else if (phone === "") {
        alert("手机号不能为空");
      } else {
        if (phone.length != 11) {
          alert("请输入有效的手机号码，需是11位！");
          return;
        } else {
          var myreg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
          if (!myreg.test(phone)) {
            alert("手机号码格式不正确");
            return;
          } else {
            var ifMessageOk = this.getValue();
            if (ifMessageOk) {
              // 匹配密码
              if (pwd === "") {
                alert("密码不能为空");
                return;
              } else {
                var url = `http://vueshop.glbuys.com/api/home/user/reg?token=1ec949a15fb709370f&vcode=${refreshImages}&cellphone=${phone}&password=${pwd}`;
                console.log(url);
                //验证用户名是否存在
                var urls = `http://vueshop.glbuys.com/api/home/user/isreg?token=386777c139fd9e2ac5&username=${phone}`;
                this.$http.post(urls).then(res => {
                  if (res.data.status == "0") {
                    this.$http.post(url).then(res => {
                      console.log(res);
                      if (res.data.status == "0") {
                        alert("注册成功");
                        location.href = `/login`;
                      }
                    });
                  }
                });
              }
            }
          }
        }
      }
    }
  }
};
</script>
<style scoped>
.warp {
  width: 100%;
  height: 100%;
}
.h1,
h1 {
  line-height: 1.5rem;
}
.btn-block {
  display: block;
  width: 90%;
  margin-left: 21px;
  height: 1rem;
  font-size: 0.3rem;
  border: none;
  border-radius: 3rem;
  margin-top: 1rem;
}
.header {
  width: 100%;
  line-height: 1.5rem;
  display: flex;
  border-bottom: 1px solid #d6d6d6;
}
.header .left {
  flex: 1;
}
.header .left a i {
  font-size: 0.35rem;
  margin-left: 0.2rem;
}
.header .centers {
  flex: 9;
  font-size: 20px;
  font-weight: normal;
  line-height: 1.5rem;
  text-align: center;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
}
.form-control {
  width: 90%;
  margin-left: 5%;
  height: 45px;
  border-radius: 0.2rem;
  outline: none;
}
.register-form {
  margin-top: 0.5rem;
}

.form-control {
  margin-bottom: 15px;
}
.register-form input {
  height: 1rem;
  font-size: 0.3rem;
  padding-left: 0.2rem;
}
.register-form-inp {
  width: 90%;
  float: left;
}
.form-group {
  margin-bottom: 15px;
}
.register-form-btn {
  width: 30%;
  float: left;
  margin-left: 2%;
}
.register-form-btn .btn {
  height: 1rem;
  background: #ccc;
  border: none;
  font-size: 0.25rem;
}
.register-form-btn .btns {
  height: 1rem;
  background: #fff;
  border: 1px solid #9e157c;
  color: #9e157c;
}
.form-group-yz {
  position: relative;
  top: -0.4rem;
}
.form-group-yz-img {
  width: 1.4rem;
  height: 0.5rem;
  position: absolute;
  top: -48px;
  left: 75%;
}
.register-form-btn {
  width: 30%;
  float: left;
  margin-left: 2%;
}
.register-form-btn button {
  height: 45px;
  font-size: 0.2rem;
  color: #000000;
}
.btn-lg {
  outline: none;
}
</style>
