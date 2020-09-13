import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCallout = props => {
    return <System.Callout {...props}></System.Callout>
}

export const Callout = withHOC(InnerCallout)

Callout.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Callout, {
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    status: {
        title: "Status",
        type: ControlType.Enum,
        options: ["default", "suggest", "warning", "danger"],
        optionTitles: ["default", "suggest", "warning", "danger"],
    },
    icon: {
        title: "Icon",
        type: ControlType.String,
    },
})
