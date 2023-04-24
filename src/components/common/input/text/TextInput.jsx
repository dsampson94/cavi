import React from 'react';

import { bool, func, string } from 'prop-types';

import { getClassNames } from '../../../../tools/general/helpers.util';

import './text-input.scss';

const TextInput = ({
                     label,
                     name,
                     value,
                     placeholder,
                     onChange,
                     onClick,
                     onKeyDown,
                     disabled,
                     type,
                     login,
                     left,
                     chartbar,
                     topbar,
                     centered,
                     select,
                     wide,
                     input,
                     table,
                     autoFocus,
                     ref,
                     defaultValue,
                     onMouseEnter,
                     onMouseOver,
                     onDoubleClick,
                     popup
                   }) => {

  return (
    <div className={ getClassNames('text-input', { disabled, login, left, chartbar, topbar, centered, select, wide, input, table, popup }) }>
      { label && <div className={ getClassNames('text-input__label-container', { login, left, centered }) }>
        <label>{ label }</label>
      </div> }
      <input name={ name }
             ref={ ref }
             value={ value }
             defaultValue={ defaultValue }
             onClick={ onClick }
             onDoubleClick={ onDoubleClick }
             placeholder={ placeholder }
             onChange={ onChange }
             onKeyDown={ onKeyDown }
             onMouseEnter={ onMouseEnter }
             onMouseOver={ onMouseOver }
             disabled={ disabled }
             type={ type }
             autoFocus={ autoFocus }
             className={ getClassNames('text-input__input', { login, chartbar, table, select, wide, input, popup }) } />
    </div>
  );
};

TextInput.propTypes = {
  label: string,
  name: string,
  value: string,
  placeholder: string,
  onChange: func,
  onKeyPress: func,
  disabled: bool,
  type: string,
  login: bool
};

export default TextInput;
