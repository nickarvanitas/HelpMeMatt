// JavaScript Document
"use strict";


var treeArray = ["Apple", "Pear", "Rubber"];



var displayTreeArray = function()  {
    var myString = "";
    var i;
    for (i = 0; i < treeArray.length; i++) {
        myString += treeArray[i] + "<br>";
    }
    document.getElementById("theList").innerHTML = myString
};

//banana
var displayBanana = function() {
    if (treeArray.length<2) {

      document.getElementById("error").innerHTML= "No second item in Tree List";

    } else {

      document.getElementById("error").innerHTML= treeArray[0];
      treeArray.push("Banana");
      document.getElementById("count").innerHTML = treeArray.length;
      displayTreeArray();
    
    }
};

var add1 = document.getElementById("add_banana");
add1.onclick = displayBanana;

//papaya 
var displayPapaya = function() {
  if (treeArray.length<2) {

    document.getElementById("error").innerHTML= "No second item in Tree List";

  } else {

    document.getElementById("error").innerHTML= treeArray[1];
    treeArray.unshift("Papaya");
    document.getElementById("count").innerHTML = treeArray.length;
    displayTreeArray();
  
  }
};

var add2 = document.getElementById("add_papaya");
add2.onclick = displayPapaya;

//remove 1st
var removeTree1 = function() {
  if (treeArray.length<2) {

    document.getElementById("error").innerHTML= "No second item in Tree List";

  } else {

    document.getElementById("error").innerHTML= "removed first tree";
    treeArray.shift(1);
    document.getElementById("count").innerHTML = treeArray.length;
    displayTreeArray();
  
  }
};

var remove1 = document.getElementById("remove_tree1");
remove1.onclick = removeTree1;

//remove 2nd
var removeTree2 = function() {
  if (treeArray.length<2) {

    document.getElementById("error").innerHTML= "No second item in Tree List";

  } else {

    document.getElementById("error").innerHTML= "removed second tree";
    treeArray.splice(1, 1);
    document.getElementById("count").innerHTML = treeArray.length;
    displayTreeArray();
  
  }
};

var remove2 = document.getElementById("remove_tree2");
remove2.onclick = removeTree2;

//remove last
var removeTreeLast = function() {
  if (treeArray.length<2) {

    document.getElementById("error").innerHTML= "No second item in Tree List";

  } else {

    document.getElementById("error").innerHTML= "removed last tree";
    treeArray.pop();
    document.getElementById("count").innerHTML = treeArray.length;
    displayTreeArray();
  
  }
};

var removeLast = document.getElementById("remove_tree_last");
removeLast.onclick = removeTreeLast;

//sort
var sortArray = function() {
  if (treeArray.length<2) {

    document.getElementById("error").innerHTML= "No second item in Tree List";

  } else {

    document.getElementById("error").innerHTML= "sort trees alphabetically";
    treeArray.sort();
    document.getElementById("count").innerHTML = treeArray.length;
    displayTreeArray();
  
  }
};

var sortTree = document.getElementById("sort_trees");
sortTree.onclick = sortArray;

//lower


var lowerCase = function() {
  if (treeArray.length<2) {

    document.getElementById("error").innerHTML= "No second item in Tree List";

  } else {

    document.getElementById("error").innerHTML= "Lower Case";
    document.getElementById("count").innerHTML = treeArray.length;
    var lowercaseTree = treeArray.map(function(x){ return x.toLowerCase() });
    var myString = "";
    var i;
    for (i = 0; i < lowercaseTree.length; i++) {
        myString += lowercaseTree[i] + "<br>";
    }
    document.getElementById("theList").innerHTML = myString
  
  }
};

var lowerTree = document.getElementById("lowercase_trees");
lowerTree.onclick = lowerCase;



//pickTree3

//pickTree4



















var companySlogan = "Refresh for a new fortune";
    document.getElementById("slogan").innerHTML = companySlogan;

var companyName = "Fortune";
    document.getElementById("company").innerHTML = companyName;

var pageTitle = "Fortune";
    document.getElementById("title").innerHTML = pageTitle;






var secretMonth = Math.floor(Math.random() * 12) + 1;
       

var secretDate = Math.floor(Math.random() * 30) + 1;
   

var secretString = Math.floor(Math.random() * 5)+ 1;
  


var day;
var message;




switch (secretMonth) {
        case 1:
          day = "January";
          break;
        case 2:
          day = "February";
          break;
        case 3:
          day = "March";
          break;
        case 4:
          day = "April";
          break;
        case 5:
          day = "May";
          break;
        case 6:
          day = "June";
          break;
        case 7:
          day = "July";
          break;
        case 8:
           day = "August";
          break;
        case 9:
          day = "September";
          break;
        case 10:
          day = "October";
          break;
        case 11:
          day = "November";
          break;
        case 12:
          day = "December";
          break;

}

switch (secretString) {
        case 1:
          message = "you will win 5 dollars";
          break;
        case 2:
           message = "you will lose money";
          break;
        case 3:
          message = "you will gain a friend";
          break;
        case 4:
          message = "you will lose a friend";
          break;
        case 5:
          message = "you will eat icecream";
          break;

}

console.log(day);
console.log(message);

var finalMessage = "On " + day + " " + secretDate + ", " + message + ".";
        document.getElementById("finalMessage").innerHTML = finalMessage;