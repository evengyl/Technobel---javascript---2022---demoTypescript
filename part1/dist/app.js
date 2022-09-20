/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exemples/exempleImportAs.ts":
/*!*****************************************!*\
  !*** ./src/exemples/exempleImportAs.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NomClasse": () => (/* binding */ NomClasse),
/* harmony export */   "compteur": () => (/* binding */ compteur),
/* harmony export */   "listFct": () => (/* binding */ listFct),
/* harmony export */   "nom1": () => (/* binding */ nom1),
/* harmony export */   "nom2": () => (/* binding */ nom2),
/* harmony export */   "nomFonction": () => (/* binding */ nomFonction)
/* harmony export */ });
// Exporter des propriétés individuelles
let nom1, nom2;
function nomFonction() { return true; }
class NomClasse {
}
function compteur() {
    console.log("ututu");
}
let listFct = {
    info: () => {
        console.log("info");
    },
    info2: () => {
        console.log("info2");
    },
};


/***/ }),

/***/ "./src/exos/exos1.ts":
/*!***************************!*\
  !*** ./src/exos/exos1.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exos1": () => (/* binding */ exos1)
/* harmony export */ });
/*###########################################################
#                                                           #
#--------------------Exos 1 - le Typage --------------------#
#                                                           #
#############################################################*/
//Créer un code permettant de créer un compteur classique, avec + 1, -1 et =..., 
//il faudra type le tout au maximum, préparer 2 fonctions pour ça
class exos1 {
    constructor() {
        let btnInc = document.querySelector("#increment");
        let btnDec = document.querySelector("#decrement");
        let res = document.querySelector("#res");
        while (res == null) {
            res = document.createElement("input");
            res.id = "res";
            res.type = "number";
            res.value = "0";
            document.body.appendChild(res);
        }
        if (btnInc) {
            btnInc.addEventListener("click", (e) => {
                e.preventDefault();
                if (res)
                    res.valueAsNumber++;
            });
        }
        if (btnDec) {
            btnDec.addEventListener("click", (e) => {
                e.preventDefault();
                if (res)
                    res.valueAsNumber--;
            });
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exemples_exempleImportAs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exemples/exempleImportAs */ "./src/exemples/exempleImportAs.ts");
/* harmony import */ var _exos_exos1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exos/exos1 */ "./src/exos/exos1.ts");

/* fichier principale de mon projet */
/*###########################################################
#                                                           #
#--------------------Partie sur le Typage ------------------#
#                                                           #
#############################################################*/
const a = "bonjour les pignoufs";
const b = 42;
const c = true;
const d = null;
const e = ["bonjour", "à", "tous"];
const f = [1, 2, 3, 4, 45];
const g = ["hello", {}, [], 45, true];
const h = {};
const i = { firstname: "loic", age: 42 };
const j = { tutu: "lolo", toto: "tartempion" };
const k = new Date();
const l = () => { };
const m = () => { };
const n = (i, s, b) => { return ["a", "b"]; };
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
let compteur = document.querySelector("#compteur");
compteur.innerHTML = "bonjour";
let compteur2 = document.querySelector("#compteur");
let liste = document.querySelector("#liste");
console.log(compteur2);
console.log(liste);
let compteur3 = document.querySelector("#compteur");
//le type de retour générique nommé ! on l'abordera plus bien en détails pas la suite du cours
console.log(compteur3);
/* string interpolation */
const first = "firstName";
const o = { firstName: "loic", age: 42 };
//console.log(o[first])
//attention ici on utilise le contenu de la variable first comme nom de variable !!! 
//a éviter au maximum de vos possibilité, il vaux mieux faire 50 lignes d'algo en plus que ça !!!
/* indexation */
const p = { 0: "loic", 1: 42 };
//ici je me retrouve avec un simple tableau classique assosiatif..
console.log(p[0]);
//l'indexation, transforme fictivement un objet en tableau assoc
const q = { firstName: "baudoux", age: 31 };
console.log(q.age);
console.log(q["firstName"]);
//autre exemple...
/*###########################################################
#                                                           #
#--------------------Partie Narrowing ----------------------#
#                                                           #
#############################################################*/
//-----------ou comment réduire la liste des type disponible---------------
let btn_inc = document.querySelector("#increment"); //Element | Null 
let btn_inc2 = document.querySelector("#increment"); //Element
//Attention ! vous empecher le queryselector de fonctionner correctement en cas de null 
//warning !!!!
let btn_inc3 = document.querySelector("#increment");
//Attention ! vous empecher le queryselector de fonctionner correctement en cas de null 
//warning !!!!
let btn_dec = (event) => {
    event.preventDefault();
    const input = document.querySelector("#res");
    input; //HTMLInputElement ou null...
    if (input) {
        input; //HTMLInputElement
        //premier exemple de narrowing, j'ai éliminer le fait qu'il puisse être null
    }
};
//Autre exemple de narrowing sur un id
function printId(id) {
    if (id) {
        if (typeof id === "number") {
            console.log(id); //simulé, un algo de travail sur l'id, et enregistrement en db spécifique dans des fonctions
        }
        else {
            let tmpId = parseInt(id);
            //traitement du cas number direct
        }
    }
    else {
        //traitement du cas null direct
        id = 42;
    }
}
//Autre exemple de narrowing sur double variable local
function exempleN(a, b) {
    if (a === b) {
        console.log(a); //ici il sera d'office en string !
        //le seul point commun entre a et b c'est string
    }
}
function exempleOperator(a) {
    //exemple si a était un mouseEvent, 
    //mouseevent étant un type typescript, il n'est pas reconnu par le typeof natif a JS !
    //if(typeof a === "MouseEvent")
    if ("value" in a) {
        console.log(a);
    }
    else if ("tutu" in a) {
        console.log(a);
        //ne passera JAMAIS par ici !
    }
    else {
        console.log(a);
        //d'office un MouseEvent
    }
}
//autre cas 
//je veux définir d'office un retour date SUR A !!! obligatoirement
function isDate(a) {
    return a instanceof Date;
}
let maDateSpecialAnniv = new Date("06/01/1991");
//mais imaginais que ça vienne d'un bout code lambda bien loins !
console.log(isDate(maDateSpecialAnniv));
//il vaut mieux TOUJOURS avoir deux trois lignes en plus avec des if ! d'ou, le narrowing !
// cas plus concrêt
class User {
    name;
    constructor(name) { this.name = name; }
}
function isUser(a) {
    return a instanceof User;
}
//ici on aura très bien pu mettre : boolean en retour de fonction !
//MAIS ! dans la la lecture de la doc au survol de la fonction,
//il est bien mieux ! de savoir si true/false d'une date
//que true/false d'un simple type boolean
let user = new User("loic");
console.log(isUser(user));
//let admin = new Admin() -> NON !!!!
let admin = {
    name: "loic",
    firstName: "tutu",
    roleId: 42
};
console.log(admin);
let newUser = new User("lastname");
let idtmpType = "42";
console.log(idtmpType);
let dateTmp = "01/06/1991";
console.log(dateTmp);
/*###########################################################
#                                                           #
#--------------------Partie sur les generics----------------#
#                                                           #
#############################################################*/
function identity(arg) {
    return arg;
}
let ident = 3;
let aa = identity(ident);
//call de base, on perd le type natif de ident : number
function identity2(arg) {
    return arg;
}
let ident2 = 3;
let aaa = identity2(ident);
//le type T passé en param généric, devra avoir la Function toString en lui !
function returnInArray(...arg) {
    let tmpA = [];
    arg.forEach((item) => {
        tmpA.push(item.toString());
    });
    return tmpA;
}
let returned = returnInArray(1, 2, 3, 4, 5, 6);
console.log(returned);
//let returned2 = returnInArray<string>("tata", "toto", "tutu")
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const af = consoleSize("tutu");
//exemple avec class perso
class Modo {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let huhu = { name: "tutu", age: 42 };
function objectIs(obj) {
    let a = obj;
    if (a != undefined)
        return a;
    else
        return null;
}
let tmpModo = objectIs(huhu);
if (tmpModo) {
    tmpModo;
}
/*###########################################################
#                                                           #
#--------------------Partie sur les classes ----------------#
#                                                           #
#############################################################*/
class Human {
    gender = "";
    height = 0;
    weight = 0;
    _etnic = "Blackos";
    __colorEyes = "red";
}
class Person extends Human {
    id;
    name; //public
    lastName; //de base public
    #_password; //privée ! utilisable UNIQUEMENT dans la class
    _upperPassword = (password) => {
        return password.toUpperCase();
    };
    constructor(id, name, lastName, password) {
        super(); //permet simplement de créer le parent !
        if (!password)
            password = "tutu";
        this.#_password = this._upperPassword(password);
        this.id = id;
        this.lastName = lastName;
        this.name = name;
        this.__colorEyes = "blue";
    }
}
class Uuser extends Person {
    login;
    constructor() {
        super();
        this.__colorEyes = "yellow";
    }
}
let uuser = new Uuser();
console.log(uuser);
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
class Point {
    y = 5;
    x = 6;
}
class Geometry {
    y = 10;
    x = 100;
    other1 = "ok";
    other = true;
}
//Geometry contient toutes les memes props que point,
//alors geometry est un point
//attention que l'ensemble des props !!! dois êtres présentes !
function getX(p) {
    return (p.x * p.y);
}
console.log(getX(new Point));
console.log(getX(new Geometry));
function getY(p) {
    if (p instanceof Geometry)
        return p.other1;
    else
        return (p.x * p.y);
}
console.log(getY(new Point));
console.log(getY(new Geometry));
/*la manière la plus propre de faire ça !!! */
/*introduction à abstract */
class GeometryS {
    x;
    y;
}
//console.log(new GeometryS) -> comme elle n'est pas FINIE,
//elle ne peux être instanciable ormis dans ses enfant avec le super()
//si je défini des signature de méthode dans la classe abstraite, je dois les implémenter dans les enfants
class Points extends GeometryS {
    perimetre() {
        return (this.x + this.y);
    }
    air() {
        return (this.x * this.y);
    }
    constructor() {
        super();
    }
}
class Carre extends GeometryS {
    cote;
    perimetre() {
        return (this.x * 4);
    }
    air() {
        return (this.x * this.x);
    }
    constructor() {
        super();
    }
}
console.log(new Carre);
class Allemandes {
    avance(vitesseActuel) {
        throw new Error("Method not implemented.");
    }
    recule(vitesseZero) {
        throw new Error("Method not implemented.");
    }
    remplirReservoir(sousous) {
        throw new Error("Method not implemented.");
    }
    carburant;
    tailleVolant;
    isAuto;
    couleur;
}
class Amerlocks {
    avance(vitesseActuel) {
        throw new Error("Method not implemented.");
    }
    recule(vitesseZero) {
        throw new Error("Method not implemented.");
    }
    remplirReservoir(sousous) {
        throw new Error("Method not implemented.");
    }
    carburant;
    tailleVolant;
    isAuto;
    couleur;
}
/* les Statics */
class DateConverter {
    static convertTimeStampToDate(timestamp) {
        return new Date(parseInt(timestamp));
    }
}
console.log(DateConverter.convertTimeStampToDate("1660741384"));
/* re-partie sur les générics */
let output;
function identity3(args) {
    return args;
}
output = identity3("Bonjour");
output = identity3("Bonjour");
function identity4(args) {
    //console.log(args.length) !! ne peux pas fonctionner !!
    //car on est pas sur que length soit dispo peux importe le type passé
    return args;
}
output = identity4(42);
function identity5(args) {
    console.log(args.length);
    //peux fonctionner car dans tout les cas, le Type[] possède array ! et donc length
    return args;
}
output = identity5(["loic", "baudoux"]);
/* class générique ! */
class GenericNumber {
    zeroValue;
    add;
}
let nb = new GenericNumber();
nb.zeroValue = 0;
nb.add = function (x, y) {
    return x + y;
};
function loggingI(arg) {
    console.log(arg.length);
    return arg;
}
//loggingI(3)
//n'accepte pas car il n'étend pas de length ! elle n'est pas compatible comme l'est un tableau
loggingI([1, 2, 3, 4]);
function getProperty(obj, key) {
    return obj[key];
}
//je demande a ce que le Type passé en param, aie par la même occasion
//une clé qui fait partie de Type
//donc : si j'ai ->
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
function aze(a, b, c) {
    return "";
}
class Employee {
}
function findEmployees(name, age, location) {
    //Implementation Signature
    return new Employee[5];
}
//permet d'importer les deux fonctions test1 et test2

//car on a export des props et on les a mise dans test 
_exemples_exempleImportAs__WEBPACK_IMPORTED_MODULE_0__.nom1;
_exemples_exempleImportAs__WEBPACK_IMPORTED_MODULE_0__.nom2;
_exemples_exempleImportAs__WEBPACK_IMPORTED_MODULE_0__.NomClasse;
_exemples_exempleImportAs__WEBPACK_IMPORTED_MODULE_0__.compteur();
_exemples_exempleImportAs__WEBPACK_IMPORTED_MODULE_0__.nomFonction();
//et donc  on peux faire 

new _exos_exos1__WEBPACK_IMPORTED_MODULE_1__.exos1();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7Ozs7Ozs7VUNsQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21EO0FBQ25EO0FBQ0EsMkRBQVM7QUFDVCwyREFBUztBQUNULGdFQUFjO0FBQ2QsK0RBQWE7QUFDYixrRUFBZ0I7QUFDaEI7QUFDcUM7QUFDckMsSUFBSSw4Q0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlY2hub2JlbC0tLWphdmFzY3JpcHQtLS0yMDIyLy4vc3JjL2V4ZW1wbGVzL2V4ZW1wbGVJbXBvcnRBcy50cyIsIndlYnBhY2s6Ly90ZWNobm9iZWwtLS1qYXZhc2NyaXB0LS0tMjAyMi8uL3NyYy9leG9zL2V4b3MxLnRzIiwid2VicGFjazovL3RlY2hub2JlbC0tLWphdmFzY3JpcHQtLS0yMDIyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlY2hub2JlbC0tLWphdmFzY3JpcHQtLS0yMDIyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZWNobm9iZWwtLS1qYXZhc2NyaXB0LS0tMjAyMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlY2hub2JlbC0tLWphdmFzY3JpcHQtLS0yMDIyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVjaG5vYmVsLS0tamF2YXNjcmlwdC0tLTIwMjIvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydGVyIGRlcyBwcm9wcmnDqXTDqXMgaW5kaXZpZHVlbGxlc1xyXG5leHBvcnQgbGV0IG5vbTEsIG5vbTI7XHJcbmV4cG9ydCBmdW5jdGlvbiBub21Gb25jdGlvbigpIHsgcmV0dXJuIHRydWU7IH1cclxuZXhwb3J0IGNsYXNzIE5vbUNsYXNzZSB7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB0ZXVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ1dHV0dVwiKTtcclxufVxyXG5leHBvcnQgbGV0IGxpc3RGY3QgPSB7XHJcbiAgICBpbmZvOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmZvXCIpO1xyXG4gICAgfSxcclxuICAgIGluZm8yOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmZvMlwiKTtcclxuICAgIH0sXHJcbn07XHJcbiIsIi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1xyXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS1FeG9zIDEgLSBsZSBUeXBhZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0jXHJcbiMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcclxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXHJcbi8vQ3LDqWVyIHVuIGNvZGUgcGVybWV0dGFudCBkZSBjcsOpZXIgdW4gY29tcHRldXIgY2xhc3NpcXVlLCBhdmVjICsgMSwgLTEgZXQgPS4uLiwgXHJcbi8vaWwgZmF1ZHJhIHR5cGUgbGUgdG91dCBhdSBtYXhpbXVtLCBwcsOpcGFyZXIgMiBmb25jdGlvbnMgcG91ciDDp2FcclxuZXhwb3J0IGNsYXNzIGV4b3MxIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGxldCBidG5JbmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luY3JlbWVudFwiKTtcclxuICAgICAgICBsZXQgYnRuRGVjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWNyZW1lbnRcIik7XHJcbiAgICAgICAgbGV0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzXCIpO1xyXG4gICAgICAgIHdoaWxlIChyZXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHJlcy5pZCA9IFwicmVzXCI7XHJcbiAgICAgICAgICAgIHJlcy50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICAgICAgcmVzLnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bkluYykge1xyXG4gICAgICAgICAgICBidG5JbmMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy52YWx1ZUFzTnVtYmVyKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuRGVjKSB7XHJcbiAgICAgICAgICAgIGJ0bkRlYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnZhbHVlQXNOdW1iZXItLTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qIGZpY2hpZXIgcHJpbmNpcGFsZSBkZSBtb24gcHJvamV0ICovXHJcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1xyXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS1QYXJ0aWUgc3VyIGxlIFR5cGFnZSAtLS0tLS0tLS0tLS0tLS0tLS0jXHJcbiMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcclxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXHJcbmNvbnN0IGEgPSBcImJvbmpvdXIgbGVzIHBpZ25vdWZzXCI7XHJcbmNvbnN0IGIgPSA0MjtcclxuY29uc3QgYyA9IHRydWU7XHJcbmNvbnN0IGQgPSBudWxsO1xyXG5jb25zdCBlID0gW1wiYm9uam91clwiLCBcIsOgXCIsIFwidG91c1wiXTtcclxuY29uc3QgZiA9IFsxLCAyLCAzLCA0LCA0NV07XHJcbmNvbnN0IGcgPSBbXCJoZWxsb1wiLCB7fSwgW10sIDQ1LCB0cnVlXTtcclxuY29uc3QgaCA9IHt9O1xyXG5jb25zdCBpID0geyBmaXJzdG5hbWU6IFwibG9pY1wiLCBhZ2U6IDQyIH07XHJcbmNvbnN0IGogPSB7IHR1dHU6IFwibG9sb1wiLCB0b3RvOiBcInRhcnRlbXBpb25cIiB9O1xyXG5jb25zdCBrID0gbmV3IERhdGUoKTtcclxuY29uc3QgbCA9ICgpID0+IHsgfTtcclxuY29uc3QgbSA9ICgpID0+IHsgfTtcclxuY29uc3QgbiA9IChpLCBzLCBiKSA9PiB7IHJldHVybiBbXCJhXCIsIFwiYlwiXTsgfTtcclxuLy8gKGkgOiBudW1iZXIsIHMgOiBzdHJpbmcsIGIgOiBib29sZWFuKSA9PiBzdHJpbmdbXSAgPC0gZMOpZmluaSBsYSBzaWduYXR1cmUgZGUgbGEgZmN0XHJcbi8qXHJcbihpLHMsYikgOiBzdHJpbmdbXSA9PiB7XHJcbiAgICByZXR1cm4gW1wiYVwiLFwiYlwiXVxyXG59XHJcbi0tPiBjJ2VzdCBzb24gY29ycFxyXG4qL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogYXNzZXJ0aW9uIGRlcyB0eXBlcyAhIChhcyAuLi4pICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vL2F0dGVudGlvbiBhIGwnYXNzZXJ0aW9uIGRlcyB0eXBlISB2b3VzIG5lIGxhaXNzZXIgcGFzIGxlIHN5c3RlbSByZW52b3llciB1biBudWxsICEgZXQgZG9uYyBlcnJldXIgZGUgdHlwZSBwb3NzYmllbFxyXG5sZXQgY29tcHRldXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXB0ZXVyXCIpO1xyXG5jb21wdGV1ci5pbm5lckhUTUwgPSBcImJvbmpvdXJcIjtcclxubGV0IGNvbXB0ZXVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcHRldXJcIik7XHJcbmxldCBsaXN0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdGVcIik7XHJcbmNvbnNvbGUubG9nKGNvbXB0ZXVyMik7XHJcbmNvbnNvbGUubG9nKGxpc3RlKTtcclxubGV0IGNvbXB0ZXVyMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcHRldXJcIik7XHJcbi8vbGUgdHlwZSBkZSByZXRvdXIgZ8OpbsOpcmlxdWUgbm9tbcOpICEgb24gbCdhYm9yZGVyYSBwbHVzIGJpZW4gZW4gZMOpdGFpbHMgcGFzIGxhIHN1aXRlIGR1IGNvdXJzXHJcbmNvbnNvbGUubG9nKGNvbXB0ZXVyMyk7XHJcbi8qIHN0cmluZyBpbnRlcnBvbGF0aW9uICovXHJcbmNvbnN0IGZpcnN0ID0gXCJmaXJzdE5hbWVcIjtcclxuY29uc3QgbyA9IHsgZmlyc3ROYW1lOiBcImxvaWNcIiwgYWdlOiA0MiB9O1xyXG4vL2NvbnNvbGUubG9nKG9bZmlyc3RdKVxyXG4vL2F0dGVudGlvbiBpY2kgb24gdXRpbGlzZSBsZSBjb250ZW51IGRlIGxhIHZhcmlhYmxlIGZpcnN0IGNvbW1lIG5vbSBkZSB2YXJpYWJsZSAhISEgXHJcbi8vYSDDqXZpdGVyIGF1IG1heGltdW0gZGUgdm9zIHBvc3NpYmlsaXTDqSwgaWwgdmF1eCBtaWV1eCBmYWlyZSA1MCBsaWduZXMgZCdhbGdvIGVuIHBsdXMgcXVlIMOnYSAhISFcclxuLyogaW5kZXhhdGlvbiAqL1xyXG5jb25zdCBwID0geyAwOiBcImxvaWNcIiwgMTogNDIgfTtcclxuLy9pY2kgamUgbWUgcmV0cm91dmUgYXZlYyB1biBzaW1wbGUgdGFibGVhdSBjbGFzc2lxdWUgYXNzb3NpYXRpZi4uXHJcbmNvbnNvbGUubG9nKHBbMF0pO1xyXG4vL2wnaW5kZXhhdGlvbiwgdHJhbnNmb3JtZSBmaWN0aXZlbWVudCB1biBvYmpldCBlbiB0YWJsZWF1IGFzc29jXHJcbmNvbnN0IHEgPSB7IGZpcnN0TmFtZTogXCJiYXVkb3V4XCIsIGFnZTogMzEgfTtcclxuY29uc29sZS5sb2cocS5hZ2UpO1xyXG5jb25zb2xlLmxvZyhxW1wiZmlyc3ROYW1lXCJdKTtcclxuLy9hdXRyZSBleGVtcGxlLi4uXHJcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1xyXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS1QYXJ0aWUgTmFycm93aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0jXHJcbiMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcclxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXHJcbi8vLS0tLS0tLS0tLS1vdSBjb21tZW50IHLDqWR1aXJlIGxhIGxpc3RlIGRlcyB0eXBlIGRpc3BvbmlibGUtLS0tLS0tLS0tLS0tLS1cclxubGV0IGJ0bl9pbmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luY3JlbWVudFwiKTsgLy9FbGVtZW50IHwgTnVsbCBcclxubGV0IGJ0bl9pbmMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmNyZW1lbnRcIik7IC8vRWxlbWVudFxyXG4vL0F0dGVudGlvbiAhIHZvdXMgZW1wZWNoZXIgbGUgcXVlcnlzZWxlY3RvciBkZSBmb25jdGlvbm5lciBjb3JyZWN0ZW1lbnQgZW4gY2FzIGRlIG51bGwgXHJcbi8vd2FybmluZyAhISEhXHJcbmxldCBidG5faW5jMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5jcmVtZW50XCIpO1xyXG4vL0F0dGVudGlvbiAhIHZvdXMgZW1wZWNoZXIgbGUgcXVlcnlzZWxlY3RvciBkZSBmb25jdGlvbm5lciBjb3JyZWN0ZW1lbnQgZW4gY2FzIGRlIG51bGwgXHJcbi8vd2FybmluZyAhISEhXHJcbmxldCBidG5fZGVjID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc1wiKTtcclxuICAgIGlucHV0OyAvL0hUTUxJbnB1dEVsZW1lbnQgb3UgbnVsbC4uLlxyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgaW5wdXQ7IC8vSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIC8vcHJlbWllciBleGVtcGxlIGRlIG5hcnJvd2luZywgaidhaSDDqWxpbWluZXIgbGUgZmFpdCBxdSdpbCBwdWlzc2Ugw6p0cmUgbnVsbFxyXG4gICAgfVxyXG59O1xyXG4vL0F1dHJlIGV4ZW1wbGUgZGUgbmFycm93aW5nIHN1ciB1biBpZFxyXG5mdW5jdGlvbiBwcmludElkKGlkKSB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTsgLy9zaW11bMOpLCB1biBhbGdvIGRlIHRyYXZhaWwgc3VyIGwnaWQsIGV0IGVucmVnaXN0cmVtZW50IGVuIGRiIHNww6ljaWZpcXVlIGRhbnMgZGVzIGZvbmN0aW9uc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHRtcElkID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgICAgICAgICAvL3RyYWl0ZW1lbnQgZHUgY2FzIG51bWJlciBkaXJlY3RcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvL3RyYWl0ZW1lbnQgZHUgY2FzIG51bGwgZGlyZWN0XHJcbiAgICAgICAgaWQgPSA0MjtcclxuICAgIH1cclxufVxyXG4vL0F1dHJlIGV4ZW1wbGUgZGUgbmFycm93aW5nIHN1ciBkb3VibGUgdmFyaWFibGUgbG9jYWxcclxuZnVuY3Rpb24gZXhlbXBsZU4oYSwgYikge1xyXG4gICAgaWYgKGEgPT09IGIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKTsgLy9pY2kgaWwgc2VyYSBkJ29mZmljZSBlbiBzdHJpbmcgIVxyXG4gICAgICAgIC8vbGUgc2V1bCBwb2ludCBjb21tdW4gZW50cmUgYSBldCBiIGMnZXN0IHN0cmluZ1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGV4ZW1wbGVPcGVyYXRvcihhKSB7XHJcbiAgICAvL2V4ZW1wbGUgc2kgYSDDqXRhaXQgdW4gbW91c2VFdmVudCwgXHJcbiAgICAvL21vdXNlZXZlbnQgw6l0YW50IHVuIHR5cGUgdHlwZXNjcmlwdCwgaWwgbidlc3QgcGFzIHJlY29ubnUgcGFyIGxlIHR5cGVvZiBuYXRpZiBhIEpTICFcclxuICAgIC8vaWYodHlwZW9mIGEgPT09IFwiTW91c2VFdmVudFwiKVxyXG4gICAgaWYgKFwidmFsdWVcIiBpbiBhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChcInR1dHVcIiBpbiBhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYSk7XHJcbiAgICAgICAgLy9uZSBwYXNzZXJhIEpBTUFJUyBwYXIgaWNpICFcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpO1xyXG4gICAgICAgIC8vZCdvZmZpY2UgdW4gTW91c2VFdmVudFxyXG4gICAgfVxyXG59XHJcbi8vYXV0cmUgY2FzIFxyXG4vL2plIHZldXggZMOpZmluaXIgZCdvZmZpY2UgdW4gcmV0b3VyIGRhdGUgU1VSIEEgISEhIG9ibGlnYXRvaXJlbWVudFxyXG5mdW5jdGlvbiBpc0RhdGUoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBEYXRlO1xyXG59XHJcbmxldCBtYURhdGVTcGVjaWFsQW5uaXYgPSBuZXcgRGF0ZShcIjA2LzAxLzE5OTFcIik7XHJcbi8vbWFpcyBpbWFnaW5haXMgcXVlIMOnYSB2aWVubmUgZCd1biBib3V0IGNvZGUgbGFtYmRhIGJpZW4gbG9pbnMgIVxyXG5jb25zb2xlLmxvZyhpc0RhdGUobWFEYXRlU3BlY2lhbEFubml2KSk7XHJcbi8vaWwgdmF1dCBtaWV1eCBUT1VKT1VSUyBhdm9pciBkZXV4IHRyb2lzIGxpZ25lcyBlbiBwbHVzIGF2ZWMgZGVzIGlmICEgZCdvdSwgbGUgbmFycm93aW5nICFcclxuLy8gY2FzIHBsdXMgY29uY3LDqnRcclxuY2xhc3MgVXNlciB7XHJcbiAgICBuYW1lO1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9XHJcbn1cclxuZnVuY3Rpb24gaXNVc2VyKGEpIHtcclxuICAgIHJldHVybiBhIGluc3RhbmNlb2YgVXNlcjtcclxufVxyXG4vL2ljaSBvbiBhdXJhIHRyw6hzIGJpZW4gcHUgbWV0dHJlIDogYm9vbGVhbiBlbiByZXRvdXIgZGUgZm9uY3Rpb24gIVxyXG4vL01BSVMgISBkYW5zIGxhIGxhIGxlY3R1cmUgZGUgbGEgZG9jIGF1IHN1cnZvbCBkZSBsYSBmb25jdGlvbixcclxuLy9pbCBlc3QgYmllbiBtaWV1eCAhIGRlIHNhdm9pciBzaSB0cnVlL2ZhbHNlIGQndW5lIGRhdGVcclxuLy9xdWUgdHJ1ZS9mYWxzZSBkJ3VuIHNpbXBsZSB0eXBlIGJvb2xlYW5cclxubGV0IHVzZXIgPSBuZXcgVXNlcihcImxvaWNcIik7XHJcbmNvbnNvbGUubG9nKGlzVXNlcih1c2VyKSk7XHJcbi8vbGV0IGFkbWluID0gbmV3IEFkbWluKCkgLT4gTk9OICEhISFcclxubGV0IGFkbWluID0ge1xyXG4gICAgbmFtZTogXCJsb2ljXCIsXHJcbiAgICBmaXJzdE5hbWU6IFwidHV0dVwiLFxyXG4gICAgcm9sZUlkOiA0MlxyXG59O1xyXG5jb25zb2xlLmxvZyhhZG1pbik7XHJcbmxldCBuZXdVc2VyID0gbmV3IFVzZXIoXCJsYXN0bmFtZVwiKTtcclxubGV0IGlkdG1wVHlwZSA9IFwiNDJcIjtcclxuY29uc29sZS5sb2coaWR0bXBUeXBlKTtcclxubGV0IGRhdGVUbXAgPSBcIjAxLzA2LzE5OTFcIjtcclxuY29uc29sZS5sb2coZGF0ZVRtcCk7XHJcbi8qIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1xyXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS1QYXJ0aWUgc3VyIGxlcyBnZW5lcmljcy0tLS0tLS0tLS0tLS0tLS0jXHJcbiMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcclxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXHJcbmZ1bmN0aW9uIGlkZW50aXR5KGFyZykge1xyXG4gICAgcmV0dXJuIGFyZztcclxufVxyXG5sZXQgaWRlbnQgPSAzO1xyXG5sZXQgYWEgPSBpZGVudGl0eShpZGVudCk7XHJcbi8vY2FsbCBkZSBiYXNlLCBvbiBwZXJkIGxlIHR5cGUgbmF0aWYgZGUgaWRlbnQgOiBudW1iZXJcclxuZnVuY3Rpb24gaWRlbnRpdHkyKGFyZykge1xyXG4gICAgcmV0dXJuIGFyZztcclxufVxyXG5sZXQgaWRlbnQyID0gMztcclxubGV0IGFhYSA9IGlkZW50aXR5MihpZGVudCk7XHJcbi8vbGUgdHlwZSBUIHBhc3PDqSBlbiBwYXJhbSBnw6luw6lyaWMsIGRldnJhIGF2b2lyIGxhIEZ1bmN0aW9uIHRvU3RyaW5nIGVuIGx1aSAhXHJcbmZ1bmN0aW9uIHJldHVybkluQXJyYXkoLi4uYXJnKSB7XHJcbiAgICBsZXQgdG1wQSA9IFtdO1xyXG4gICAgYXJnLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0bXBBLnB1c2goaXRlbS50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRtcEE7XHJcbn1cclxubGV0IHJldHVybmVkID0gcmV0dXJuSW5BcnJheSgxLCAyLCAzLCA0LCA1LCA2KTtcclxuY29uc29sZS5sb2cocmV0dXJuZWQpO1xyXG4vL2xldCByZXR1cm5lZDIgPSByZXR1cm5JbkFycmF5PHN0cmluZz4oXCJ0YXRhXCIsIFwidG90b1wiLCBcInR1dHVcIilcclxuZnVuY3Rpb24gY29uc29sZVNpemUoYXJnKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhcmcubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuY29uc3QgYWYgPSBjb25zb2xlU2l6ZShcInR1dHVcIik7XHJcbi8vZXhlbXBsZSBhdmVjIGNsYXNzIHBlcnNvXHJcbmNsYXNzIE1vZG8ge1xyXG4gICAgbmFtZTtcclxuICAgIGFnZTtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgICB9XHJcbn1cclxubGV0IGh1aHUgPSB7IG5hbWU6IFwidHV0dVwiLCBhZ2U6IDQyIH07XHJcbmZ1bmN0aW9uIG9iamVjdElzKG9iaikge1xyXG4gICAgbGV0IGEgPSBvYmo7XHJcbiAgICBpZiAoYSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbn1cclxubGV0IHRtcE1vZG8gPSBvYmplY3RJcyhodWh1KTtcclxuaWYgKHRtcE1vZG8pIHtcclxuICAgIHRtcE1vZG87XHJcbn1cclxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4jICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjXHJcbiMtLS0tLS0tLS0tLS0tLS0tLS0tLVBhcnRpZSBzdXIgbGVzIGNsYXNzZXMgLS0tLS0tLS0tLS0tLS0tLSNcclxuIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1xyXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cclxuY2xhc3MgSHVtYW4ge1xyXG4gICAgZ2VuZGVyID0gXCJcIjtcclxuICAgIGhlaWdodCA9IDA7XHJcbiAgICB3ZWlnaHQgPSAwO1xyXG4gICAgX2V0bmljID0gXCJCbGFja29zXCI7XHJcbiAgICBfX2NvbG9yRXllcyA9IFwicmVkXCI7XHJcbn1cclxuY2xhc3MgUGVyc29uIGV4dGVuZHMgSHVtYW4ge1xyXG4gICAgaWQ7XHJcbiAgICBuYW1lOyAvL3B1YmxpY1xyXG4gICAgbGFzdE5hbWU7IC8vZGUgYmFzZSBwdWJsaWNcclxuICAgICNfcGFzc3dvcmQ7IC8vcHJpdsOpZSAhIHV0aWxpc2FibGUgVU5JUVVFTUVOVCBkYW5zIGxhIGNsYXNzXHJcbiAgICBfdXBwZXJQYXNzd29yZCA9IChwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwYXNzd29yZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBsYXN0TmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICBzdXBlcigpOyAvL3Blcm1ldCBzaW1wbGVtZW50IGRlIGNyw6llciBsZSBwYXJlbnQgIVxyXG4gICAgICAgIGlmICghcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gXCJ0dXR1XCI7XHJcbiAgICAgICAgdGhpcy4jX3Bhc3N3b3JkID0gdGhpcy5fdXBwZXJQYXNzd29yZChwYXNzd29yZCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX19jb2xvckV5ZXMgPSBcImJsdWVcIjtcclxuICAgIH1cclxufVxyXG5jbGFzcyBVdXNlciBleHRlbmRzIFBlcnNvbiB7XHJcbiAgICBsb2dpbjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fX2NvbG9yRXllcyA9IFwieWVsbG93XCI7XHJcbiAgICB9XHJcbn1cclxubGV0IHV1c2VyID0gbmV3IFV1c2VyKCk7XHJcbmNvbnNvbGUubG9nKHV1c2VyKTtcclxuLy9wb3VyIGZhaXJlIGjDqXJpdGVyIHVuZSBjbGFzc2UgZCd1bmUgYXV0cmUsIGV4dGVuZHMgXHJcbi8vQVRURU5USU9OICEgb24gbmUgcGV1eCBwYXMgYWNjw6lkZXIgYSB1bmUgcHJvcHMgZW5mYW50IGRlcHVpcyB1biBwYXJlbnQgIVxyXG4vL2xlIG5pdmVhdSBkZSBwb3J0w6llIGRlcyBwcm9wcyBkYW5zIGxlcyBjbGFzcyBzb250IGxlcyBzdWl2YW50IDogXHJcbi8qXHJcbnB1YmxpYyAtPiBiYXNlIC0+IHBlcm1ldCBkJ2FjY8OpZGVyIHBhcnRvdXQgw6AgdG91dFxyXG5wcml2YXRlIC0+IGxpbWl0ZSBsJ2FjY8OocyBhIGxhIGNsYXNzZSBkw6ljcml2YW50ZSAhXHJcbnByb3RlY3RlZCAtPiBsaW1pdGUgbCdhY2PDqHMgYSBsYSBjbGFzcyBkw6ljcml2YW50ZSBldCBzZXMgZW5mYW50IVxyXG4jIC0+IHBlcm1ldCBkZSByZW5kcmUgcHJpdmF0ZSAhIGV0IGRlIG5lIHBhcyBsZSB2b2lyIGVuIGRlaG9ycyBkZSBjbGFzcyAhXHJcbmF0ZW50aW9uIHF1ZSAjIGMnZXN0IHBhcyBkdSB0eXBlc2NyaXB0ICEhXHJcbi8vY29ycmVzcG9uZCDDoCB1biBzdXBlciBwcml2YXRlIGpzIHRzIHQnZXNnbm91eFxyXG5cclxub24gZGV2cmEgaW1ww6lyYXRpdmVtZW50IGFwcGVsZXIgbGUgY29uc3RydWN0ZXVyIHBhcmVudCBkYW5zIGwnZW5mYW50ICFcclxuYXZlYyBsZSBtb3QgY2zDqSBzdXBlcigpXHJcbiovXHJcbi8vQXR0ZW50aW9uIGF1IGR1Y2sgdHlwaW5nICEhIG1hdXZhaXNlIHByYXRpcXVlXHJcbmNsYXNzIFBvaW50IHtcclxuICAgIHkgPSA1O1xyXG4gICAgeCA9IDY7XHJcbn1cclxuY2xhc3MgR2VvbWV0cnkge1xyXG4gICAgeSA9IDEwO1xyXG4gICAgeCA9IDEwMDtcclxuICAgIG90aGVyMSA9IFwib2tcIjtcclxuICAgIG90aGVyID0gdHJ1ZTtcclxufVxyXG4vL0dlb21ldHJ5IGNvbnRpZW50IHRvdXRlcyBsZXMgbWVtZXMgcHJvcHMgcXVlIHBvaW50LFxyXG4vL2Fsb3JzIGdlb21ldHJ5IGVzdCB1biBwb2ludFxyXG4vL2F0dGVudGlvbiBxdWUgbCdlbnNlbWJsZSBkZXMgcHJvcHMgISEhIGRvaXMgw6p0cmVzIHByw6lzZW50ZXMgIVxyXG5mdW5jdGlvbiBnZXRYKHApIHtcclxuICAgIHJldHVybiAocC54ICogcC55KTtcclxufVxyXG5jb25zb2xlLmxvZyhnZXRYKG5ldyBQb2ludCkpO1xyXG5jb25zb2xlLmxvZyhnZXRYKG5ldyBHZW9tZXRyeSkpO1xyXG5mdW5jdGlvbiBnZXRZKHApIHtcclxuICAgIGlmIChwIGluc3RhbmNlb2YgR2VvbWV0cnkpXHJcbiAgICAgICAgcmV0dXJuIHAub3RoZXIxO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiAocC54ICogcC55KTtcclxufVxyXG5jb25zb2xlLmxvZyhnZXRZKG5ldyBQb2ludCkpO1xyXG5jb25zb2xlLmxvZyhnZXRZKG5ldyBHZW9tZXRyeSkpO1xyXG4vKmxhIG1hbmnDqHJlIGxhIHBsdXMgcHJvcHJlIGRlIGZhaXJlIMOnYSAhISEgKi9cclxuLyppbnRyb2R1Y3Rpb24gw6AgYWJzdHJhY3QgKi9cclxuY2xhc3MgR2VvbWV0cnlTIHtcclxuICAgIHg7XHJcbiAgICB5O1xyXG59XHJcbi8vY29uc29sZS5sb2cobmV3IEdlb21ldHJ5UykgLT4gY29tbWUgZWxsZSBuJ2VzdCBwYXMgRklOSUUsXHJcbi8vZWxsZSBuZSBwZXV4IMOqdHJlIGluc3RhbmNpYWJsZSBvcm1pcyBkYW5zIHNlcyBlbmZhbnQgYXZlYyBsZSBzdXBlcigpXHJcbi8vc2kgamUgZMOpZmluaSBkZXMgc2lnbmF0dXJlIGRlIG3DqXRob2RlIGRhbnMgbGEgY2xhc3NlIGFic3RyYWl0ZSwgamUgZG9pcyBsZXMgaW1wbMOpbWVudGVyIGRhbnMgbGVzIGVuZmFudHNcclxuY2xhc3MgUG9pbnRzIGV4dGVuZHMgR2VvbWV0cnlTIHtcclxuICAgIHBlcmltZXRyZSgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCArIHRoaXMueSk7XHJcbiAgICB9XHJcbiAgICBhaXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggKiB0aGlzLnkpO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBDYXJyZSBleHRlbmRzIEdlb21ldHJ5UyB7XHJcbiAgICBjb3RlO1xyXG4gICAgcGVyaW1ldHJlKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICogNCk7XHJcbiAgICB9XHJcbiAgICBhaXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggKiB0aGlzLngpO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5jb25zb2xlLmxvZyhuZXcgQ2FycmUpO1xyXG5jbGFzcyBBbGxlbWFuZGVzIHtcclxuICAgIGF2YW5jZSh2aXRlc3NlQWN0dWVsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICByZWN1bGUodml0ZXNzZVplcm8pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHJlbXBsaXJSZXNlcnZvaXIoc291c291cykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgY2FyYnVyYW50O1xyXG4gICAgdGFpbGxlVm9sYW50O1xyXG4gICAgaXNBdXRvO1xyXG4gICAgY291bGV1cjtcclxufVxyXG5jbGFzcyBBbWVybG9ja3Mge1xyXG4gICAgYXZhbmNlKHZpdGVzc2VBY3R1ZWwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHJlY3VsZSh2aXRlc3NlWmVybykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcmVtcGxpclJlc2Vydm9pcihzb3Vzb3VzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBjYXJidXJhbnQ7XHJcbiAgICB0YWlsbGVWb2xhbnQ7XHJcbiAgICBpc0F1dG87XHJcbiAgICBjb3VsZXVyO1xyXG59XHJcbi8qIGxlcyBTdGF0aWNzICovXHJcbmNsYXNzIERhdGVDb252ZXJ0ZXIge1xyXG4gICAgc3RhdGljIGNvbnZlcnRUaW1lU3RhbXBUb0RhdGUodGltZXN0YW1wKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHRpbWVzdGFtcCkpO1xyXG4gICAgfVxyXG59XHJcbmNvbnNvbGUubG9nKERhdGVDb252ZXJ0ZXIuY29udmVydFRpbWVTdGFtcFRvRGF0ZShcIjE2NjA3NDEzODRcIikpO1xyXG4vKiByZS1wYXJ0aWUgc3VyIGxlcyBnw6luw6lyaWNzICovXHJcbmxldCBvdXRwdXQ7XHJcbmZ1bmN0aW9uIGlkZW50aXR5MyhhcmdzKSB7XHJcbiAgICByZXR1cm4gYXJncztcclxufVxyXG5vdXRwdXQgPSBpZGVudGl0eTMoXCJCb25qb3VyXCIpO1xyXG5vdXRwdXQgPSBpZGVudGl0eTMoXCJCb25qb3VyXCIpO1xyXG5mdW5jdGlvbiBpZGVudGl0eTQoYXJncykge1xyXG4gICAgLy9jb25zb2xlLmxvZyhhcmdzLmxlbmd0aCkgISEgbmUgcGV1eCBwYXMgZm9uY3Rpb25uZXIgISFcclxuICAgIC8vY2FyIG9uIGVzdCBwYXMgc3VyIHF1ZSBsZW5ndGggc29pdCBkaXNwbyBwZXV4IGltcG9ydGUgbGUgdHlwZSBwYXNzw6lcclxuICAgIHJldHVybiBhcmdzO1xyXG59XHJcbm91dHB1dCA9IGlkZW50aXR5NCg0Mik7XHJcbmZ1bmN0aW9uIGlkZW50aXR5NShhcmdzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhcmdzLmxlbmd0aCk7XHJcbiAgICAvL3BldXggZm9uY3Rpb25uZXIgY2FyIGRhbnMgdG91dCBsZXMgY2FzLCBsZSBUeXBlW10gcG9zc8OoZGUgYXJyYXkgISBldCBkb25jIGxlbmd0aFxyXG4gICAgcmV0dXJuIGFyZ3M7XHJcbn1cclxub3V0cHV0ID0gaWRlbnRpdHk1KFtcImxvaWNcIiwgXCJiYXVkb3V4XCJdKTtcclxuLyogY2xhc3MgZ8OpbsOpcmlxdWUgISAqL1xyXG5jbGFzcyBHZW5lcmljTnVtYmVyIHtcclxuICAgIHplcm9WYWx1ZTtcclxuICAgIGFkZDtcclxufVxyXG5sZXQgbmIgPSBuZXcgR2VuZXJpY051bWJlcigpO1xyXG5uYi56ZXJvVmFsdWUgPSAwO1xyXG5uYi5hZGQgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgcmV0dXJuIHggKyB5O1xyXG59O1xyXG5mdW5jdGlvbiBsb2dnaW5nSShhcmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGFyZy5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIGFyZztcclxufVxyXG4vL2xvZ2dpbmdJKDMpXHJcbi8vbidhY2NlcHRlIHBhcyBjYXIgaWwgbifDqXRlbmQgcGFzIGRlIGxlbmd0aCAhIGVsbGUgbidlc3QgcGFzIGNvbXBhdGlibGUgY29tbWUgbCdlc3QgdW4gdGFibGVhdVxyXG5sb2dnaW5nSShbMSwgMiwgMywgNF0pO1xyXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSkge1xyXG4gICAgcmV0dXJuIG9ialtrZXldO1xyXG59XHJcbi8vamUgZGVtYW5kZSBhIGNlIHF1ZSBsZSBUeXBlIHBhc3PDqSBlbiBwYXJhbSwgYWllIHBhciBsYSBtw6ptZSBvY2Nhc2lvblxyXG4vL3VuZSBjbMOpIHF1aSBmYWl0IHBhcnRpZSBkZSBUeXBlXHJcbi8vZG9uYyA6IHNpIGonYWkgLT5cclxubGV0IHggPSB7IGE6IDEsIGI6IDIsIGM6IDMsIGQ6IDQgfTtcclxuZ2V0UHJvcGVydHkoeCwgXCJhXCIpO1xyXG5mdW5jdGlvbiBhemUoYSwgYiwgYykge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn1cclxuY2xhc3MgRW1wbG95ZWUge1xyXG59XHJcbmZ1bmN0aW9uIGZpbmRFbXBsb3llZXMobmFtZSwgYWdlLCBsb2NhdGlvbikge1xyXG4gICAgLy9JbXBsZW1lbnRhdGlvbiBTaWduYXR1cmVcclxuICAgIHJldHVybiBuZXcgRW1wbG95ZWVbNV07XHJcbn1cclxuLy9wZXJtZXQgZCdpbXBvcnRlciBsZXMgZGV1eCBmb25jdGlvbnMgdGVzdDEgZXQgdGVzdDJcclxuaW1wb3J0ICogYXMgdGVzdCBmcm9tICcuL2V4ZW1wbGVzL2V4ZW1wbGVJbXBvcnRBcyc7XHJcbi8vY2FyIG9uIGEgZXhwb3J0IGRlcyBwcm9wcyBldCBvbiBsZXMgYSBtaXNlIGRhbnMgdGVzdCBcclxudGVzdC5ub20xO1xyXG50ZXN0Lm5vbTI7XHJcbnRlc3QuTm9tQ2xhc3NlO1xyXG50ZXN0LmNvbXB0ZXVyKCk7XHJcbnRlc3Qubm9tRm9uY3Rpb24oKTtcclxuLy9ldCBkb25jICBvbiBwZXV4IGZhaXJlIFxyXG5pbXBvcnQgeyBleG9zMSB9IGZyb20gXCIuL2V4b3MvZXhvczFcIjtcclxubmV3IGV4b3MxKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==