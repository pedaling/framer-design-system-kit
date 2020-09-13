import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerControlGroup = props => {
    return <System.ControlGroup {...props}></System.ControlGroup>
}

export const ControlGroup = withHOC(InnerControlGroup)

ControlGroup.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ControlGroup, {
    fill: {
        title: "Fill",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    vertical: {
        title: "Vertical",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    children: {
        title: "Children",
        type: ControlType.String,
    },
})
