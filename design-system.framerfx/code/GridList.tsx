import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerGridList = props => {
    return <System.GridList {...props}></System.GridList>
}

export const GridList = withHOC(InnerGridList)

GridList.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(GridList, {
    smColumn: {
        title: "Sm column",
        type: ControlType.Number,
    },
    lgColumn: {
        title: "Lg column",
        type: ControlType.Number,
    },
})
