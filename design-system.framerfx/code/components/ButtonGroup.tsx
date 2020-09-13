import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerButtonGroup = props => {
    return <System.ButtonGroup {...props}></System.ButtonGroup>
}

export const ButtonGroup = withHOC(InnerButtonGroup)

ButtonGroup.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ButtonGroup, {
    vertical: {
        title: "Vertical",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    fill: {
        title: "Fill",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
