import {useState,useCallback} from "react"

export const useHttp=()=>{
    const [loading,setLoadinf] = useState(false)
    const [error,serError] = useState(null)

    const request  = useCallback(async (url,method="GET",body = null, headers={})=>{
          setLoading(true)
            try {
                const response = await fetch(url,{method,body,headers})
                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.message||"Что-то пошло не так")
                }
                setLoading(false)
                return data
            }
            catch (e) {
                setLoading(false)
                serError(e.message)
                throw e
            }
    },[])
const clearError = ()=>serError(null)
    return {loading, request,error,clearError}
}