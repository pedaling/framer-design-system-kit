import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerCheckbox = props => {
    return <System.Checkbox {...props}></System.Checkbox>
}

export const Checkbox = withHOC(InnerCheckbox)

Checkbox.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Checkbox, {
    size: {
        title: "Size",
        type: ControlType.Number,
    },
    inline: {
        title: "Inline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    allowMessage: {
        title: "Allow message",
        type: ControlType.String,
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    warnMessage: {
        title: "Warn message",
        type: ControlType.String,
    },
    errorMessage: {
        title: "Error message",
        type: ControlType.String,
    },
})
