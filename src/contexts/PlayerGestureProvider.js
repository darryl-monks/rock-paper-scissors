import { createContext, useContext, useState } from 'react';

const PlayerGestureContext = createContext();

const PlayerGestureProvider = ({ children }) => {
  const [playerGesture, setPlayerGesture] = useState(null);

  return (
    <PlayerGestureContext.Provider
      value={{
        playerGesture,
        setPlayerGesture,
      }}
    >
      {children}
    </PlayerGestureContext.Provider>
  );
};

const usePlayerGesture = () => {
  return useContext(PlayerGestureContext);
};

export { PlayerGestureProvider, usePlayerGesture };
