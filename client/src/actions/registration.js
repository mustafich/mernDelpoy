export function ActionRegistration(payload) {

    return {
        type: "ACTIONS_REGISTRATION",
        payload
    }
}
export function ActionInfo(payload) {
    return {
        type: "ACTIONS_INPUTINFO",
        payload
    }
}


export function RegistrationFetch(url,body) {
    return (dispatch) => {
        try {
            fetch( url,{
                method: 'POST',
                body: JSON.stringify({...body}),
                headers: {
                    'content-type': 'application/json'
                }
            }).then( async response => {
                return response.json()
            })
                .then(response =>{
                    dispatch(ActionRegistration(response))
                    dispatch(ActionInfo(response))
                    return response
                })
                .catch(()=>{

                });

        }
        catch (e) {

        }

    }
}