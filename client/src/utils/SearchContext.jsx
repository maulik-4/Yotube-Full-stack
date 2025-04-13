import  React,{ createContext,useContext,useState } from "react";



export const SearchContext = createContext();

export const SearchProvider =({children }) =>{
    const [search,setsearch] = useState("");
    return (
        <SearchContext.Provider value={{search,setsearch}}>
            {children }
        </SearchContext.Provider>
    )
}
export const useSearch = () => useContext(SearchContext);