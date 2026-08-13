const select = document.querySelector("select")
const visor = document.querySelector("#visor")
const inputs = document.querySelectorAll("input")
const ps = []


for (index in inputs) {

    let inpuuut = inputs[index]

    inpuuut.addEventListener("change", function (cleide) {

        cleide.preventDefault
        console.log(inpuuut)

        if (ps.length >= inpuuut && ps[index] === inpuuut.value) {
            alert("Bullshit")
        }
    })
}