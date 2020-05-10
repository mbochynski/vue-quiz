<template>
  <div class="quiz">
    <h1>This is an quiz page</h1>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  async created() {
    await this.$store.dispatch("fetchNewQuiz");
  }
};
</script>