import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [suggestedSearch, setsuggestedSearch] = useState([]);

    return (
        <SearchContext.Provider value={{ products, setProducts, suggestedSearch, setsuggestedSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchStore = () => useContext(SearchContext);
