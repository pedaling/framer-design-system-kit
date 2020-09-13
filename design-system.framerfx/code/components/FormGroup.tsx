import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerFormGroup = props => {
    return <System.FormGroup {...props}></System.FormGroup>
}

export const FormGroup = withHOC(InnerFormGroup)

FormGroup.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(FormGroup, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    labelColor: {
        title: "Label color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    inline: {
        title: "Inline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    classNames: {
        title: "Class names",
        type: ControlType.String,
    },
    htmlLabelFor: {
        title: "Html label for",
        type: ControlType.String,
        defaultValue: "htmlLabelFor",
    },
})
