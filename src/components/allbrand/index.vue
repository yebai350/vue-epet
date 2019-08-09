<template>
  <div class="allbrand">
    <div class="mine_header">
      <router-link to="/handpick">
        <i class="iconfont goback">&#xe62e;</i>
      </router-link>
      <i class="text">全部品牌</i>
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
    <div class="all_brand" ref="list">
      <div class="all_brand_item">
        <!-- <div class="brand_title_letter">A</div> -->
        <div class="all_brand_name">
          <div class="all_brand_name_item">
            <div v-for="(item,index) in list" :key="index">
              <a href="https://wap.epet.com/brand/bd1.html?fw=0" class="bgfff db">
                <div class="brand-wrapper clearfix">
                  <div class="brand-img">
                    <img class="img db iamge" :src="item.logo" />
                  </div>
                  <div class="fl brand-name">
                    <p class="ft12 c999">{{item.name}}</p>
                    <p class="ft14">{{item.address}}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="all_bra" id="to-top-btn">
      <div class="back_top iconfont" id="goTop" @click="goTop" v-show="toTop">&#xe604;</div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
let stop = false; // 全局变量,坑处
let timer = null;
export default {
  name: "allBrand",
  data() {
    return {
      isshow: false,
      list: [{ address: "" }, { name: "" }, { logo: "" }],
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
      toTop:true
    };
    
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.needToTop); //滚动事件监听
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    handleshow() {
      this.isshow = !this.isshow;
    },
    goTop: function() {
      // 回到顶部方法
      clearInterval(timer);
      timer = setInterval(function() {
        console.log("不妙");
        let curHeight =
          document.documentElement.scrollTop || document.body.scrollTop; // 得到当前高度
        var now = curHeight;
        var speed = (0 - now) / 7; // 随着高度减速
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        console.log(`当前的高度应该是:` + curHeight);
        console.log("我是零你也那我没办法");
        if (curHeight === 0) {
          //当前高度为零,停止这次计时器
          clearInterval(timer); // C1
        }
        document.documentElement.scrollTop = curHeight + speed; //直接给高度赋值,会调用needtotop方法
        document.body.scrollTop = curHeight + speed; //谷歌的
        stop = false; // A
        console.log("回到顶部一次");
      }, 30);
    },
    needToTop: function() {
      let curHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
      let viewHeight = document.documentElement.clientHeight;
      if (curHeight > viewHeight + 100) {
        this.toTop = true; //赋值是为了按钮的v-show='toTop'
      } else {
        this.toTop = false;
      }
      if (stop) {
        //STOP
        clearInterval(timer); //C2
        console.log("我没了");
      }
      stop = true; //B
      console.log("执行了一次");
    }
  },
  created() {
    Axios.get("/v3/brand/list/main.html", {})
      .then(res => {
        this.list = res.data.brand[1].list;
        console.log(res.data.brand[1].list);
      })
      .catch(err => console.log(err));
  }
};
</script>
<style lang="scss" scoped>
.allbrand {
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: absolute;
  padding-bottom: 2rem;
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
.all_brand_name {
  width: 96%;
  // background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.all_brand > div {
  width: 100%;
}
.all_brand_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.28rem;
}

.brand-name {
  display: inline-block;
}
.brand-name p {
  font-size: 0.25rem;
  height: 0.5rem;
}
/*城市列表下标*/
.all_brand_index {
  position: fixed;
  right: 0;
  top: 1rem;
}
.all_brand_index > div {
  padding: 0.1rem 0.05rem;
  font-size: 0.25rem;
}
.bgfff {
  width: 100%;
  display: block;
  margin-top: 0.1rem;
}
.brand-img {
  display: inline-block;
}
.brand-img img {
  width: 1.66rem;
  height: 0.8rem;
  vertical-align: middle;
}
.all_bra {
  width: 1rem;
  height: 1rem;
  position: fixed;
  bottom: 2rem;
  right: 0.1rem;
}
.all_bra .back_top {
  text-align: center;
  width: 1rem;
  height: 1rem;
  font-size: 0.5rem;
}
</style>

