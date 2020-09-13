import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerBadge = props => {
    return <System.Badge {...props}></System.Badge>
}

export const Badge = withHOC(InnerBadge)

Badge.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Badge, {
    children: {
        title: "Children",
        type: ControlType.String,
    },
    color: {
        title: "Color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    backgroundColor: {
        title: "Background color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    icon: {
        title: "Icon",
        type: ControlType.String,
    },
    pill: {
        title: "Pill",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    size: {
        title: "Size",
        type: ControlType.Enum,
        options: ["xs", "sm", "md"],
        optionTitles: ["xs", "sm", "md"],
    },
})
