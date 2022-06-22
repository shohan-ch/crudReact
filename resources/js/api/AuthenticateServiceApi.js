
import Client from './Client';

export default {
    register: (body)=> {
       return Client.get("/register", body)
    }, 
    delete:   ()=> alert(body),
    
}


