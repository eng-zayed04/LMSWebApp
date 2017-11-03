var App;
(function (App) {
    var StudentService = /** @class */ (function () {
        function StudentService(http, q) {
            this.students = [];
            this.http = http;
            this.q = q;
        }
        StudentService.prototype.get = function () {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorresponse) {
                console.log(errorresponse);
                deffered.reject(errorresponse);
            };
            //self.http.get("http://localhost:49805/api/StudentQuery").then(f1,f2);
            return deffered.promise;
        };
        StudentService.prototype.save = function (student) {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorresponse) {
                console.log(errorresponse);
                deffered.reject(errorresponse);
            };
            self.http.post("http://localhost:49805/api/student", student).then(f1, f2);
            return deffered.promise;
        };
        StudentService.prototype.search = function (keyword) {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorresponse) {
                console.log(errorresponse);
                deffered.reject(errorresponse);
            };
            var requestModel = { Name: keyword, Phone: keyword };
            self.http.post("http://localhost:49805/api/StudentQuery", requestModel).then(f1, f2);
            return deffered.promise;
        };
        StudentService.$inject = ["$http", "$q"];
        return StudentService;
    }());
    App.StudentService = StudentService;
    angular.module('app').service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map