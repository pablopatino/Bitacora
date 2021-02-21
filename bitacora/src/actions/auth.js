import { bindActionCreators } from "redux"
import { types } from "../types/types"


export const startlogin = ( uid ,user ) => ({

    type: types.login,
    payload:{
        uid,
        user
    }
    
    })

export const StartLogOut = () => ({

    type: types.logOut

})

