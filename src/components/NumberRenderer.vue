<template>
  <div>
    {{ numbers }}
  </div>
</template>
<script>
export default {
  name: 'NumberRenderer',

  props: {
    even: {
      type: Boolean,
      default: true
      //required: true
    }
  },
  computed: {
    numbers() {
      const evens = []
      const odds = []

      for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
          evens.push(i)
        } else {
          odds.push(i)
        }
      }

     return this.even === true ? evens.join(", ") : odds.join(", ")
    }
  }
}
</script>
