export default class Submission {

    question:number;
    team:number;
    text:string;
    language:string;
    correct:(-1|0|1);

    constructor(_question:number, _text:string) {
        
        this.question = _question;
        this.text = _text;

    }

}