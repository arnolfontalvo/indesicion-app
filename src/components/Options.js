/*jslint node: true */
/*jshint -W079 */
'use strict';

import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__tittle">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions} disabled={!props.hasOptions}>
        Remove All
    </button>
    </div>
    {props.options.length === 0 && <p className="widget widget_message">Please add an option to get started!</p>}
    {
      props.options.map((option, index) => (
        <Option
          key={option}
          count={index + 1}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      )
      )
    }
  </div>
);

export default Options;