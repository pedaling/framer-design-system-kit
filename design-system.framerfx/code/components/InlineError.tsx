import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerInlineError = props => {
    return <System.InlineError {...props}></System.InlineError>
}

export const InlineError = withHOC(InnerInlineError)

InlineError.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(InlineError, {
    intent: {
        title: "Intent",
        type: ControlType.Enum,
        options: ["DANGER", "WARNING", "DEFAULT"],
        optionTitles: ["DANGER", "WARNING", "DEFAULT"],
    },
    children: {
        title: "Children",
        type: ControlType.String,
    },
})
