<template>
  <div class="leftItem">
    <div class="headimage">
      <img src="../assets/test.jpg" alt="" />
      <div class="twoline">
        <p class="status">
          早上好&nbsp;<svg
            style="font-size: 20px"
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-a-zaoshangzaochen"></use>
          </svg>
        </p>
        <p class="nickname">你吃晚饭了吗</p>
      </div>
    </div>
    <div class="line"></div>
    <p class="menutop">选项</p>
    <div class="menubox">
      <ul class="menuul">
        <li>
          <div class="menuline"></div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-woderenwu"></use></svg
          >&nbsp;&nbsp;我的任务
        </li>
        <li>
          <div class="menuline"></div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconfuzhi"></use></svg
          >&nbsp;&nbsp;个人中心
        </li>
        <li>
          <div class="menuline"></div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use></svg
          >&nbsp;&nbsp;日历视图
        </li>
        <li>
          <div class="menuline"></div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-daqia"></use></svg
          >&nbsp;&nbsp;打卡
        </li>
        <li>
          <div class="menuline"></div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenlei"></use></svg
          >&nbsp;&nbsp;分类
        </li>
        <li>
          <div class="menuline"></div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tongji"></use></svg
          >&nbsp;&nbsp;统计
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <p class="menutop">更多</p>
    <div class="morebox">
      <ul class="moreul">
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-app1"></use></svg
          >&nbsp;&nbsp;APP下载
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wodefankui"></use></svg
          >&nbsp;&nbsp;反馈与建议
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-guanyu"></use></svg
          >&nbsp;&nbsp;关于
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use></svg
          >&nbsp;&nbsp;设置
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.leftItem {
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
  color: rgba(15, 23, 42, 0.8);
  margin-top: 30px;
  margin-left: 30px;
  width: 220px;
  height: 92%;
  background-color: white;
  border-radius: 10px;
  float: left;
}
.headimage {
  cursor: pointer;
  margin-left: 30px;
  margin-top: 30px;
  border-radius: 50%;
}
.headimage img {
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgb(214, 211, 211);
}
.twoline {
  float: left;
  margin-top: -10px;
  margin-left: 25px;
}
.status {
  color: #69696c;
  cursor: default;
  font-size: 14px;
}
.nickname {
  color: #464647;
  margin-top: -10px;
  font-size: 15px;
}
.nickname:hover {
  color: black;
}
.line {
  border-top: 1px solid rgba(15, 23, 42, 0.4);
  width: 170px;
  margin: 0 auto;
  display: flex;
}
.menubox {
  font-size: 14px;
  width: 220px;
  height: 250px;
  /* background-color: darkgray; */
  border-radius: 20px;
}
.morebox {
font-size: 13px;
  margin: 0 auto;
  width: 170px;
  height: 160px;
  background-color: rgb(240, 239, 238);
  border-radius: 8px;
}
.menutop {
  margin-left: 25px;
}
.menuline {
  float: left;
  border-radius: 5px;
  height: 35px;
  margin-left: -40px;
  background: #5da7f1;
  transition: 0.7s;
  border-left: 4px solid #5da7f1;
  opacity: 0;
}
.menuul li:hover .menuline {
  opacity: 1;
}
ul li {
  width: 170px;
  cursor: pointer;
  line-height: 40px;
  list-style: none;
}
ul li:hover .icon {
    color:#5da7f1
}
.menuul li:hover {
  margin-left: -25px;
  padding-left: 25px;
  width: 170px;
  border-radius: 8px;
  background-color: #ebf4ff;
}
</style>