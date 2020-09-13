import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerAvatar = props => {
    return <System.Avatar {...props}></System.Avatar>
}

export const Avatar = withHOC(InnerAvatar)

Avatar.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Avatar, {
    size: {
        title: "Size",
        type: ControlType.Enum,
        options: ["sm", "md", "lg"],
        optionTitles: ["sm", "md", "lg"],
    },
    iconRatio: {
        title: "Icon ratio",
        type: ControlType.Number,
    },
    iconPosition: {
        title: "Icon position",
        type: ControlType.String,
    },
    src: {
        title: "Src",
        type: ControlType.String,
    },
    srcSet: {
        title: "Src set",
        type: ControlType.String,
    },
    alt: {
        title: "Alt",
        type: ControlType.String,
    },
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "text",
    },
})
