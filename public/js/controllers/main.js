/*global angular, console*/
'use strict';

angular.module('agendaController', [])

    // inject the Agenda service factory
    .controller('mainController', ['$scope', '$http', 'Agenda', function ($scope, $http, Agenda) {
        angular.noop($http);

        $scope.formData = {};
        $scope.loading = true;

        // GET
        // use the service to get all the todos
        Agenda.get()
            .success(function (data) {
                $scope.todos = data;
                $scope.loading = false;
            });

        // CREATE
        $scope.createTodo = function () {
            // Its to make sure that something is there
            // if form is empty, nothing will happen
            if ($scope.formData.text !== undefined) {
                $scope.loading = true;

                // call service
                Agenda.create($scope.formData)

                    // if successful creation
                    .success(function (data) {
                        $scope.loading = false;
                        $scope.formData = {}; // clear the form
                        $scope.todos = data; // new list
                    });
            }
        };

        // UPATE
        $scope.updateAgenda = function (id, txt) {
            $scope.loading = true;
            var payload = {
                text: txt
            };

            // call service
            Agenda.update(id, payload)
                .success(function (data) {
                    $scope.loading = false;
                    $scope.todos = data; // new list
                });
        };
        $scope.edit = true;

        // DELETE
        // delete a todo
        $scope.deleteTodo = function (id) {
            $scope.loading = true;

            Agenda.delete(id)
                .success(function (data) {
                    $scope.loading = false;
                    $scope.todos = data; // new list
                });
        };
    }]);
