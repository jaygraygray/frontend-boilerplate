import React, { ReactNode, ReactElement } from "react";
import "style.scss";

interface NavProps {
  children: ReactNode;
}

export const Nav = (props: NavProps): ReactElement => {
  console.log(">> Nav Props", props);
  return (
    <>
      <div>render the kiddos</div>
    </>
  );
};
