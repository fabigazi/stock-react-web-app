import { createContext, useState } from 'react';

const context = createContext();

export const FilterProvider = ({ children }) => {
    const thisYear = new Date().getFullYear();
    const [year, setYear] = useState(thisYear);

    return (
        <context.Provider
            value={{
                year,
                setYear,
            }}
        >
            {children}
        </context.Provider>
    );
};

export default context;