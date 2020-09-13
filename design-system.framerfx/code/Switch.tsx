import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSwitch = props => {
    return <System.Switch {...props}></System.Switch>
}

export const Switch = withHOC(InnerSwitch)

Switch.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Switch, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    hoverColor: {
        title: "Hover color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    inline: {
        title: "Inline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    labelComponent: {
        title: "Label component",
        type: ControlType.String,
        defaultValue: "labelComponent",
    },
    children: {
        title: "Children",
        type: ControlType.String,
    },
})
