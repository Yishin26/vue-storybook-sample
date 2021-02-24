//src/components/PureInboxScreen.stories.js
import Vue from 'vue';
import Vuex from 'vuex';
import PureInboxScreen from './PureInboxScreen.vue';
import { defaultTasksData } from './PureTaskList.stories';
import { action } from '@storybook/addon-actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: defaultTasksData,
  },
  actions: {
    pinTask(context, id) {
      action('pinTask')(id);
    },
    archiveTask(context, id) {
      action('archiveTask')(id);
    },
  },
});
export default {
  title: 'PureInboxScreen',
  excludeStories: /.*store$/,
  parameters: {
    jest: ['InboxScreen.spec.js'],
  },
};
export const Default = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen/>`,
  store,
});
// tasklist with pinned tasks
export const error = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen :error="true"/>`,
});
