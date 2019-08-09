<template>
  <div class="mine">
    <div class="mine_header">
      <router-link to="/handpick">
        <i class="iconfont goback">&#xe62e;</i>
      </router-link>
      <i class="text">我的E宠</i>
      <i class="iconfont goback" @click="handleshow()" flag="true">&#xe602;</i>
    </div>
    <div class="menu_box" v-show="isshow">
      <ul>
        <router-link v-for="(item,index) in navs" :key="index" :to="item.path" tag="li">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.text}}</span>
        </router-link>
      </ul>
    </div>
    <div class="userinfo">
      <div class="clearfix operation pt15 ftcl">
        <div class="clearfix pt ftc_one">
          <router-link class="set" to="/set">
            <i class="iconfont goback">&#xe632;</i>
          </router-link>
        </div>
        <div class="pt ftc_two">
          <router-link class="db" to="/message">
            <i class="iconfont goback">&#xe64b;</i>
          </router-link>
        </div>
      </div>
      <div class="user_info">
        <div class="userphoto">
          <router-link to="/login">
            <img src="https://static.epetbar.com/static_wap/appmall/avatar/dog.png" />
          </router-link>
        </div>
        <div class="nologin">
          <router-link to="/login">登录</router-link>
          <span>|</span>
          <router-link to="/register">注册</router-link>
        </div>
        <div class="vip">
          <ul>
            <li>
              <router-link to="javascript:mode_login('您还未登录，请先登录');">
                <img
                  data-v-333e4011
                  src="https://img2.epetbar.com/nowater/2018-11/22/08/71ff7f9ee43b98e8c68cb150f3f03169.png"
                />
              </router-link>
            </li>
            <li>
              <router-link to="javascript:mode_login('您还未登录，请先登录');">
                <img
                  data-v-333e4011
                  src="https://img2.epetbar.com/nowater/2018-11/22/08/d3d0bc1a081b6f0412b6f045863865be.png"
                />
              </router-link>
            </li>
            <li>
              <router-link to="javascript:mode_login('您还未登录，请先登录');">
                <img
                  data-v-333e4011
                  src="https://img2.epetbar.com/nowater/2018-11/22/08/e6f08976d0cf4a51d7eb209ba4c89df7.png"
                />
              </router-link>
            </li>
            <li>
              <router-link to="javascript:mode_login('您还未登录，请先登录');">
                <img
                  data-v-333e4011
                  src="https://img2.epetbar.com/nowater/2019-01/31/14/de8b18448de149a49288d3a2f6be91fe.png"
                />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mymould_20" style="margin-bottom: .8rem;"></div>
    <div class="mymould_22" style="margin-bottom: 25px;">
      <div class="pl10 pr10">
        <div class="myorder">
          <div class="clearfix title pt10 pl10 pr10">
            <div class="fl">
              <a href="javascript:mode_login('您还未登录，请先登录');">
                <img
                  src="https://img2.epetbar.com/nowater/2018-11/22/09/390880ba4e224747ebde28b56fe807da.png"
                />
              </a>
            </div>
            <div class="fr">
              <a href="javascript:mode_login('您还未登录，请先登录');">
                <img src />
              </a>
            </div>
          </div>
          <div class="clearfix mt20 pb10">
            <div class="fl" style="width: 20%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc orederli">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/22/09/fb45b8f54a662a0574c941ffb4de2d88.png"
                    src="https://img2.epetbar.com/nowater/2018-11/22/09/fb45b8f54a662a0574c941ffb4de2d88.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">待付款</div>
              </a>
            </div>
            <div class="fl" style="width: 20%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc orederli">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/22/09/51435308ce6c089a450fd3ab77a5520b.png"
                    src="https://img2.epetbar.com/nowater/2018-11/22/09/51435308ce6c089a450fd3ab77a5520b.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">待收货</div>
              </a>
            </div>
            <div class="fl" style="width: 20%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc orederli">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/22/09/e0aac3c323912454b6b0c4222d3c0edd.png"
                    src="https://img2.epetbar.com/nowater/2018-11/22/09/e0aac3c323912454b6b0c4222d3c0edd.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">待评价</div>
              </a>
            </div>
            <div class="fl" style="width: 20%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc orederli">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png"
                    src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">自助售后</div>
              </a>
            </div>
            <div class="div_line fl" style="width: 20%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc orederli">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png"
                    src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">国际订单</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pl10 pr10">
      <div class="wallet pad10">
        <div class="clearfix title_">
          <div class="fl">
            <a href="javascript:mode_login('您还未登录，请先登录');">
              <img
                src="https://img2.epetbar.com/nowater/2018-11/22/09/b5103c1385810f1a1f76891c8ee6d3ef.png"
              />
            </a>
          </div>
          <div class="fr">
            <a href="javascript:mode_login('您还未登录，请先登录');">
              <img src />
            </a>
          </div>
        </div>
        <div class="clearfix mt20">
          <div class="fl" style="width: 25%;">
            <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
              <div class="liimg rela">
                <span class="bold ft14 cf0">0</span>
              </div>
              <div class="ft12 ftc ell mt5">优惠券</div>
            </a>
          </div>
          <div class="fl" style="width: 25%;">
            <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
              <div class="liimg rela">
                <span class="bold ft14 cf0">0</span>
              </div>
              <div class="ft12 ftc ell mt5">E宠币</div>
            </a>
          </div>
          <div class="fl" style="width: 25%;">
            <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
              <div class="liimg rela">
                <span class="bold ft14 cf0">0.00</span>
              </div>
              <div class="ft12 ftc ell mt5">余额</div>
            </a>
          </div>
          <div class="fl" style="width: 25%;">
            <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
              <div class="liimg rela">
                <span class="bold ft14 cf0">0.00</span>
              </div>
              <div class="ft12 ftc ell mt5">红包</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mymould_25" style="margin-bottom: 25px;">
      <div class="pl10 pr10">
        <div class="myservice pad10">
          <div class="clearfix title_3">
            <div class="fl">
              <a href="javascript:mode_login('您还未登录，请先登录');">
                <img
                  src="https://img2.epetbar.com/nowater/2018-11/22/09/1cadc7c68de1db0b2ef68929b5a97bd6.png"
                />
              </a>
            </div>
            <div class="fr">
              <a href="javascript:mode_login('您还未登录，请先登录');">
                <img src />
              </a>
            </div>
          </div>
          <div class="clearfix mt20">
            <div class="fl mb10 mt10" style="width: 25%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2019-06/05/00/f2f93d58a1d8ee48053595c7a1fcefda.png"
                    src="https://img2.epetbar.com/nowater/2019-06/05/00/f2f93d58a1d8ee48053595c7a1fcefda.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">联系客服</div>
              </a>
            </div>
            <div class="fl mb10 mt10" style="width: 25%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/28/17/d3813a6151551b28c2b34c358f4afd3c.png"
                    src="https://img2.epetbar.com/nowater/2018-11/28/17/d3813a6151551b28c2b34c358f4afd3c.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">潮品预售</div>
              </a>
            </div>
            <div class="fl mb10 mt10" style="width: 25%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2019-06/05/00/2ef8974804eee7c917d1fbc3c51b6305.png"
                    src="https://img2.epetbar.com/nowater/2019-06/05/00/2ef8974804eee7c917d1fbc3c51b6305.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">我的团购</div>
              </a>
            </div>
            <div class="fl mb10 mt10" style="width: 25%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/28/17/42ae00bbb4a33fa804b0d852e0233c19.png"
                    src="https://img2.epetbar.com/nowater/2018-11/28/17/42ae00bbb4a33fa804b0d852e0233c19.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">我的收藏</div>
              </a>
            </div>
            <div class="fl mb10 mt10" style="width: 25%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/28/17/97a4b02ff70fe492684838bf022d6cc9.png"
                    src="https://img2.epetbar.com/nowater/2018-11/28/17/97a4b02ff70fe492684838bf022d6cc9.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">随手送礼</div>
              </a>
            </div>
            <div class="fl mb10 mt10" style="width: 25%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2019-06/05/00/1d3a06612387336fdef4340d8367a03f.png"
                    src="https://img2.epetbar.com/nowater/2019-06/05/00/1d3a06612387336fdef4340d8367a03f.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">我的兑换</div>
              </a>
            </div>
            <div class="fl mb10 mt10" style="width: 25%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/28/17/c2a952ea1e481e67f7f0223574b93afd.png"
                    src="https://img2.epetbar.com/nowater/2018-11/28/17/c2a952ea1e481e67f7f0223574b93afd.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">我的关注</div>
              </a>
            </div>
            <div class="fl mb10 mt10" style="width: 25%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/22/09/928fe6cbd944c114206ace04f9094489.png"
                    src="https://img2.epetbar.com/nowater/2018-11/22/09/928fe6cbd944c114206ace04f9094489.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">萌爪联盟</div>
              </a>
            </div>
            <div class="fl mb10 mt10" style="width: 25%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2018-11/28/17/1574544034bb0653a49d69c337a2db3c.png"
                    src="https://img2.epetbar.com/nowater/2018-11/28/17/1574544034bb0653a49d69c337a2db3c.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">我的捐赠</div>
              </a>
            </div>
            <div class="fl mb10 mt10" style="width: 25%;">
              <a href="javascript:mode_login('您还未登录，请先登录');" class="db ftc pl5 pr5">
                <div class="liimg rela">
                  <img
                    data-src="https://img2.epetbar.com/nowater/2019-06/05/00/d417474a0819261bea63d703c2d4fe1e.png"
                    src="https://img2.epetbar.com/nowater/2019-06/05/00/d417474a0819261bea63d703c2d4fe1e.png"
                  />
                </div>
                <div class="ft12 ftc ell mt5">我的预售</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "../../utils/http";
