import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerNumericInput = props => {
    return <System.NumericInput {...props}></System.NumericInput>
}

export const NumericInput = withHOC(InnerNumericInput)

NumericInput.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(NumericInput, {
    buttonPosition: {
        title: "Button position",
        type: ControlType.Enum,
        options: ["right", "side"],
        optionTitles: ["right", "side"],
    },
    step: {
        title: "Step",
        type: ControlType.Number,
    },
    inline: {
        title: "Inline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    minValue: {
        title: "Min value",
        type: ControlType.Number,
    },
    maxValue: {
        title: "Max value",
        type: ControlType.Number,
    },
})
