<template>
  <div id="app">
    <router-view/>
    <TabBar v-if="this.$route.meta.flag"/>
  </div>
</template>
<script>
import TabBar from "common/tabBar";
import http from "utils/http.js"
export default {
  name: "App",
  components: {
    TabBar
  },
  created() {
    http("get", "/v3/index/main.html").then(data => {
      // console.log(data);
    });
  }
};
</script>

<style>
#app{
  cursor: pointer;
}
</style>
