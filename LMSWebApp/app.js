var App;
(function (App) {
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.getInfo = function () {
            return this.name + this.phone;
        };
        return Student;
    }());
    var StudentController = /** @class */ (function () {
        function StudentController() {
        }
        StudentController.prototype.getStudentInfo = function () {
            var s = new Student();
            s.name = "Ahmed";
            s.phone = "123";
            var info = s.getInfo;
            console.log(info);
        };
        return StudentController;
    }());
    var app = angular.module('app', []);
    angular.module('app').controller("StudentController", StudentController);
})(App || (App = {}));
//# sourceMappingURL=app.js.map