export default {
  name: "Mine",
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
  },
  created() {}
};
</script>
<style scoped>
.mine {
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: absolute;
  padding-bottom: 1.5rem;
}
.mine::-webkit-scrollbar {
  display: none;
}
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

.userinfo {
  width: 100%;
  height: 4.12rem;
  background: rgb(58, 201, 58);
  position: relative;
}
.ftcl {
  height: 1rem;
  display: block;
}
.pt {
  width: 0.96rem;
  height: 0.52rem;
  display: inline-block;
  padding-top: 0.3rem;
}
.pt a i {
  font-size: 0.5rem;
  padding-left: 0.25rem;
  color: rgb(248, 239, 239);
}

.pt:nth-child(1) {
  float: left;
}
.pt:nth-child(2) {
  float: right;
}
.user_info {
  width: 100%;
  height: 1.4rem;
  display: block;
}
.userphoto {
  width: 1.4rem;
  height: 1.4rem;
  margin: 0.2rem;
  padding: 0.2rem;
  display: inline-block;
}
.userphoto a img {
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  vertical-align: middle;
}
.nologin {
  padding-left: 0.3rem;
  display: inline-block;
  color: #fff;
  font-size: 0.35rem;
}
.nologin span {
  display: inline-block;
  width: 0.4rem;
  text-align: center;
}
.nologin a {
  font-size: 0.35rem;
  color: white;
}
.vip {
  width: 96%;
  height: 0.7rem;
  background: #252525;
  border-radius: 0.3rem 0.3rem 0rem 0rem;
  margin: 0 auto;
  margin-top: 0.6rem !important;
}
.vip ul {
  width: 100%;
  height: 100%;
  display: flex;
}
.vip ul li {
  width: 100%;
  height: 100%;
  flex: 1;
  text-align: center;
}
.vip ul li a {
  display: inline-block;
}
.vip ul li a img {
  margin-top: 0.2rem;
  text-align: center;
}
.pl10 {
  padding-left: 0.2rem;
}
.pr10 {
  padding-right: 0.2rem;
}
.myorder {
  width: 100%;
  height: 2.32rem;
  box-shadow: 1px 2px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}
