import Submission from './submission';
import Team from './team';
import Test from './test';

export default class Manager {

    tests:Array<Test>;
    teams:Array<Team>;
    submissions:Array<Submission>;

    constructor(_tests:Array<Test>) {

        this.tests = _tests;

    }

}