import Vue from 'vue';
import PureInboxScreen from '@/components/PureInboxScreen.vue';
import { mount } from "@vue/test-utils";

describe("PureInboxScreen.vue", () => {
  it('Renders error', () => {
    const wrapper = mount(PureInboxScreen, {
      propsData: { error: true }
    });
    const errorMessageBlock = wrapper.find('.wrapper-message');
    expect(errorMessageBlock.exists()).toBe(true)
  });
}); 