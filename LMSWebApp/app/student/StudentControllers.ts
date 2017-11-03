module App {
    export class Student {
        id:string;
        name: string;
        phone: string;
    }

    class StudentController {
        student: Student;
        value: string;
        studentService: StudentService;
        static $inject = ["StudentService"];

        constructor(studentService: StudentService) {
            this.student = new Student();
            this.studentService = studentService;
            console.log("I am in Student Controller");
        }

        add(): void {
            let self = this;
            let success = function(response) {
                console.log(response);
                self.student = new Student();
                self.reset();
            };
            let error = function (errorReason) { console.log(errorReason); };

            this.studentService.save(self.student).then(success, error);
        }
        reset(): void {
            this.student = new Student();
        }
    }
    angular.module('app').controller("StudentController", StudentController as any);

    class StudentsController {
        keyword:string;
        students: Student[];
        studentService: StudentService;
        static $inject = ["StudentService"];

        constructor(studentService: StudentService) {
            this.studentService = studentService;
            let self = this;
            let success = function (response) {
                self.students = response.data;
                console.log(self.students);
            };
            let error = function (errorReason) { alert(errorReason); };
            console.log("I am in Students Constructor Controller");
            this.studentService.search("").then(success, error);
        }

        search() {
            var self = this;
            let success = function (response) {
                console.log(response);
                self.students = response.data;
            };
            let error = function (errorReason) { console.log(errorReason); };

            this.studentService.search(self.keyword).then(success, error);
        }
    }
    angular.module('app').controller("StudentsController", StudentsController as any);
}