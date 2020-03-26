import {ActionRegistration} from "../actions/registration";
import {loginFetchData} from "./login";


    export function saveImgApi(url,body) {

            try {
                fetch( url,{
                    method: 'PUT',
                    body: JSON.stringify({...body}),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then( async response => {
                    return await response.json();
                })
                    .then(response => {
                        console.log(response)
                        return response
                    })
                    .catch((e)=>{

                    });

            }
            catch (e) {

            }

    }