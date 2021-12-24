import React from "react"
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles"
import { ImportedClassesComponent } from "./ImportedClassesComponent"
import { ImportedStyledComponent } from "./ImportedStyledComponent"

const useStyles = makeStyles({
  extra: {
    color: "blue",
  },
})

const ImportedStyledProps = () => {
  const classes = useStyles()

  return (
    <>
      <ImportedStyledComponent color="violet" elevation={3}>
        ImportedStyledComponent
      </ImportedStyledComponent>
      <hr />
      <ImportedClassesComponent
        className={classes.extra}
        color="forestgreen"
        elevation={0}
      >
        ImportedClaccesComponent
      </ImportedClassesComponent>
    </>
  )
}

export { ImportedStyledProps }
