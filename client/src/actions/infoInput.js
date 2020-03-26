export function ActionLogin(payload) {

    return {
        type: "ACTIONS_INPUTINFO",
        payload
    }
}



export function saveImgApi(url,body) {
    return (dispatch) => {
        try {
            fetch( url,{
                method: 'POST',
                body: JSON.stringify({...body}),
                headers: {
                    'content-type': 'application/json'
                }
            }).then( async response => {
                return await response.json();
            })
                .then(async response =>{

                    dispatch(ActionLogin(response))
                })
                .then(response => {
                    return response
                })
                .catch(()=>{

                    dispatch(ActionLogin(body))
                });

        }
        catch (e) {
            console.log(124)
        }

    }
}