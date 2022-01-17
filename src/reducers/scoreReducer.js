const scoreReducer = (score, action) => {
  if (action === 'increase') {
    score++;
  } else if (action === 'decrease' && score > 0) {
    score--;
  }

  return score;
};

export default scoreReducer;
