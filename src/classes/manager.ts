import Submission from './submission';
import Team from './team';
import Question from './question';

export default class Manager {

    questions:Array<Question>;
    teams:Array<Team>;
    submissions:Array<Submission>;

    constructor(_questions:Array<Question>) {

        this.questions = _questions;

    }

    getQuestions() {

        return this.questions;

    }

    printQuestions(format?:string) {

        const formatting = format || "%NAME% - %POINTS%";
        let output = [];

        this.questions.forEach((element) => {

            let out = formatting;

            out = out.replace(/\%NAME\%/g, element.name);
            out = out.replace(/\%POINTS\%/g, element.points + "");

            output.push(out);

        });

        return output.join('\n');

    }

}