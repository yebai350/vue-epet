<template>
  <div class="brand_list">
    <div class="recom wrapper bgfff" v-for="(item,index) in tit" :key="index">
      <div class="title ftc c999 ft12">
        <span class="c999">—— {{item.title}} ——</span>
      </div>
      <div class="list">
        <ul class="clearfix">
          <li class="fl rela"  v-for="(itt,idd) in one" :key="idd">
            <a href="https://wap.epet.com/brand/bd2044.html?fw=0" class="block">
              <div class="img loadimg-nofixed rela">
                <img class="db image" :src="itt.logo" lazy="loaded" />
              </div>
              <p class="name ftc ft13 mt5">{{itt.name}}</p>
              <p class="address ftc c999 ft12">{{itt.address}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="all_brand">
        <a href="/allbrand">全部</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Brand",
  data() {
    return {
      tit: [],
      one: [],
      two: [],
      three: [],
      four: [],
      five: [],
      six: []
    };
    // var tit = tit[index].list;
  },
  created() {
    axios
      .get("/v3/brand/list/main.html", {})
      .then(res => {
        this.tit = res.data.brand;
        this.one = res.data.brand[0].list;
        this.two = res.data.brand[1].list;
        this.three = res.data.brand[2].list;
        this.four = res.data.brand[3].list;
        this.five = res.data.brand[4].list;
        this.six = res.data.brand[5].list;
        console.log(res.data.brand[0].list);
      })
      .catch(err => console.log(err));
  },
  monted() {
    let recommend_bran = [],
      main_brand = [],
      sock_brand = [],
      health_brand = [],
      daily_brand = [],
      nurse_brand = [];
  }
};
</script>
<style lang="scss" scoped>
.brand_list {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;
}
.brand_list::-webkit-scrollbar {
  display: none;
}
.wrapper {
  width: 100%;
  height: 100%;
  padding-top: 0.3rem;
  padding-bottom: 0.2rem;

  .title {
    width: 100%;
    height: 0.78rem;
    text-align: center;
  }
  .list {
    width: 100%;
    height: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }
    li {
      width: 33.33%;
      text-align: center;
      align-self: flex-start;
    }
  }
}
</style>

