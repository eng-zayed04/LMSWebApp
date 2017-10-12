module App
{
    class Student
    {
        name: string;
        phone: string;

        getInfo(): string {
            return this.name + this.phone;
        }
    }

    class StudentController {
        getStudentInfo(): void {
            var s = new Student();
            s.name = "Ahmed";
            s.phone = "123";
            var info = s.getInfo;
            console.log(info);

        }
    }

    let app = angular.module('app', []);
    angular.module('app').controller("StudentController", StudentController as any);
}