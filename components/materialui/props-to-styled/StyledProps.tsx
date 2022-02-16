import React from "react"
import {
  ReusableClassesComponent,
  ReusableClassesComponentPrint,
} from "./ReusableClassesComponent"
import { NestedClassComponent, NestedClassComponentPrint } from "./NestedClassComponent"
import {
  NestedStyledComponent,
  NestedStyledComponentPrint,
} from "./NestedStyledComponent"
import {
  NestedSpreadComponent,
  NestedSpreadComponentPrint,
} from "./NestedSpreadComponent"
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles"
import {
  ReusableStyledComponent,
  ReusableStyledComponentPrint,
} from "./ReusableStyledComponent"
import { Code } from "../../common/Code"

const useStyles = makeStyles({
  extra: {
    color: "blue",
  },
})

const StyledProps = () => {
  const classes = useStyles()

  return (
    <>
      <div className="warning">
        Server side rendering with styled components and material ui is a mess to set up.
        So material styling does not render properly for all examples here. d
      </div>

      <h3>Reusable component with useStyle classes</h3>
      <p>This is how the component looks like. </p>
      <ReusableClassesComponentPrint />
      <p>Use your component like this. </p>
      <Code raw>
        {`<ReusableClassesComponent className={classes.extra} color="forestgreen" elevation={0}>`}
      </Code>
      {/* <ReusableClassesComponent
        className={classes.extra}
        color="forestgreen"
        elevation={0}
      >
        Reusable Class Component forestgreen
      </ReusableClassesComponent> */}
      <></>
      <></>
      <></>
      <></>
      <h3>Reusable styled component</h3>
      <ReusableStyledComponentPrint />
      <Code raw>
        {`<ImportedStyledComponent color="violet" elevation={3}>
  ImportedStyledComponent</ImportedStyledComponent>`}
      </Code>
      {/* <ReusableStyledComponent color="violet" elevation={3}>
        ImportedStyledComponent
      </ReusableStyledComponent> */}
      <></>
      <></>
      <></>
      <></>
      <h3>Classes in child component</h3>
      <NestedClassComponentPrint />
      <Code raw>{`<NestedClassComponent color="red" elevation={3} />`}</Code>
      {/* <NestedClassComponent color="red" elevation={3} /> */}
      <br />
      <></>
      <></>
      <></>
      <></>
      <h3>Child with styled component</h3>
      <NestedStyledComponentPrint />
      <Code raw>{`<NestedStyledComponent color="orange" elevation={10} />`}</Code>
      <NestedStyledComponent color="orange" elevation={10} />
      <></>
      <></>
      <></>
      <></>
      <h3>Child with spread styling </h3>
      <p>
        Al though this have it&apos;s adventages able to pass any css as a prop like
        Styled System, I ran into som issues with typescript.
      </p>
      <NestedSpreadComponentPrint />
      {/* <NestedSpreadComponent
        background="blue"
        width="200px"
        elevation={2}
        otherProps="mu"
        area-label="Test"
      /> */}
      <style jsx>{`
        .warning: {
          background: "red";
        }
        p: {
          color: "red";
        }
      `}</style>
    </>
  )
}

export { StyledProps }
