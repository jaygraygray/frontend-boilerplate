import React, {RefObject, useRef} from "react";
import {useButton} from "react-aria";
import type {AriaButtonProps} from "@react-types/button";
import {parseBootstrapClassName, modifyBootStrapButtonClassname} from "./utils"; 
import "./style.scss";


interface ButtonProps extends AriaButtonProps {

  /**
   * What category of action this button represents.
   */
  actionType?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "link";

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

  /**
   * Display outline version of button
   */
   outline?: boolean;

}

  /**
 * Primary UI component for user interaction
 *
 */

export const Button = ({
	actionType = "primary",
	size = "medium",
	label,
  outline = false,
	...props
}: ButtonProps): React.ReactElement => {
  const ref: RefObject<HTMLButtonElement> = useRef(null);
  const {buttonProps} = useButton(props, ref);
  const sizeString = size ? parseBootstrapClassName(size) : undefined;

  const type = modifyBootStrapButtonClassname(outline, actionType);
  
  const className = `btn ${type} ${sizeString}`;

  return (
		<button
			{...props}
      {...buttonProps}
      className={className}
      disabled={props.disabled || buttonProps.disabled}
		>
			{label}
		</button>
  );
};

