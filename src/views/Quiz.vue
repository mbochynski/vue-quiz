<template>
  <div class="quiz">
    <h1>This is a quiz page</h1>
    <h2 v-if="isQuizLoading">Loading quiz for you...</h2>
    <div v-if="isQuizReady">
      <h2>Your quiz is ready. Click play to start</h2>
      <button type="button" v-on:click="start">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  async created() {
    await this.$store.dispatch("fetchNewQuiz");
  },
  computed: {
    isQuizLoading() {
      return this.$store.state.loading;
    },
    isQuizReady() {
      return !this.$store.state.loading;
    }
  },
  methods: {
    async start() {
      this.$router.push("/questions");
    }
  }
};
</script>
