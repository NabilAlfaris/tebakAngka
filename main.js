const p = document.getElementById("p")
const kesempatan = document.getElementById("kesempatan")
const definition = document.getElementById("definition")
const message = document.getElementById("message")
const popUp = document.getElementById("popUp")
const skorKamu = document.getElementById("skorKamu")
const skorCom = document.getElementById("skorCom")
const popOke = document.getElementById("popOke")
const popLanjut = document.getElementById("popLanjut")
const poppUpBackground = document.getElementById("poppUpBackground")
const com = Math.floor(Math.random()*10)+1
console.log(com)

let a = 0
let angkaSkorKamu = parseInt(localStorage.getItem("kamu")) || 0
let angkaSkorCom = parseInt(localStorage.getItem("com")) || 0
p.innerText = a
let sisaKesempatan = 3
kesempatan.innerText = `Kesempatan : ${sisaKesempatan}`


tambah = () => {
    if (a >= 10){
        return p.innerText = 10
    }
    p.innerText = a += 1
    
} 

kurang = () => {
    if (a <= 0){
        return p.innerText = 0
    }
    p.innerText = a -= 1
}

popUp.style.display = "none"

if (angkaSkorKamu == ""){
    skorKamu.innerText = 0
}else {
    skorKamu.innerText = localStorage.getItem("kamu")
}
if (angkaSkorCom == ""){
    skorCom.innerText = 0
}else {
    skorCom.innerText = localStorage.getItem("com")
}
tebak = () => {
    popUp.style.display = "block"
    let definitions = ""
    let messages = ""
    kesempatan.innerText = `Kesempatan : ${sisaKesempatan -= 1}`
    if ( a == com ){
        poppUpBackground.style.backgroundColor = "#00ff00"
        popLanjut.style.display = "none"
        popOke.style.display = "block"
        definitions = "Kamu MENANG"
        messages = `angka yang dipilih : ${com}`
        angkaSkorKamu += 1
        localStorage.setItem("kamu", angkaSkorKamu)
        skorKamu.innerText = localStorage.getItem("kamu")
    } else if (sisaKesempatan <= 0){
        poppUpBackground.style.backgroundColor = "#ff0000"
        popLanjut.style.display = "none"
        popOke.style.display = "block"
        definitions = "Kamu KALAH"
        messages = `angka yang dipilih : ${com}`
        angkaSkorCom += 1
        localStorage.setItem("com", angkaSkorCom)
        skorCom.innerText = localStorage.getItem("com")
    }else if ( a < com ) {
        poppUpBackground.style.backgroundColor = "#00ffff"
        popOke.style.display = "none"
        popLanjut.style.display = "block"
        definitions = "Jawaban<br>SALAH"
        messages = "angka terlalu RENDAH"
    } else if ( a > com ){
            poppUpBackground.style.backgroundColor = "#00ffff"
            popOke.style.display = "none"
            popLanjut.style.display = "block"
            definitions = "Jawaban<br>SALAH"
            messages = "angka terlalu TINGGI"
        }
    message.innerText = messages
    definition.innerHTML = definitions
}
repeat = () => {
    localStorage.clear()
    location.reload()
}
popUpButtonUlang = () => {
    popUp.style.display = "none"
}
popUpButtonOke = () => {
    location.reload()
}