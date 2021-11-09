const outer_fun =  (value) =>{
    let a = 5;
    const inner_fun = ()=>{
        let multi = value*a
        console.log(multi)
    }
    return inner_fun()

}
const fun = outer_fun(6);
fun()