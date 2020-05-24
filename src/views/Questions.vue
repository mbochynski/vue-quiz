<template>
  <div class="questions">
    <h1>This is a question page</h1>
    <h2>
      Questions {{ currentQuestionNumber }} out of {{ totalQuestionNumber }}
    </h2>
    <Options
      :options="currentQuestionAnswers"
      v-model="selectedAnswer"
    ></Options>
    <pre>{{ currentQuestion }}</pre>
    <pre>{{ currentQuestionAnswers }}</pre>
  </div>
</template>

<script>
import { shuffleArray } from "../utils";
import Options from "../components/Options.vue";

export default {
  name: "Questions",
  components: {
    Options
  },
  data: function() {
    return {
      selectedAnswer: null
    };
  },
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
      // TODO answers generation should be moved to store when quiz is initialized
      // TODO this component should not be aware of correct/incorrect answers - it should be handled internally by store
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
