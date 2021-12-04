const nomVoiture = "Peugeot";
let x = 50;
let z = 5;
let w = 10;
let d = z + w;

maFonction();

document.getElementById("demo").innerHTML = `z vaux ${z}
 et w vaux ${w} le résultat est: ${z + w}`;

alert("d");

let {prenom = "john", nom = "doe", age = 35} = "";

alert(10 * 5);
alert(10 / 2);
alert(15 % 9);

let {k = 5, i = 10 + k} = "";

function maFonction() {
    alert("Salut tout le monde !");
}

document.getElementById("monBoutton").addEventListener("click", function () {
    alert("Mon addEventListener");
})

let changeSurOver = document.getElementById("changeSurOver")
    changeSurOver.addEventListener("mouseover", function () {
    changeSurOver.style.background = "red";
})

let txt = "une longue phrase";
let longueur = txt.length;
alert(longueur);

let str1 = "Bonjour";
let str2 = "le monde !";
alert(str1 + str2);

let listeVoitures = ["Ford", "Volvo", "Citroen"];
let maVoiture = listeVoitures[1];
alert(maVoiture);
alert(listeVoitures.length);
listeVoitures.pop();
listeVoitures.push("Ferrari");
alert(listeVoitures);

let rNumber = Math.floor(Math.random()* 100);
let fNumber = Math.ceil(15.7);
alert(fNumber);

let nombreUn = 10;
let nombreDeux = 5;

if (nombreUn > nombreDeux) {
    alert("Nombre un est plus grand que nombre deux");
}

let nombreTrois = 10;
let nombreQuatre = 10;

if (nombreTrois === nombreQuatre) {
    alert("NombreTrois est égal à nombreQuatre");
}

if (nombreUn !== nombreDeux) {
    alert("Nombre un n'est pas égal à nombre deux");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let fruits = ["pomme", "banane", "poire"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i);
}

i = 0;

while (i < 10) {
    console.log("Trop ez le méga pack")
    i++
}
i = 0;
while (i < 10) {
    console.log("Vraiment trop ez le méga pack");
    i+=2;
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        alert("Mega pack done.");
    }
}

