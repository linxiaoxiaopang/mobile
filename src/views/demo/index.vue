<template>
  <div>
    <span>{{ name }}</span>
    <TestButton/>
    <GetButton/>
  </div>
</template>

<script>
import TestButton from '@/components/element/testButton'
import GetButton from '@/components/lodash/getButton'
import { mapGetters } from 'vuex'

export default {
  components: {
    TestButton,
    GetButton
  },

  computed: {
    ...mapGetters(['name'])
  }
}

</script>

<style lang="scss" scoped>

</style>
