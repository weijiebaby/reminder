<template>
  <div class="centerItem">
    <p class="myp">我的待办</p>
    <el-button
      style="
        float: right;
        margin-top: -60px;
        font-size: 25px;
        margin-right: 60px;
      "
      type="primary"
      icon="el-icon-plus"
      circle
    ></el-button>
    <div class="centerItemTop"></div>
    <div class="centerItemBottom"></div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.centerItem {
    margin-top: 150px;
    margin-left: 30px;
    width: 800px;
    height: 72%;
    background-color: white;
    border-radius: 10px;
    float: left;
}
.myp {
    margin-top: -60px;
    font-size: 25px;
    font-weight: 600;
}
</style>