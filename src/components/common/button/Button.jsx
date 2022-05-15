import React from 'react';
import { bool, func, string } from 'prop-types';

import { getClassNames } from '../../../tools/general/helpers.util';
import SVGIcon from '../../../tools/icons/SVGIcon';
import ToolTip from '../tool-tip/ToolTip';

import './button.scss';

const Button = ({
                  name,
                  type,
                  label,
                  onClick,
                  disabled,
                  flex,
                  login,
                  blue,
                  white,
                  icon,
                  tooltip,
                  leftAlignedTooltip
                }) => {
  return (
    <button className={ getClassNames('button', { disabled, flex, login, blue, white, icon }) }
            name={ name }
            type={ type }
            onClick={ onClick }
            disabled={ disabled }>
      <label>{ label } </label>
      { tooltip && <ToolTip text={ tooltip }
                            left={ leftAlignedTooltip } /> }
      { icon && <SVGIcon name={ icon }
                         fill={ '#043b6e' } /> }
    </button>
  );
};

Button.defaultProps = {
  name: undefined,
  type: 'button',
  label: undefined,
  onClick: undefined,
  disabled: false,
  flex: false,
  login: false,
  blue: false,
  white: false,
  icon: undefined
};

Button.propTypes = {
  name: string,
  type: string,
  label: string,
  onClick: func,
  disabled: bool,
  flex: bool,
  login: bool,
  blue: bool,
  white: bool,
  icon: string,
  active: bool
};

export default Button;
