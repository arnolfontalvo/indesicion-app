/*jslint node: true */
/*jshint -W079 */
'use strict';

import React from 'react';

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove option
      </button>
    </div>
  );
};

export default Option;