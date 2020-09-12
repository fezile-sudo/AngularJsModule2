(function() { 
    'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.buy = function (index) {
      ShoppingListCheckOffService.buy(index);
    }

    toBuyList.items = ShoppingListCheckOffService.get_toBuyItems();
    console.log('to buy items: ' + toBuyList.items);
    console.log(toBuyList.items[0]);
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.get_boughtItems();

    console.log('bought items: ' + this.items);
  }

  function ShoppingListCheckOffService () {
    var service = this;

    var toBuyList = [
      {name: "cookies", quantity: 10},
      {name: "bigger snaks", quantity: 10},
      {name: "Coca cola", quantity: 10},
      {name: "Loaf bread", quantity: 2},
      {name: "Lemon creams", quantity: 10},];

    var boughtList = [];

    service.buy = function (index) {
      boughtList.push(toBuyList[index]);
      toBuyList.splice(index, 1);
    }

    service.get_toBuyItems = function () {
      return toBuyList;
    }

    service.get_boughtItems = function () {
      return boughtList;
    }

  } 
})();