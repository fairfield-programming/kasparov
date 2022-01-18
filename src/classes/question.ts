export default class Question {

    name:string;
    points:number;

    constructor(_name:string, _points:number) {

        if (_name != undefined) this.name = _name;
        if (_points != undefined) this.points = _points;

    }

}