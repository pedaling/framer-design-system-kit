import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerRadioButtonGroup = props => {
    return <System.RadioButtonGroup {...props}></System.RadioButtonGroup>
}

export const RadioButtonGroup = withHOC(InnerRadioButtonGroup)

RadioButtonGroup.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(RadioButtonGroup, {
    value: {
        title: "Value",
        type: ControlType.String,
    },
    stackingDirection: {
        title: "Stacking direction",
        type: ControlType.Enum,
        options: ["horizontal", "vertical"],
        optionTitles: ["horizontal", "vertical"],
    },
    showBorder: {
        title: "Show border",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showDivider: {
        title: "Show divider",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    textAlign: {
        title: "Text align",
        type: ControlType.Enum,
        options: ["left", "center"],
        optionTitles: ["left", "center"],
    },
})
