import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerAnchorButton = props => {
    return <System.AnchorButton {...props}></System.AnchorButton>
}

export const AnchorButton = withHOC(InnerAnchorButton)

AnchorButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(AnchorButton, {
    fill: {
        title: "Fill",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    loading: {
        title: "Loading",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    to: {
        title: "To",
        type: ControlType.String,
    },
    children: {
        title: "Children",
        type: ControlType.String,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    external: {
        title: "External",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
