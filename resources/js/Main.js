import React from "react";
import ReactDOM, { render } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Register from "./pages/Register";
import 'antd/dist/antd.css';
import Ecommerce from "./pages/EcommerceHome";

// const Main = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>    
                <Route path="contact" element={<Contact />} />  
                <Route path="register" element={<Register />} />  
                <Route path="ecommerce" element={<Ecommerce/>} />  


            </Routes>
            </BrowserRouter>)

    // return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home />}>
        //             <Route index element={<Contact />} />  
        //         </Route>    

        //     </Routes>
        // </BrowserRouter>
    // )
// }

// export default Main;

// if (document.getElementById("root")) {
//     ReactDOM.render(<Main />, document.getElementById("root"));
// }
