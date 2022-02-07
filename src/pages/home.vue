<template>
  <div class="home">
    <!-- <button @click="btn">测试</button> -->
    <Menu></Menu>
    <Backlog></Backlog>
    <Overview></Overview>
  </div>
</template>

<script>
import Menu from '../components/menu.vue'
import Overview from '../components/overview.vue'
import Backlog from '../components/backlog.vue'
export default {
  data() {
    return {};
  },
  components: {
      Menu,
      Overview,
      Backlog
  },
  methods: {
    async btn() {
      const { data: res } = await this.$http.post("test/test");
      console.log(res);
    },
  },
};
</script>

<style scoped>
.home {
  background-color: #f1f2f6;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>