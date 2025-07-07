<template>
  <div>
    <div class="bg">
      <span>456</span>
    </div>
    <el-button type="primary">{{ msg }}</el-button>
  </div>
</template>

<script>
import { Button } from 'element-ui'

export default {
  components: {
    [Button.name]: Button
  },

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
