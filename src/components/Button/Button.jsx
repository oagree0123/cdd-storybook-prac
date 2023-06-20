import React from 'react';
import PropTypes from 'prop-types';
import { css, styled } from 'styled-components';

const setButtonTheme = ({ primary }) => {
  switch (primary) {
    case 'primary': {
      return css`
        background-color: #4C6EF5;
        &:hover {
          background-color: #364FC7;
        }
        &:disabled{
          background-color: #DBE4FF;
        }
      `;
    }
    case 'secondary': {
      return css`
        background-color: #FF922B;
        &:hover {
          background-color: #F76707;
        }
        &:disabled{
          background-color: #FFE8CC;
        }
      `;
    }
    case 'outlined': {
      return css`
        color: #4C6EF5;
        border: 1px solid #4C6EF5;
        background-color: #fff;
        &:hover {
          background-color: #E7F5FF;
        }
        &:disabled{
          color: #D0EBFF;
          border: 1px solid #D0EBFF;
          background-color: #fff;
        }
      `;
    }
  }
};

const setButtonSize = ({ size }) => {
  switch (size) {
    case 'large': {
      return css`
        height: 48px;
        font-size: 16px;
        padding: 12px 15px;
      `;
    }
    case 'medium': {
      return css`
        height: 40px;
        font-size: 16px;
        padding: 8px 15px;
      `;
    }
    case 'small': {
      return css`
        height: 32px;
        font-size: 14px;
        padding: 4px 15px;
      `;
    }
  }
};

export const Button = ({ 
  primary,
  size,
  label,
  onClick,
  disabled,
  ...props 
}) => {
  return (
    <DefaultButton
      primary={primary}
      size={size}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </DefaultButton>
  );
};

const DefaultButton = styled.button`
  font-weight: 700;
  line-height: 24px;
  color: #fff;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;

  ${(props) => setButtonTheme(props)}
  ${(props) => setButtonSize(props)}
`;

Button.propTypes = {
  /**
   * Button theme select
   */
  primary: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  /**
   * Button size select
   */
  size: PropTypes.oneOf(['large', 'medium', 'small' ]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Button contents
   */
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: 'primary',
  size: 'medium',
  label: 'Button',
  onClick: undefined,
  disabled: false
};


