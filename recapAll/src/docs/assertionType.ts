//attention a l'assertion des type! vous ne laisser pas le system renvoyer un null ! et donc erreur de type possbiel
let compteur = document.querySelector("#compteur") as Element
compteur.innerHTML = "bonjour"

let compteur2 = document.querySelector("#compteur") as HTMLButtonElement
let liste = document.querySelector("#liste") as HTMLUListElement

console.log(compteur2)
console.log(liste)

let compteur3 = <HTMLButtonElement>document.querySelector("#compteur")
//le type de retour générique nommé ! on l'abordera plus bien en détails pas la suite du cours
console.log(compteur3)


