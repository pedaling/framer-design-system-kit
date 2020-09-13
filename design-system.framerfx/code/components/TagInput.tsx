import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "^core/withHOC"

const InnerTagInput = props => {
    return <System.TagInput {...props}></System.TagInput>
}

export const TagInput = withHOC(InnerTagInput)

TagInput.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TagInput, {
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
    value: {
        title: "Value",
        type: ControlType.Array,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    addOnBlur: {
        title: "Add on blur",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    separator: {
        title: "Separator",
        type: ControlType.String,
    },
})
