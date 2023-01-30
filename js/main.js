"use strict";

const questions = document.querySelectorAll(".faq .question");

document.querySelectorAll(".faq .open_sign").forEach((open_sign) => {
  open_sign.addEventListener("click", () => {
    const currentQuestion = open_sign.closest(".faq .question");

    questions.forEach((question) => {
      if (currentQuestion !== question) {
        question.classList.remove("open_answer");
      }
    });
    currentQuestion.classList.toggle("open_answer");
  });
});
