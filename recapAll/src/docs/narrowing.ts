

/*###########################################################
#                                                           #
#--------------------Partie Narrowing ----------------------#
#                                                           #
#############################################################*/
//-----------ou comment réduire la liste des type disponible---------------

let btn_inc = document.querySelector("#increment") //Element | Null 

let btn_inc2 = document.querySelector("#increment")! //Element
//Attention ! vous empecher le queryselector de fonctionner correctement en cas de null 
//warning !!!!

let btn_inc3 = document.querySelector("#increment") as HTMLButtonElement
//Attention ! vous empecher le queryselector de fonctionner correctement en cas de null 
//warning !!!!

let btn_dec : (e : MouseEvent) => void = (event : MouseEvent) : void => {
    event.preventDefault()
    
    const input = document.querySelector<HTMLInputElement>("#res") 
    
    input //HTMLInputElement ou null...
    if(input){
        input //HTMLInputElement
        //premier exemple de narrowing, j'ai éliminer le fait qu'il puisse être null
    }else{
        //null
    }
    
}



//Autre exemple de narrowing sur un id
function printId(id : string | number | null){

    if(id){

        if(typeof id === "number"){
            console.log(id) //simulé, un algo de travail sur l'id, et enregistrement en db spécifique dans des fonctions
        }
        else{
            let tmpId = parseInt(id)
            //traitement du cas number direct
        }
    }
    else{
        //traitement du cas null direct
        id = 42
    }
}

//Autre exemple de narrowing sur double variable local
function exempleN(a : string | number, b : string | boolean){

    if(a === b){
        console.log(a) //ici il sera d'office en string !
        //le seul point commun entre a et b c'est string
    }
}



function exempleOperator(a : MouseEvent | HTMLInputElement)
{
    //exemple si a était un mouseEvent, 
    //mouseevent étant un type typescript, il n'est pas reconnu par le typeof natif a JS !
    //if(typeof a === "MouseEvent")

    if("value" in a){
        console.log(a)
    }
    else if("tutu" in a){
        console.log(a)
        //ne passera JAMAIS par ici !
    }
    else{
        console.log(a)
        //d'office un MouseEvent
    }
}


//autre cas 
//je veux définir d'office un retour date SUR A !!! obligatoirement
function isDate(a : any) : a is Date
{   
    return a instanceof Date
}

let maDateSpecialAnniv = new Date("06/01/1991")
//mais imaginais que ça vienne d'un bout code lambda bien loins !

console.log(isDate(maDateSpecialAnniv))
//il vaut mieux TOUJOURS avoir deux trois lignes en plus avec des if ! d'ou, le narrowing !


// cas plus concrêt
class TUser{
    name : string

    constructor(name : string) { this.name = name}
}

function isUser(a : any) : a is TUser
{
    return a instanceof TUser
}
//ici on aura très bien pu mettre : boolean en retour de fonction !
//MAIS ! dans la la lecture de la doc au survol de la fonction,
//il est bien mieux ! de savoir si true/false d'une date
//que true/false d'un simple type boolean

let user = new TUser("loic")
console.log(isUser(user))
let y = isUser("tutu")