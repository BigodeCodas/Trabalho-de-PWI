const select = document.querySelector("select")
const visor = document.querySelector("#visor")
const inputs = document.querySelectorAll("input")
const ps = []

console.log (inputs)

inputs.forEach ((inpuuut,index) => {
    inpuuut.addEventListener ("change" , function (cleide){
        
        cleide.preventDefault ();
        
        if (ps.includes(inpuuut.value)){  
            alert ("Bullshit")
        }else{
            ps[index] = inpuuut.value
            alert ("bullshit")
            console.log (ps)
        }
    })
})




console.log (typeof inputs)