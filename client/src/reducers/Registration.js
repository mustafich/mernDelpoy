const initialState = {
        errorEmail: {
            name: null,
            message: null,
        },
}

export function Registration(state = initialState, action) {
    switch(action.type){
        case "ACTIONS_REGISTRATION":
            if (action.payload.status === true) {
                return {
                    ...state,
                    errorEmail: {
                        name: null,
                        message: null
                    },
                }
            }  else if(action.payload.status === false){
                let nameError =action.payload.name
                let messageError =action.payload.message
                return {
                    ...state,
                    errorEmail: {
                        name: nameError,
                        message: messageError,
                    },
                    errorPassword: {
                        name: null,
                        message: null,
                    }
                };
            }

            return state;
    }
    return state
}


