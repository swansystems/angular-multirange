'use strict';

angular.module('multirangeDemo')
  .controller('DemoCtrl', function ($scope, vdsMultirangeViews) {

    // populate some data
    $scope.rangeArray = [
      { value: 0.20, name: 'Clock In', color: 'red' },
      { value: 0.40, name: 'Start Break', color: 'green' },
      { value: 0.50, name: 'Clock Out', color: 'brown' }
    ];

    $scope.views = vdsMultirangeViews.TIME;

    $scope.add = function () {
      $scope.rangeArray.push({ value: parseFloat($scope.entry), name: 'Test entry', color: $scope.entryColor });
    };

  });
