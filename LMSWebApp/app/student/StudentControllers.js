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
    var StudentController = /** @class */ (function () {
        function StudentController() {
            this.student = new Student();
            console.log("I am in Student Controller");
        }
        StudentController.prototype.display = function () {
            this.value = this.student.getInfo();
        };
        return StudentController;
    }());
    angular.module('app').controller("StudentController", StudentController);
    var StudentsController = /** @class */ (function () {
        function StudentsController() {
            this.students = [];
            console.log("I am in Students Controller");
        }
        return StudentsController;
    }());
    angular.module('app').controller("StudentsController", StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map