var App;
(function (App) {
    var HomeController = /** @class */ (function () {
        function HomeController(studentService) {
            console.log("I am in Home Controller");
            this.now = new Date().toString();
            studentService.get()
                .then(function (success) {
                console.log(success);
            }, function (error) {
                console.log(error);
                alert(error);
            });
        }
        HomeController.$inject = ["StudentService"];
        return HomeController;
    }());
    angular.module('app').controller("HomeController", HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeControllers.js.map