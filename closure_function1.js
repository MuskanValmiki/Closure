function OuterFunction() {
    var outerVariable = 1;
    function InnerFunction() {
        console.log(outerVariable);
    }
    InnerFunction();
}
OuterFunction()

function fun1() {
    var outerVariable = 100;

    function fun2() {
        console.log(outerVariable);
    }
    return fun2;
}
var innerFunc = fun1();
innerFunc(); 

function Counter() {
    var counter = 0;
    function IncreaseCounter() {
        return counter += 1;
    };
    return IncreaseCounter;
}
var counter = Counter();
console.log(counter());
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
//closue function