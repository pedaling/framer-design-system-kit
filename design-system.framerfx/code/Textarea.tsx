import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTextarea = props => {
    return <System.Textarea {...props}></System.Textarea>
}

export const Textarea = withHOC(InnerTextarea)

Textarea.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Textarea, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
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
    warnMessage: {
        title: "Warn message",
        type: ControlType.String,
    },
    errorMessage: {
        title: "Error message",
        type: ControlType.String,
    },
})
