import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSelect = props => {
    return <System.Select {...props}></System.Select>
}

export const Select = withHOC(InnerSelect)

Select.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Select, {
    size: {
        title: "Size",
        type: ControlType.Enum,
        options: ["sm", "md"],
        optionTitles: ["sm", "md"],
    },
    name: {
        title: "Name",
        type: ControlType.String,
    },
    value: {
        title: "Value",
        type: ControlType.String,
    },
    fill: {
        title: "Fill",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
