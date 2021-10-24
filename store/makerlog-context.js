import { createContext, useState } from 'react';

const MakerlogContext = createContext();

const MakerlogContextProvider = ({ children }) => {
  const [makerlogs, setMakerlogs] = useState([]);

  const makerlogContext = {
    makerlogs,
    setMakerlogs,
  };

  return (
    <MakerlogContext.Provider value={makerlogContext}>
      {children}
    </MakerlogContext.Provider>
  );
};

export { MakerlogContextProvider, MakerlogContext };
