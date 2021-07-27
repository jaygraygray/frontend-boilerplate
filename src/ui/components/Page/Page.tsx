import React, { FC, ReactElement } from "react";
import "./style.scss";

type Props = {
  children: ReactElement[];
};

export const Page: FC<Props> = (props): ReactElement => {
  return (
    <>
      <div></div>
    </>
  );
};
