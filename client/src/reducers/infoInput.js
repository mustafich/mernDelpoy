const initialState = {
        status: null,
        name: null,
        message: null
}
export function InputInfo (state = initialState, action) {
    switch(action.type){
        case "ACTIONS_INPUTINFO":
            if (action.payload.status !== null) {

                return {
                    ...state,
                        status: action.payload.status,
                        name: action.payload.name,
                        message: action.payload.message
                };
            }
            return state;
    }
    return state
}


