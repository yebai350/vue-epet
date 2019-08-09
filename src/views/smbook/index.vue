<template>
  <div class="smbook">
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

    <div class="opgc_header">
      <div class="fixed_box">
        <div class="fixed_header">
          <div class="header_min c333">
            <div class="top">
              <div class="header_bar">
                <div class="pets_type fl" style="display:inline-block;">
                  <i class="iconfont">&#xe61c;</i>
                  <span class="ft14">猫咪</span>
                  <i class="iconfont">&#xe62c;</i>
                </div>
                <router-link to="/search" tag="a" class="search">
                  &nbsp;
                  <i class="iconfont" style="font-size:.4rem;vertical-align:middle;">&#xe616;</i>
                  请输入搜索的内容
                </router-link>
                <router-link to="/message" tag="a" class="message">
                  <i class="iconfont" style="font-size:.5rem;vertical-align:middle;">&#xe64b;</i>
                </router-link>
              </div>
              <div class="nav flex">
                <li class>收藏</li>
                <li class="active">推荐</li>
                <li class>达人测评</li>
                <li class>养宠视频</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main_list">
      <div class="link flex">
        <div>
          <a href="javascript:mode_login('您还未登录，请先登录');">
            <img src="https://static.epetbar.com/static_wap/content/opgc/image/eat.png" />
          </a>
        </div>
        <div>
          <a href="javascript:mode_login('您还未登录，请先登录');">
            <img src="https://static.epetbar.com/static_wap/content/opgc/image/diseasePet.png" />
          </a>
        </div>
        <div>
          <a href="javascript:mode_login('您还未登录，请先登录');">
            <img src="https://static.epetbar.com/static_wap/content/opgc/image/moreTool.png" />
          </a>
        </div>
        <div>
          <a href="javascript:mode_login('您还未登录，请先登录');">
            <img src="https://static.epetbar.com/static_wap/content/opgc/image/protectPet.png" />
          </a>
        </div>
        <div>
          <a href="javascript:mode_login('您还未登录，请先登录');">
            <img src="https://static.epetbar.com/static_wap/content/opgc/image/knowledgeBase.png" />
          </a>
        </div>
      </div>

      <div class="list_content c333">
        <div class="list_video">
          <div class="list one">
            <a href="item.data.target.param">
              <div class="img_video fl">
                <img
                  data-src="https://img1.epetbar.com/2019-03/29/18/d26490e23aacc2683a45f692c499ab30.jpg?x-oss-process=style/cut&amp;$1=250&amp;$2=125"
                  src="https://img1.epetbar.com/2019-03/29/18/d26490e23aacc2683a45f692c499ab30.jpg?x-oss-process=style/cut&amp;$1=250&amp;$2=125"
                  lazy="loaded"
                />
              </div>
              <div class="title fl">
                <p class="c999">喵星人的心，你永远 猜不透。</p>
              </div>
            </a>
          </div>
        </div>
        <div class="list_video">
          <div class="list one">
            <a href="item.data.target.param">
              <div class="img_video fl">
                <img
                  data-src="https://img1.epetbar.com/2019-03/29/18/d26490e23aacc2683a45f692c499ab30.jpg?x-oss-process=style/cut&amp;$1=250&amp;$2=125"
                  src="https://img1.epetbar.com/2019-03/22/17/fab92d9d2e603d11b1b7dfb1061b5281.png?x-oss-process=style/cut&$1=250&$2=125"
                  lazy="loaded"
                />
              </div>
              <div class="title fl">
                <p class="c999">猫咪疫苗前后，注意这些情况！</p>
              </div>
            </a>
          </div>
        </div>
        <div class="list_video">
          <div class="list one">
            <a href="item.data.target.param">
              <div class="img_video fl">
                <img
                  data-src="https://img1.epetbar.com/2019-03/29/18/d26490e23aacc2683a45f692c499ab30.jpg?x-oss-process=style/cut&amp;$1=250&amp;$2=125"
                  src="https://img1.epetbar.com/2019-01/20/15/a81883a268826040caccb706cbea7a6d.jpg?x-oss-process=style/cut&$1=250&$2=125"
                  lazy="loaded"
                />
              </div>
              <div class="title fl">
                <p class="c999">如何收留一只流浪猫。</p>
              </div>
            </a>
          </div>
        </div>
        <div class="list_video">
          <div class="list one">
            <a href="item.data.target.param">
              <div class="img_video fl">
                <img
                  data-src="https://img1.epetbar.com/2019-03/29/18/d26490e23aacc2683a45f692c499ab30.jpg?x-oss-process=style/cut&amp;$1=250&amp;$2=125"
                  src="https://img1.epetbar.com/2019-02/27/20/415110bcfa71b0dd05364eaa0d86c39c.jpg?x-oss-process=style/cut&$1=250&$2=125"
                  lazy="loaded"
                />
              </div>
              <div class="title fl">
                <p class="c999">豆豆丢失的十个小时里。</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "Smbook",
  data() {
    return {
      activeName: "a",
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
      ],
      list: []
    };
  },
  created() {
    Axios.get(
      "/v3/content/opgc/Index.html?do=GetList&param=0&page=1&pet_type=dog&system=wap&isWeb=1&version=303&distinct_id=16c2e092450533-056a32eb352be6-c343162-2073600-16c2e09245150f",
      {}
    ).then(data => {
      this.list = data.data.data.list[1];
      console.log(data.data.data.list);
    });
  },
  methods: {
    handleshow() {
      this.isshow = !this.isshow;
    }
  }
};
</script>
<style scoped>
.smbook {
  width: 100%;
  height: 100%;
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
.top {
  width: 100%;
  height: 1.54rem;
  padding-top: 0.2rem;
  /* background: red; */
}
.header_bar {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
}
.pets_type {
  width: 20%;
  height: 0.5rem;
  margin-left: 0.1rem;
}
.pets_type span {
  display: inline-block;
  font-size: 0.3rem;
}
.pets_type i:first-child {
  font-size: 0.4rem;
}
.pets_type i:last-child {
  font-size: 0.25rem;
}
.search {
  display: inline-block;
  width: 70%;
  height: 0.5rem;
  background: rgba(240, 240, 240, 1);
  border-radius: 0.5rem;
  margin-right: 0.2rem;
}
.message {
  display: inline-block;
  width: 10%;
  height: 0.6rem;
  color: rgb(127, 134, 139);
}
.nav {
  width: 100%;
  height: 0.72rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav .router-link-active {
  width: 0.3rem;
  height: 0.1rem;
  margin: 0.02rem auto 0;
  background: rgb(55, 209, 88);
  border-radius: 0.1rem;
}
.nav .router-link-active {
  color: red;
}
.nav li {
  text-align: center;
  flex: 1;
  line-height: 0.6rem;
}
.nav li:active::after {
  content: "";
  display: block;
  width: 0.3rem;
  height: 0.1rem;
  margin: 0.02rem auto 0;
  background: rgb(55, 209, 88);
  border-radius: 0.1rem;
}

.main_list {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;
}
.link {
  width: 100%;
  height: 1.95rem;
  display: flex;
}
.list_content {
  width: 100%;
  height: 100%;
  margin-bottom: 2.2rem;
  position: relative;
}
.list_video {
  width: 95%;
  height: 2.56rem;
  margin-top: 0.5rem;
  box-shadow: 0.02rem 0.04rem 0.05rem 0.05rem rgba(0, 0, 0, 0.1);
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.list a {
  width: 100%;
  height: 60%;
  display: block;
}
.img_video {
  width: 45%;
  display: inline-block;
}
.img_video img {
  width: 2.5rem;
  height: 1.5rem;
  vertical-align: middle;
  margin: .5rem;
}

.title {
  width: 55%;
  display: inline-block;
 
  /* background: red; */
}
.title p{
   top: -1rem;
  position: relative;
}
.bottom {
  width: 100%;
  height: 40%;
  background: blue;
}
</style>

