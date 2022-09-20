"use strict"
/* fichier principale de mon projet */
/*###########################################################
#                                                           #
#--------------------Partie sur le Typage ------------------#
#                                                           #
#############################################################*/
const a : string = "bonjour les pignoufs"
const b : number = 42
const c : boolean = true
const d : null = null
const e : string[] = ["bonjour", "à", "tous"]
const f : number[] = [1,2,3,4,45]
const g : any[] = ["hello", {}, [], 45, true]
const h : {} = {}
const i : { firstname : string, age : number } = { firstname : "loic", age : 42}
const j : { [key : string] : string } = { tutu : "lolo", toto : "tartempion"}
const k : Date = new Date()
const l : Function = () : void => { }
const m : () => void = () : void => {}
const n : (i : number, s : string, b : boolean) => string[] = (i,s,b) : string[] => { return ["a","b"] }
// (i : number, s : string, b : boolean) => string[]  <- défini la signature de la fct
/*
(i,s,b) : string[] => {
    return ["a","b"]
}
--> c'est son corp 
*/



/* ------------------------------ */
/* assertion des types ! (as ...) */
/* ------------------------------ */



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




/* string interpolation */
const first : string = "firstName"
const o = { firstName : "loic", age : 42}
//console.log(o[first])

//attention ici on utilise le contenu de la variable first comme nom de variable !!! 
//a éviter au maximum de vos possibilité, il vaux mieux faire 50 lignes d'algo en plus que ça !!!





/* indexation */
const p = { 0 : "loic", 1 : 42}
//ici je me retrouve avec un simple tableau classique assosiatif..
console.log(p[0])
//l'indexation, transforme fictivement un objet en tableau assoc

const q = { firstName : "baudoux", age : 31 }
console.log(q.age)
console.log(q["firstName"])
//autre exemple...







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
class User{
    name : string

    constructor(name : string) { this.name = name}
}

function isUser(a : any) : a is User
{
    return a instanceof User
}
//ici on aura très bien pu mettre : boolean en retour de fonction !
//MAIS ! dans la la lecture de la doc au survol de la fonction,
//il est bien mieux ! de savoir si true/false d'une date
//que true/false d'un simple type boolean

let user = new User("loic")
console.log(isUser(user))





/*###########################################################
#                                                           #
#--------------------Partie Type custom---------------------#
#                                                           #
#############################################################*/
//on peux également créer nos propre type, comme par exemple
//au lieu de faire des class + constructeur + new tata()
type Admin = { name : string, firstName : string, roleId : number }

//let admin = new Admin() -> NON !!!!
let admin : Admin = {
    name : "loic",
    firstName : "tutu",
    roleId : 42
}
 console.log(admin)

let newUser = new User("lastname")

//par exemple un type custom assez sympa c'est
type Id = string | number
type DateString = string 

let idtmpType : Id = "42"
console.log(idtmpType)

let dateTmp : DateString = "01/06/1991"
console.log(dateTmp)






/*###########################################################
#                                                           #
#--------------------Partie sur les classes ----------------#
#                                                           #
#############################################################*/

class Human{
    public gender : string = ""
    public height : number = 0
    public weight : number = 0

    private _etnic : string = "Blackos"
    protected __colorEyes : string = "red"
}



class Person extends Human{
    public id : number
    public name : string //public
    private lastName : string //de base public
    #_password : string //privée ! utilisable UNIQUEMENT dans la class

    private _upperPassword : Function = (password : string) => {
        return password.toUpperCase()
    }

    constructor(id? : number, name? : string,
        lastName? : string, password? : string)
    {
        super() //permet simplement de créer le parent !
        
        if(!password)
            password = "tutu"
        
        this.#_password = this._upperPassword(password)
        this.id = id
        this.lastName = lastName
        this.name = name

        this.__colorEyes = "blue"
    }

}

class Uuser extends Person{
    login : string
    constructor(){
        super()
        this.__colorEyes = "yellow"
    }
}


let uuser = new Uuser()
console.log(uuser)

//pour faire hériter une classe d'une autre, extends 
//ATTENTION ! on ne peux pas accéder a une props enfant depuis un parent !
//le niveau de portée des props dans les class sont les suivant : 
/*
public -> base -> permet d'accéder partout à tout
private -> limite l'accès a la classe décrivante !
protected -> limite l'accès a la class décrivante et ses enfant!
# -> permet de rendre private ! et de ne pas le voir en dehors de class !
atention que # c'est pas du typescript !!
//correspond à un super private js ts t'esgnoux

on devra impérativement appeler le constructeur parent dans l'enfant ! 
avec le mot clé super()
*/




//Attention au duck typing !! mauvaise pratique
class Point{
    y : number = 5
    x : number = 6
}

class Geometry{
    y : number = 10
    x : number = 100
    other1 : string = "ok"
    other : boolean = true
}

//Geometry contient toutes les memes props que point,
//alors geometry est un point
//attention que l'ensemble des props !!! dois êtres présentes !

function getX(p : Point){
    return (p.x * p.y)
}


console.log(getX(new Point))
console.log(getX(new Geometry))

function getY(p : Point | Geometry) : number | string{

    if(p instanceof Geometry)
        return p.other1
    else
        return (p.x * p.y)
}


console.log(getY(new Point))
console.log(getY(new Geometry))



