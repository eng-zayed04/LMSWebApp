module App {
    export class StudentService {
        students: Student[];

        constructor() {
            this.students = [];
            console.log("Initiate student service.", this.students);
        }
    }
    angular.module('app').service("StudentService", StudentService as any);
}