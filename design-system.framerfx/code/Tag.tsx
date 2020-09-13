import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTag = props => {
    return <System.Tag {...props}></System.Tag>
}

export const Tag = withHOC(InnerTag)

Tag.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Tag, {
    value: {
        title: "Value",
        type: ControlType.String,
    },
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
