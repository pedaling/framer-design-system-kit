import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerDivider = props => {
    return <System.Divider {...props}></System.Divider>
}

export const Divider = withHOC(InnerDivider)

Divider.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Divider, {
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    width: {
        title: "Width",
        type: ControlType.String,
    },
})
