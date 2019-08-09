<template>
  <div>
    <div class="mine_header">
      <router-link to="/handpick">
        <i class="iconfont goback">&#xe62e;</i>
      </router-link>
      <i class="text">我的E宠</i>
      <i class="iconfont goback" @click="handleshow()" flag="true">&#xe606;</i>
    </div>
    <div class="menu_box" v-show="isshow">
      <ul>
        <router-link v-for="(item,index) in navs" :key="index" :to="item.path" tag="li">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.text}}</span>
        </router-link>
      </ul>
    </div>
    <div id="CartBox">
      <div class="mycart" data-reactid=".0">
        <div class="m-emptycoupon ftc bgfff">
          <div class="emptydiv">
            <div>
              <span class="u-emtcoupon">&nbsp;</span>
            </div>
            <div class="ftc emttip ft16 c666 mt">您的购物车空空如也</div>
            <div class="emt-a mt20">
              <a href="/classify" class="c999 ft16 mr5">随便逛逛</a>
            </div>
          </div>
        </div>
        <!--  <div class="chooseaddbg hide"></div>
        <div class="chooseadd hide">
          <p class="addtext">收货地址</p>
          <ul class="choose">
            <li class="handcur tab1 now">请选择</li>
            <li class="handcur tab2 hide">请选择</li>
            <li class="handcur tab3 hide">请选择</li>
            <li class="handcur tab4 hide">请选择</li>
            <li class="handcur tab5 hide">请选择</li>
          </ul>
          <div class="address">
            <ul class="chooseone"></ul>
            <ul class="choosetwo"></ul>
            <ul class="choosethree"></ul>
            <ul class="choosefour"></ul>
            <ul class="choosefive"></ul>
          </div>
          <div class="addclose handcur"></div>
        </div>
        <div class="addresslist hide">
          <p class="addtext">收货地址</p>
          <ul></ul>
          <p class="handcur choseother">选择其他配送区域</p>
          <div class="addclose handcur"></div>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Shopcar",
  data() {
    return {
      isshow: false,
      navs: [
        {
          icon: "&#xe8b9;",
          text: "首页",
          path: "/handpick"
        },
        {
          icon: "&#xe602;",
          text: "分类",
          path: "/classify"
        },
        {
          icon: "&#xe62a;",
          text: "购物车",
          path: "/shopcar"
        },
        {
          icon: "&#xe638;",
          text: "我的",
          path: "/mine"
        }
      ]
    };
  },
  methods: {
    handleshow() {
      this.isshow = !this.isshow;
    }
  }
};
</script>
<style scoped>
.mine_header {
  width: 100%;
  height: 1rem;
  display: flex;
  border-bottom: 0.1px #b8b8b8 solid;
}
.mine_header a {
  width: 100%;
  flex: 1;
}
.mine_header i {
  width: 100%;
  flex: 1;
  font-size: 0.7rem;
  line-height: 0.85rem;
  padding: 0.1rem;
}
.mine_header i:nth-child(2) {
  text-align: center;
}
.mine_header i:last-child {
  text-align: right;
  font-size: 0.5rem;
  padding-right: 0.2rem;
}
.text {
  font-size: 0.4rem !important;
  font-style: normal;
}
.menu_box {
  width: 100%;
  height: 1.3rem;
  border-bottom: 0.04rem solid rgba(172, 170, 170, 0.2);
}
.menu_box ul,
.menu_boxul li {
  width: 100%;
  height: 100%;
}
.menu_box ul {
  display: flex;
}
.menu_box ul li {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.3rem;
}
.menu_box ul li i {
  font-size: 0.4rem;
}
#CartBox,
.m-emptycoupon {
  width: 100%;
  height: 100%;
}
.emttip {
  width: 100%;
  height: 2rem;
  margin: 0 auto;
  text-align: center;
  color: #cac3c3;
  font-size: 0.4rem;
}
.emt-a{
  width: 100%;
  height: 2rem;
  margin: 0 auto;
  text-align: center;
 
}
.emt-a a{
    color: #cac3c3;
  font-size: 0.4rem;
  border: .02rem solid rgb(207, 201, 201);
}
</style>
