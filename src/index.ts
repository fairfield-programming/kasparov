import Question from "./classes/question.js";
import Team from "./classes/team.js";
import Submission from "./classes/submission.js";

var question = new Question("FizzBuzz", 45)

question.code = "process.stdin.pipe(process.stdout);";
question.language = "js";

question.createTestCases([
    "45",
    "40",
    "10"
])

export default {
    Question,
    Team,
    Submission
};