let Personnage = function (nom, age, classe, lvl, race) {
    this.nom = nom;
    this.age = age;
    this.classe = classe;
    this.lvl = lvl;
    this.race = race;

    this.getResume = () => nom + lvl + classe;
}

let container = document.getElementById("container");
let listePerso = []

let Modale = {
    getOpen: function () {
        container.style.display = "none";
        let divCont = document.createElement("div");
        document.body.append(divCont);
        divCont.id = "modale";
        creation(divCont);
    },
    getClose: function () {
        document.body.removeChild(document.body.lastElementChild);
        container.style.display = "flex";
    }
}


let open = document.getElementById("open");

function creation(divAll) {
    let divNom = document.createElement("div");
    let divAge = document.createElement("div");
    let divClasse = document.createElement("div");
    let divLvl = document.createElement("div");
    let divRace = document.createElement("div");
    let close = document.createElement("button");
    divAll.append(divNom, divAge, divClasse, divLvl, divRace, close);
    divNom.className = "divcarac";
    divAge.className = "divcarac";
    divClasse.className = "divcarac";
    divLvl.className = "divcarac";
    divRace.className = "divcarac";
    close.id = "close";
    close.innerHTML = "Envoyer";
    carac(divNom, "Nom: ");
    carac(divAge, "Age: ");
    carac(divClasse, "Classe: ");
    carac(divLvl, "Level: ");
    carac(divRace, "Race: ");
    close.addEventListener("click", function () {
        let perso = document.createElement("div");
        document.getElementById("personnages").append(perso);
        document.getElementById("personnages").style.display = "flex";
        perso.className = "divcaract";
        newPerso();
        perso.innerHTML = listePerso.reverse()[0].nom + " " + listePerso[0].lvl + " " + listePerso[0].classe;
        Modale.getClose();
    })
}

function newPerso() {
    let values = document.getElementsByTagName("input");
    let perso = new Personnage(values[0].value, values[1].value, values[2].value, values[3].value, values[4].value);
    listePerso.push(perso);
}

function carac(div, text) {
    let span = document.createElement("span");
    let input = document.createElement("input");
    div.append(span, input);
    span.innerHTML = text;
}

open.addEventListener("click", function () {
    Modale.getOpen()
})