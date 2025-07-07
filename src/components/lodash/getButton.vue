<template>
  <span>{{ name }}</span>
</template>

<script>
import { get, map, cloneDeep } from 'lodash'

export default {
  data() {
    return {
      obj: {
        a: {
          b: ['xiao ming']
        }
      }
    }
  },

  computed: {
    name({ obj }) {
      return map(cloneDeep(get(obj, 'a.b', [])), (item) => item + 1).join('')
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
