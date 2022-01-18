import Manager from "./classes/manager.js";
import Question from "./classes/question.js";
import Team from "./classes/team.js";
import Submission from "./classes/submission.js";

// const manager = new Manager([
//     new Question("HelloWorld", 25),
//     new Question("FizzBuzz", 45),
//     new Question("SquareRoot", 100)
// ]);

// console.log(manager.printQuestions("%NAME%: %POINTS%pts"));

export default {
    Manager,
    Question,
    Team,
    Submission
};