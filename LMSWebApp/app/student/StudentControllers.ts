module App {
    class Student {
        name: string;
        phone: string;

        getInfo(): string {
            return this.name + " " + this.phone;
        }
    }

    class StudentController {
        student: Student;
        value: string;

        constructor() {
            this.student = new Student();
            console.log("I am in Student Controller");
        }

        display(): void {
            this.value = this.student.getInfo();
        }
    }
    angular.module('app').controller("StudentController", StudentController as any);

    class StudentsController {
        students: Student[];

        constructor() {
            this.students = [];
            console.log("I am in Students Controller");
        }
    }
    angular.module('app').controller("StudentsController", StudentsController as any);
}