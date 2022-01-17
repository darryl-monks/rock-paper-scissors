import { createContext, useReducer } from 'react';
import scoreReducer from '../reducers/scoreReducer';

const DEFAULT_SCORE = 0;

export const ScoreContext = createContext();

export const ScoreContextProvider = ({ children }) => {
  const [scoreCount, scoreDispatch] = useReducer(scoreReducer, DEFAULT_SCORE);

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
