import React, { ReactElement } from "react";

interface FormProps {
  /**
   * Is user able to interact with form?
   */
  disabled?: boolean;

  /**
   * Has user entered all valid data?
   */
  valid?: boolean;
  children: ReactElement<any> | ReactElement<any>[];
}

/**
 * button alignment prop
 * default css margins
 *
 */

export const Form = ({
  disabled,
  children,
  ...props
}: FormProps): ReactElement => {
  return (
    <form {...props} className="form-container">
      <div className="form-group">{children}</div>
    </form>
  );
};
