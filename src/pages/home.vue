<template>
  <div class="home">
    <!-- <button @click="btn">测试 </button> -->
    <Menu></Menu>
    <Menutop></Menutop>
    <Backlog></Backlog>
  </div>
</template>

<script>
import Menu from '../components/menu.vue'
import Menutop from '../components/menutop.vue'
import Backlog from '../components/backlog.vue'
export default {
  data() {
    return {};
  },
  components: {
      Menu,
      Menutop,
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