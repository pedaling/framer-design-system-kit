import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerProgressState = props => {
    return <System.ProgressState {...props}></System.ProgressState>
}

export const ProgressState = withHOC(InnerProgressState)

ProgressState.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ProgressState, {
    value: {
        title: "Value",
        type: ControlType.String,
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    backgroundColor: {
        title: "Background color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    activeColor: {
        title: "Active color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    activeBackgroundColor: {
        title: "Active background color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
})
