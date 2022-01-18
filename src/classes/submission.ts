export default class Submission {

    question:number;
    text:string;
    language:string;

    constructor(_question:number, _text:string) {
        
        this.question = _question;
        this.text = _text;

    }

}