import React, { PropsWithChildren, ReactNode } from "react"
import { makeStyles, Paper, PaperProps } from "@material-ui/core"

interface Props extends PaperProps {
  // Extends PaperProps to accept prop elevation and other material specific props
  color: string
  children?: ReactNode
}

const useStyles = makeStyles({
  colorizer: {
    background: (props: Props) => props.color,
  },
})

const ImportedClassesComponent = ({
  children,
  color,
  ...props
}: PropsWithChildren<Props>) => {
  const classes = useStyles({ color: `${color}` })

  return (
    <Paper className={classes.colorizer} {...props}>
      {children}
    </Paper>
  )
}

export { ImportedClassesComponent }
