
import Client from './Client';

export default {
    register: (body)=> {
    //    console.log("api",body);
       return Client.post("/register", body)
    }, 
    jsonData: ()=> axios.get("https://jsonplaceholder.typicode.com/users"), 
    delete:   ()=> alert(body),
    
}


