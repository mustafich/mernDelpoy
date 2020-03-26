export function ActionLogin(payload) {

    return {
        type: "ACTIONS_BACK_CATEGORIES",
        payload
    }
}


export function renderBackCategories(url,body) {

    return (dispatch) => {
        try {
           setTimeout(()=>{
               fetch( url,{
                   method: 'POST',
                   body: JSON.stringify({...body}),
                   headers: {
                       'content-type': 'application/json'
                   }
               }).then( async response => {
                   return response.json();
               })
                   .then(async response =>{
                       setTimeout(()=>{
                           dispatch(ActionLogin(response))
                           return response
                       },100)
                   })
                   .catch(()=>{

                   });
           },100)

        }
        catch (e) {

        }

    }
}