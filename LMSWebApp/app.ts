module App
{
    class Student
    {
        name: string;
        phone: string;

        getInfo(): string {
            return this.name + " " + this.phone;
        }
    }

    class StudentController {
        student: Student;
        value: string;

        constructor()
        {
            this.student = new Student();
        }

        display(): void
        {
            this.value = this.student.getInfo();
        }
    }

    let app = angular.module('app', []);
    angular.module('app').controller("StudentController", StudentController as any);
}