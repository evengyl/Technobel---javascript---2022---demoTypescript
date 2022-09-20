/*###########################################################
#                                                           #
#--------------------Exos 1 - le Typage --------------------#
#                                                           #
#############################################################*/

//Créer un code permettant de créer un compteur classique, avec + 1, -1 et =..., 
//il faudra type le tout au maximum, préparer 2 fonctions pour ça

export class exos1{

    constructor()
    {

        let btnInc = document.querySelector("#increment") as HTMLButtonElement | null
        let btnDec = document.querySelector("#decrement") as HTMLButtonElement | null
        let res = document.querySelector("#res") as HTMLInputElement | null

        
        while(res == null)
        {
            res = document.createElement("input") as HTMLInputElement
            res.id = "res"
            res.type = "number"
            res.value = "0"
            document.body.appendChild(res)
        }
        
        
        
        if(btnInc)
        {
            btnInc.addEventListener("click", (e : MouseEvent) => {
                e.preventDefault()
                
                if(res) res.valueAsNumber++
            })
        }
        
        if(btnDec)
        {
            btnDec.addEventListener("click", (e : MouseEvent) => {
                e.preventDefault()
                
                if(res) res.valueAsNumber--
            })
        }
    }
}