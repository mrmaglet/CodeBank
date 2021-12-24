import React, { PropsWithChildren, ReactNode } from "react"
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles"
import { Paper, PaperProps } from "@material-ui/core"

interface Props extends PaperProps {
  color: string
  otherProp?: number
}

// If color is the only prop - you don't need this extra interface.
// Now the otherStuff prop will cause a type error. You could spread
// all {...props} in the jsx component but if you deconstruct otherStuff
// in the functional component that is not possible(?) You could aso use
// type "any" instead of "Styles" below to skip this interface.
interface Styles {
  colorProp: string
}

const useStyles = makeStyles({
  colorizer: {
    background: (props: Styles) => props.colorProp,
  },
})

const NestedClassComponent = ({ color, ...props }: PropsWithChildren<Props>) => {
  const classes = useStyles({ colorProp: color })

  return (
    <Paper className={classes.colorizer} {...props}>
      ClassName component
    </Paper>
  )
}

export { NestedClassComponent }
