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
            self.http.get("https://www.google.com").then(f1, f2);
            //            self.http.get(url).then((result: any): any => {
            //                    if (result.status === 200) {
            //                        deffered.resolve(result);
            //                    } else {
            //                        deffered.reject(result);
            //                    }
            //                },
            //                error => {
            //                    deffered.reject(error);
            //                });
            return deffered.promise;
        };
        StudentService.$inject = ["$http", "$q"];
        return StudentService;
    }());
    App.StudentService = StudentService;
    angular.module('app').service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map