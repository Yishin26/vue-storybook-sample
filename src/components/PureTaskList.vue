
<template>
  <div>
    <div v-if="loading">
      <div class="loading-item" v-for="(n, index) in 5" :key="index">
        <span class="glow-checkbox" />
        <span class="glow-text">
          <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
      </div>
    </div>
    <div class="list-items" v-if="noTasks && !this.loading">
      <div class="wrapper-message">
        <span class="icon-check" />
        <div class="title-message">You have no tasks</div>
        <div class="subtitle-message">Sit back and relax</div>
      </div>
    </div>
    <div class="list-items" v-if="showTasks">
      <task
        v-for="(task, index) in tasksInOrder"
        :key="index"
        :task="task"
        @archive-task="$emit('archive-task', $event)"
        @pin-task="$emit('pin-task', $event)"
      />
    </div>
  </div>
</template>
<script>
//原來的TaskList.vue 修改成為 PureTaskList.vue (表現型)，裡面的程式碼結構只專注於呈現，使用 props 接收資料

import Task from "./Task";
export default {
  name: "pure-task-list",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    tasks: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Task
  },
  computed: {
    noTasks() {
      return this.tasks.length === 0;
    },
    showTasks() {
      return !this.loading && !this.noTasks;
    },
    tasksInOrder() {
      return [
        ...this.tasks.filter(t => t.state === "TASK_PINNED"),
        ...this.tasks.filter(t => t.state !== "TASK_PINNED")
      ];
    }
  }
};
</script>