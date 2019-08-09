<template>
  <div class="warp">
    <div class="main">
      <div class="header">
        <div class="left">
          <router-link to="/mine">
            <i class="iconfont">&#xe6a2;</i>
          </router-link>
        </div>
        <div class="center">
          <h1>账户密码登录</h1>
        </div>
      </div>
      <div class="lmian">
        <div class="login-main">
          <form class="form-horizontal">
            <div class="form-group">
              <div class="col-sm-8">
                <input type="text" ref="name" class="form-control" placeholder="请输入手机号" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-8">
                <input type="password" ref="pwd" class="form-control" placeholder="请输入密码" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-8 inptext">
                <button type="button" class="btn btn-danger btn-lg btn-block" @click="add">登录</button>
              </div>
            </div>
          </form>
        </div>
        <div class="login-base">
          <div class="login-base-le">
            <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
            <span>忘记密码</span>
          </div>
          <router-link to="/register">
            <div class="login-base-ri">
              <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
              <span>快速注冊</span>
           
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      visibility: false,
      list: []
    };
  },
  methods: {
    add: function() {
      var user = this.$refs.name.value;
      var pwd = this.$refs.pwd.value;
      console.log(user, pwd);
      if (user == "") {
        alert("用户名不能为空");
      } else if (pwd == "") {
        alert("密码不能为空");
      } else {
        // cellphone=13918763344(手机号)
        // passwrod=123456(密码)
        var url = `http://vueshop.glbuys.com/api/home/user/pwdlogin?token=1ec949a15fb709370f&cellphone=${user}&passwrod=${pwd}`;
        this.$http.post(url).then(res => {
          // console.log(res.data.message[0].pwd)
          console.log(res);
          if (res.data.status == "0") {
            alert("登陆成功");
            location.href = "/handpick";
          }
        });
      }
    }
  }
};
</script>

<style scoped>

.warp,
.main {
  width: 100%;
  height: 100%;
}
input,button{
  outline: none;
}
.h1,
h1 {
  line-height: 1.5rem;
}
.header {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  border-bottom: 1px solid #d6d6d6;
  text-align: center;
}
.header .left {
  flex: 1;
  font-size: 0.25rem;
}
.header .left a i {
  font-size: 0.4rem;
}
.header .center {
  flex: 9;
  font-size: 20px;
  font-weight: normal;
}
.heder .center h1 {
  line-height: 1.5rem;
}
.form-control {
  display: block;
  width: 100%;
  height: 1rem;
  padding: 6px 12px;
  font-size: .28rem;
  line-height: 1.42857143;
  color: #555;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: .1rem;
}
.login-main,
.form-horizontal,
.form-group,
.col-sm-8 {
  widows: 100%;
  margin-top: 1rem;
}
.lmian {
  flex: 1;
  width: 100%;
}
.col-sm-8 {
  position: relative;
  min-height: 1px;
  /* padding-right: 15px; */
  /* padding-left: 15px; */
}

.btn-block {
  width: 90%;
  height: 1rem;
  margin-left: 5%;
  font-size: .3rem;
  border-radius: 3rem;
  border: none;
}
/* .glyphicon{
    display: block;
    font-size: .35rem;
} */
.login-base {
  width: 90%;
  height: 0.5rem;
  margin-left: 5%;
  overflow: hidden;
}
.login-base span{
    display: block;
    font-size: .25rem;
}
.login-base-le {
  float: left;
  font-size: 0.2rem;
  color: #666666;
}
.login-base-ri {
  float: right;
  font-size: 0.2rem;
  color: #666666;
}
.form-horizontal .form-group {
  margin: 27px;
}
</style>
