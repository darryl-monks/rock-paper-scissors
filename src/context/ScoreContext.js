import { createContext, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'increase':
      return state + 1;
    case 'decrease':
      if (state > 0) {
        return state - 1;
      }
      return state;
    default:
      return state;
  }
};

export const ScoreContext = createContext();

export const ScoreContextProvider = ({ children }) => {
  const [scoreCount, scoreDispatch] = useReducer(reducer, 0);

  return (
    <ScoreContext.Provider
      value={{
        scoreCount,
        scoreDispatch,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
