import { Checkbox, Stack } from "@fluentui/react";
import * as React from "react";

export interface Section {
  header: string;
  text: string;
  included: boolean;
}

export interface HeroListProps {
  sections: Section[];
}

function HeroList(props: React.PropsWithChildren<HeroListProps>) {
  const { children, sections } = props;

  const listSections = sections.map((item: Section, index: number) => (
    <Checkbox className="ms-ListItem" label={item.header} key={index} />
  ));
  return (
    <main>
      <Stack className="ms-List ms-welcome__features ms-u-slideUpIn10">{listSections}</Stack>
      {children}
    </main>
  );
}

export default HeroList;
