import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentQuestionNumber: 0,
    questions: [],
    answers: [],
    loading: false
  },
  mutations: {
    prepareQuiz(state, questions) {
      state.questions = questions;
      state.currentQuestionNumber = 0;
      state.answers = [];
    },
    submitAnswer(state, currentQuestionNumber, currentAnswer) {
      state.currentQuestionNumber = currentQuestionNumber + 1;
      state.answers.push(currentAnswer);
    },
    startQuizLoader(state) {
      state.loading = true;
    },
    stopQuizLoader(state) {
      state.loading = false;
    }
  },
  actions: {
    submitAnswer({ commit, getters }) {
      commit(
        "submitAnswer",
        getters.getCurrentQuestionNumber(),
        getters.getCurrentAnswer()
      );
    },
    fetchNewQuiz({ commit }) {
      commit("startQuizLoader");
      return fetch(
        "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
      )
        .then(response => response.json())
        .then(data => {
          commit("prepareQuiz", data.results);
          commit("stopQuizLoader");
        });
    }
  },
  getters: {
    getCurrentQuestionNumber: state => state.currentQuestionNumber,
    getTotalQuestionsNumber: state => state.questions.length,
    getCurrentQuestion: state => {
      return state.questions[state.currentQuestionNumber];
    },
    isQuizLoaded: state => state.questions.length > 0
  },
  modules: {}
});
