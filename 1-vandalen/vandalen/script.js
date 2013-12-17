"use strict";

var makePerson = function(persArr){
    // Din kod här...
    
    var names = [];
    var ages = [];
    var agesSum = 0;
    for (var i=0; i<persArr.length; i+=1){
        names.push(persArr[i].name);
        ages.push(persArr[i].age);
        agesSum+=ages[i];
    }
    
    names.sort(function(a,b){
        return a.localeCompare(b);
    });
    ages.sort();
    
    var averageAgeUnfinished = agesSum/ages.length;
    var averageAge = Math.round(averageAgeUnfinished);
    
    var result = {
        names:       names.join(", "),
        minAge:      ages[0],
        maxAge:      Math.max.apply(Math, ages),
        averageAge:  averageAge
    };
    

    // Lös uppgiften

    return result;
};
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);