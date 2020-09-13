import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerComment = props => {
    return <System.Comment {...props}></System.Comment>
}

export const Comment = withHOC(InnerComment)

Comment.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Comment, {
    name: {
        title: "Name",
        type: ControlType.String,
    },
    disableLineClamp: {
        title: "Disable line clamp",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    readMoreText: {
        title: "Read more text",
        type: ControlType.String,
        defaultValue: "readMoreText",
    },
    hideText: {
        title: "Hide text",
        type: ControlType.String,
        defaultValue: "hideText",
    },
    showChildren: {
        title: "Show children",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    maxLine: {
        title: "Max line",
        type: ControlType.Number,
    },
    size: {
        title: "Size",
        type: ControlType.Enum,
        options: ["sm", "lg"],
        optionTitles: ["sm", "lg"],
    },
    width: {
        title: "Width",
        type: ControlType.String,
    },
    nameDescription: {
        title: "Name description",
        type: ControlType.String,
        defaultValue: "nameDescription",
    },
    timeText: {
        title: "Time text",
        type: ControlType.String,
        defaultValue: "timeText",
    },
    content: {
        title: "Content",
        type: ControlType.String,
    },
    passingClickEventClampButton: {
        title: "Passing click event clamp button",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
