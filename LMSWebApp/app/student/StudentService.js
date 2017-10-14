var App;
(function (App) {
    var StudentService = /** @class */ (function () {
        function StudentService() {
            this.students = [];
            console.log("Initiate student service.", this.students);
        }
        return StudentService;
    }());
    App.StudentService = StudentService;
    angular.module('app').service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map