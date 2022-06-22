import { useState } from "react"

export default (apiFunc)=>{


const [data, setData]   = useState();
const [error, setError] = useState("")



const request = async(...args)=>{

    try{
        const result = await apiFunc
        setData(result.data.data)
        // console.log(result.data.data)
    }catch(err){
        console.log(err)
    }
}

console.log("State", data)
    return {
        data, 
        error,
        request

    }




}