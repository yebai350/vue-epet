<template>
  <div class="search">
    <div class="bgfff clearfix">
      <router-link to="/handpick" class="go_back">
        <i class="fl back-btn iconfont">&#xe6a2;</i>
      </router-link>
      <div class="search-wrapper round5">
        <input class="search-input" name="ser" type="text" placeholder="搜索你喜欢的宝贝" />
        <label for="ser">
          <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/search-ico.png" />
        </label>
      </div>
      <a class="search-btn">搜索</a>
    </div>
    <div class="hot">
      <p class="title c666">
        <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/rmss.png" />
        <span>精品推荐</span>
      </p>
      <div class="label clearfix">
        <a class="fl bgfff round20">冠能</a>
        <a class="fl bgfff round20">比熊</a>
        <a class="fl bgfff round20">福来恩</a>
        <a class="fl bgfff round20">狗狗奶粉</a>
        <a class="fl bgfff round20">美毛粉</a>
        <a class="fl bgfff round20">跳蚤</a>
        <a class="fl bgfff round20">海藻粉</a>
        <a class="fl bgfff round20">比瑞吉</a>
      </div>
    </div>
    <div class="recently">
      <p class="title c666">
        <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/zjss.png" />
        <span>最近搜索</span>
      </p>
      <div class="wrapper">
        <a class="db brand bgfff"></a>
      </div>
    </div>
    <div class="emptyftc round5"> <button class="clear">清空搜索历史</button> </div>
  </div>
</template>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
}
.bgfff {
  width: 100%;
  height: 1rem;
  display: flex;
  line-height: 0.9rem;
  .go_back {
    width: 10%;
    .back-btn {
      width: 0.44rem;
      height: 0.44rem;
      font-size: 0.4rem;
      margin-left: 0.1rem;
    }
  }
  .search-wrapper {
    display: inline-block;
    width: 80%;
    input {
      width: 90%;
      height: 0.6rem;
      padding-left: 0.2rem;
      font-size: 0.25rem;
      border: none;
      background: rgba(189, 192, 194, 0.2);
      border-radius: 0.2rem;
    }
    img {
      display: inline-block;
      vertical-align: middle;
      margin: 0.1rem;
      width: 0.3rem;
    }
  }
  .search-btn {
    width: 10%;
    display: inline-block;
  }
}
.hot {
  width: 100%;
  height: 3.16rem;
  img {
    display: inline-block;
    vertical-align: middle;
    margin: 0.1rem;
  }
  .label {
    width: 100%;
    height: 2.56rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background: rgba(99, 115, 131, 0.2);
    justify-content: space-between;
    a {
      flex-basis: 1.6rem;
      display: inline-block;
      padding: 0.02rem 0.2rem;
      color: rgb(90, 86, 86);
      font-size: 0.24rem;
      border-radius: 0.3rem;
      background: #fff;
      text-align: center;
      margin-top: 0.15rem;
    }
  }
}
.recently {
  width: 100%;
  height: 1rem;
  img {
    display: inline-block;
    vertical-align: middle;
    margin: 0.2rem;
  }
  span {
    display: inline-block;
  }
}
.emptyftc {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  .clear{
    width: 4.5rem;
    height: .7rem;
    border: none;
    border-radius: .3rem;
    margin-top: 2rem;
    font-size: .25rem;
  }
}
</style>
