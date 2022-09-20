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
// const o : HTMLSpanElement = new HTMLSpanElement()
// const p : Element = new Element()


export let mesTypes = {
    a, b, c, d, e, f, g, h, i, j, k, l, m, n
}
//j'exporte grace à module.exports, un objet lambda, qui contiendra toute mes variable
//ce qui par la suite, dans notre index.ts, nous évitera des erreurs de nommage de variable déjà existante