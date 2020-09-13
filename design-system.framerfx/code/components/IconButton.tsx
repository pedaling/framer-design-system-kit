import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerIconButton = props => {
    return <System.IconButton {...props}></System.IconButton>
}

export const IconButton = withHOC(InnerIconButton)

IconButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(IconButton, {
    fillColor: {
        title: "Fill color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    type: {
        title: "Type",
        type: ControlType.String,
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
    href: {
        title: "Href",
        type: ControlType.String,
        defaultValue: "https://framer.com",
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
    target: {
        title: "Target",
        type: ControlType.String,
    },
    external: {
        title: "External",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
