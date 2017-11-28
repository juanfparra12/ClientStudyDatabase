(function () {
  'use strict';

  angular
    .module('core')
    .controller('CreateNewRequirementController', CreateNewRequirementController);

  function CreateNewRequirementController($scope, $window, Requirements) {
    var vm = this;

    $scope.newRequirement = {
      name: "",
      type: "Boolean"
    };

    $scope.addRequirementToDatabase = function() {
      //removes all consecutive spaces
      var newDatabaseName = $scope.newRequirement.name.replace(/\s+/g, ' ');

      newDatabaseName = newDatabaseName.toLowerCase();

      //replaces all spaces with underscores
      newDatabaseName = newDatabaseName.replace(/ /g,"_");

      if (newDatabaseName != "")
      {
        var requirement = {
          requirementName: $scope.newRequirement.name,
          databaseName: newDatabaseName,
          typeOfRequirement: $scope.newRequirement.type,
          associatedQuestion: ""
        };

        Requirements.create(requirement);

        $window.location.href = '/addStudy';
      }


    }

  }


}());
