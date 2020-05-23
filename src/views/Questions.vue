<template>
  <div class="questions">
    <h1>This is a question page</h1>
    <h2>
      Question {{ currentQuestionNumber }} out of {{ totalQuestionNumber }}
    </h2>
    <pre>{{ currentQuestion }}</pre>
    <pre>{{ currentQuestionAnswers }}</pre>
  </div>
</template>

<script>
import { shuffleArray } from "../utils";
export default {
  name: "Questions",
  computed: {
    currentQuestion() {
      return this.$store.getters.getCurrentQuestion;
    },
    correctAnswer() {
      return this.currentQuestion.correct_answer;
    },
    currentQuestionAnswers() {
      const { correct_answer, incorrect_answers } = this.currentQuestion;

      const answers = [correct_answer, ...incorrect_answers];
      shuffleArray(answers);
      return answers;
    },
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
