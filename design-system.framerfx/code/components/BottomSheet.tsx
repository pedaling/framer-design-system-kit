import * as React from "react"
import * as System from "@class101/ui"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "../core/withHOC"

const InnerBottomSheet = props => {
    return <System.BottomSheet {...props}></System.BottomSheet>
}

export const BottomSheet = withHOC(InnerBottomSheet)

BottomSheet.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(BottomSheet, {
    isOpened: {
        title: "Is opened",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    badgeCount: {
        title: "Badge count",
        type: ControlType.Number,
    },
    fullScreen: {
        title: "Full screen",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    zIndex: {
        title: "Z index",
        type: ControlType.Number,
    },
    openedZIndex: {
        title: "Opened zindex",
        type: ControlType.Number,
    },
})
