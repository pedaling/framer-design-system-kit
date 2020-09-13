import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerGrid = props => {
    return <System.Grid {...props}></System.Grid>
}

export const Grid = withHOC(InnerGrid)

Grid.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Grid, {
    maxWidthNone: {
        title: "Max width none",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
