const initialState = {
    Authenticated: {
        token: false,
        userId: false,
        isAuthenticated: false,
    },
    user: {
        _id: null,
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        city: null,
        password: null
    },
    errorEmail: {
        name: null,
        message: null,
    },
    errorPassword: {
        name: null,
        message: null,
    },
    infoBackend: {
        status: null,
        name: null,
        message: null
    }
}

export function Login(state = initialState, action) {

    switch (action.type) {
        case "ACTIONS_LOGIN":

            let token = action.payload.token
            let userId = action.payload.userId
            if (action.payload.status === true) {
                return {
                    ...state,
                    Authenticated: {
                        token: token,
                        userId: userId,
                        isAuthenticated: true
                    },
                    user: action.payload.user,
                    errorEmail: {
                        name: null,
                        message: null,
                    },
                    errorPassword: {
                        name: null,
                        message: null,
                    }
                };
            } else if (action.payload.name === "email") {

                let nameError = action.payload.name || null
                let messageError = action.payload.message || null
                return {
                    ...state,
                    Authenticated: {
                        token: null,
                        userId: null,
                    },
                    errorEmail: {
                        name: nameError,
                        message: messageError,
                    },
                    errorPassword: {
                        name: null,
                        message: null,
                    }
                };
            } else if (action.payload.name === "password") {

                let nameError = action.payload.name || null
                let messageError = action.payload.message || null
                return {
                    ...state,
                    Authenticated: {
                        token: token,
                        userId: userId,
                    },
                    errorEmail: {
                        name: null,
                        message: null,
                    },
                    errorPassword: {
                        name: nameError,
                        message: messageError,
                    }
                };
            } else if (action.payload.status === false) {

                return {
                    ...state,
                    Authenticated: {
                        token: false,
                        userId: false,
                        isAuthenticated: false
                    },
                    user: action.payload.status,
                    errorEmail: {
                        name: null,
                        message: null,
                    },
                    errorPassword: {
                        name: null,
                        message: null,
                    }
                };
            }
            return state;
        case "ACTIONS_BACK_CATEGORIES":

            return {
                ...state,
                user:action.payload.user,
            }
    }
    return state
}


