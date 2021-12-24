import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import { CSSProperties } from "@material-ui/core/styles/withStyles"

export interface Props extends CSSProperties {
  otherProps: string
}

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

const NestedSpreadComponent = ({ otherProps, ...cssProps }: Props) => {
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
