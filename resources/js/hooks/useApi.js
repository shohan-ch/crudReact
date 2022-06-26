import { useState } from "react"

export default (apiFunc)=>{


const [data, setData]   = useState([]);
const [error, setError] = useState("")



const request = async(...args)=>{

    try{
        console.log("restParam",args);
        const result = await apiFunc(...args);
        console.log("UseApi",result.data)
        // setData(result.data.data);

        // console.log(result)

        setData(result.data)
        // console.log(result.data.data)
    }catch(e){
        // setError(e)
        console.log(e)
    }
}

console.log("State", data)

    return {
        data, 
        error,
        request

    }




}