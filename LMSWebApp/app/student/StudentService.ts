﻿module App {
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

            self.http.get("http://localhost:52456/api/Students").then(f1,f2);
            return deffered.promise;
        }

        save(student:Student): angular.IPromise<any> {
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

            self.http.post("http://localhost:52456/api/Students",student).then(f1, f2);
            return deffered.promise;
        }
    }

    angular.module('app').service("StudentService", StudentService as any);
}