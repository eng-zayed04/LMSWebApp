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
        }
        StudentController.prototype.display = function () {
            this.value = this.student.getInfo();
        };
        return StudentController;
    }());
    var app = angular.module('app', []);
    angular.module('app').controller("StudentController", StudentController);
})(App || (App = {}));
//# sourceMappingURL=app.js.map