<template>
  <el-button type="primary">{{ msg }}</el-button>
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

</style>
