import { useRef } from "react"
import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
    
    const mounted = useRef(true);
    const [state, setState] = useState({
        data:null,loading:true, error:null})
    
    useEffect(() => {
    
        return () => {
            mounted.current=false;
        }
    }, [])
    

    useEffect(() => {
        
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                
                if(mounted.current){
                        setState({
                            loading:false,
                            error:null,
                            data 
                        })    
                    console.log(mounted.current)
                }                 
                
            });
    },[url])
    
    return state

}
