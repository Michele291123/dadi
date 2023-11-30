let dadi = document.getElementById("dadi")

function lancia() {
    let random1 = dadocasuale()
    let random2 = dadocasuale()
    dadi.textContent =  random1 + " e " + random2
}

function dadocasuale() {
    let x = Math.floor(Math.random() * 6 + 1) 
    return x
}
