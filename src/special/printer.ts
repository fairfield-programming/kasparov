import Question from "../classes/question";

export function printQuestions(questions:Array<Question>, format?:string) {

    const formatting = format || "%NAME% - %POINTS%";
    let output = [];

    questions.forEach((element) => {

        let out = formatting;

        out = out.replace(/\%NAME\%/g, element.name);
        out = out.replace(/\%POINTS\%/g, element.points + "");

        output.push(out);

    });

    return output.join('\n');

}