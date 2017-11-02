module App {
    export class StudentService {
        students: Student[];
        http: angular.IHttpService;
        q: angular.IQService;
        static $inject = ["$http", "$q"];

        constructor(http: angular.IHttpService, q: angular.IQService) {
            this.students = [];
            this.http = http;
            this.q = q;
        }

        get(): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function(successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function(errorresponse) {
                console.log(errorresponse);
                deffered.reject(errorresponse);
            };

            self.http.get("https://www.google.com").then(f1,f2);

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
        }

    }

    angular.module('app').service("StudentService", StudentService as any);
}