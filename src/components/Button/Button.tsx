import React from "react";
import classNames from "classnames";
import "./button.css";

export interface ButtonProps {
  /** Button theme select */
  primary: "primary" | "secondary" | "outlined";
  /** Button size select */
  size: "large" | "medium" | "small";
  /** Button disable */
  disabled?: boolean;
  /** Button contents */
  children: React.ReactNode;
  /** Button click handler */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  primary = "primary",
  size = "medium",
  children,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        "storybook-button",
        `storybook-button--${primary}`,
        `storybook-button--${size}`
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  primary: "primary",
  size: "medium",
  label: "Button",
  disabled: false,
};

export default Button;
