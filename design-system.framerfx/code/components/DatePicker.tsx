import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerDatePicker = props => {
    return <System.DatePicker {...props}></System.DatePicker>
}

export const DatePicker = withHOC(InnerDatePicker)

DatePicker.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DatePicker, {
    useRange: {
        title: "Use range",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    alwaysShow: {
        title: "Always show",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    inline: {
        title: "Inline",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    highlightWeekEnd: {
        title: "Highlight week end",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
