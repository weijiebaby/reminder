<template>
    <div class="rightItem">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <p class="myp">概括统计</p>
        <div class="boxone"></div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.rightItem {
    margin-top: 30px;
    margin-right: 30px;
    width: 300px;
    height: 72%;
    border-radius: 10px;
    /* background-color: white; */
    float: right;
}
::v-deep .el-input__inner {
    margin-left: -140px;
    width: 130%;
    border-radius: 20px;
}
.myp {
    margin-top: 20px;
    font-size: 25px;
    font-weight: 600;
}
.boxone {
    width: 300px;
    height: 300px;
    background-color: white;
    margin-top: 24px;
    border-radius: 10px;
}
</style>