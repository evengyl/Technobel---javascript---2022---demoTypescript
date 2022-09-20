
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


//par exemple un type custom assez sympa c'est
type Id = string | number
type DateString = string 

let idtmpType : Id = "42"
console.log(idtmpType)

let dateTmp : DateString = "01/06/1991"
console.log(dateTmp)
