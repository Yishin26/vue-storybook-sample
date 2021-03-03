<template>
  <div>
    <table>
      <tr>
        <td>1st</td>
        <td>
          <input type="number" v-model.number="scores.firstSection">
        </td>
      </tr>
      <tr>
        <td>2st</td>
        <td>
          <input type="number" v-model.number="scores.twoSection">
        </td>
      </tr>
      <tr>
        <td>3st</td>
        <td>
          <input type="number" v-model.number="scores.threeSection">
        </td>
      </tr>
      <tr>
        <td>4st</td>
        <td>
          <input type="number" v-model.number="scores.fourSection">
        </td>
      </tr>
      
      <tr>
        <td>extend</td>
        <td>
          <input type="number" v-model.number="scores.extendSection">
        </td>
      </tr>
      <input type="button" value="submit" @click="submit">
    </table>
  </div>
</template>

<script>
import _ from 'lodash'

function mathDistance(num1, num2) {
  return num2 > num1 ? num2 - num1 : num1 - num2
}

export default {
  name: 'TestForm',
  data() {
    return {
      scores: {
        firstSection: 0,
        twoSection: 0,
        threeSection: 0,
        fourSection: 0,
        extendSection: 0
      },
      cloneScores: {}
    }
  },
  computed: {
    total() {
      return this.scores.firstSection + this.scores.twoSection + this.scores.threeSection + this.scores.fourSection + this.scores.extendSection
    }
  },
  methods: {
    submit() {
      let scores = this.scores
      let modifedObject = _.reduce(
        this.cloneScores,
        function(result, value, key) {
          return _.isEqual(value, scores[key]) ? result : result.concat(key)
        },
        []
      )
      let isDistanceScore = false
      modifedObject.forEach(property => {
        if (mathDistance(this.cloneScores[property], scores[property]) > 1) {
          isDistanceScore = true
        }
      })

      if (isDistanceScore) alert('只能增加或減少一分')
      if (modifedObject.length > 1) alert('只能更新一節的分數')
    }
  },
  created() {
    this.cloneScores = { ...this.scores }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
