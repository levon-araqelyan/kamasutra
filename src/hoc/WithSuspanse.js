import React from "react"
import Loading from "../components/Loading/Loading";



export const WithSuspanse = (Component)=>{
    return props => {
        return <React.Suspense fallback={<Loading/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}