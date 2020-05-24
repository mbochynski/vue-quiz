<template>
  <div>
    <label v-for="option in options" v-bind:key="option">
      <input
        type="radio"
        name="answers"
        v-bind:value="option"
        v-model="selectedAnswer"
      />
      {{ option }}
    </label>
  </div>
</template>

<script>
export default {
  name: "Options",
  props: ["options", "value"],
  data: function() {
    return {
      selectedAnswer: this.value
    };
  },
  watch: {
    selectedAnswer() {
      this.$emit("input", this.selectedAnswer);
    }
  }
};
</script>
