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

const ReusableClassesComponent = ({
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

export { ReusableClassesComponent }

import { Code } from "../../common/Code"

export const ReusableClassesComponentPrint = () => {
  return (
    <Code raw>{`import React, { PropsWithChildren, ReactNode } from "react"
import { makeStyles, Paper, PaperProps } from "@material-ui/core"
import { Code } from "../../Code"

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

const ReusableClassesComponent = ({
  children,
  color,
  ...props
}: PropsWithChildren<Props>) => {
  const classes = useStyles({ color: \`\${color}\` })

  return (
    <Paper className={classes.colorizer} {...props}>
      {children}
    </Paper>
  )
}

export { ReusableClassesComponent }
`}</Code>
  )
}
