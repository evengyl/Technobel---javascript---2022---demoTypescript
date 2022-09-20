import {mesTypes} from "./docs/types"

import * as exportLambda from "./docs/exempleExportLambda"


/*###########################################################
#                                                           #
#--------------------Les décorteurs         ----------------#
#                                                           #
#############################################################*/
function Constraint({min, max} : {min : number, max : number})
{
    //si on veux rester générique
    
    // return function(target : Users, key : keyof Users){

    // }

    // return function (target : Users, key : 'age'){

    // }
    //ici c'est totalement utilisable uniquement sur une prop de age

    //ou alors avec des générique total
    return function<T>(target : T, key : keyof T)
    {
        let val = target[key] as any

        const getter = () => {
            return val
        }

        const setter = (v : unknown) => {

            console.log(v)
            if(typeof v === 'number' &&
                v > min && v < max)
            {
                val = v
                return
            }

            throw new Error(`on attend un nombre entre ${min} et ${max}`)
        }

        Object.defineProperty(target, key, {
            set : setter,
            get : getter
        })
    }
}

class Userss{

    @Constraint({min : 0, max: 100})
    age : number
}

const u = new Userss()
u.age = 150


