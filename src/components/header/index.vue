<template>
  <div class="header">
    <div class="top">
      <router-link to="/search"  class="search">
        <i class="iconfont" style="font-size:.4rem;vertical-align:middle;margin-left:.5rem;">&#xe616;</i>
        请输入搜索的内容
      </router-link>
      <router-link to="/message" class="message">
        <i class="iconfont" style="font-size:.5rem;vertical-align:middle;">&#xe64b;</i>
      </router-link>
    </div>
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="item.img_url" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>
<script>
import Swiper from "swiper";
import axios from "axios";
export default {
  name: "Header",
  data() {
    return {
      banner: []
    };
  },
  created() {
    axios
      .get("/v3/index", {})
      .then(res => {
        this.banner = res.data.datas[1].data.images;
        // console.log(res);
      })
      .catch(err => console.log(err));
  },
  
  watch: {
    banner() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          autoplay: {
            disableOnInteraction: false
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>
<style scoped>
.home_header {
  display: block;
  width: 100%;
  height: 1rem;
}
.top {
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300;
}
.search {
  width: 80%;
  height: 0.6rem;
  flex: 1;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  line-height: 0.6rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
}
.message {
  width: 10%;
  height: 0.6rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  line-height: 0.6rem;
  color: aliceblue;
}
.swiper-wrapper {
  width: 100%;
  height: 5.8rem;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-pagination{
  bottom:1rem;
}

</style>
