import MyButton from './Button.vue'

export default {
  title: 'Example/Button',
  component: MyButton,
  parameters: {
    jest: ['button.spec.js'],
  },
  argTypes: {
    //backgroundColor可以使用control:'color'，這樣Storybook會幫我們產生ColorPicker
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: { action: '按鈕按下了' },
  }
 
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
//加入兩種狀態
export const BlackOutline = Template.bind({})
BlackOutline.args = {
  label: 'Black Outline Button',
  outline: true,
  outlineColor: 'black'
}

export const GreenOutline = Template.bind({})
GreenOutline.args = {
  label: 'Green Outline Button',
  outline: true,
  outlineColor: 'green'
}
