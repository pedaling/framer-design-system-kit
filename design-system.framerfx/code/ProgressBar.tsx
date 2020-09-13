import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerProgressBar = props => {
    return <System.ProgressBar {...props}></System.ProgressBar>
}

export const ProgressBar = withHOC(InnerProgressBar)

ProgressBar.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ProgressBar, {
    value: {
        title: "Value",
        type: ControlType.Number,
    },
    backgroundColor: {
        title: "Background color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    barColor: {
        title: "Bar color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    height: {
        title: "Height",
        type: ControlType.Number,
    },
})
