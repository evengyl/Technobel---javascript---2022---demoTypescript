/* indexation */
const p = { 0 : "loic", 1 : 42}
//ici je me retrouve avec un simple tableau classique assosiatif..
console.log(p[0])
//l'indexation, transforme fictivement un objet en tableau assoc

const q = { firstName : "baudoux", age : 31 }
console.log(q.age)
console.log(q.firstName)
console.log(q["firstName"]) // == console.log(q.firstName) mais en nettement moins propre et plus dangeureux sur les undefined et unknow
//autre exemple...