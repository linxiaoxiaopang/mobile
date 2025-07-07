<template>
  <div>
    <div class="bg">
      <i class="el-icon-edit"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <el-button type="primary">{{ msg }}</el-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: '123'
    }
  }
}

</script>

<style lang="scss" scoped>
.bg {
  span {
    background: red;
  }
}
</style>
