import React, {RefObject, ReactElement, useRef} from 'react';
import {useTextField} from "react-aria";
interface Props {
  type: "input" | "textarea" | "password" | "checkbox" | "radio" | "select" | "date" | "time" | "datetime" | "datetime-local" | "email" | "url" | "tel" | "range" | "color";
  disabled?: boolean;
  value?: string;
  // onChange?: ((input: string) => void) | undefined
  failsValidation?: boolean;
  label?: string;
  labelId?: string;
  placeholder?: string;
  id?: string;
  multiLine?: boolean;
}

export const Input = ({
  label,
  multiLine,
  type,
  ...props
}: Props): ReactElement => {
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  // @todo: figure out typing for this
  const {labelProps, inputProps}: any = useTextField(props, inputRef);

  const className = `form-control`;

  React.useEffect(() => {
    if (multiLine && "textarea" !== type) {
      console.warn("[TYPE WARNING]: multiLine inputs should have a type of textarea to prevent unexpected behavior.");
    }
  }, [multiLine, type]);

  return (
    <>
      {label && (<div><label {...labelProps} id={props.labelId}>{label}</label></div>)}
      {multiLine ?
        <textarea
          {...inputProps}
          className={className}
          ref={inputRef as RefObject<HTMLTextAreaElement>}
        /> :
        <input
          {...inputProps}
          ref={inputRef as RefObject<HTMLInputElement>}
          {...props}
          className={className}
          aria-label={label}
          aria-describedby={props.labelId}
        />
      }
    </>
  );
};