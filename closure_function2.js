const outerFun=(a)=>{
    let b=15;
    const innerFun=()=>{
        let sum=a+b;
        console.log(sum)
    }
    innerFun();
}
outerFun(5)
//closure function -a closure is a features in javascript where an inner function has access to the outer functions variables.