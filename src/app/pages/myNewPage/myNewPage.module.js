(function () {
  'use strict';

  angular.module('BlurAdmin.pages.myNewPage', [])
      .config(routeConfig);
    
     angular.module('BlurAdmin.pages.myNewPage').controller('myCtrl', function($scope, $http) {
      $http.get("http://localhost:8080/RKVCargo/available-lorry")
      .then(function (response) {$scope.names = response.data.lorryDetail;});
  });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('myNewPage', {
          url: '/myNewPage',
          templateUrl: 'app/pages/myNewPage/my-new-page.html',
        controller: 'TablesPageCtrl',
          title: 'My New Page',
          sidebarMeta: {
            order: 800,
          },
        });
  }

})();