.title {
  width: 100%;
  height: 0.7rem;
}
.title a img {
  padding-top: 0.2rem;
}
.mt20 {
  width: 100%;
  display: flex;
  text-align: center;
  margin-top: 0.4rem;
}
.ftc {
  display: flex;
  font-size: 0.25rem;
  align-items: center;
  flex-direction: column;
}
.ftc img {
  width: 0.486rem;
  height: 0.486rem;
}
.f1 {
  width: 100%;
  flex: 1;
}
.mt5 {
  margin-top: 0.2rem;
}
.wallet {
  width: 100%;
  height: 2.32rem;
  box-shadow: 1px 2px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}
.title_ {
  width: 100%;
  height: 0.7rem;
}
.title_ a img {
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}

.mymould_25 {
  width: 100%;
  height: 5.58rem;
  margin-bottom: 5rem;
  display: block;
}
.myservice {
  width: 100%;
  height: 5.58rem;
  box-shadow: 1px 2px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-top: 0.4rem;
}
.title_3 {
  width: 100%;
  height: 0.7rem;
}
.title_3 a img {
  padding-top: 0.4rem;
  padding-left: 0.2rem;
}
.mt20 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.mb10 .db {
  display: block;
  widows: 1.3rem;
  align-self: center;
  display: flex;
  justify-content: center;
}
.mb10 {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
.mb10 .pl5 {
  padding-left: 5px;
}
.mb10 .pr5 {
  padding-right: 5px;
}
.mb10 .ftc {
  text-align: center;
}
</style>
