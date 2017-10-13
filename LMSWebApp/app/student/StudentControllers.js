var App;
(function (App) {
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.getInfo = function () {
            return this.name + " " + this.phone;
        };
        return Student;
    }());
    App.Student = Student;
    var StudentController = /** @class */ (function () {
        function StudentController(studentService) {
            this.student = new Student();
            this.studentService = studentService;
            console.log("I am in Student Controller");
        }
        StudentController.prototype.display = function () {
            this.value = this.student.getInfo();
        };
        StudentController.prototype.add = function () {
            this.studentService.students.push(this.student);
            this.student = new Student();
        };
        StudentController.prototype.reset = function () {
            this.student = new Student();
        };
        StudentController.$inject = ["StudentService"];
        return StudentController;
    }());
    angular.module('app').controller("StudentController", StudentController);
    var StudentsController = /** @class */ (function () {
        function StudentsController(studentService) {
            this.studentService = studentService;
            this.students = this.studentService.students;
            console.log("I am in Students Controller", this.students);
        }
        return StudentsController;
    }());
    angular.module('app').controller("StudentsController", StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map