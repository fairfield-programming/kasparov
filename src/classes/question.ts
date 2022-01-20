import { runFile } from '../checker/index.js';

export default class Question {

    name:string;
    points:number;

    testCases:object;
    language:string;
    code:string;

    constructor(_name?:string, _points?:number) {

        if (_name != undefined) this.name = _name;
        if (_points != undefined) this.points = _points;

    }

    async createTestCases(testInputs:Array<string>) {

        var testOutputs = testInputs.map((element) => {

            return (runFile(this.code, this.language, element));

        });

        Promise.all(testOutputs).then((data) => {
        
            this.testCases = {};

            testInputs.forEach((element, i) => {

                this.testCases[element] = data[i];

            })

            console.log(this.testCases);
        
        });        

    }

}