<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './button.css'

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String
    },
    //為按鈕新增兩個屬性
    outline: {
      type: Boolean,
      default: false
    },
    outlineColor: {
      type: String
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true,
        //新增class
        'storybook-button--outline': this.outline
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        //新增style
        borderColor: this.outlineColor
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>
