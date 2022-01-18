export default class Test {

    name:string;
    points:number;

    constructor(_name, _points) {

        if (_name != undefined) this.name = _name;
        if (_points != undefined) this.points = _points;

    }

}