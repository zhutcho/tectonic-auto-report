import * as React from "react";
import { DefaultButton } from "@fluentui/react";
import Progress from "./Progress";
import HeroList from "./HeroList";

function App(title: string, isOfficeInitialized: boolean) {
  const [sections, setSections] = React.useState([
    {
      header: "Intro",
      text: "Printing the intro stuff",
      included: false,
    },
    {
      header: "Findings",
      text: "Printing the findings",
      included: false,
    },
    {
      header: "Conclusion",
      text: "Printing the findings",
      included: false,
    },
  ]);

  if (!isOfficeInitialized) {
    return (
      <Progress
        title={title}
        // eslint-disable-next-line no-undef
        logo={require("./../../../assets/logo-filled.png")}
        message="Please sideload your addin to see app body."
      />
    );
  }

  return (
    <div className="ms-welcome">
      <HeroList sections={sections}>
        <DefaultButton>Generate</DefaultButton>
      </HeroList>
    </div>
  );
}

export default App;
