import React, {RefObject, useRef} from "react";
import {useButton} from "react-aria";
import type {AriaButtonProps} from "@react-types/button";
import "./style.scss";


interface ButtonProps extends AriaButtonProps {

  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;

  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * How large should the button be????
   */
  size: "small" | "medium" | "large";

  /**
   * Button contents
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Controls disabled state
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 *
 */
export const Button = ({
	primary = false,
	size = "medium",
	backgroundColor = "#fff",
	label,
	...props
}: ButtonProps): React.ReactElement => {
  const ref: RefObject<HTMLButtonElement> = useRef(null);
  const buttonProps = useButton(props, ref);
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
		<button
			type="button"
			className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
			style={{backgroundColor}}
			{...props}
    {...buttonProps}
		>
			{label}
		</button>
  );
};

