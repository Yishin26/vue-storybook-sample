// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: '1', title: 'Something', state: 'TASK_INBOX' },
      { id: '2', title: 'Something more', state: 'TASK_INBOX' },
      { id: '3', title: 'Something else', state: 'TASK_INBOX' },
      { id: '4', title: 'Something again', state: 'TASK_INBOX' },
    ],
  },
  mutations: {
    ARCHIVE_TASK(state, id) {
      state.tasks.find(task => task.id === id).state = 'TASK_ARCHIVED';
      console.log('archeived')
    },
    PIN_TASK(state, id) {
      state.tasks.find(task => task.id === id).state = 'TASK_PINNED';
      console.log('Pined')
    },
  },
  actions: {
    archiveTask(context, id) {
      context.commit('ARCHIVE_TASK', id);
    },
    pinTask(context, id) {
      context.commit('PIN_TASK', id);
    },
  },
});