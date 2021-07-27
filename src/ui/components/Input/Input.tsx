import React, {RefObject, ReactElement, useRef} from 'react';
import {useTextField} from "react-aria";
interface Props {
  type: "text" | "textarea" | "password" | "email" | "url";
  disabled?: boolean;
  value?: string;
  // onChange?: ((input: string) => void) | undefined
  failsValidation?: boolean;
  label?: string;
  labelId?: string;
  placeholder?: string;
  id?: string;
  multiLine?: boolean;
  size?: "sm" | "md" | "lg";
  helpText?: string;
  error?: boolean | string;
}

// States:
// failed validation
// provide hint
// readonly

export const Input = ({
  label,
  multiLine,
  type,
  size = "md",
  error,
  ...props
}: Props): ReactElement => {
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  // @todo: figure out typing for this
  const {labelProps, inputProps}: any = useTextField(props, inputRef);

  const sizeClass = `form-control-${size}`;
  const className = `form-control ${sizeClass}`;

  const labelSizeClass = `form-label-${size}`;
  const labelClassName = `form-label ${labelSizeClass}`;

  React.useEffect(() => {
    if (multiLine && "textarea" !== type) {
      console.warn("[TYPE WARNING]: multiLine inputs should have a type of textarea to prevent unexpected behavior.");
    }
  }, [multiLine, type]);

  return (
    <>
      {label &&
        (
          <label
            {...labelProps}
            id={props.labelId}
            htmlFor={props.id}
            className={labelClassName}
          >
            {label}
          </label>
        )
      }
      {multiLine ?
        <textarea
          {...inputProps}
          className={className}
          ref={inputRef as RefObject<HTMLTextAreaElement>}
          aria-label={label}
          aria-describedby={props.labelId}
        /> :
        <input
          {...props}
          {...inputProps}
          type={type}
          ref={inputRef as RefObject<HTMLInputElement>}
          className={className}
          aria-label={label}
          aria-describedby={props.labelId}
        />
      }
      {props.helpText && (
        <div className="form-text text-muted">{props.helpText}</div>
      )}
      {error && typeof error === "string" && (<div className="form-text text-danger">{error}</div>)}
    </>
  );
};``;