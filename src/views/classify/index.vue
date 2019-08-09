<template>
  <div class="classify">
    <!--  <header class="clearfix rela top bgfff">
      <div id="1" class="fl sort nav-sort ft13 bold">
        <a href="#tab1">
          <span>分类</span>
        </a>
      </div>
      <div id="2" class="fl brand nav-sort ft13 bold cur">
        <a href="#tab2">
          <span>品牌</span>
        </a>
      </div>
      <a class="search" href="https://wap.epet.com/search.html?pet_type=cat&amp;fw=0"></a>
    </header>-->
    <allBrand />
  </div>
</template>

<script>
import http from "../../utils/http";
export default {
  name: "Classify",
  created() {
    http("get", "/v3/index/main.html").then(data => {
      // console.log(data);
    });
  }
};
</script>
<style lang="scss" scoped>
.classify {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: center;
  line-height: 0.8rem;
  border-bottom: solid 0.08rem rgb(151, 155, 151, 0.2);
  .sort {
    a {
      float: right;
    }
  }
  .brand {
    a {
      margin-left: 0.8rem;
    }
  }
  .fl {
    height: 100%;
    flex: 1;
    a {
      width: 1rem;
      height: 100%;
      display: inline-block;
      line-height: 0.8rem;
      font-size: 0.28rem;
    }
  }
}
</style>
