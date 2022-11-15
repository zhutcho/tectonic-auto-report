import * as React from "react";
import { DefaultButton } from "@fluentui/react";
import Progress from "./Progress";
import Header from "./Header";
import HeroList from "./HeroList";

function App(title: string, isOfficeInitialized: boolean) {
  const [sections, setSections] = React.useState([
    {
      header: "Intro",
      text: "Printing the intro stuff",
    },
    {
      header: "Findings",
      text: "Printing the findings",
    },
    {
      header: "Conclusion",
      text: "Printing the conclusion",
    },
  ]);

  const [sectionBool, setSectionBool] = React.useState([false, false, false]);

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

  async function click() {
    await Word.run(async (context) => {
      const paragraphs = context.document.getSelection().paragraphs;
      paragraphs.load();
      await context.sync();
      for (let i = 0; i < sections.length; i++) {
        if (sectionBool[i]) {
          const header = context.document.body.insertParagraph(sections[i].header, Word.InsertLocation.end);
          header.font.size = 18;
          header.font.bold = true;
          const text = context.document.body.insertParagraph(sections[i].text, Word.InsertLocation.end);
          text.font.size = 12;
          text.font.bold = false;
        }
      }
      await context.sync();
    });
  }

  return (
    <div className="ms-welcome">
      <Header title="Tectonic" logo="../../assets/tectonic-name-logo.png" />
      <HeroList sections={sections} parentState={sectionBool} stateChanger={setSectionBool}>
        <DefaultButton onClick={click}>Generate</DefaultButton>
      </HeroList>
    </div>
  );
}

export default App;
