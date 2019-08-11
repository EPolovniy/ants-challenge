export const generateAntWinLikelihoodCalculator = () => {
  var delay = 7000 + Math.random() * 7000;
  var likelihoodOfAntWinning = Math.random();

  return function(callback) {
    setTimeout(function() {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
};

export const CALC_STATUS = {
  notRun: 'Not yet run',
  inProgress: 'In progress',
  finish: 'Calculated'
};
