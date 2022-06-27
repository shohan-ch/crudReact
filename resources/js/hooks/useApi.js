import { useState } from 'react';

export default (apiFunc)=>{

    const [data,setData] = useState([]);
    const [error,setError] = useState("");


    const request = async (...args)=>{
        try{
           const result = await apiFunc(...args);
           console.log(result);
        //    console.log("fromHook",result.data.message)
           setData(result.data.message||result.data) 

        }catch(e){
            console.log(e)
            setError(e.response)
        }

    }

    return {
        data, 
        error,
        request
    }











}