export function ActionLogin(payload) {

    return {
        type: "ACTIONS_LOGIN",
        payload
    }
}
export function ActionInfo(payload) {

    return {
        type: "ACTIONS_INPUTINFO",
        payload
    }
}


export function LoginFetch(url,body) {
    return (dispatch) => {
        try {
            fetch( url,{
                method: 'POST',
                body: JSON.stringify({...body}),
                headers: {
                    'content-type': 'application/json'
                }
            }).then( async response => {
                return response.json();
            })
                .then(response =>{
                    dispatch(ActionLogin(response))
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