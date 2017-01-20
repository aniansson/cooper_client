angular.module('starter.services', [])

.factory('perfomanceData', function ($resource, API_URL) {
  return $resource(API_URL + '/data', {});
});
