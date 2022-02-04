import { createContext, useContext, useReducer } from 'react';

const initialState = 0;
const ScoreContext = createContext(initialState);

const scoreReducer = (score, action) => {
  if (action === 'increase') {
    score++;
  } else if (action === 'decrease' && score > 0) {
    score--;
  }

  return score;
};

const ScoreProvider = ({ children }) => {
  const [score, scoreDispatch] = useReducer(scoreReducer, initialState);

  return (
    <ScoreContext.Provider
      value={{
        score,
        scoreDispatch,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

const useScore = () => {
  return useContext(ScoreContext);
};

export { ScoreProvider, useScore };