/*la manière la plus propre de faire ça !!! */
/*introduction à abstract */

abstract class GeometryS{
    x : number
    y : number

    abstract perimetre() : number
    abstract air() : number
}


//console.log(new GeometryS) -> comme elle n'est pas FINIE,
//elle ne peux être instanciable ormis dans ses enfant avec le super()
//si je défini des signature de méthode dans la classe abstraite, je dois les implémenter dans les enfants


class Points extends GeometryS{

    perimetre(): number {
        return (this.x + this.y)
    }
    air(): number {
        return (this.x * this.y)
    }
    constructor(){
        super()
    }
}

class Carre extends GeometryS{

    cote : number
    perimetre(): number {
        return (this.x *4)
    }
    air(): number {
        return (this.x * this.x)
    }
    
    constructor(){
        super()
    }

    
}

console.log(new Carre)



/* les interfaces */
interface Voiture{

    carburant : string
    tailleVolant : number
    isAuto : boolean
    couleur : string

    avance(vitesseActuel : number) : number
    recule(vitesseZero : number) : number
    remplirReservoir(sousous : bigint) : string
}


class Allemandes implements Voiture{
    avance(vitesseActuel: number): number {
        throw new Error("Method not implemented.")
    }
    recule(vitesseZero: number): number {
        throw new Error("Method not implemented.")
    }
    remplirReservoir(sousous: bigint): string {
        throw new Error("Method not implemented.")
    }

    carburant: string
    tailleVolant: number
    isAuto: boolean
    couleur: string

}

class Amerlocks implements Voiture{
    avance(vitesseActuel: number): number {
        throw new Error("Method not implemented.")
    }
    recule(vitesseZero: number): number {
        throw new Error("Method not implemented.")
    }
    remplirReservoir(sousous: bigint): string {
        throw new Error("Method not implemented.")
    }
   
    carburant: string
    tailleVolant: number
    isAuto: boolean
    couleur: string

}




/* les Statics */
class DateConverter
{
    static convertTimeStampToDate(timestamp : string) : Date{
        return new Date(parseInt(timestamp))
    }
}

console.log(DateConverter.convertTimeStampToDate("1660741384"))






/*###########################################################
#                                                           #
#--------------------Partie sur les generics----------------#
#                                                           #
#############################################################*/

/* re-partie sur les générics */
let output : any

function identity3<Type>(args : Type) : Type{
    return args
}

output = identity3("Bonjour")
output = identity3<string>("Bonjour")


function identity4<Type>(args : Type) : Type{
    //console.log(args.length) !! ne peux pas fonctionner !!
    //car on est pas sur que length soit dispo peux importe le type passé
    return args
}

output = identity4<number>(42)

function identity5<Type>(args : Type[]) : Type[]{
    console.log(args.length)
    //peux fonctionner car dans tout les cas, le Type[] possède array ! et donc length
    return args
}

output = identity5<string>(["loic", "baudoux"])



/* class générique ! */
class GenericNumber<T> {
    zeroValue : T
    add : (x : T, y : T) => T
}

let nb = new GenericNumber<number>()

nb.zeroValue = 0
nb.add = function (x, y){
    return x + y
}



interface LengthWise{
    length : number
}

function loggingI<Type extends LengthWise>(arg : Type) : Type
{
    console.log(arg.length)
    return arg
}

//loggingI(3)
//n'accepte pas car il n'étend pas de length ! elle n'est pas compatible comme l'est un tableau
loggingI([1,2,3,4])




function getProperty<Type, Key extends keyof Type>(obj : Type, key : Key)
{
    return obj[key]
}
//je demande a ce que le Type passé en param, aie par la même occasion
//une clé qui fait partie de Type
//donc : si j'ai ->
let x = {a : 1, b : 2, c : 3, d : 4}
getProperty(x, "a")
//getProperty(x, "z")
//ici z ne fait pas partie de x donc il n'est pas une clé qui étend de x !














/* OverLoads des methodes*/
function aze(a : string) : string
function aze(a : string, b : string) : string
function aze(a : string, b : string, c : string) : string
function aze(a? : string, b? : string, c? : string) : string
{
    return ""
}



class Employee{}

function findEmployees(name: string): Employee[]; 					                    //Overload Signature 1
function findEmployees(name: string, age: number): Employee[]; 					        //Overload Signature 2
function findEmployees(name: string, age: number, location: string): Employee[]; 	//Overload Signature 3
function findEmployees(name: string, age?: number, location?: string): Employee[]
{
       //Implementation Signature
       return new Employee[5]
}




/* intro sur les import */

import { } from './exemples/exempleImportAll'
//petite manip permettant d'importer tout ce qu'il y a dans exempleImportAll sans avoir d'export dedans! permet d'importer uniquement des choses qui ne sont pas utilisa
//attention que les fct dedans et la class et les props ! ne seront pas utilisable !
//pratique pour les imports d'aménagement de prototypes

import { test1, test2 } from './exemples/exempleImport'
//permet d'importer les deux fonctions test1 et test2


import * as test from './exemples/exempleImportAs'
//car on a export des props et on les a mise dans test 

test.nom1
test.nom2
test.NomClasse
test.compteur()
test.nomFonction()

//et donc  on peux faire 
import { exos1 } from "./exos/exos1"
new exos1()


