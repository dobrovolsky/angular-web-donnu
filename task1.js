var moneyApp = angular.module('moneyApp', []);


moneyApp.controller('MoneyListController', function MoneyListController($scope) {
  $scope.money = [
    {
      name: 'bitcoin',
      code: 'BTC',
      value: 9538.48
    }, 
    {
      name: 'Bitcoin Cash',
      code: 'BCH',
      value: 1605.92
    }, 
    {
      name: 'Ethereum',
      code: 'ETH',
      value: 469.45
    }, 
    {
      name: 'Litecoin',
      code: 'LTC',
      value: 88.61
    }, 
    {
      name: 'Bitcoin Gold',
      code: 'BTG',
      value: 362.12
    }, 
    {
      name: 'Dash',
      code: 'DASH',
      value: 622.75
    }, 
  ];
});