<template>
  <div class="quiz">
    <h1>This is a question page</h1>
    <h2>
      Question {{ currentQuestionNumber }} out of {{ totalQuestionNumber }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  computed: {
    currentQuestionNumber() {
      return this.$store.getters.getCurrentQuestionNumber;
    },
    totalQuestionNumber() {
      return this.$store.getters.getTotalQuestionsNumber;
    }
  },
  methods: {}
};
</script>
