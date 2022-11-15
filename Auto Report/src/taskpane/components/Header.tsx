import * as React from "react";

export interface HeaderProps {
  title: string;
  logo: string;
}

function Header(props: HeaderProps) {
  const { title, logo } = props;

  return (
    <section className="ms-welcome__header ms-bgColor-neutralLighter ms-u-fadeIn500">
      <img height="90" src={logo} alt={title} title={title} />
    </section>
  );
}

export default Header;
