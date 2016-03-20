var helo = function(){console.log("hello, Who are u?")}


function myfun(fn){
    fn();
    
}

myfun(helo);

 var i =function(){console.log("Hi, I am Eanna")};
myfun(i);

myfun(function(){console.log("Hello Eanna, I am Caroline")
;})



var obj = {
    greet:'hello'
    
}

console.log(obj.greet);


var prop = "greet";

console.log(obj[prop]);
// for git
///This is me making change