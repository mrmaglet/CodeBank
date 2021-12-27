import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, PaperProps } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"

export interface Props extends CSSProperties {
  otherProps?: string
}

// Cannot use CSSPRoperties and PaperProps at the same time. So I have to chose
// to pass ...cssProps with PaperProps or extend with CSSProperties - but then I cannot
// spreak props to the component ie area-label will not work with others directly on the component.
// Is now solved by using any.

const useStyles = makeStyles({
  sidebar: (props: CSSProperties) => ({
    ...props,
    flexShrink: 0,
    height: "100%",
    display: "flex",
    "& .MuiDrawer-paper": {
      // Note! - this solution does not support the case below ...
      // width: (props: Props) => props.width,
    },
  }),
})

const NestedSpreadComponent = ({ otherProps, ...cssProps }: any) => {
  const classes = useStyles(cssProps)

  return (
    <>
      <Paper className={classes.sidebar} {...cssProps}>
        Paper
      </Paper>
    </>
  )
}

export { NestedSpreadComponent }

import { Code } from "../../Code"

export const NestedSpreadComponentPrint = () => {
  return (
    <Code raw>{`import React from "react"
    import { makeStyles } from "@material-ui/core/styles"
import { Paper, PaperProps } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import { Code } from "../../Code"

export interface Props extends CSSProperties {
  otherProps?: string
}

// Cannot use CSSPRoperties and PaperProps at the same time. So I have to chose
// to pass ...cssProps with PaperProps or extend with CSSProperties - but then I cannot
// spreak props to the component ie area-label will not work with others directly on the component.
// Is now solved by using any.

const useStyles = makeStyles({
  sidebar: (props: CSSProperties) => ({
    ...props,
    flexShrink: 0,
    height: "100%",
    display: "flex",
    "& .MuiDrawer-paper": {
      // Note! - this solution does not support the case below ...
      // width: (props: Props) => props.width,
    },
  }),
})

const NestedSpreadComponent = ({ otherProps, ...cssProps }: any) => {
  const classes = useStyles(cssProps)

  return (
    <>
      <Paper className={classes.sidebar} {...cssProps}>
        Paper
      </Paper>
    </>
  )
}

export { NestedSpreadComponent }`}</Code>
  )
}
