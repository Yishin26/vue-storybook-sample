//tests/unit/TaskList.spec.js
import Vue from 'vue';
import TaskList from '@/components/TaskList.vue';
import { withPinnedTasksData } from '@/components/TaskList.stories';
import { mount } from "@vue/test-utils";

describe("TaskList.vue", () => {

  it('Renders pinned tasks at the start of the list', () => {
    const wrapper = mount(TaskList, {
      propsData: { tasks: withPinnedTasksData }
    });
    const firstTaskPinned = wrapper.find('.list-item:nth-child(1).TASK_PINNED');
    expect(firstTaskPinned.exists()).toBe(true)
  });

});