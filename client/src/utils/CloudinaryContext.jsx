import {  createContext, useContext, useState } from "react";

const CloudinaryContext = createContext();

export const CloudinaryProvider = ({children}) =>{
    const [imageUrl,setImageUrl] = useState("");
    return (
        <CloudinaryContext.Provider value={{imageUrl,setImageUrl}}>
            {children}

        </CloudinaryContext.Provider>
    )
};
export const  useCloudinary =  ()=> useContext(CloudinaryContext);