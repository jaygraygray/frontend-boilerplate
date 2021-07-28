import React, { ReactNode } from "react";

interface FormProps {
  /**
   * Is user able to interact with form?
   */
  disabled?: boolean;

  /**
   * Has user entered all valid data?
   */
  valid?: boolean;
  children: ReactNode;
}

/**
 * button alignment prop
 * disable whole form from one prop
 * default css margins
 *
 */

export const Form = ({ children, ...props }: FormProps): ReactNode => {
  return (
    <form {...props} className="form-container">
      <div className="form-group">{children}</div>
    </form>
  );
};
