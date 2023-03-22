import { DECREASE, INCREASE, RESET } from "../types/conterTypes"

export const inc = ()=> {
    return{type:INCREASE }
}

export const dec = ()=> ({type: DECREASE})

export const reset = ()=> ({type: RESET})