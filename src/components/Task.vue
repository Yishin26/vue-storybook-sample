<!--src/components/Task.vue-->
<template>
  <div :class="taskClass">
      
    <label class="checkbox">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="true"
        name="checked"
      />
      <span class="checkbox-custom" @click="$emit('archive-task', task.id)" />
    </label>
    <div class="title">
      <input
        type="text"
        :readonly="true"
        :value="this.task.title"
        placeholder="Input title"
        :style="{'background': 'white'}"
      />
     
    </div>
    <div class="actions">
      <a @click="$emit('pin-task', task.id)" v-if="!isChecked">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        state: "",
        title: ""
      })
    }
  },
  computed: {
    taskClass() {
      return `list-item ${this.task.state}`;
    },
    isChecked() {
      return this.task.state === "TASK_ARCHIVED";
    }
  }
};
</script>
