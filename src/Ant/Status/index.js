import React from 'react';

import { CALC_STATUS } from '../../utils';

const Status = ({ calculateStatus, chance }) => {
  let statusContent = null;

  switch (calculateStatus) {
    case CALC_STATUS.notRun: {
      statusContent = (
        <div className="chance">
          {CALC_STATUS.notRun}
        </div>
      );
      break;
    }
    case CALC_STATUS.inProgress: {
      statusContent = (
        <div className="chance">
          {CALC_STATUS.inProgress}
        </div>
      );
      break;
    }
    case CALC_STATUS.finish: {
      statusContent = (
        <div className="chance">
          <span>
            {CALC_STATUS.finish}
          </span>
          <span>
            {Math.round(chance * 10000) / 100} %
          </span>
        </div>
      );
      break;
    }
    default:
  }

  return statusContent;
};

export default Status;
