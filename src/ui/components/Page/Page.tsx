import React, { ReactNode } from "react";
import "./style.scss";

type Props = {
  children: ReactNode[];
};

export const Page = (props: Props): ReactNode => {
  console.log(">>props", props);
  return (
    <>
      <div></div>
    </>
  );
};
