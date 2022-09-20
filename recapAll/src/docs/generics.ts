
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


