import { createContext, useState } from 'react';

const MakerlogContext = createContext();

const MakerlogContextProvider = ({ children }) => {
  const [makerlogs, setMakerlogs] = useState([]);
  const onMakerlogFormSubmitHandler = (newMakerlogs) => {
    setMakerlogs(newMakerlogs);
  };

  return (
    <MakerlogContext.Provider value={{ makerlogs }}>
      {children}
    </MakerlogContext.Provider>
  );
};

export { MakerlogContextProvider, MakerlogContext };
