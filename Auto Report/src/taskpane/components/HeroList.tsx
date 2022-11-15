import { Checkbox, Stack } from "@fluentui/react";
import * as React from "react";

export interface Section {
  header: string;
  text: string;
}

export interface HeroListProps {
  sections: Section[];
  parentState: any;
  stateChanger: any;
}

function HeroList(props: React.PropsWithChildren<HeroListProps>) {
  const { children, sections, parentState, stateChanger } = props;

  const changeState = (index: number) => {
    return (ev: any, checked: boolean) => onCheckboxChange(ev, checked, index);
  };
  const onCheckboxChange = (ev: any, checked: boolean, index: number) => {
    console.log(ev);
    let updatedState = parentState;
    updatedState[index] = checked;
    stateChanger(updatedState);
  };

  const listSections = sections.map((item: Section, index: number) => (
    <Checkbox className="ms-ListItem" label={item.header} key={index} onChange={changeState(index)} />
  ));
  return (
    <main>
      <Stack className="ms-List ms-welcome__features ms-u-slideUpIn10">{listSections}</Stack>
      {children}
    </main>
  );
}

export default HeroList;
