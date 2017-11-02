module App
{
    class HomeController {
        static $inject=["StudentService"];
        constructor(studentService:StudentService) {
            console.log("I am in Home Controller");
            this.now = new Date().toString();
            studentService.get()
                .then(function(success) {
                        console.log(success);
                    },
                    function(error) {
                        console.log(error);
                        alert(error);
                    }
                );
        }
        now: string;
    }
    angular.module('app').controller("HomeController", HomeController as any);
}