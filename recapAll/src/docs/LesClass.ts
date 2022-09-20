



/*###########################################################
#                                                           #
#--------------------Partie sur les classes ----------------#
#                                                           #
#############################################################*/

class Human{
    public gender : string = ""  //public dispo partout !
    public height : number = 0
    public weight : number = 0

    private _etnic : string = "Blackos" //private dispo que dans elle meme (en ts !)
    protected __colorEyes : string = "red"//dispo dans elle même et dans ses héritier (en ts !)
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
/* Encapsulation des variables : 
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

class Triangle extends GeometryS{
    perimetre(): number {
        throw new Error("Method not implemented.")
    }
    air(): number {
        throw new Error("Method not implemented.")
    }
}

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

    name : string = "Vive les allemandes"

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

    name : string = "Vive les dodge ram"

}

let merco : Allemandes = new Allemandes()
merco.name
let audi : Voiture = new Allemandes()
//audi.name 

//exemple parlant pratique
class User{
    name : string = "tuefefeftu"
    pwd : string
    email : string
    uuid : string
    eid : string
    tva : number
    prime : number
    vip : boolean
    getName() : string{
        return this.name
    }

}


interface IUser_vip{
    name : string
    pwd : string
    email : string
    uuid : string
    eid : string
    tva : number
    prime : number
    vip : boolean
    getName : () => {}
}

interface IUser_Boulet{
    name : string
    email : string
    uuid : string
    tva : number
}


let u1 : IUser_vip = new User()
let u2 : IUser_Boulet = new User()
u1.vip = true
u2.email
console.log(u1.getName())



/* les Statics */
class DateConverter
{
    static convertTimeStampToDate(timestamp : string) : Date{
        return new Date(parseInt(timestamp))
    }
}

console.log(DateConverter.convertTimeStampToDate("1660741384"))