"use strict";

var companySlogan = "Part 7";
    document.getElementById("slogan").innerHTML = companySlogan;

var companyName = "Pizza";
    document.getElementById("company").innerHTML = companyName;

var pageTitle = "Pizza";
    document.getElementById("title").innerHTML = pageTitle;


var pizza = {
    crust: "thin",
    meat: "pepperoni",
    size: "small",

build: function() {
    var builtPizza = "Your "+pizza.size+" "+pizza.crust+" crust "+pizza.meat+" pizza is being made right now.";
    document.getElementById('feedbackMessage').innerHTML = builtPizza;

}}; //end of object

var thinFlour = 1;
var stuffedFlour = 2;
var smallFlour = 1;
var largeFlour = 2;
var meatOne = "one pound of pepperoni";
var meatTwo = "one pound of sausage";

shopping(); {
    Math.add(thinFlour, stuffedFlour, smallFlour, largeFlour) = totalFlour;
    var shoppingList = "this pizza requires "+totalFlour+" cups of flour and one pound of "+pizza.meat;
    document.getElementById('feedbackShopping').innerHTML = shoppingList;
}


pizza.build();
pizza.shopping();


