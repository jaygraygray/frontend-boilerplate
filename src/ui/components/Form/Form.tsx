import React from "react";


interface FormProps {

  /**
   * Is user able to interact with form?
   */
  disabled?: boolean;

  /**
   * Has user entered all valid data?
   */
  valid?: boolean;  
}

export const Form = ({
  disabled,
  children,
  ...props
}: FormProps) => {
  return (
    <form {...props} disabled={disabled}>
        hi :)
      {children}
    </form>
  );
};