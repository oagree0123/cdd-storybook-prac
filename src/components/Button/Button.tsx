import React from "react";
import { css, styled } from "styled-components";

const setButtonTheme = ({
  primary
}: {
  primary: "primary" | "secondary" | "outlined"
}) => {
  switch (primary) {
    case "primary": {
      return css`
        background-color: #4c6ef5;
        &:hover {
          background-color: #364fc7;
        }
        &:disabled {
          background-color: #dbe4ff;
        }
      `;
    }
    case "secondary": {
      return css`
        background-color: #ff922b;
        &:hover {
          background-color: #f76707;
        }
        &:disabled {
          background-color: #ffe8cc;
        }
      `;
    }
    case "outlined": {
      return css`
        color: #4c6ef5;
        border: 1px solid #4c6ef5;
        background-color: #fff;
        &:hover {
          background-color: #e7f5ff;
        }
        &:disabled {
          color: #d0ebff;
          border: 1px solid #d0ebff;
          background-color: #fff;
        }
      `;
    }
  }
};

const setButtonSize = ({
  size
}: {
  size: "large" | "medium" | "small"
})  => {
  switch (size) {
    case "large": {
      return css`
        height: 48px;
        font-size: 16px;
        padding: 12px 15px;
      `;
    }
    case "medium": {
      return css`
        height: 40px;
        font-size: 16px;
        padding: 8px 15px;
      `;
    }
    case "small": {
      return css`
        height: 32px;
        font-size: 14px;
        padding: 4px 15px;
      `;
    }
  }
};

interface ButtonProps {
  /** Button theme select */
  primary: "primary" | "secondary" | "outlined";
  /** Button size select */
  size: "large" | "medium" | "small";
  /** Button disable */
  disabled?: boolean;
  /** Button contents */
  children: React.ReactNode;
  /** Button click handler */
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  primary,
  size,
  children,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <DefaultButton
      primary={primary}
      size={size}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </DefaultButton>
  );
};

Button.defaultProps = {
  primary: "primary",
  size: "medium",
  label: "Button",
  disabled: false,
};

const DefaultButton = styled.button<ButtonProps>`
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