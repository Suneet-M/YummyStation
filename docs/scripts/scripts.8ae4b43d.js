"use strict";angular.module("yummyStationApp",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("menu",{url:"/Menu",templateUrl:"views/menu.html",controller:"MenuCtrl as menu",resolve:{menu:["menuFetcher",function(a){return a.getMenu()}]}}).state("item",{url:"/Menu/Items/:type/:id",templateUrl:"views/item.html",controller:"ItemCtrl as item",resolve:{item:["itemFetcher","$stateParams",function(a,b){return a.getItem(b.id)}]}}).state("cart",{url:"/cart",templateUrl:"views/cart.html",controller:"CartCtrl as cart"})}]),angular.module("yummyStationApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yummyStationApp").controller("MenuCtrl",["menu","cartManager",function(a,b){console.log("Menu received"),this.data=a,this.selectItem=function(a,c){b.addToCart(a,c)}}]),angular.module("yummyStationApp").service("menuFetcher",function(){this.getMenu=function(){return console.log("Getting menu data"),$.get("/data/menu.json")}}),angular.module("yummyStationApp").controller("ItemCtrl",["item","$stateParams","cartManager",function(a,b,c){console.log("Dish received"),this.data=a,this.foodType=b.type,this.selectItem=function(a){c.addToCart(this.foodType,a)}}]),angular.module("yummyStationApp").service("itemFetcher",function(){this.getItem=function(a){return console.log("Getting dish"),$.get("/data/"+a+".json")}}),angular.module("yummyStationApp").controller("CartCtrl",["cartManager",function(a){this.orders=a.getCart(),this.listLength=Object.keys(this.orders).length,this.removeItem=function(b,c,d){d>1?a.reduceInCart(b,c):a.removeFromCart(b,c)}}]),angular.module("yummyStationApp").service("cartManager",function(){this.orderList={},this.addToCart=function(a,b){var c,d=this.orderList[a];d||(d={}),d[b]?(c=d[b],c++):c=1,d[b]=c,this.orderList[a]=d,console.log("New order added")},this.reduceInCart=function(a,b){this.orderList[a][b]-=1},this.removeFromCart=function(a,b){delete this.orderList[a][b],$.isEmptyObject(this.orderList[a])&&delete this.orderList[a]},this.getCart=function(){return console.log("Getting orders"),this.orderList}}),angular.module("yummyStationApp").run(["$templateCache",function(a){a.put("views/cart.html",'<h2 ng-if="cart.listLength > 0">Your Orders:</h2><br> <div ng-repeat="(foodType, itemList) in cart.orders"> <h3>{{foodType}}</h3> <ul> <li ng-repeat="(item, count) in itemList"> {{item}} x {{count}} <span class="remove-item" ng-click="cart.removeItem(foodType, item, count)"></span> </li> </ul> </div> <h5 ng-if="cart.listLength == 0">You must be starving...<br><br>Hurry, grab something delicious from the Menu!!!</h5>'),a.put("views/item.html",'<h2 class="item-name">{{item.data.name}}</h2> <img class="item-image" ng-src="images/{{item.data.img}}"> <h4 class="item-des"><em>{{item.data.description}}</em></h4> <p class="item-rating"><strong>Rating: </strong>{{item.data.rating}}</p> <p class="item-calories"><strong>Calories: </strong>{{item.data.calories}}</p> <p class="item-reviews"><strong>Reviews:</strong></p> <ul> <li id="review" ng-repeat="review in item.data.reviews">{{review}}<br></li> </ul><br> <button class="select-item" ng-click="item.selectItem(item.data.name)">Select item</button>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> Are you hungryyyy?? </p> <p><a class="btn btn-lg btn-success" ui-sref="menu">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div>'),a.put("views/menu.html",'<ul class="row" ng-repeat="(food, itemList) in menu.data"> <h3>{{food}}</h3> <li ng-repeat="item in itemList" class="col-sm-4 well"> <h4>{{item.name}}</h4> <img ng-src="/images/{{item.img}}"> <p><a ui-sref="item({type: food, id: item.id})">Details</a></p> <button class="select-item" ng-click="menu.selectItem(food, item.name)">Select item</button> </li> </ul>')}]);