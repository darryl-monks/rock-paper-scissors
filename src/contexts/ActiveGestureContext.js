import { createContext, useContext, useState } from 'react';

const DEFAULT_ACTIVE_GESTURE = null;

const ActiveGestureContext = createContext();

const ActiveGestureProvider = ({ children }) => {
  const [activeGesture, setActiveGesture] = useState(DEFAULT_ACTIVE_GESTURE);

  return (
    <ActiveGestureContext.Provider
      value={{
        activeGesture,
        setActiveGesture,
      }}
    >
      {children}
    </ActiveGestureContext.Provider>
  );
};

const useActiveGesture = () => {
  return useContext(ActiveGestureContext);
};

export { ActiveGestureProvider, useActiveGesture };
