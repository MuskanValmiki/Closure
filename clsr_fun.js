const outer_fun =  (value) =>{
    let x = 5;
    const inner_fun = ()=>{
        let sum = value+x
        console.log(sum)
    }
    inner_fun()

}
outer_fun(4);