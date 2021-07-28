import React, { ReactNode } from "react";
import "./style.scss";

type Props = {
  children: ReactNode[];
};

const Header = () => <div>I am header :)</div>;
const Footer = () => <div>I am footer :)</div>;

export const Page = (props: Props): ReactNode => {
  console.log(">>props", props);
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};
