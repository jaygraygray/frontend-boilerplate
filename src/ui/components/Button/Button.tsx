import React, {RefObject, useRef} from "react";
import {useButton} from "react-aria";
import type {AriaButtonProps} from "@react-types/button";
import "./style.scss";


interface ButtonProps extends AriaButtonProps {

  /**
   * What category of action this button represents.
   */
  actionType?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "link";

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

  /**
   * Display outline version of button
   */
   outline?: boolean;

}

function parseBootstrapClassName(string: "small" | "medium" | "large"): string | undefined {
  switch (string) {
    case "small":
      return "btn-sm";
    case "medium":
      return "btn-md";
    case "large":
      return "btn-lg";
    default:
      return undefined;
  }
}

type ButtonActionTypes = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "link";

// output needs to be btn-outline-primary or btn-primary
// based on boolean input
function modifyBootStrapButtonClassname(isOutline = false, actionType: ButtonActionTypes): string {
  switch (actionType) {
    case "primary":
      return isOutline ? "btn-outline-primary" : "btn-primary";
    case "secondary":
      return isOutline ? "btn-outline-secondary" : "btn-secondary";
    case "success":
      return isOutline ? "btn-outline-success" : "btn-success";
    case "danger":
      return isOutline ? "btn-outline-danger" : "btn-danger";
    case "warning":
      return isOutline ? "btn-outline-warning" : "btn-warning";
    case "info":
      return isOutline ? "btn-outline-info" : "btn-info";
    case "link":
      return isOutline ? "btn-outline-link" : "btn-link";
    default:
      return "btn-primary";
  }
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
  const outlineString = outline ? `btn-outline-${actionType}` : undefined;
  
  const className = `btn ${type} ${sizeString}`;

  return (
		<button
			{...props}
      {...buttonProps}
      className={className}
		>
			{label}
		</button>
  );
};

