var App;
(function (App) {
    var Student = /** @class */ (function () {
        function Student() {
        }
        return Student;
    }());
    App.Student = Student;
    var StudentController = /** @class */ (function () {
        function StudentController(studentService) {
            this.student = new Student();
            this.studentService = studentService;
            console.log("I am in Student Controller");
        }
        StudentController.prototype.add = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.student = new Student();
                self.reset();
            };
            var error = function (errorReason) { console.log(errorReason); };
            this.studentService.save(self.student).then(success, error);
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
            var self = this;
            var success = function (response) {
                self.students = response.data;
                console.log(self.students);
            };
            var error = function (errorReason) { alert(errorReason); };
            console.log("I am in Students Constructor Controller");
            this.studentService.search("").then(success, error);
        }
        StudentsController.prototype.search = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.students = response.data;
            };
            var error = function (errorReason) { console.log(errorReason); };
            this.studentService.search(self.keyword).then(success, error);
        };
        StudentsController.$inject = ["StudentService"];
        return StudentsController;
    }());
    angular.module('app').controller("StudentsController", StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map