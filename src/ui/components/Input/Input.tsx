import React, { RefObject, ReactElement, useRef } from "react";
import { useTextField } from "react-aria";
import classNames from "classnames";
import "./style.scss";

interface Props {
  type?: "text" | "textarea" | "password" | "email" | "url";
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
  error?: string;
  restrictedCharacters?: string;
}

export const Input = ({
  label = "",
  multiLine,
  type = "text",
  size = "md",
  error = "",
  disabled,
  ...props
}: Props): ReactElement => {
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  // @todo: figure out typing for this
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { labelProps, inputProps }: any = useTextField(props, inputRef);

  const inputStyles = classNames({
    [`form-control-${size}`]: true,
    error: error.length > 0,
    "form-control": true
  });

  const labelStyles = classNames({
    [`form-label-${size}`]: true,
    "d-flex": true,
    "form-label": true,
    "justify-content-between": error.length > 0,
    "align-items-center": true,
    "label-container": true
  });

  const errorStyles = classNames({
    "error-label": true,
    "m-bottom": label.length === 0,
    "align-self-end": true
  });

  React.useEffect(() => {
    if (multiLine && "textarea" !== type) {
      console.warn(
        "[TYPE WARNING]: multiLine inputs should have a type of textarea to prevent unexpected behavior."
      );
    }
  }, [multiLine, type]);

  const renderLabelOrError = (label: string, error: string) => {
    if (label) {
      return (
        <label {...labelProps} className={labelStyles} htmlFor={props.id}>
          <div>{label}</div>
          <div className={errorStyles}>{error}</div>
        </label>
      );
    }
    return <div className={errorStyles}>{error}</div>;
  };

  return (
    <div className="element-container">
      {renderLabelOrError(label, error)}
      {multiLine ? (
        <textarea
          {...inputProps}
          className={inputStyles}
          ref={inputRef as RefObject<HTMLTextAreaElement>}
          aria-label={label}
          aria-describedby={props.labelId}
        />
      ) : (
        <input
          {...props}
          {...inputProps}
          type={type}
          ref={inputRef as RefObject<HTMLInputElement>}
          className={inputStyles}
          aria-label={label}
          aria-describedby={props.labelId}
          disabled={disabled}
        />
      )}
      {props.helpText && (
        <div className="form-text text-muted ms-2">{props.helpText}</div>
      )}
    </div>
  );
};
``;
