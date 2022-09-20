


/* OverLoads des methodes*/
function aze(a : string) : string
function aze(a : string, b : string) : string
function aze(a : string, b : string, c : string) : string
function aze(a? : string, b? : string, c? : string) : string
{
    return ""
}

aze("a")
aze("a", "b")
aze("a", "b", "c")

class Employee{}

function findEmployees(name: string): Employee[]; 					                    //Overload Signature 1
function findEmployees(name: string, age: number): Employee[]; 					        //Overload Signature 2
function findEmployees(name: string, age: number, location: string): Employee[]; 	//Overload Signature 3
function findEmployees(name: string, age?: number, location?: string): Employee[]
{
       //Implementation Signature
       return new Employee[5]
}





// /* intro sur les import */

// import { } from './exemples/exempleImportAll'
// //petite manip permettant d'importer tout ce qu'il y a dans exempleImportAll sans avoir d'export dedans! permet d'importer uniquement des choses qui ne sont pas utilisa
// //attention que les fct dedans et la class et les props ! ne seront pas utilisable !
// //pratique pour les imports d'aménagement de prototypes

// import { test1, test2 } from './exemples/exempleImport'
// //permet d'importer les deux fonctions test1 et test2


// import * as test from './exemples/exempleImportAs'
// //car on a export des props et on les a mise dans test 

// test.nom1
// test.nom2
// test.NomClasse
// test.compteur()
// test.nomFonction()

// //et donc  on peux faire 
// import { exos1 } from "./exos/exos1"
// new exos1()




