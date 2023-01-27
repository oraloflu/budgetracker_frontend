import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

function AppProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    

    return (
        <AppContext.Provider value={{
            isModalOpen,
            setIsModalOpen
        }}>
          {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
